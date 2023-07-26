import React, { useState } from 'react';
import recoil from 'recoil';
import Todo from './Todo';
import styles from './TodoList.module.scss';
import { fetchTodoList } from '../../services/apiService/apiService';
import AddIcon from '../../assets/icons/Add.svg';

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
  const [todoLists, setTodoLists] = useState(''); //
  const rawTodoData = fetchTodoList(); // API 불러오기
  // console.log(JSON.stringify(rawTodoData));
  localStorage.setItem('todoData', JSON.stringify(rawTodoData)); // 로컬 스토리지 저장
  const lists = JSON.parse(localStorage.getItem('todoData') || ''); // 로컬스토리지에 저장한 값 보여주기

  // const updateList = (idx, contents) => {
  //   lists;
  // };

  return (
    <div className={styles.Layout}>
      <div className={styles.TodoList}>
        {lists.map((e: TodoItem, idx: Number) => {
          const type = e.parents_id ? 'SUB' : 'MAIN';
          return (
            <Todo
              key={idx + ''}
              type={type}
              contents={e.contents}
              status={e.status}
            />
          );
        })}
        <div className={styles.AddTodo}>
          <img src={AddIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
