import axios from 'axios';

// 목업 데이터 =============================================================================
import { TodoItem } from 'types/TodoList';
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
});

export function fetchTodoList() {
  // return apiClient.get('/task');
  return Mockup;
}

export async function fetchLogin() {
  try {
    const response = await apiClient.get('/login');
    return response.data;
  } catch (error) {
    console.log('Failed to login', error);
    throw error;
  }
}
