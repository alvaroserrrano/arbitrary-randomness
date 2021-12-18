import { atom } from 'recoil';
import { User } from './types';

export const users = atom({
  key: 'users',
  default: [] as User[],
});

export const filteredUsers = atom({
  key: 'filteredUsers',
  default: [] as User[],
});

export const filter = atom({
  key: 'filter',
  default: '',
});

export const selectedUser = atom({
  key: 'selectedUser',
  default: 0,
});
