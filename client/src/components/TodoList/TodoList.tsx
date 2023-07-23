import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.scss';

const Mockup = [
  {
    id: 1,
    user_id: 1,
    parents_id: null,
    content: '백엔드 마무리',
    status: 'TODO',
    order: 1,
    createdAt: '2023-07-05T00:00:00.000Z',
    updatedAt: '2023-07-05T00:00:00.000Z',
  },
  {
    id: 2,
    user_id: 1,
    parents_id: null,
    content: '일찍 일어나기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:07:25.000Z',
    updatedAt: '2023-07-21T08:07:25.000Z',
  },
  {
    id: 3,
    user_id: 1,
    parents_id: null,
    content: '일찍 일어나기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:09:30.000Z',
    updatedAt: '2023-07-21T08:09:30.000Z',
  },
  {
    id: 4,
    user_id: 1,
    parents_id: null,
    content: '일찍 일어나기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:09:49.000Z',
    updatedAt: '2023-07-21T08:09:49.000Z',
  },
];

const TodoList = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.TodoList}>
        <Todo content={'물 주기'} status="TODO" />
        <Todo content={'물 받기'} type="sub" status="CHECKED" />
        <Todo content={'물 먹기'} status="CHECKED" />
        <Todo content={'목 스트레칭'} status="TODO" />
        <Todo content={'잠 자기'} status="TODO" />
      </div>
    </div>
  );
};

export default TodoList;
