import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginRegister from './LoginRegister';
import './index.scss';
import './logReg.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LoginRegister/>
    {/*<App/>*/ } 
  </React.StrictMode>,
);


