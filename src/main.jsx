import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/main.css';
import ScrollRestoration from './components/ScrollRestoration';
import logHelloMsg from './ultilities/logHelloMsg';

logHelloMsg();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollRestoration>
        <App />
      </ScrollRestoration>
    </HashRouter>
  </React.StrictMode>
);
