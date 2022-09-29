import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { Global } from '@emotion/react';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { RecoilRoot } from 'recoil';

import App from './App';
import { ErrorBoundaryFallback } from './components';
import { globalStyle } from './styles';

import './firebase';
import 'react-toastify/dist/ReactToastify.css';

Sentry.init({
  dsn: 'https://4e2f2a58c8ab47d38eee1be091257cae@o1432434.ingest.sentry.io/4503898771685376',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: import.meta.env.MODE,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <Sentry.ErrorBoundary fallback={ErrorBoundaryFallback}>
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
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);
