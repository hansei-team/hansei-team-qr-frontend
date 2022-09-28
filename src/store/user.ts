import { User } from 'firebase/auth';
import { atom } from 'recoil';

export interface UserData {
  name: string;
  lotteryNumber: number;
}

export const userAtom = atom<{
  data: UserData;
  account: User;
} | null>({
  key: 'user',
  default: null,
});
