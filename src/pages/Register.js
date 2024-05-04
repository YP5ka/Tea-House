import React from 'react';
function Register(){
    
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
                    <a className='container_footer_a' href=''>Вход</a>
                </div>
                
            </body>
        </div>
    );
} 
export default Register;