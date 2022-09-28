import styled from '@emotion/styled';

import { colors } from '../../styles';

export const PageContainer = styled.main({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3.2rem 2.4rem',
});

export const OnBoardingItemContainer = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16rem',
});

export const LogoImage = styled.img({
  width: '22.5rem',
  height: '22.5rem',
});

export const SmallText = styled.p({
  fontSize: '2rem',
  fontWeight: 500,
  color: colors.text.primary,
  marginBottom: '0.8rem',
});

export const BrandText = styled.h1({
  fontSize: '4rem',
  fontWeight: 700,
  color: colors.text.primary,
});
