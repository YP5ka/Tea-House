import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import loginRegister from '.loginRegister';
import './index.scss';
import './logReg.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*<App/>*/ } 
   <loginRegister/>
  </React.StrictMode>,
);


