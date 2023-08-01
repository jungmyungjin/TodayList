import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import PenIcon from 'assets/icons/Pen.svg';

import UserIcon from 'assets/icons/User.svg';

const Header = () => {
  return (
    <div className={styles.LayoutHeader}>
      <Link to="/" className={styles.LayoutLogo}>
        <img className={styles.LogoIcon} src={PenIcon} alt="" />
        <div className={`${styles.LogoText} ${styles.Text}`}>Today list</div>
      </Link>
      <Link to="/signIn" className={styles.LayoutLogin}>
        <div className={styles.LoginText}>로그인</div>
        <img className={styles.LoginIcon} src={UserIcon} alt="" />
      </Link>
    </div>
  );
};

export default Header;
