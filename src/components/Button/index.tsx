import React from 'react';

import * as S from './styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Button: React.FC<ButtonProps> = (props) => <S.ButtonElement {...props} />;
