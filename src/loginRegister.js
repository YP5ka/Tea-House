import React from 'react';

function LoginRegister(){
    
    return(
        <div className='container'>
            <body className='container_body'>
                <img src='/img/sign.svg'></img>
                <form action='' className='container_form'>
                    <input className='container_form_input' id='name' placeholder='имя' type='text' required></input>
                    <input className='container_form_input' id='surname' placeholder='фамилия' type='text' required></input>
                    <input className='container_form_input' id='email' placeholder='эл. почта' type='text' required></input>
                    <button className='container_form_btn' type='submit'>Регистрация</button>
                </form>
            </body>
            <footer className='container_footer'>
                <p className='container_footer_p'>Уже есть аккаунт?</p>
                <a className='container_footer_a' href=''>Вход</a>
            </footer>
        </div>
    );
} 
export default LoginRegister;