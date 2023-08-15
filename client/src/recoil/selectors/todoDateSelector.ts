import { selector } from 'recoil';
import { TodoDateState } from 'recoil/atoms/todoDateState';

export const todoDateSelector = selector({
  key: 'todoDateSelector',
  get: ({ get }) => get(TodoDateState),
  set: ({ set }, newValue) => set(TodoDateState, newValue),
});
