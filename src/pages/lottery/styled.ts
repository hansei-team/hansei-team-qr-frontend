import styled from '@emotion/styled';

import { colors } from '../../styles';

export const LotteryNumberContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.foreground,
  borderRadius: '1.2rem',
  padding: '3.2rem 0',
  marginTop: '2rem',
});

export const LotteryNumberCircle = styled.div({
  width: '10rem',
  height: '10rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: '#6C69FF',
  color: '#FFFFFF',
  fontSize: '3.6rem',
  fontWeight: 700,
});

export const LotteryNumberText = styled.p({
  fontSize: '1.4rem',
  fontWeight: 400,
  color: '#51525B',
  lineHeight: '1.7rem',
  textAlign: 'center',
  marginTop: '1.6rem',
});

export const LotteryGiftsContainer = styled.div({
  marginTop: '2rem',

  '& > div:not(:last-child)': {
    marginBottom: '0.8rem',
  },
});
