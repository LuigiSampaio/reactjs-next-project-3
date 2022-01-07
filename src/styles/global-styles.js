import { createGlobalStyle, css } from 'styled-components';

export const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.secondaryBg};
    `}
  }
`;
