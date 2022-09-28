import { css } from '@emotion/react';

import { colors } from './colors';

export const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  #root {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: -0.03em;
    color: ${colors.text.primary};
    background-color: ${colors.background};
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;
