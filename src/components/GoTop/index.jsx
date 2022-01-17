import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Ir para o topo da página" title="Ir para o topo da página">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
