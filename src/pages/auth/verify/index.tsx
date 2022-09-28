import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { FirebaseError } from 'firebase/app';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber, User } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';

import { createUserData, getUserData } from '../../../api';
import { Button, PageLayout, TextField } from '../../../components';
import { auth } from '../../../firebase';
import { useRequest } from '../../../hooks';
import { userAtom, UserData } from '../../../store';

import * as S from './styled';

interface AuthVerifyInputs {
  name: string;
  phone: string;
  pinCode: string;
}

export const AuthVerifyPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<AuthVerifyInputs>();
  const [verifyData, setVerifyData] = useState<{
    confirmResult: ConfirmationResult;
    expiredAt: number;
  }>();
  const setUser = useSetRecoilState(userAtom);

  const { mutate: sendVerifySMS, isLoading: isSendingVerifySMS } = useRequest(
    async () => {
      const data = await trigger(['name', 'phone']);
      const { phone } = getValues();
      if (!data) throw new Error('');

      const recaptcha = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, auth);
      await recaptcha.verify();
      const confirmResult = await signInWithPhoneNumber(auth, `+82${phone.slice(1)}`, recaptcha);

      // eslint-disable-next-line consistent-return
      return confirmResult;
    },
    {
      onSuccess: (data) => {
        setVerifyData({ confirmResult: data, expiredAt: new Date().getTime() + 1000 * 60 * 15 });
        toast.success('문자 발송이 완료되었어요');
      },
      onError: (error) => {
        console.log(error);
        toast.error('일시적인 오류가 발생했어요');
      },
    }
  );

  const { mutate: getLottery, isLoading: isSubmitting } = useRequest<
    AuthVerifyInputs,
    { data: UserData; account: User }
  >(
    async (data: AuthVerifyInputs) => {
      if (!verifyData) throw new Error('인증 정보를 찾을 수 없어요. 새로고침 후 다시 시도해주세요');
      const { confirmResult, expiredAt } = verifyData;
      if (new Date().getTime() > expiredAt) throw new Error('이미 만료된 인증코드에요');

      const { user } = await confirmResult.confirm(data.pinCode);
      const userData = await getUserData(user.uid);
      if (userData) return { data: userData, account: user };

      const newUserData = await createUserData(user.uid, data.name);
      return { data: newUserData, account: user };
    },
    {
      onSuccess: ({ data, account }) => {
        setUser({ data, account });
        toast.success('추첨번호 발급이 완료되었어요!');
        toast.info(`테스트: 추첨코드 - ${data.lotteryNumber}`);
      },
      onError: (error) => {
        if (!(error instanceof FirebaseError)) return toast.error('일시적인 오류가 발생했어요');

        switch (error.code) {
          case 'auth/code-expired':
            return toast.error('이미 만료된 인증코드에요');

          case 'auth/invalid-verification-code':
            return toast.error('올바르지 않은 인증코드에요');

          default:
            return toast.error('일시적인 오류가 발생했어요');
        }
      },
    }
  );

  const isCanSubmit = useMemo(() => Boolean(verifyData), [verifyData]);

  const submitButtonMessage = useMemo(() => {
    if (isSubmitting) return '추천 번호를 뽑고 있어요';
    if (!isCanSubmit) return '전화번호 인증 후 가능해요';

    return '추첨 번호 받기';
  }, [isSubmitting, isCanSubmit]);

  return (
    <S.PageContainer onSubmit={handleSubmit((data) => getLottery(data))}>
      <div style={{ width: '100%' }}>
        <PageLayout.Title>
          추첨 코드를 받기 전,
          <br />
          아래 정보들을 입력해주세요
        </PageLayout.Title>
        <S.TextFieldContainer>
          <TextField
            label="이름"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('name', {
              minLength: {
                value: 2,
                message: '한글 최소 2자~4자 사이로 입력해주세요',
              },
              maxLength: {
                value: 4,
                message: '한글 최소 2자~4자 사이로 입력해주세요',
              },
              required: '올바른 이름을 입력해주세요',
            })}
            message={errors.name?.message}
            isError={Boolean(errors.name?.message)}
          />
          <S.TextFieldButtonContainer>
            <TextField
              label="전화번호"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('phone', {
                required: '올바른 전화번호를 입력해주세요',
                pattern: {
                  value: /(\d{3})-(\d{4})-(\d{4})/,
                  message: '010-1234-5678 형식에 맞춰 입력해주세요',
                },
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                  const data = event.target.value;

                  if (data.length === 10) {
                    setValue('phone', data.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
                  }

                  if (data.length === 13) {
                    setValue(
                      'phone',
                      data.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
                    );
                  }
                },
              })}
              message={errors.phone?.message || '숫자만 입력하면 자동으로 하이픈(-)이 추가돼요'}
              isError={Boolean(errors.phone?.message)}
            />
            <Button
              type="button"
              onClick={() => sendVerifySMS(undefined)}
              disabled={isSendingVerifySMS}
            >
              {isSendingVerifySMS ? '처리 중' : '요청'}
            </Button>
          </S.TextFieldButtonContainer>
          {verifyData?.confirmResult && (
            <TextField
              label="인증코드"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('pinCode', {
                required: '올바른 인증코드를 입력해주세요',
                pattern: {
                  value: /\d{6}/,
                  message: '올바른 인증코드 6자리를 입력해주세요',
                },
              })}
              message={errors.pinCode?.message}
              isError={Boolean(errors.pinCode?.message)}
              maxLength={6}
            />
          )}
        </S.TextFieldContainer>
      </div>
      <Button type="submit" style={{ marginTop: 'auto' }} disabled={isSubmitting || !isCanSubmit}>
        {submitButtonMessage}
      </Button>
    </S.PageContainer>
  );
};
