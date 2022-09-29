import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Global } from '@emotion/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';

import { getUserData } from './api';
import { AppLayout, PageLayout } from './components';
import { auth } from './firebase';
import { AuthVerifyPage, HomePage, LotteryPage, MainPage } from './pages';
import { userAtom } from './store';
import { globalStyle } from './styles';

const App: React.FC = () => {
  const setUser = useSetRecoilState(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return setUser(null);
      const data = await getUserData(user.uid);
      if (!data) return setUser(null);

      return setUser({ data, account: user });
    });
  });

  return (
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

        <Route
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="lottery" element={<LotteryPage />} />
          <Route path="vote" element={<PageLayout.Title>여기는 투표 페이지</PageLayout.Title>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
