import React, { useState, useEffect } from 'react';

import { DateTime } from 'luxon';
import Todo from './Todo';
import styles from './TodoList.module.scss';
import { fetchTodoList } from '../../services/apiService/apiService';
import AddIcon from '../../assets/icons/Add.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoDataAllState } from '../../recoil/selectors/todoDataSelector'; // import your atom and selector
import { TodoDataState } from '../../recoil/atoms/todoDataState';

import { TodoItem } from '../../types/TodoList';

const TodoList = () => {
  const rawTodoData = fetchTodoList(); // API 불러오기
  // const [todoLists, setTodoLists] = useState(rawTodoData); //

  const [todoData, setTodoData] = useRecoilState(todoDataAllState);
  const todoDataState = useRecoilValue(TodoDataState);

  // useEffect(() => {
  //   localStorage.setItem('todoData', JSON.stringify(todoDataState));
  //   console.log('todoDataState', todoDataState);
  // }, [todoDataState]);

  useEffect(() => {
    const storageData = localStorage.getItem('todoData');
    // 로컬 스토리지에 값이 없는 경우 API에서 불러옴
    if (!storageData || storageData.length === 0) {
      setTodoData(rawTodoData);
      localStorage.setItem('todoData', JSON.stringify(rawTodoData));
    }
    // 로컬 스토리지에 값이 있는 경우 불러옴
    else {
      setTodoData(JSON.parse(storageData));
    }
  }, []);

  const addMainTodoClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const newTodo: TodoItem = {
      id: todoData.length + 1,
      user_id: null,
      parents_id: null,
      contents: '',
      status: 'TODO',
      order: todoData.length + 1,
      createdAt: DateTime.now().toString(),
      updatedAt: DateTime.now().toString(),
    };
    let newTodoData = [...todoData];
    newTodoData.push(newTodo);
    setTodoData(newTodoData);
  };

  return (
    <div className={styles.Layout}>
      <div className={styles.TodoList}>
        {todoDataState.map((e: TodoItem, idx: number) => {
          const type = e.parents_id ? 'SUB' : 'MAIN';
          return (
            <Todo
              key={idx}
              idx={idx}
              type={type}
              contents={e.contents}
              status={e.status}
            />
          );
        })}
        <div className={styles.AddTodo} onClick={addMainTodoClickHandler}>
          <img src={AddIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
