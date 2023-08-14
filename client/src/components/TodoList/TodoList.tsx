import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

import Todo from './Todo';
import styles from './TodoList.module.scss';
import { fetchTaskList, fetchTaskSave } from 'services/apiService/apiService';

import { useRecoilState, useRecoilValue } from 'recoil';
import { todoDataAllSelector } from 'recoil/selectors/todoDataSelector'; // import your atom and selector
import { userInfoSelector } from 'recoil/selectors/userInfoSelector'; // import your atom and selector
import { TodoDataState } from 'recoil/atoms/todoDataState';
import { UserInfoState } from 'recoil/atoms/userInfoState';
import { TodoDateState } from 'recoil/atoms/todoDateState';

import { TodoItem } from 'types/TodoList';
import AddIcon from 'assets/icons/Add.svg';
import SaveIcon from 'assets/icons/Save.svg';

const TodoList = () => {
  // const [todoLists, setTodoLists] = useState(rawTodoData); //
  const [userInfo, setUserInfo] = useRecoilState(userInfoSelector);

  const [todoData, setTodoData] = useRecoilState(todoDataAllSelector);
  const todoDataState = useRecoilValue(TodoDataState);
  const userInfoState = useRecoilValue(UserInfoState);
  const todoDateState = useRecoilValue(TodoDateState);

  // useEffect(() => {
  //   localStorage.setItem('todoData', JSON.stringify(todoDataState));
  //   console.log('todoDataState', todoDataState);
  // }, [todoDataState]);

  useEffect(() => {
    const fetchData = async () => {
      const storageData = localStorage.getItem('todoData');

      if (userInfo.isLogin) {
        const rawTodoData = await fetchTaskList(todoDateState);
        setTodoData(rawTodoData);
      } else if (storageData) {
        setTodoData(JSON.parse(storageData));
      }
    };

    fetchData();
  }, [userInfoState, todoDateState]);

  const addMainTodoClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const newTodo: TodoItem = {
      todo_id: uuidv4(),
      user_id: userInfo.user_id,
      parents_id: null,
      contents: '',
      status: 'TODO',
      date: todoDateState.toFormat('yyyy-MM-dd'),
      createdAt: DateTime.now().toString(),
      updatedAt: DateTime.now().toString(),
    };
    let newTodoData = [...todoData];
    newTodoData.push(newTodo);
    setTodoData(newTodoData);
  };

  const saveTodoClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const data = localStorage.getItem('todoData') || '';
    fetchTaskSave(JSON.parse(data), todoDateState);
  };

  return (
    <div className={styles.Layout}>
      {userInfo.isLogin && (
        <div className={styles.SaveTodo}>
          <button onClick={saveTodoClickHandler}>
            <img src={SaveIcon} alt="save" />
          </button>
        </div>
      )}
      <div className={styles.Line}></div>
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
          <img src={AddIcon} alt="add todo" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
