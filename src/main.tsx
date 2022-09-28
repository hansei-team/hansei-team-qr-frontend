import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { RecoilRoot } from 'recoil';

import App from './App';
import './firebase';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ToastContainer
        position="top-center"
        theme="light"
        autoClose={3000}
        closeButton={false}
        newestOnTop
      />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
