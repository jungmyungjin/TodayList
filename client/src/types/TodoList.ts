import { DateTime } from 'luxon';

export interface TodoItem {
  todo_id: string | null;
  user_id: number | null;
  parents_id: string | null;
  contents: string;
  status: 'TODO' | 'CHECKED';
  date: string;
  createdAt: string;
  updatedAt: string;
}

// Only TodoList.tsx

// Only Todo.tsx
export interface TodoProps {
  contents: string;
  type?: 'MAIN' | 'SUB';
  status?: 'TODO' | 'CHECKED';
  idx: number;
}
