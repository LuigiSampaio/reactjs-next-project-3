import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Ir para o topo da página' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ir para o topo da página' })).toHaveAttribute('href', '#');

    expect(container).toMatchSnapshot();
  });
});
