export interface TodoItem {
  id: number | null;
  user_id: number | null;
  parents_id: number | null;
  contents: string;
  status: 'TODO' | 'CHECKED';
  order: number | null;
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
