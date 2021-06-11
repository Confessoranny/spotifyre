import React from 'react';
import ReactDOM from 'react-dom';
import { BaseStyles, theme } from './BaseStyles';
import { ThemeProvider } from 'styled-components'
import reportWebVitals from './reportWebVitals';
import Login from './pages/login';

ReactDOM.render(
  <React.StrictMode>
    <BaseStyles />
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
