import React from 'react';
import styles from './Header.module.scss';
import PenIcon from '../../assets/icons/Pen.svg';

import UserIcon from '../../assets/icons/User.svg';

const Header = () => {
  return (
    <div className={styles.LayoutHeader}>
      <div className={styles.LayoutLogo}>
        <img className={styles.LogoIcon} src={PenIcon} alt="" />
        <div className={`${styles.LogoText} ${styles.Text}`}>Today list</div>
      </div>
      <div className={styles.LayoutLogin}>
        <div className={styles.LoginText}>로그인</div>
        <img className={styles.LoginIcon} src={UserIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
