import React from 'react';
import ReactDOM from 'react-dom/client';
import "@patternfly/react-core/dist/styles/base.css";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
