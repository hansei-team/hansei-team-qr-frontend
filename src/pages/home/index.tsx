import React from 'react';

import { useRecoilValue } from 'recoil';

import HelloEmojiPNG from '../../assets/emoji/hello.png';
import PosterPNG from '../../assets/poster.png';
import { EmojiCard } from '../../components';
import { userAtom } from '../../store';

import * as S from './styled';

export const HomePage: React.FC = () => {
  const user = useRecoilValue(userAtom);

  return (
    <div>
      <EmojiCard
        isImage
        color="#FFB26B"
        emoji={HelloEmojiPNG}
        text={['오늘은 한세어울림마당!', `${user?.name}님, 즐거운 축제되세요!`]}
        style={{ marginTop: '2.8rem' }}
      />
      <S.PosterImage src={PosterPNG} alt="한세어울림마당 포스터" />
    </div>
  );
};
