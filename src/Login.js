import React from 'react';
function Login(){
    
    return(
        <div className='container'>
            <body className='container_body'>
                <div className='container_body_div_img'>
                    <img className='container_body_img' src='/img/sign.svg'></img>
                </div>
                <form action='' className='container_form'>
                    <input className='container_form_input' id='email' placeholder='Эл. почта' type='email' required></input>
                    <div className='container_form_div_btn'>
                        <button className='container_form_btn' type='submit'>Вход</button>
                    </div>
                </form>
                <div className='container_body_footer'>
                    <p className='container_footer_p'>Ещё нет аккаунта ?</p>
                    <a className='container_footer_a' href=''>Регистрация</a>
                </div>
                
            </body>
        </div>
    );
} 
export default Login;