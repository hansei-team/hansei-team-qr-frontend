import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotateKeyframes = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const dashKeyframes = keyframes({
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: '0',
  },

  '50%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-35',
  },

  '100%': {
    strokeDasharray: '89, 200',
    strokeDashoffset: '-124',
  },
});

export const Spinner = styled.svg<{ size: string; border: number; color: string }>(
  ({ size, border, color }) => ({
    width: size,
    height: size,
    animation: `${rotateKeyframes} 2s linear infinite`,

    circle: {
      strokeWidth: border,
      strokeDasharray: '150, 200',
      strokeDashoffset: '-10',
      strokeLinecap: 'round',
      stroke: color,
      animation: `${dashKeyframes} 1.5s ease-in-out infinite`,
    },
  })
);
