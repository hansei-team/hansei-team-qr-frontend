import styled from '@emotion/styled';

import { colors } from '../../styles';

export const EmojiCardContainer = styled.div<{ isHover?: boolean }>(({ isHover }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: colors.foreground,
  borderRadius: '1.2rem',
  padding: '1.2rem',
  cursor: 'pointer',

  ...(isHover && {
    background: colors.background,
    border: `1px solid ${colors.outline}`,
    boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.15)',
  }),
}));

export const EmojiWrapper = styled.div<{ color: string }>((props) => ({
  width: '4.8rem',
  height: '4.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: props.color,
  fontSize: '2.2rem',
}));

export const EmojiImage = styled.img({});

export const TextContainer = styled.div({
  flex: '1 1 auto',
  marginLeft: '1.8rem',

  '& > p': {
    margin: '0',
  },
});

export const SmallText = styled.p({
  fontSize: '1.4rem',
  fontWeight: 500,
  color: '#51525B',
  marginBottom: '0.5rem !important',
});

export const Text = styled.p({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: colors.text.primary,
});
