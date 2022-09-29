import styled from '@emotion/styled';

export const ErrorBoundaryContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ErrorBoundaryDescription = styled.p({
  fontSize: '1.8rem',
  fontWeight: 400,
  color: '#51525B',
  lineHeight: '2.1rem',
});
