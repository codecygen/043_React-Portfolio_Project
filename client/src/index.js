import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DarkModeContextProvider } from './store/color-context';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);