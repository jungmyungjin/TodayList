import axios from 'axios';
import { DateTime } from 'luxon';

// 목업 데이터 =============================================================================
import { TodoItem } from 'types/TodoList';
import { SignUpProps, LoginProps } from 'types/Auth';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}/api`,
  timeout: 1000,
  withCredentials: true,
});

export async function fetchLogin(props: LoginProps) {
  try {
    const response = await apiClient.post<{ data: { token: string } }>(
      '/auth/login',
      { ...props }
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

/// Task

export async function fetchTaskSave(todoData: TodoItem[], date: DateTime) {
  try {
    const datesToFilter = date.toFormat('yyyy-MM-dd') || '';
    const response = await apiClient.post(
      `/task?date=${datesToFilter}`,
      todoData
    );
    return response;
  } catch (error: any) {
    console.log('Logout Error', error);
    throw error;
  }
}

// export async function fetchTaskList({ datetime }: fetchTaskListProps) {
export async function fetchTaskList(date: DateTime) {
  try {
    const datesToFilter = date.toFormat('yyyy-MM-dd') || '';
    const response = await apiClient.get(`/task?date=${datesToFilter}`);
    const taskList = await response?.data;
    // console.log(taskList);
    return taskList;
  } catch (error) {
    throw error;
  }
}
