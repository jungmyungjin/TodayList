import React from 'react';
import Main from '../../pages/Main/Main';
import styles from './Todo.module.scss';
import AddIcon from '../../assets/icons/Add.svg';
import CancelIcon from '../../assets/icons/Cancel.svg';
import CheckIcon from '../../assets/icons/Check.svg';

interface TodoProps {
  content: string;
  type?: 'main' | 'sub';
  status?: 'TODO' | 'CHECKED';
}

// TODO : svg 아이콘에 색상을 변경하려고 할때, 하드코딩 안하도록 변수로 입력 받도록 수정
const Todo = ({ content, type = 'main', status = 'TODO' }: TodoProps) => {
  return (
    <div
      className={`${styles.Layout} ${
        type === 'main' ? styles.MainLayout : styles.SubTodoLayout
      } ${status === 'TODO' ? '' : styles.Checked}`}
    >
      <div className={`${styles.Todo}`}>
        <div className={`${styles.CheckLayout}`}>
          <div className={`${styles.Check}`}></div>
          <img src={CheckIcon} alt="checked" />
        </div>
        <div className={styles.Contents}>{content}</div>
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
