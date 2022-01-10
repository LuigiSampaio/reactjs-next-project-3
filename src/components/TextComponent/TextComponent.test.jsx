import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent> texto </TextComponent>);
    expect(screen.getByText('texto')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent> texto </TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
