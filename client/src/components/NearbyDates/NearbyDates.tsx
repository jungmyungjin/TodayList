import { DateTime } from 'luxon';

import styles from './NearbyDates.module.scss';
import NearDate from './NearDate';

const ThisWeekDates = () => {
  const todayDateTime = DateTime.now();

  const nearbyDateTimes = [
    todayDateTime.minus({ days: 2 }),
    todayDateTime.minus({ days: 1 }),
    todayDateTime,
    todayDateTime.plus({ days: 1 }),
    todayDateTime.plus({ days: 2 }),
  ];

  // 1. 현재 날짜 받아옴
  // 2. 현재 날짜 -2일, +2일 불러옴
  // 3. dates에 날짜들을 입력

  // 날짜들을 선택할 수 있게 함

  const centerIdx = Math.ceil(nearbyDateTimes.length / 2) - 1;
  return (
    <div className={styles.Layout}>
      <div className={styles.DatesLayoutSection}>
        <div className={styles.NearbyDatesLayout}>
          {nearbyDateTimes.map((item, idx: number) => {
            return (
              <NearDate
                key={idx}
                datetime={item}
                title={idx === centerIdx ? 'today' : ' '}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThisWeekDates;
