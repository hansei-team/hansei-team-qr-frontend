import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../styles';

export const SuspenseFallbackContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const pulseKeyframes = keyframes({
  '0%': {
    opacity: 0,
  },

  '80%': {
    opacity: 1,
  },

  '100%': {
    opacity: 0,
  },
});

export const MessageText = styled.p({
  marginTop: '1.6rem',
  fontSize: '1.6rem',
  fontWeight: 500,
  color: colors.text.secondary,
  animation: `${pulseKeyframes} 2s infinite`,
});
