import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { toast } from 'react-toastify';

import * as Sentry from '@sentry/react';
import { onValue, ref, set } from 'firebase/database';

import SuccessPNG from '../../assets/emoji/success.png';
import { Button, EmojiCard, PageLayout, SuspenseFallback } from '../../components';
import { auth, database } from '../../firebase';
import { useRequest } from '../../hooks';

import * as S from './styled';

interface Vote {
  showResult: boolean;
  isOpen: boolean;
  openAt: string;
}

interface VoteOptions {
  key: string;
  order: number;
  text: [string, string];
  color: string;
}

interface VoteResult {
  selected: string;
  submmitedAt: number;
}

export const VotePage: React.FC = () => {
  const [select, setSelect] = useState<string | null>(null);
  const [vote, setVote] = useState<Vote>({ isOpen: false, openAt: '', showResult: false });
  const [isAlreadyVoted, setIsAlreadyVoted] = useState<boolean>(false);
  const [voteOptions, setVoteOptions] = useState<VoteOptions[]>([]);
  const [voteResults, setVoteResults] = useState<Record<string, number>>({});
  const [init, setInit] = useState<boolean>(false);
  const BASE64_DECODER_URL = 'https://www.convertstring.com/ko/EncodeDecode/Base64Decode';
  const voteRef = ref(database, 'vote');
  const voteOptionsRef = ref(database, 'voteOptions');
  const voteResultsRef = ref(database, 'voteResults');

  const { mutate } = useRequest(
    async ({ uid, selected }: { uid: string; selected: string }) => {
      await set(ref(database, `voteResults/${uid}`), {
        selected,
        submittedAt: new Date().getTime(),
      });

      return true;
    },
    {
      onSuccess: () => {
        toast.success('투표 제출이 완료되었어요!');
      },
      onError: (error) => {
        Sentry.captureException(error);
        toast.error('투표 제출 중 오류가 발생했어요');
      },
    }
  );

  const handleOnClickVoteOption = (optionId: string) => {
    if (isAlreadyVoted) return;

    if (optionId === select) setSelect(null);
    else setSelect(optionId);
  };

  // eslint-disable-next-line consistent-return
  const handleOnSubmitVote = async () => {
    if (!voteOptions.find((option) => option.key === select) || select === null)
      return toast.error('올바른 가수를 선택해주세요');
    if (!auth.currentUser) return toast.error('로그인 후 이용해주세요');
    if (vote.showResult) return toast.error('이미 투표가 마감됐어요 :(');

    mutate({ uid: auth.currentUser.uid, selected: select });
  };

  const getEmojiProps = (optionId: string) => {
    const isSelected = select === optionId;
    return {
      color: isSelected ? '#77D681' : '#C6DDFF',
      emoji: isSelected ? SuccessPNG : '',
      isImage: isSelected,
    };
  };

  useEffect(() => {
    if (!auth.currentUser) return () => {};

    const unsubscribeVote = onValue(voteRef, (snapshot) => {
      setVote(snapshot.val());
      setInit(true);
    });
    const unsubscribeVoteOptions = onValue(voteOptionsRef, (snapshot) => {
      const value = snapshot.val();
      const options = Object.keys(value)
        .reduce((prev: VoteOptions[], curr: string) => [...prev, { key: curr, ...value[curr] }], [])
        .sort((a, b) => a.order - b.order);

      setVoteOptions(options);
    });
    const unsubscribeMyVote = onValue(
      ref(database, `voteResults/${auth.currentUser.uid}`),
      (snapshot) => {
        const voteData = snapshot.val();

        if (voteData) {
          setIsAlreadyVoted(true);
          setSelect(voteData.selected);
        } else {
          setIsAlreadyVoted(false);
          // setSelect(null);
        }
      }
    );
    const unsubscribeVoteResults = onValue(voteResultsRef, (snapshot) => {
      const results = snapshot.val();
      const formattedResult = Object.values(voteOptions).reduce(
        (prev: Record<string, number>, curr) => {
          // eslint-disable-next-line no-param-reassign
          prev[curr.key] = Object.values<VoteResult>(results).filter(
            (result) => result.selected === curr.key
          ).length;

          return prev;
        },
        {}
      );

      setVoteResults(formattedResult);
    });

    return () => {
      unsubscribeVote();
      unsubscribeVoteOptions();
      unsubscribeMyVote();
      unsubscribeVoteResults();
    };
  }, [voteOptions]);

  if (!init)
    return (
      <SuspenseFallback
        withoutLayout
        messages={[
          '투표 정보를 불러오고 있어요',
          '잠시만 기다려주세요',
          '현재 접속자가 많아 조금 늦어지고 있어요',
        ]}
      />
    );

  if (vote.showResult)
    return (
      <div>
        <PageLayout.Title>
          나는 가수다,
          <br />
          투표 결과는 아래와 같아요!
        </PageLayout.Title>
        <S.VoteResultTextContainer>
          <S.VoteResultText isWin={false}>
            총 투표수 : {/* eslint-disable-next-line no-return-assign, no-param-reassign */}
            {Object.values(voteOptions).reduce((prev, curr) => (prev += voteResults[curr.key]), 0)}
            표
          </S.VoteResultText>
          {voteOptions.map((option) => {
            const voteAmount = voteResults[option.key];
            const isWin = Math.max(...Object.values(voteResults)) === voteAmount;
            return (
              <S.VoteResultText isWin={isWin} key={`${option.key}_result`}>
                {option.text[0]} 득표수 : {voteAmount}표
              </S.VoteResultText>
            );
          })}
        </S.VoteResultTextContainer>
        <S.VotePieChartWrapper>
          <PieChart
            label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.percentage}%)`}
            labelStyle={{ fill: 'white', fontSize: '0.8rem' }}
            data={voteOptions.map((option) => ({
              title: option.text[0],
              value: voteResults[option.key],
              color: option.color,
            }))}
          />
        </S.VotePieChartWrapper>
      </div>
    );

  if (!vote.isOpen)
    return (
      <S.ComingSoonContainer>
        <S.ComingSoonTextContainer>
          <S.ComingSoonTitle>잠시 뒤 공개됩니다</S.ComingSoonTitle>
          <S.ComingSoonText>{btoa(vote.openAt)} 공개 예정</S.ComingSoonText>
        </S.ComingSoonTextContainer>
        <S.Base64DecoderLink href={BASE64_DECODER_URL}>문자열이 궁금하신가요?</S.Base64DecoderLink>
      </S.ComingSoonContainer>
    );

  return (
    <S.VotePageContainer>
      <div>
        <PageLayout.Title>
          나는 가수다,
          <br />
          당신의 가수를 선택해주세요
        </PageLayout.Title>
        <S.VoteOptionsContainer>
          {voteOptions.map(({ text, key }) => (
            <EmojiCard
              key={key}
              text={text}
              onClick={() => handleOnClickVoteOption(key)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...getEmojiProps(key)}
            />
          ))}
        </S.VoteOptionsContainer>
        <S.VoteDescriptionText>※ 한 번 제출하면 다시 수정할 수 없어요!</S.VoteDescriptionText>
      </div>
      <Button onClick={handleOnSubmitVote} disabled={select === null || isAlreadyVoted}>
        {isAlreadyVoted ? '이미 투표를 제출했어요' : '투표 제출하기'}
      </Button>
    </S.VotePageContainer>
  );
};
