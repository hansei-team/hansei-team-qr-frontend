import { doc, getDoc } from 'firebase/firestore';

import { db } from '../firebase';
import { UserData } from '../store';

export const getUserData = async (uid: string): Promise<UserData | undefined> => {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return undefined;

    return docSnap.data() as UserData;
  } catch (error) {
    return undefined;
  }
};
