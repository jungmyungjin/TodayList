import { selector, selectorFamily } from 'recoil';
import { TodoDataState } from 'recoil/atoms/todoDataState';
import { TodoItem } from 'types/TodoList';

export const todoDataAllState = selector({
  key: 'todoDataAllState',
  get: ({ get }) => get(TodoDataState),
  set: ({ set }, newValue) => set(TodoDataState, newValue),
});

export const todoDataOneState = selectorFamily<TodoItem, number>({
  key: 'todoDataOneState',
  get:
    (idx: number) =>
    ({ get }) => {
      const data = get(TodoDataState);
      return data[idx];
      // console.log('todoDataOneState', dataOne);
      // return dataOne[idx] ? dataOne[idx] : [];
    },

  // optional set
  set:
    (idx: number) =>
    ({ get, set }, newOne) => {
      // console.log('todoDataOneState', 'Set', TodoDataState);
      let data = get(TodoDataState); // recoil의 직접적인 상태
      data = [...data]; // 깊은 복사로 직접적인 상태를 변경하지 않고, 유지
      data[idx] = newOne as TodoItem; // 복사한 배열에 대해 값 변경
      set(TodoDataState, data); // 수정된 값 반영
    },
});
