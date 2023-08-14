export interface SignUpProps {
  email: string;
  full_name: string;
  password: string;
  confirmPassword: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface userInfo {
  isLogin: boolean;
  email: string;
  full_name: string | null;
}
