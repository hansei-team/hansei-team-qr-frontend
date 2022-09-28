import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Global } from '@emotion/react';

import { PageLayout } from './components';
import { AuthVerifyPage, MainPage } from './pages';
import { globalStyle } from './styles';

const App: React.FC = () => (
  <BrowserRouter>
    <Global styles={globalStyle} />
    <Routes>
      <Route index element={<MainPage />} />
      <Route
        element={
          <PageLayout>
            <Outlet />
          </PageLayout>
        }
      >
        <Route path="auth/verify" element={<AuthVerifyPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
