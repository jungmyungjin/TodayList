import React from 'react';
import { DateTime } from 'luxon';
import { useRecoilState } from 'recoil';
import { todoDateSelector } from 'recoil/selectors/todoDateSelector';

import styles from './NearDate.module.scss';

interface NearDateProps {
  datetime: DateTime;
  title?: string;
}

const NearDate = ({ datetime, title = ' ' }: NearDateProps) => {
  const [selectDate, setSelectDate] = useRecoilState(todoDateSelector);

  const dateClickHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    setSelectDate(datetime);
  };

  return (
    <div
      className={
        selectDate === datetime
          ? `${styles.NearDate} ${styles.SelectedDate}`
          : styles.NearDate
      }
      onClick={dateClickHandle}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        {datetime.month}/{datetime.day}
      </div>
    </div>
  );
};

export default NearDate;
