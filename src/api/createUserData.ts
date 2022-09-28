import { doc, setDoc } from 'firebase/firestore';

import { db } from '../firebase';
import { UserData } from '../store';

import { getRandomLottery } from './getRandomLottery';
import { getUserData } from './getUserData';

export const createUserData = async (uid: string, name: string) => {
  const lotteryNumber = await getRandomLottery();
  console.log(lotteryNumber);

  await setDoc(doc(db, 'users', uid), {
    lotteryNumber,
    name,
  });

  return (await getUserData(uid)) as UserData;
};
