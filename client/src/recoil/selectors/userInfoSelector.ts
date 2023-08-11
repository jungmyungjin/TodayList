import { selector } from 'recoil';
import { userInfoState } from 'recoil/atoms/userInfoState';

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => get(userInfoState),
  set: ({ set }, newValue) => set(userInfoState, newValue),
});
