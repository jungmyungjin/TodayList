import { selector } from 'recoil';
import { UserInfoState } from 'recoil/atoms/userInfoState';

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => get(UserInfoState),
  set: ({ set }, newValue) => set(UserInfoState, newValue),
});
