import React, { useEffect, useState } from 'react';

import { onValue, ref } from 'firebase/database';

import SuccessPNG from '../../assets/emoji/success.png';
import { Button, EmojiCard, PageLayout } from '../../components';
import { database } from '../../firebase';

import * as S from './styled';

interface Vote {
  isOpen: boolean;
  openAt: string;
}

export const VotePage: React.FC = () => {
  const [select, setSelect] = useState<string | null>(null);
  const [vote, setVote] = useState<Vote>({ isOpen: false, openAt: '' });
  const BASE64_DECODER_URL = 'https://www.convertstring.com/ko/EncodeDecode/Base64Decode';

  const handleOnClickVoteOption = (optionId: string) => {
    if (optionId === select) setSelect(null);
    else setSelect(optionId);
  };

  const getEmojiProps = (optionId: string) => {
    const isSelected = select === optionId;
    return {
      color: isSelected ? '#77D681' : '#C6DDFF',
      emoji: isSelected ? SuccessPNG : '',
      isImage: isSelected,
    };
  };

  useEffect(() => {
    const voteRef = ref(database, 'vote');
    const unsubscribe = onValue(voteRef, (snapshot) => setVote(snapshot.val()));

    return () => unsubscribe();
  }, []);

  if (!vote.isOpen)
    return (
      <S.ComingSoonContainer>
        <S.ComingSoonTextContainer>
          <S.ComingSoonTitle>잠시 뒤 공개됩니다</S.ComingSoonTitle>
          <S.ComingSoonText>{btoa(vote.openAt)} 공개 예정</S.ComingSoonText>
        </S.ComingSoonTextContainer>
        <S.Base64DecoderLink href={BASE64_DECODER_URL}>문자열이 궁금하신가요?</S.Base64DecoderLink>
      </S.ComingSoonContainer>
    );

  return (
    <S.VotePageContainer>
      <div>
        <PageLayout.Title>
          나는 가수다,
          <br />
          당신의 가수를 선택해주세요
        </PageLayout.Title>
        <S.VoteOptionsContainer>
          <EmojiCard
            text={['교사팀', '홍길동 선생님 / 고길동 선생님']}
            onClick={() => handleOnClickVoteOption('teacher')}
            {...getEmojiProps('teacher')}
          />
          <EmojiCard
            text={['학생팀', 'C1111 바나나 / H1111 사과']}
            onClick={() => handleOnClickVoteOption('student')}
            {...getEmojiProps('student')}
          />
        </S.VoteOptionsContainer>
        <S.VoteDescriptionText>※ 한 번 제출하면 다시 수정할 수 없어요!</S.VoteDescriptionText>
      </div>
      <Button disabled={select === null}>투표 제출하기</Button>
    </S.VotePageContainer>
  );
};
