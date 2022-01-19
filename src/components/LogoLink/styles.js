import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;

    > img {
      height: 2.4rem;
    }
  `}
`;
