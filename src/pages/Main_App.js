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
                        <img id='news' src='/img/news normal.svg' className='Main_App_leftColumn_block_img'></img>
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