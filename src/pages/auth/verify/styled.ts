import styled from '@emotion/styled';

export const PageContainer = styled.form({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const TextFieldContainer = styled.div({
  height: '100%',
  flex: '1 1 auto',
  marginTop: '3.2rem',

  '& > div:not(:last-child)': {
    marginBottom: '2.4rem',
  },
});

export const TextFieldButtonContainer = styled.div({
  display: 'flex',

  '& > div': {
    width: '100%',
    marginRight: '0.8rem',
  },

  '& > button': {
    width: '30%',
    marginTop: '2.2rem',
  },
});
