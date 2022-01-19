import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Globalstyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" component={Home} />
        </Switch>
      </BrowserRouter>
      <Globalstyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
