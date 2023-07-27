import { atom } from 'recoil';
import { TodoItem } from '../../types/TodoList';

export const TodoDataState = atom<TodoItem[]>({
  key: 'todoDataState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
