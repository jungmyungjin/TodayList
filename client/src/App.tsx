import React, { lazy, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import routes from './routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <React.StrictMode>
        <RecoilRoot>
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={routes} />
          </Suspense>
        </RecoilRoot>
      </React.StrictMode>
    </div>
  );
}

export default App;
