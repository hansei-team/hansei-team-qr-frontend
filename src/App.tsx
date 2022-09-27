import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from './pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
