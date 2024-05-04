import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Register from './pagesRegister';
import Login from './pagesLogin';
import './index.scss';
import './logReg.scss';

import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Login/>  
      {/*<Register/>*/} 
      {/*<App/>*/ } 
  </React.StrictMode>,
);