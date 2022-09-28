import React from 'react';

import * as S from './styled';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message?: string;
  isError?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, message, isError, ...props }, ref) => (
    <S.TextFieldContainer isError={isError}>
      <S.TextFieldLabel>{label}</S.TextFieldLabel>
      <S.TextFieldInputElementWrapper>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <S.TextFieldInputElement ref={ref} {...props} />
      </S.TextFieldInputElementWrapper>
      {message && <S.TextFieldMessage>{message}</S.TextFieldMessage>}
    </S.TextFieldContainer>
  )
);
