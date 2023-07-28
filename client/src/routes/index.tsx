import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main/MainPage';
import LoginPage from '../pages/Main/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
