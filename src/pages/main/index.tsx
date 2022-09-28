import React from 'react';

import GooglePNG from '../../assets/google.png';
import LogoPNG from '../../assets/logo.png';
import { Button } from '../../components';

import * as S from './styled';

export const MainPage: React.FC = () => (
  <S.PageContainer>
    <S.OnBoardingItemContainer>
      <S.LogoImage src={LogoPNG} alt="한팀" />
      <div style={{ textAlign: 'center' }}>
        <S.SmallText>한세어울림마당 x 한팀</S.SmallText>
        <S.BrandText>한팀 QR</S.BrandText>
      </div>
    </S.OnBoardingItemContainer>
    <Button type="social" socialType="GOOGLE" iconUrl={GooglePNG}>
      구글로 시작하기
    </Button>
  </S.PageContainer>
);
