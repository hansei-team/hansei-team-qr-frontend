import styled from '@emotion/styled';

import { colors } from '../../styles';

export const TextFieldContainer = styled.div<{ isError?: boolean }>(({ isError }) =>
  isError
    ? {
        '& > div': {
          borderColor: `${colors.error} !important`,
        },

        '&>p': {
          color: colors.error,
          fontWeight: 500,
        },
      }
    : {}
);

export const TextFieldLabel = styled.label({
  fontSize: '1.4rem',
  fontWeight: 400,
  color: colors.text.secondary,
});

export const TextFieldInputElementWrapper = styled.div({
  width: '100%',
  height: '5.2rem',
  marginTop: '0.6rem',
  background: colors.background,
  border: `1px solid ${colors.outline}`,
  borderRadius: '1.2rem',
  transition: 'border 100ms',

  '&:hover': {
    borderColor: colors.primary.lighter,
  },

  '&:focus-within': {
    borderColor: colors.primary.default,
  },
});

export const TextFieldInputElement = styled.input({
  width: '100%',
  height: '100%',
  padding: '0 1.6rem',
  color: colors.text.primary,
  fontSize: '1.6rem',
  fontWeight: 500,
  border: 'none',
  borderRadius: '1.2rem',
  outline: 'none',
});

export const TextFieldMessage = styled.p<{ isError?: boolean }>(({ isError }) => ({
  marginTop: '0.8rem',
  fontSize: '1.4rem',
  fontWeight: isError ? 500 : 400,
  color: colors.text.secondary,
}));
