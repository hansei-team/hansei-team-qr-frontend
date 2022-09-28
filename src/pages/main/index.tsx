import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';

import GooglePNG from '../../assets/google.png';
import LogoPNG from '../../assets/logo.png';
import { Button } from '../../components';
import { auth } from '../../firebase';
import { userAtom } from '../../store';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const handleGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, googleProvider);
    if (user) {
      setUser(user);
      navigate('/auth/verify');
    }
  };

  return (
    <S.PageContainer>
      <S.OnBoardingItemContainer>
        <S.LogoImage src={LogoPNG} alt="한팀" />
        <div style={{ textAlign: 'center' }}>
          <S.SmallText>한세어울림마당 x 한팀</S.SmallText>
          <S.BrandText>한팀 QR</S.BrandText>
        </div>
      </S.OnBoardingItemContainer>
      <Button type="social" socialType="GOOGLE" iconUrl={GooglePNG} onClick={handleGoogleLogin}>
        구글로 시작하기
      </Button>
    </S.PageContainer>
  );
};
