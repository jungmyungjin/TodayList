import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';
import keyboardIcon from '../../assets/icons/LoginKeyboard.svg';
import userIcon from '../../assets/icons/LoginUser.svg';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpReason, setSignUpReason] = useState('');

  const onClickGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.Layout}>
      <div className={styles.LoginLayout}>
        <div className={styles.LoginTitle}>회원가입</div>
        <div className={styles.LoginFormLayout}>
          {signUpReason === '' ? (
            ''
          ) : (
            <span className={styles.SignUpErrorReason}>{signUpReason}</span>
          )}
          <div className={styles.LoginForm}>
            <div className={styles.LoginInputLayout}>
              <div className={styles.LoginInput}>
                <img src={userIcon} alt="" />
                <input type="text" placeholder="이메일" autoFocus />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyboardIcon} alt="" />
                {/* 눈모양 추가 */}
                <input type="password" placeholder="비밀번호" />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyboardIcon} alt="" />
                {/* 눈모양 추가 */}
                <input type="password" placeholder="비밀번호 확인" />
              </div>
            </div>
            <div className={styles.RouteButtons}>
              <button onClick={onClickGoBack} className={styles.SiteLogin}>
                이전
              </button>
              <button className={styles.GtHubLogin}>가입하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
