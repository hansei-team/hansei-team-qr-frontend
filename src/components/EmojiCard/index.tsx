import React from 'react';

import * as S from './styled';

export interface EmojiCardProps {
  emoji: string;
  text: [string, string];
  isHover?: boolean;
  isImage?: boolean;
}

export const EmojiCard: React.FC<EmojiCardProps> = ({ emoji, text, isHover, isImage }) => (
  <S.EmojiCardContainer isHover={isHover}>
    <S.EmojiWrapper>
      {isImage ? <S.EmojiImage src={emoji} width="24px" height="24px" /> : emoji}
    </S.EmojiWrapper>
    <S.TextContainer>
      <S.SmallText>{text[0]}</S.SmallText>
      <S.Text>{text[1]}</S.Text>
    </S.TextContainer>
  </S.EmojiCardContainer>
);
