import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC4vMGo5nVjEoFKMgYQQ1pz9SdFbuUD20I',
  authDomain: 'hansei-team-qr.firebaseapp.com',
  projectId: 'hansei-team-qr',
  storageBucket: 'hansei-team-qr.appspot.com',
  messagingSenderId: '1024315752333',
  appId: '1:1024315752333:web:ce446c43c6a93fb2e247c4',
  measurementId: 'G-P7J2L2TYR3',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
