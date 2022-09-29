import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDyBxx2Bm6Wm0t-lsYoeKeroa_tipMPHY0',
  authDomain: 'hansei-team-qr-b59ea.firebaseapp.com',
  projectId: 'hansei-team-qr-b59ea',
  storageBucket: 'hansei-team-qr-b59ea.appspot.com',
  messagingSenderId: '189783632613',
  appId: '1:189783632613:web:734982b91b9b884cca020c',
  measurementId: 'G-NMJ6ZGMLCM',
  databaseURL: 'https://hansei-team-qr-b59ea-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
auth.languageCode = 'ko';
export const db = getFirestore(app);
export const database = getDatabase(app);
