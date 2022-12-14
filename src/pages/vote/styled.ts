import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors } from '../../styles';

export const ComingSoonContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ComingSoonTextContainer = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ComingSoonTitle = styled.h1({
  fontSize: '3.2rem',
  fontWeight: 700,
});

export const ComingSoonText = styled.p({
  fontSize: '2rem',
  fontWeight: 400,
  color: '#51525B',
  marginTop: '0.8rem',
});

export const Base64DecoderLink = styled.a({
  fontSize: '1.4rem',
  fontWeight: 400,
  color: '#51525B',
  marginBottom: '6rem',
});

export const VotePageContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'space-between',
});

export const VoteOptionsContainer = styled.div({
  marginTop: '2.8rem',

  '& > div:not(:last-child)': {
    marginBottom: '1.2em',
  },
});

export const VoteDescriptionText = styled.p({
  fontSize: '1.4rem',
  fontWeight: 400,
  marginTop: '1.2rem',
  color: '#51525B',
});

export const VoteResultText = styled.p<{ isWin: boolean }>(({ isWin }) => ({
  fontSize: '1.6rem',
  fontWeight: isWin ? 500 : 400,
  color: isWin ? '#159330' : '#51525B',
}));

export const VoteResultTextContainer = styled.div({
  marginTop: '1.2rem',

  '& > p:not(:last-child)': {
    marginBottom: '0.6rem',
  },
});

export const VotePieChartWrapper = styled.div({
  width: '100%',
  background: colors.foreground,
  marginTop: '6rem',
  padding: '6rem',
  borderRadius: '1.6rem',
});
