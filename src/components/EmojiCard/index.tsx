import React from 'react';

import * as S from './styled';

export interface EmojiCardProps {
  emoji: string;
  text: [string, string];
  color: string;
  style?: React.CSSProperties;
  isHover?: boolean;
  isImage?: boolean;
}

export const EmojiCard: React.FC<EmojiCardProps> = ({
  emoji,
  text,
  color,
  style,
  isHover,
  isImage,
}) => (
  <S.EmojiCardContainer isHover={isHover} style={style}>
    <S.EmojiWrapper color={color}>
      {isImage ? <S.EmojiImage src={emoji} width="24px" height="24px" /> : emoji}
    </S.EmojiWrapper>
    <S.TextContainer>
      <S.SmallText>{text[0]}</S.SmallText>
      <S.Text>{text[1]}</S.Text>
    </S.TextContainer>
  </S.EmojiCardContainer>
);
