import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });

    // expect(heading.firstChild).toHaveAttribute('href', '#target'); evitar usar dessa forma
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="logo.svg" />);

    expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'logo.svg');
    // expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute('src', 'logo.svg');
    // expect(heading.firstChild.firstChild).toHaveAttribute('src', 'logo.svg'); evitar usar dessa forma
  });

  it('should match snapshot ', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="logo.svg" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
