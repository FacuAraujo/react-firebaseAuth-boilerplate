import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import { Provider as SessionProvider } from './session/context';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
