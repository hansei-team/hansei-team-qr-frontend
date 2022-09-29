import React, { useEffect, useState } from 'react';

import { onValue, ref } from 'firebase/database';
import { useRecoilValue } from 'recoil';

import { EmojiCard, PageLayout } from '../../components';
import { database } from '../../firebase';
import { userAtom } from '../../store';

import * as S from './styled';

interface Gift {
  amount: number;
  background: string;
  category: string;
  icon: string;
  name: string;
}

export const LotteryPage: React.FC = () => {
  const user = useRecoilValue(userAtom);
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    const starCountRef = ref(database, `gifts`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setGifts(data);
    });
  }, []);

  return (
    <div>
      <section>
        <PageLayout.Title>{user?.data.name}님의 추첨번호는?</PageLayout.Title>
        <S.LotteryNumberContainer>
          <S.LotteryNumberCircle>{user?.data.lotteryNumber}</S.LotteryNumberCircle>
          <S.LotteryNumberText>
            자세한 상품 공개와 경품 추첨은
            <br />
            축제 마지막에 진행돼요!
          </S.LotteryNumberText>
        </S.LotteryNumberContainer>
      </section>
      <section>
        <PageLayout.Title>상품 미리보기</PageLayout.Title>
        <S.LotteryGiftsContainer>
          {gifts.map((gift, i) => (
            <EmojiCard
              key={`${gift.category}_${gift.icon}`}
              color={gift.background}
              emoji={gift.icon}
              text={[`${i + 1}등 - ${gift.category} ${gift.amount}명`, gift.name]}
              isImage
            />
          ))}
        </S.LotteryGiftsContainer>
      </section>
    </div>
  );
};
