import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

const baseRoute = process.env.REACT_APP_BASE_ROUTE;

const routes = createBrowserRouter([
  {
    path: `${baseRoute}/`,
    element: <MainPage />,
  },
  {
    path: `${baseRoute}/signIn`,
    element: <LoginPage />,
  },
  {
    path: `${baseRoute}/signUp`,
    element: <SignUpPage />,
  },
]);

export default routes;
