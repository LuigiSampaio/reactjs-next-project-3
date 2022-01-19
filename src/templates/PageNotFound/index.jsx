import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404!"
      html='<p>A Página que você busca não foi encontrada. </br> <a href="/"> clique aqui para voltar </a></p>'
    />
  );
};
