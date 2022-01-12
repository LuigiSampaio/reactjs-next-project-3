import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 2.4rem;
    }
  `}
`;
