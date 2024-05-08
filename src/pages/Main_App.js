import { queryByTestId } from '@testing-library/react';
import React from 'react';

function Main_App(){
    function HandleClick_Main_App_leftColumn_gestureToText()
    {
        let temp = document.querySelector('.Main_App_leftColumn_gestureToText');
        console.log(temp);
        temp.classList.add('color');
        temp = document.querySelector('#hand');
        temp.src='/img/hand color.svg'

        temp = document.querySelector('.Main_App_leftColumn_textToGesture');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_favorites');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_articles');
        temp.classList.remove('color');

        temp = document.querySelector('#A');
        temp.src='/img/A normal.svg'
        temp = document.querySelector('#like');
        temp.src='/img/like normal.svg'
        temp = document.querySelector('#news');
        temp.src='/img/news normal.svg'
        return;
    }
    function HandleClick_Main_App_leftColumn_textToGesture()
    {
        let temp = document.querySelector('.Main_App_leftColumn_textToGesture');
        console.log(temp);
        temp.classList.add('color');
        temp = document.querySelector('#A');
        temp.src='/img/A color.svg'

        temp = document.querySelector('.Main_App_leftColumn_gestureToText');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_favorites');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_articles');
        temp.classList.remove('color');

        temp = document.querySelector('#hand');
        temp.src='/img/hand normal.svg'
        temp = document.querySelector('#like');
        temp.src='/img/like normal.svg'
        temp = document.querySelector('#news');
        temp.src='/img/news normal.svg'
        return;
    }
    function HandleClick_Main_App_leftColumn_favorites()
    {
        let temp = document.querySelector('.Main_App_leftColumn_favorites');
        console.log(temp);
        temp.classList.add('color');
        temp = document.querySelector('#like');
        temp.src='/img/like color.svg'
        
        temp = document.querySelector('.Main_App_leftColumn_textToGesture');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_gestureToText');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_articles');
        temp.classList.remove('color');

        temp = document.querySelector('#hand');
        temp.src='/img/hand normal.svg'
        temp = document.querySelector('#A');
        temp.src='/img/A normal.svg'
        temp = document.querySelector('#news');
        temp.src='/img/news normal.svg'
        return;
    }
    function HandleClick_Main_App_leftColumn_articles()
    {  
        let temp = document.querySelector('.Main_App_leftColumn_articles');
        console.log(temp);
        temp.classList.add('color');
        temp = document.querySelector('#news');
        temp.classList.add('color');

        temp = document.querySelector('.Main_App_leftColumn_textToGesture');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_gestureToText');
        temp.classList.remove('color');
        temp = document.querySelector('.Main_App_leftColumn_favorites');
        temp.classList.remove('color');

        temp = document.querySelector('#hand');
        temp.src='/img/hand normal.svg'
        temp = document.querySelector('#A');
        temp.src='/img/A normal.svg'
        temp = document.querySelector('#like');
        temp.src='/img/like normal.svg'
        return ;
    }
    return (
        <div className='Main_App_container'>
            <div className='Main_App_leftColumn'>
                <div className='Main_App_leftColumn_user'>
                    <img src='/img/person.png' className='Main_App_leftColumn_block_img'></img>
                    <p className='Main_App_leftColumn_user_p'>ФИО пользователя</p>
                </div>
                <div className='Main_App_leftColumn_div'>
                    <div className='Main_App_leftColumn_gestureToText flex' onClick={HandleClick_Main_App_leftColumn_gestureToText}>
                        <img id='hand' src='/img/hand normal.svg' className='Main_App_leftColumn_block_img'></img>

                        <p className='Main_App_leftColumn_p'>жесты→текст</p>
                    </div>
                    <div className='Main_App_leftColumn_textToGesture flex' onClick={HandleClick_Main_App_leftColumn_textToGesture}> 
                        <img id='A' src='/img/A normal.svg' className='Main_App_leftColumn_block_img'></img>
                        <p className='Main_App_leftColumn_p'>текст→жесты</p>
                    </div>
                    <div className='Main_App_leftColumn_favorites flex' onClick={HandleClick_Main_App_leftColumn_favorites}>
                        <img id='like' src='/img/like normal.svg' className='Main_App_leftColumn_block_img'></img>
                        <p className='Main_App_leftColumn_p'>избранное</p>
                    </div>
                    <div className='Main_App_leftColumn_articles flex' onClick={HandleClick_Main_App_leftColumn_articles}>
                        <svg id='news' className='Main_App_leftColumn_block_img' width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.140137 0.64502V32.9031C0.140137 36.4601 3.03476 39.3547 6.59175 39.3547H36.6993C40.2368 39.3547 43.1509 36.4407 43.1509 32.9031V9.24717H38.8498V32.9031C38.8498 34.1182 37.9144 35.0536 36.6993 35.0536C35.5122 35.0536 34.5487 34.088 34.5487 32.9031V0.64502H0.140137ZM8.74229 7.09663H25.9466V13.5482H8.74229V7.09663ZM8.74229 19.9999H25.9466V24.3009H8.74229V19.9999ZM8.74229 28.602H25.9466V32.9031H8.74229V28.602Z" fill="#1F333E"/>
                        </svg>
                        <p className='Main_App_leftColumn_p'>статьи</p>
                    </div>
                </div>
            </div>
            <div className='Main_App_rightColumn'>
                <img className='Main_App_rightColumn_img' src='/img/sign.svg'/>
            </div>
        </div>
        
    );
}
export default Main_App;