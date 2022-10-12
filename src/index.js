import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  // </React.StrictMode>,
);
