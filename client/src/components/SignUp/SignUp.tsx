import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';
import keyboardIcon from 'assets/icons/LoginKeyboard.svg';
import userIcon from 'assets/icons/LoginUser.svg';
import emailIcon from 'assets/icons/Email.svg';
import keyIcon from 'assets/icons/Key.svg';
import { validateSinUp } from 'services/authService.ts/signUpService';
import { SignUpProps } from 'types/Auth';
import { fetchSignUp } from 'services/apiService/apiService';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpErrorReason, setSignUpErrorReason] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [animationKey, setAnimationKey] = useState(0);

  const onClickGoBack = () => {
    navigate(-1);
  };

  const handleSubmitSignUp = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setAnimationKey(animationKey + 1);

    const validateErrorReason = validateSinUp({
      email,
      full_name: fullName,
      password,
      confirmPassword,
    } as SignUpProps);

    try {
      if (validateErrorReason === '') {
        const response = await fetchSignUp({
          email,
          full_name: fullName,
          password,
          confirmPassword,
        } as SignUpProps);

        navigate('/');
      } else {
        setSignUpErrorReason(validateErrorReason);
      }
    } catch (error: any) {
      const [message, detail] = [
        error.response.data?.message,
        error.response.data?.detail,
      ];
      if (detail === 'Already Signed Up Email')
        setSignUpErrorReason('이미 가입된 이메일입니다.');
      if (message === 'Password validation failed')
        setSignUpErrorReason(
          '비밀번호는 문자, 숫자, 특수문자 포함 8자 이상이여야 합니다. '
        );
      if (detail === 'Required data is empty"')
        setSignUpErrorReason('비어있는 입력 필드가 있습니다.');
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
            <span key={animationKey} className={styles.SignUpErrorReason}>
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
              <button type="submit" className={styles.SignUpLogin}>
                가입하기
              </button>
              <button
                type="button"
                onClick={onClickGoBack}
                className={styles.SiteBack}
              >
                이전
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
