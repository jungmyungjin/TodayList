import { validateEmail, validatePassword } from 'utils/validateCredentials';

/**
 * 회원 가입, 유효성 검증 후 에러메세지 반환
 * @param email
 * @param password
 * @param confirmPassword
 * @returns string
 */
export const validateSinUp = (
  email: string,
  password: string,
  confirmPassword: string
): string => {
  if (!validateEmail(email)) {
    return '이메일 형식이 맞지 않습니다.';
  }
  if (!validatePassword(password)) {
    return '패스워드 형식이 맞지 않습니다.';
  }
  if (password !== confirmPassword) {
    return '비밀번호가 일치하지 않습니다.';
  }
  if (email === '이메일 존재하는지 확인') {
    return '이미 사용중인 이메일 입니다.';
  }
  return '';
};
