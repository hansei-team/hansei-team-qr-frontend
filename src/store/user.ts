import { atom } from 'recoil';

export interface UserData {
  name: string;
  lotteryNumber: number;
}

export const userAtom = atom<UserData | null>({
  key: 'user',
  default: null,
});
