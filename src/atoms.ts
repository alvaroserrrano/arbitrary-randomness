import { atom } from 'recoil';

export const users = atom({
  key: 'users',
  default: [],
});

export const selectedUser = atom({
  key: 'selectedUser',
  default: 0,
});

export const view = atom({
  key: 'view',
  default: 50,
});
