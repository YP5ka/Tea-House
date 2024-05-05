import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Register from './pages/Register';
import Login from './pages/Login';
import './index.scss';
import './logReg.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <Login/>,
    children: [
      {
        path: '/',
        element: <Register/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      {/*<Login/>*/}
      {/*<Register/>*/} 
      {/*<App/>*/ } 
  </React.StrictMode>,
);