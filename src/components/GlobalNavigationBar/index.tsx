import React from 'react';

import * as S from './styled';

export interface GlobalNavigationBarProps {
  menu: {
    to: string;
    icon: string;
    activeIcon: string;
    text: string;
  }[];
}

export const GlobalNavigationBar: React.FC<GlobalNavigationBarProps> = ({ menu }) => (
  <S.GlobalNavigationBarContainer>
    <S.GlobalNavigationBarItemListContainer>
      {menu.map(({ to, icon: Icon, activeIcon: ActiveIcon, text }) => (
        <S.GlobalNavigationItemContainer key={to} to={to} end>
          <S.ItemIconWrapper>
            <Icon />
            <ActiveIcon />
          </S.ItemIconWrapper>
          <S.ItemText>{text}</S.ItemText>
        </S.GlobalNavigationItemContainer>
      ))}
    </S.GlobalNavigationBarItemListContainer>
  </S.GlobalNavigationBarContainer>
);
