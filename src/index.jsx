import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Globalstyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { Home } from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <Globalstyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
