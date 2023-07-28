import React from 'react';
import styles from './Login.module.scss';
import keyboardIcon from '../../assets/icons/LoginKeyboard.svg';
import userIcon from '../../assets/icons/LoginUser.svg';

const Login = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.LoginLayout}>
        <div className={styles.LoginTitle}>Today list</div>
        <div className={styles.LoginFormLayout}>
          <div className={styles.LoginForm}>
            <div className={styles.LoginInputLayout}>
              <div className={styles.LoginInput}>
                <img src={userIcon} alt="" />
                <input type="text" />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyboardIcon} alt="" />
                {/* 눈모양 추가 */}
                <input type="password" />
              </div>
            </div>
            <div className={styles.LoginButtons}>
              <button className={styles.SiteLogin}>로그인</button>
              <button className={styles.GtHubLogin}>
                깃허브 계정으로 로그인하기
              </button>
            </div>
          </div>
        </div>
        <button className={styles.SignInButton}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
