import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Register from './pages/Register';
import Login from './pages/Login';
import Personal_account from './pages/Personal_account';
import NotFoundPage from './pages/NotFoundPage';
import './index.scss';
import './logReg.scss';
import '/ErrorPage.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/Register',
    element: <Register/>
  },
  {
    path: '/App',
    element: <App/>
  },
  {
    path: '/Personal_account',
    element: <Personal_account/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
      {/*<Login/>*/} 
      {/*<Register/>*/} 
      {/*<App/>*/ } 
  </React.StrictMode>,
);