import axios from 'axios';

// 목업 데이터 =============================================================================
import { TodoItem } from 'types/TodoList';
import { SignUpProps, LoginProps } from 'types/Auth';

const Mockup: TodoItem[] = [
  {
    id: 1,
    user_id: 1,
    parents_id: null,
    contents: '백엔드 마무리',
    status: 'TODO',
    order: 1,
    createdAt: '2023-07-05T00:00:00.000Z',
    updatedAt: '2023-07-05T00:00:00.000Z',
  },
  {
    id: 2,
    user_id: 1,
    parents_id: null,
    contents: '일찍 일어나기',
    status: 'CHECKED',
    order: 2,
    createdAt: '2023-07-21T08:07:25.000Z',
    updatedAt: '2023-07-21T08:07:25.000Z',
  },
  {
    id: 3,
    user_id: 1,
    parents_id: null,
    contents: '일찍 일어나기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:09:30.000Z',
    updatedAt: '2023-07-21T08:09:30.000Z',
  },
  {
    id: 4,
    user_id: 1,
    parents_id: 3,
    contents: '일찍 자기',
    status: 'TODO',
    order: 2,
    createdAt: '2023-07-21T08:09:49.000Z',
    updatedAt: '2023-07-21T08:09:49.000Z',
  },
  {
    id: 4,
    user_id: 1,
    parents_id: 3,
    contents: ' 전날 일찍 저녁 먹기',
    status: 'CHECKED',
    order: 2,
    createdAt: '2023-07-21T08:09:49.000Z',
    updatedAt: '2023-07-21T08:09:49.000Z',
  },
];
// ====================================================================================

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}/api`,
  timeout: 1000,
  withCredentials: true,
});

export function fetchTodoList() {
  // return apiClient.get('/task');
  return Mockup;
}

export async function fetchLogin(props: LoginProps) {
  try {
    const response = await apiClient.post<{ data: { token: string } }>(
      '/auth/login',
      { ...props, type: 'standard' }
    );
    return response;
  } catch (error: any) {
    console.log('Failed to login', error);
    throw error;
  }
}

export async function fetchLogout() {
  try {
    const response = await apiClient.delete('/auth/logout');
    return response;
  } catch (error: any) {
    console.log('Logout Error', error);
    throw error;
  }
}

export async function fetchSignUp(props: SignUpProps) {
  try {
    const response = await apiClient.post('/auth/join', props);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function fetchUserInfo() {
  try {
    const response = await apiClient.get('/auth/user');
    const userInfo = await response?.data;
    return userInfo;
  } catch (error) {
    throw error;
  }
}

export function fetchLoginKakao(): string {
  const redirectUri = `${process.env.REACT_APP_API_ADDRESS}/api/auth/kakao`;
  const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

  return kakaoURL;
}
