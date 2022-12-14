import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';

import { getUserData } from './api';
import { AppLayout, PageLayout, SuspenseFallback } from './components';
import { auth } from './firebase';
import { AuthVerifyPage, HomePage, LotteryPage, MainPage, VotePage } from './pages';
import { userAtom } from './store';

const App: React.FC = () => {
  const setUser = useSetRecoilState(userAtom);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const handleOnAuthStateChanged = async (user: User) => {
      const data = await getUserData(user.uid);
      if (data) {
        setUser(data);
        Sentry.setUser({ username: data.name });
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) await handleOnAuthStateChanged(user);
      setInit(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      {!init ? (
        <SuspenseFallback />
      ) : (
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
            <Route path="vote" element={<VotePage />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
