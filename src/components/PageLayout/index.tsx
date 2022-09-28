import React from 'react';

import LogoPNG from '../../assets/logo.png';

import * as S from './styled';

export interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayoutComponent: React.FC<PageLayoutProps> = ({ children }) => (
  <S.PageLayoutContainer>
    <S.IconTitle src={LogoPNG} alt="한팀" />
    <S.PageContainer>{children}</S.PageContainer>
  </S.PageLayoutContainer>
);

export const PageLayout = Object.assign(PageLayoutComponent, {
  Title: S.PageTitle,
});
