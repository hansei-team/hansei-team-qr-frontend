import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';
import { getRandomNumber } from '../utils';

export const getRandomLottery = async () => {
  const lottery = getRandomNumber(1, 270);
  const q = query(collection(db, 'users'), where('lotteryNumber', '==', lottery));
  const isAlreadyExist = (await (await getDocs(q)).docs.length) > 0;
  if (isAlreadyExist) {
    const nextNumber = (await getRandomLottery()) as number;
    return nextNumber;
  }
  return lottery;
};
