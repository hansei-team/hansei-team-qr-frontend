import styled from '@emotion/styled';

import { colors } from '../../styles';

export const ButtonElement = styled.button({
  width: '100%',
  height: '4.8rem',
  fontSize: '1.6rem',
  fontWeight: 700,
  color: '#FFFFFF',
  background: colors.primary.default,
  outline: 'none',
  border: 'none',
  borderRadius: '1.2rem',
  transition: 'background 100ms',

  '&:active': {
    background: colors.primary.darker,
  },
});
