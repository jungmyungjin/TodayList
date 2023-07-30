import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import keyboardIcon from '../../assets/icons/LoginKeyboard.svg';
import userIcon from '../../assets/icons/LoginUser.svg';

const Login = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.LoginLayout}>
        <Link to="/login" className={styles.LoginTitle}>
          Today list
        </Link>
        <form className={styles.LoginFormLayout}>
          <div className={styles.LoginForm}>
            <div className={styles.LoginInputLayout}>
              <div className={styles.LoginInput}>
                <img src={userIcon} alt="" />
                <input type="text" placeholder="로그인 계정" autoFocus />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyboardIcon} alt="" />
                {/* 눈모양 추가 */}
                <input type="password" placeholder="비밀번호 확인" />
              </div>
            </div>
            <div className={styles.RouteButtons}>
              <button type="submit" className={styles.SiteLogin}>
                로그인
              </button>
              <button type="button" className={styles.GtHubLogin}>
                깃허브 계정으로 로그인하기
              </button>
            </div>
          </div>
        </form>
        <Link to="/SignUp" className={styles.SignInButton}>
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
