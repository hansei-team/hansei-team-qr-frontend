import React from 'react';

import HomeActiveSVG from '../../assets/icon/home-active.svg';
import HomeSVG from '../../assets/icon/home.svg';
import TicketActiveSVG from '../../assets/icon/ticket-active.svg';
import TicketSVG from '../../assets/icon/ticket.svg';
import VoteActiveSVG from '../../assets/icon/vote-active.svg';
import VoteSVG from '../../assets/icon/vote.svg';
import { GlobalNavigationBar } from '../GlobalNavigationBar';
import { PageLayout, PageLayoutProps } from '../PageLayout';

import * as S from './styled';

export type AppLayoutProps = PageLayoutProps;

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <S.PageContainer>
    <PageLayout>{children}</PageLayout>
    <GlobalNavigationBar
      menu={[
        {
          to: '/lottery',
          icon: TicketSVG,
          activeIcon: TicketActiveSVG,
          text: '추첨권',
        },
        {
          to: '/home',
          icon: HomeSVG,
          activeIcon: HomeActiveSVG,
          text: '홈',
        },
        {
          to: '/vote',
          icon: VoteSVG,
          activeIcon: VoteActiveSVG,
          text: '투표',
        },
      ]}
    />
  </S.PageContainer>
);
