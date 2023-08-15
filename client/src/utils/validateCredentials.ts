/**
 * 이메일 유효성 검증 함수
 * @param email
 * @returns boolean
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

/**
 * 패스워드 유효성 검증 함수 : 문자, 숫자, 특수문자 포함 8자 이상
 * @param password
 * @returns boolean
 */
export function validatePassword(password: string): boolean {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}
