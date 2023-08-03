import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import PenIcon from 'assets/icons/Pen.svg';
import UserIcon from 'assets/icons/User.svg';
import LogoutIcon from 'assets/icons/Logout.svg';
import { fetchUserInfo, fetchLogout } from 'services/apiService/apiService';

const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // 즉시 실행 함수를 이용한 비동기 작업 수행
    (async () => {
      try {
        const userData = await fetchUserInfo();
        setUserName(userData.full_name);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const onClickLogout = () => {
    fetchLogout();
    window.location.replace(`${process.env.REACT_APP_BASE_ROUTE}`);
  };

  return (
    <div className={styles.LayoutHeader}>
      <Link
        to={`${process.env.REACT_APP_BASE_ROUTE}`}
        className={styles.LayoutLogo}
      >
        <img className={styles.LogoIcon} src={PenIcon} alt="" />
        <div className={`${styles.LogoText} ${styles.Text}`}>Today list</div>
      </Link>
      {userName && (
        <Link
          to={`${process.env.REACT_APP_BASE_ROUTE}`}
          className={styles.LayoutLogin}
        >
          <div className={styles.LoginText}>hello, {userName}</div>
          <img
            className={styles.LoginIcon}
            src={LogoutIcon}
            alt="logout"
            onClick={onClickLogout}
          />
        </Link>
      )}
      {!userName && (
        <Link
          to={`${process.env.REACT_APP_BASE_ROUTE}/signIn`}
          className={styles.LayoutLogin}
        >
          <div className={styles.LoginText}>로그인</div>
          <img className={styles.LoginIcon} src={UserIcon} alt="login" />
        </Link>
      )}
    </div>
  );
};

export default Header;
