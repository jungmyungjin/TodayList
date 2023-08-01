import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import keyboardIcon from 'assets/icons/LoginKeyboard.svg';
import userIcon from 'assets/icons/LoginUser.svg';
import { fetchLogin } from 'services/apiService/apiService';
import { LoginProps } from 'types/Auth';

const Login = () => {
  const navigate = useNavigate();
  const [loginErrorReason, setLoginErrorReason] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data: any = await fetchLogin({ email, password } as LoginProps);
      console.log('로그인 완료', data);
      navigate('/');
    } catch (error: any) {
      const [message, detail] = [
        error.response.data?.message,
        error.response.data?.detail,
      ];

      if (message === 'SignIn denied')
        setLoginErrorReason('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };
  return (
    <div className={styles.Layout}>
      <div className={styles.LoginLayout}>
        <Link to="/" className={styles.LoginTitle}>
          Today list
        </Link>
        <div className={styles.LoginFormLayout}>
          <form onSubmit={handleSubmitLogin} className={styles.LoginForm}>
            <div className={styles.LoginInputLayout}>
              {loginErrorReason === '' ? (
                ''
              ) : (
                <span
                  key={loginErrorReason}
                  className={styles.LoginErrorReason}
                >
                  {loginErrorReason}
                </span>
              )}
              <div className={styles.LoginInput}>
                <img src={userIcon} alt="" />
                <input
                  type="text"
                  placeholder="이메일"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyboardIcon} alt="" />
                {/* 눈모양 추가 */}
                <input
                  type="password"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
          </form>
        </div>
        <Link to="/SignUp" className={styles.SignInButton}>
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
