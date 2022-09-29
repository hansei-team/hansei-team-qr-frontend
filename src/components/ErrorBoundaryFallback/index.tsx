import React from 'react';

import { FallbackRender } from '@sentry/react';

import { Button } from '../Button';
import { PageLayout } from '../PageLayout';

import * as S from './styled';

export const ErrorBoundaryFallback: FallbackRender = ({ error, resetError }) => (
  <PageLayout>
    <S.ErrorBoundaryContainer>
      <div style={{ width: '100%' }}>
        <PageLayout.Title>일시적인 오류가 발생했어요..</PageLayout.Title>
        <S.ErrorBoundaryDescription style={{ marginTop: '2rem' }}>
          사용 중 발생한 에러들은 자동 수집되고 있어요
          <br />
          이용에 불편함이 없도록 최대한 빨리 수정할게요
        </S.ErrorBoundaryDescription>

        <S.ErrorBoundaryDescription style={{ marginTop: '1.2rem' }}>
          만약 에러가 지속적으로 발생한다면
          <br />
          스크린샷과 함께 운영진에게 말씀해주세요
        </S.ErrorBoundaryDescription>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '4rem' }}>
          <S.ErrorBoundaryDescription style={{ fontWeight: 500, marginBottom: '1.2rem' }}>
            에러: {error.name}({error.message})
          </S.ErrorBoundaryDescription>
          {error.stack && (
            <S.ErrorBoundaryDescription
              style={{
                display: 'inline-block',
                width: '100%',
                whiteSpace: 'normal',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '12.5rem',
              }}
            >
              {error.stack}
            </S.ErrorBoundaryDescription>
          )}
        </div>

        <Button onClick={resetError}>돌아가기</Button>
      </div>
    </S.ErrorBoundaryContainer>
  </PageLayout>
);
