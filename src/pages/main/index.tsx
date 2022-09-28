import React from 'react';
import { useNavigate } from 'react-router-dom';

import LogoPNG from '../../assets/logo.png';
import { Button } from '../../components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    navigate('/auth/verify');
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
      <Button onClick={handleGoogleLogin}>추첨 번호 받기</Button>
    </S.PageContainer>
  );
};
