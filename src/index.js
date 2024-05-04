import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './Register';
import Login from './Login';
import './index.scss';
import './logReg.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </Router>
    {/*<Login/>*/}
    {/*<Register/>*/} 
    {/*<App/>*/ } 
  </React.StrictMode>,
);


