import React from 'react';
import { DateTime } from 'luxon';

import styles from './NearDate.module.scss';

interface NearDateProps {
  datetime: DateTime;
  title?: string;
}

const NearDate = ({ datetime, title = ' ' }: NearDateProps) => {
  return (
    <div className={styles.NearDate}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>
        {datetime.month}/{datetime.day}
      </div>
    </div>
  );
};

export default NearDate;
