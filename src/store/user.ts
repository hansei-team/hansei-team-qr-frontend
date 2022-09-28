import { User } from 'firebase/auth';
import { atom } from 'recoil';

export const userAtom = atom<User | null>({
  key: 'user',
  default: null,
});
