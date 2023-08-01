import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import PenIcon from 'assets/icons/Pen.svg';
import UserIcon from 'assets/icons/User.svg';
import LogoutIcon from 'assets/icons/Logout.svg';
import { fetchUserInfo } from 'services/apiService/apiService';

const Header = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    // 즉시 실행 함수를 이용한 비동기 작업 수행
    (async () => {
      try {
        const userData = await fetchUserInfo();
        setUserName(userData.full_name);
        console.log('userData', userData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.LayoutHeader}>
      <Link to="/" className={styles.LayoutLogo}>
        <img className={styles.LogoIcon} src={PenIcon} alt="" />
        <div className={`${styles.LogoText} ${styles.Text}`}>Today list</div>
      </Link>
      {userName && (
        <Link to="/" className={styles.LayoutLogin}>
          <div className={styles.LoginText}>hello, {userName}</div>
          <img className={styles.LoginIcon} src={LogoutIcon} alt="login" />
        </Link>
      )}
      {!userName && (
        <Link to="/signIn" className={styles.LayoutLogin}>
          <div className={styles.LoginText}>로그인</div>
          <img className={styles.LoginIcon} src={UserIcon} alt="login" />
        </Link>
      )}
    </div>
  );
};

export default Header;
