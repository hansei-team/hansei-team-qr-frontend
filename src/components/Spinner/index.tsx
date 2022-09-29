import React from 'react';

import * as S from './styled';

export interface SpinnerProps {
  size?: string;
  border?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = '20px',
  border = 6,
  color = 'rgba(0,0,0,0.3)',
  style,
}) => (
  <S.Spinner size={size} border={border} color={color} style={style} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </S.Spinner>
);
