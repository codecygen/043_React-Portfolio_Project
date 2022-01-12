import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { NavContextProvider } from './store/nav-context';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <NavContextProvider>
      <App />
    </NavContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);