import React, { useState } from 'react';
import {Link} from "react-router-dom";

import ModalIcon from './ModalIcon';

function Register(){
    
    const [ModalActive,setModalActive] = useState(true)

    return(
        <div className='container'>
            <body className='container_body'>
                <div className='container_body_div_img'>
                    <img className='container_body_img' src='/img/sign.svg'></img>
                </div>
                <form action='' className='container_form'>
                    <input className='container_form_input' id='name' placeholder='Имя' type='text' required></input>
                    <input className='container_form_input' id='surname' placeholder='Фамилия' type='text' required></input>
                    <input className='container_form_input' id='email' placeholder='Эл. почта' type='email' required></input>
                    <div className='container_form_div_btn'>
                        <button className='container_form_btn' type='submit'>Регистрация</button>
                    </div>
                </form>
                <div className='container_body_footer'>
                    <p className='container_footer_p'>Уже есть аккаунт?</p>
                    <Link className="container_footer_a" to='/'>Login</Link>
                </div>
            </body>
            <ModalIcon active={ModalActive} setActive={setModalActive}/>
        </div>
    );
} 
export default Register;