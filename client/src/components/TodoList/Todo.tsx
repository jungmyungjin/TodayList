import React, { useState } from 'react';
import Main from '../../pages/Main/Main';
import styles from './Todo.module.scss';
import AddIcon from '../../assets/icons/Add.svg';
import CancelIcon from '../../assets/icons/Cancel.svg';
import CheckIcon from '../../assets/icons/Check.svg';

interface TodoProps {
  contents: string;
  type?: 'MAIN' | 'SUB';
  status?: 'TODO' | 'CHECKED';
}

// TODO : svg 아이콘에 색상을 변경하려고 할때, 하드코딩 안하도록 변수로 입력 받도록 수정
const Todo = ({ contents = '', type = 'MAIN', status = 'TODO' }: TodoProps) => {
  const [checked, setChecked] = useState(status);
  const [todoContents, setTodoContents] = useState(contents);

  const checkClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setChecked(checked === 'TODO' ? 'CHECKED' : 'TODO');
  };

  const contentsChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodoContents(event.target.value);
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
        <div className={styles.AddIcon}>
          <img src={AddIcon} alt="" />
        </div>
      </div>
      <div className={styles.DeleteIcon}>
        <img src={CancelIcon} alt="" />
      </div>
    </div>
  );
};

export default Todo;
