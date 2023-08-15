import { atom } from 'recoil';
import { DateTime } from 'luxon';

export const TodoDateState = atom<DateTime>({
  key: 'TodoDateState', // unique ID (with respect to other atoms/selectors)
  default: DateTime.now(), // default value (aka initial value)
});
