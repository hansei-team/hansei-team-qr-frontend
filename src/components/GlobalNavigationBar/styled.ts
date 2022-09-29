import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors } from '../../styles';

export const GlobalNavigationBarContainer = styled.nav({
  width: '100%',
  padding: '1.7rem 5rem 2.7rem',
  borderTop: `1px solid ${colors.outline}`,
  borderRadius: '2rem 2rem 0 0',
});

export const GlobalNavigationBarItemListContainer = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

export const GlobalNavigationItemContainer = styled(NavLink)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',

  '& > *': {
    transition: 'all 200ms',
  },

  '&.active > div > svg:nth-child(1)': {
    opacity: 0,
  },
  '&.active > div > svg:nth-child(2)': {
    opacity: 1,
  },
  '&.active > *': {
    color: colors.navbar.activeColor,
  },
});

export const ItemIconWrapper = styled.div({
  position: 'relative',
  width: '2.4rem',
  height: '2.4rem',

  '& > svg': {
    position: 'absolute',
    top: 0,
    right: 0,
    transition: 'opacity 200ms',
  },

  '& > svg:nth-child(2)': {
    opacity: 0,
  },
});

export const ItemText = styled.p({
  fontSize: '1.2rem',
  fontWeight: 700,
  textAlign: 'center',
  color: colors.navbar.color,
  marginTop: '0.4rem',
});
