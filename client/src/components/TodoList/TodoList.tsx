import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.scss';

const Mockup: TodoItem[] = [
  {
    id: 1,
    user_id: 1,
    parents_id: null,
    contents: '백엔드 마무리',
    status: 'TODO',
    order: 1,
    createdAt: '2023-07-05T00:00:00.000Z',
    updatedAt: '2023-07-05T00:00:00.000Z',
  },
  {
    id: 2,
    user_id: 1,
    parents_id: null,
    contents: '일찍 일어나기',
    status: 'CHECKED',
    order: 2,
    createdAt: '2023-07-21T08:07:25.000Z',
    updatedAt: '2023-07-21T08:07:25.000Z',
  },
  {
    id: 3,
    user_id: 1,
    parents_id: null,
    contents: '일찍 일어나기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:09:30.000Z',
    updatedAt: '2023-07-21T08:09:30.000Z',
  },
  {
    id: 4,
    user_id: 1,
    parents_id: 3,
    contents: '일찍 자기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:09:49.000Z',
    updatedAt: '2023-07-21T08:09:49.000Z',
  },
  {
    id: 4,
    user_id: 1,
    parents_id: 3,
    contents: ' 전날 일찍 저녁 먹기',
    status: 'CHECKED',
    order: 2,
    createdAt: '2023-07-21T08:09:49.000Z',
    updatedAt: '2023-07-21T08:09:49.000Z',
  },
];

interface TodoItem {
  id: number;
  user_id: number;
  parents_id: number | null;
  contents: string;
  status: 'TODO' | 'CHECKED';
  order: number;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.TodoList}>
        {Mockup.map((e, idx) => {
          const type = e.parents_id ? 'SUB' : 'MAIN';

          return (
            <Todo
              key={idx}
              type={type}
              contents={e.contents}
              status={e.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
