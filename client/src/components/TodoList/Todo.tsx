import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Main from 'pages/MainPage';
import styles from './Todo.module.scss';
import AddIcon from 'assets/icons/Add.svg';
import CancelIcon from 'assets/icons/Cancel.svg';
import CheckIcon from 'assets/icons/Check.svg';
import { DateTime } from 'luxon';

import { TodoItem, TodoProps } from 'types/TodoList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoDataState } from 'recoil/atoms/todoDataState';
import { TodoDateState } from 'recoil/atoms/todoDateState';

import { todoDataAllSelector } from 'recoil/selectors/todoDataSelector'; // import your atom and selector
import { todoDataOneSelector } from 'recoil/selectors/todoDataSelector';

// TODO : svg 아이콘에 색상을 변경하려고 할때, 하드코딩 안하도록 변수로 입력 받도록 수정
const Todo = ({
  contents = '',
  type = 'MAIN',
  status = 'TODO',
  idx,
}: TodoProps) => {
  const [checked, setChecked] = useState(status);
  const [todoContents, setTodoContents] = useState(contents);

  const todoDataState = useRecoilValue(TodoDataState);
  const todoDateState = useRecoilValue(TodoDateState);
  const [todoAll, setTodoAll] = useRecoilState(todoDataAllSelector);
  const [todoOne, setTodoOne] = useRecoilState(todoDataOneSelector(idx));

  useEffect(() => {
    setTodoContents(contents);
    setChecked(status);
    localStorage.setItem('todoData', JSON.stringify(todoDataState));
  }, [todoDataState]);

  const checkClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    // 실시간 : check 상태 변경
    const toChangeStatus = checked === 'TODO' ? 'CHECKED' : 'TODO';
    setChecked(toChangeStatus);

    // atom 에 반영 : 로컬스토리지 저장
    setTodoOne((prev) => {
      return { ...prev, status: toChangeStatus };
    });
  };

  const contentsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // check 상태 변경
    setTodoContents(event.target.value);

    setTodoOne((prev) => {
      return { ...prev, contents: event.target.value };
    });
  };

  const addSubTodoClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    let newTodo: TodoItem = {
      todo_id: uuidv4(),
      user_email: todoOne.user_email,
      parents_id: todoOne.todo_id,
      contents: '',
      status: 'TODO',
      date: todoDateState.toFormat('yyyy-MM-dd'),
      createdAt: DateTime.now().toString(),
      updatedAt: DateTime.now().toString(),
    };
    // atom 에 반영 : 로컬스토리지 저장
    const newTodoData = [
      ...todoAll.slice(0, idx + 1),
      newTodo,
      ...todoAll.slice(idx + 1),
    ];
    setTodoAll(newTodoData);
  };

  const deleteTodoClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const newTodoData = [...todoAll.slice(0, idx), ...todoAll.slice(idx + 1)];
    setTodoAll(newTodoData);
  };

  return (
    <div
      className={`${styles.Layout} ${
        type === 'MAIN' ? styles.MainLayout : styles.SubTodoLayout
      } ${checked === 'TODO' ? '' : styles.Checked}`}
    >
      <div className={`${styles.Todo}`}>
        <div className={`${styles.CheckLayout}`} onClick={checkClickHandler}>
          <div className={`${styles.Check}`}></div>
          <img src={CheckIcon} alt="checked" />
        </div>
        <input
          value={todoContents}
          className={styles.Contents}
          onChange={contentsChangeHandler}
        />
        <div className={styles.AddIcon} onClick={addSubTodoClickHandler}>
          <img src={AddIcon} alt="" />
        </div>
      </div>
      <div className={styles.DeleteIcon} onClick={deleteTodoClickHandler}>
        <img src={CancelIcon} alt="" />
      </div>
    </div>
  );
};

export default Todo;
