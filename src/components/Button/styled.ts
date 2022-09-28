import styled from '@emotion/styled';

import { colors } from '../../styles';

export const ButtonElement = styled.button<{
  color?: string;
  background?: string;
  activeBackground?: string;
  borderColor?: string;
  fontWeight?: number;
}>(({ color, background, activeBackground, borderColor, fontWeight }) => ({
  width: '100%',
  height: '5.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.6rem',
  fontWeight: fontWeight || 700,
  color: color || '#FFFFFF',
  background: background || colors.primary.default,
  outline: 'none',
  border: borderColor ? `1px solid ${borderColor}` : 'none',
  borderRadius: '1.2rem',
  transition: 'background 100ms',
  fontFamily: `'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,

  '&:active': {
    background: activeBackground || colors.primary.darker,
  },

  '& > img': {
    marginRight: '1.2rem',
  },
}));
