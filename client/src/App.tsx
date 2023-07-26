import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import router from './routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <React.StrictMode>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </React.StrictMode>
    </div>
  );
}

export default App;
