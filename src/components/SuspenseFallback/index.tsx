import React, { useEffect, useState } from 'react';

import { PageLayout } from '../PageLayout';
import { Spinner } from '../Spinner';

import * as S from './styled';

export interface SuspenseFallbackProps {
  withoutLayout?: boolean;
  messages?: string[];
  messageInterval?: number;
}

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  withoutLayout = false,
  messages = [
    '사용자 정보를 불러오고 있어요',
    '잠시만 기다려주세요',
    '현재 접속자가 많아 조금 늦어지고 있어요',
  ],
  messageInterval = 2000,
}) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= messages.length - 1) return 0;
        return prev + 1;
      });
    }, messageInterval);

    return () => clearInterval(interval);
  }, [messages, messageInterval]);

  if (withoutLayout)
    return (
      <S.SuspenseFallbackContainer>
        <Spinner size="4rem" border={5} />
        <S.MessageText>{messages[index]}</S.MessageText>
      </S.SuspenseFallbackContainer>
    );

  return (
    <PageLayout>
      <S.SuspenseFallbackContainer>
        <Spinner size="4rem" border={5} />
        <S.MessageText>{messages[index]}</S.MessageText>
      </S.SuspenseFallbackContainer>
    </PageLayout>
  );
};
