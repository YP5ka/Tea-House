import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './Register';
import './index.scss';
import './logReg.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Register/>
    {/*<App/>*/ } 
  </React.StrictMode>,
);


