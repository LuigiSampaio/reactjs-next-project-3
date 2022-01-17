import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridSection } from '.';

import mock from './mock';

describe('<GridSection />', () => {
  it('should render', () => {
    renderTheme(<GridSection>Children</GridSection>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
