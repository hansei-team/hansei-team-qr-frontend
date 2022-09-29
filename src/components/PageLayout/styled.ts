import styled from '@emotion/styled';

export const PageLayoutContainer = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '3.2rem 2.4rem',
  overflow: 'auto',
});

export const IconTitle = styled.img({
  width: '5.5rem',
  height: '5.5rem',
});

export const PageContainer = styled.main({
  flex: '1 1 auto',
});

export const PageTitle = styled.h1({
  fontSize: '2.4rem',
  fontWeight: 700,
  lineHeight: '3rem',
  marginTop: '3.6rem',
});
