import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';

import mock from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a Grid Content', () => {
    const { container } = renderTheme(<GridText{...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
