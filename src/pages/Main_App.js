import React from 'react';

function Main_App(){

    return (
        <div className='Main_App_container'>
            <div className='Main_App_leftColumn'>
                <div className='Main_App_leftColumn_user'>
                    <img className='Main_App_leftColumn_user_img' src='/img/person.png'></img>
                    <p className='Main_App_leftColumn_user_p'>ФИО пользователя</p>
                </div>
                <div className='Main_App_leftColumn_div'>
                    <div className='Main_App_leftColumn_gestureToText flex'>
                        <img src='/img/hand normal.svg' className='Main_App_leftColumn_block_img'></img>
                        <p className='Main_App_leftColumn_p'>жесты→текст</p>
                    </div>
                    <div className='Main_App_leftColumn_textToGesture flex'> 
                        <img src='/img/A normal.svg' className='Main_App_leftColumn_block_img'></img>
                        <p className='Main_App_leftColumn_p'>текст→жесты</p>
                    </div>
                    <div className='Main_App_leftColumn_favorites flex'>
                        <img src='/img/like normal.svg' className='Main_App_leftColumn_block_img'></img>
                        <p className='Main_App_leftColumn_p'>Избранное</p>
                    </div>
                    <div className='Main_App_leftColumn_articles flex'>
                        <img src='/img/news normal.svg' className='Main_App_leftColumn_block_img'></img>
                        <p className='Main_App_leftColumn_p'>статьи</p>
                    </div>
                </div>
            </div>
            <div className='Main_App_rightColumn'>
                <img src='/img/sign.svg'/>
            </div>
        </div>
    );
}
export default Main_App;