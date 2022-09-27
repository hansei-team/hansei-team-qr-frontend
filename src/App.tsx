import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';

import { MainPage } from './pages';
import { globalStyle } from './styles';

const App: React.FC = () => (
  <BrowserRouter>
    <Global styles={globalStyle} />
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
