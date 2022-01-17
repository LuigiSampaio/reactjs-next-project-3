import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';

import mock from './mock';

describe('<GridContent />', () => {
  it('should render a Grid Content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a Grid Content', () => {
    const { container } = renderTheme(<GridContent {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
