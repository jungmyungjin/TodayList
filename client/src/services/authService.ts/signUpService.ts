import { validateEmail, validatePassword } from 'utils/validateCredentials';
import { SignUpProps } from 'types/SignUp';

/**
 *
 * @param props {email, password, confirmPassword}
 * @returns string
 */
export const validateSinUp = (props: SignUpProps): string => {
  if (!validateEmail(props.email)) {
    return '이메일 형식이 맞지 않습니다.';
  }
  if (!validatePassword(props.password)) {
    return '패스워드 형식이 맞지 않습니다.';
  }
  if (props.password !== props.confirmPassword) {
    return '비밀번호가 일치하지 않습니다.';
  }
  if (props.email === '이메일 존재하는지 확인') {
    return '이미 사용중인 이메일 입니다.';
  }
  return '';
};
