import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Globalstyle } from './templates/styles/global-styles';
import { theme } from './templates/styles/theme';
import Home from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <Globalstyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
