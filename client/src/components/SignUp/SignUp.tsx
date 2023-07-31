import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';
import keyboardIcon from 'assets/icons/LoginKeyboard.svg';
import userIcon from 'assets/icons/LoginUser.svg';
import emailIcon from 'assets/icons/Email.svg';
import keyIcon from 'assets/icons/Key.svg';
import { validateSinUp } from 'services/authService.ts/signUpService';
import { SignUpProps } from 'types/SignUp';
import { fetchSignUp } from 'services/apiService/apiService';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpErrorReason, setSignUpErrorReason] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onClickGoBack = () => {
    navigate(-1);
  };

  const handleSubmitSignUp = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const validateErrorReason = validateSinUp({
      email,
      password,
      confirmPassword,
    } as SignUpProps);

    if (validateErrorReason === '') {
      navigate('/');
      console.log('회원 가입 완료');
      fetchSignUp({
        email,
        password,
        confirmPassword,
      } as SignUpProps);
    } else {
      setSignUpErrorReason(validateErrorReason);
    }
  };

  return (
    <div className={styles.Layout}>
      <div className={styles.LoginLayout}>
        <div className={styles.LoginTitle}>회원가입</div>
        <div className={styles.LoginFormLayout}>
          {signUpErrorReason === '' ? (
            ''
          ) : (
            <span key={signUpErrorReason} className={styles.SignUpErrorReason}>
              {signUpErrorReason}
            </span>
          )}
          <form onSubmit={handleSubmitSignUp} className={styles.LoginForm}>
            <div className={styles.LoginInputLayout}>
              <div className={styles.LoginInput}>
                <img src={emailIcon} alt="" />
                <input
                  id="email"
                  type="text"
                  placeholder="이메일"
                  autoFocus
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.LoginInput}>
                <img src={userIcon} alt="" />
                <input
                  id="full_name"
                  type="text"
                  placeholder="이름"
                  autoFocus
                  value={fullName}
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyIcon} alt="" />
                <input
                  id="password"
                  type="password"
                  placeholder="문자, 숫자, 특수문자 포함 8자 이상"
                  value={password}
                  required
                  title="비밀번호 문자, 숫자, 특수문자 포함 8자 이상"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.LoginInput}>
                <img src={keyboardIcon} alt="" />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.RouteButtons}>
              <button
                type="button"
                onClick={onClickGoBack}
                className={styles.SiteLogin}
              >
                이전
              </button>
              <button type="submit" className={styles.SignUpLogin}>
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
