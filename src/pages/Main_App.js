import { queryByTestId } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';


function Main_App(){
    const [themeF, setColorF] = useState(0); // состояние для смены темы
    const [themeS, setColorS] = useState(0); // состояние для смены темы
    const [themeT, setColorT] = useState(0); // состояние для смены темы
    const [themeFo, setColorFo] = useState(0); // состояние для смены темы


    return (
        <div className='Main_App_container'>
            <div className='Main_App_leftColumn'>
                <div className='Main_App_leftColumn_user'>
                    <img src='/img/person.png' className='Main_App_leftColumn_block_img'></img>
                    <p className='Main_App_leftColumn_user_p'>ФИО пользователя</p>
                </div>
                <div className='Main_App_leftColumn_div'>
                    <div className='Main_App_leftColumn_gestureToText flex' onClick={() => {setColorF(1);  setColorS(0); setColorT(0); setColorFo(0);}}>
                        {themeF === 0 ? ( <>
                            <img id='hand' src='/img/hand normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>жесты→текст</p>
                        </>
                        ) : ( <>
                            <img id='hand' src='/img/hand color.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p color'>жесты→текст</p>
                            </>       
                        )}
                    </div>
                    <div className='Main_App_leftColumn_textToGesture flex' onClick={() => {setColorF(0);  setColorS(1); setColorT(0); setColorFo(0);}}> 
                        {themeS === 0 ? ( <>
                            <img id='A' src='/img/A normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>текст→жесты</p>
                            </>
                        ) : ( <>
                            <img id='A' src='/img/A color.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p color'>текст→жесты</p>
                            </>       
                        )}
                    </div>
                    <div className='Main_App_leftColumn_favorites flex' onClick={() => {setColorF(0);  setColorS(0); setColorT(1); setColorFo(0);}}>
                        {themeT === 0 ? ( <>
                            <img id='like' src='/img/like normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>избранное</p>
                            </>
                        ) : ( <>
                            <img id='like' src='/img/like color.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p color'>избранное</p>
                            </>       
                        )}
                    </div>
                    <div className='Main_App_leftColumn_articles flex' onClick={() => {setColorF(0);  setColorS(0); setColorT(0); setColorFo(1);}}>
                        {themeFo === 0 ? ( <>
                            <img id='news' src='/img/news normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>статьи</p>
                            </>
                        ) : ( <>
                             <img id='news' src='/img/news color.svg' className='Main_App_leftColumn_block_img'></img>
                             <p className='Main_App_leftColumn_p color'>статьи</p>
                            </>       
                        )}
                    </div>
                </div>
            </div>
            <div className='Main_App_rightColumn' id='rightColumn'>
                <img className='Main_App_rightColumn_img' src='/img/sign.svg'/>
                <div id='lF' className='Main_App_rightColumn_block_gestureToText disable'>
                    
                </div>
                <div id='lS' className='Main_App_rightColumn_block_textToGesture disable'>
                    <form className='Main_App_rightColumn_block_textToGesture_form'>
                        <textarea className='' placeholder='введите текст' /> 
                    </form>
                </div>
                <div id='lT' className='Main_App_rightColumn_block_favorites disable'>
                    
                </div>
                <div id='lF' className='Main_App_rightColumn_block_articles disable'>

                </div>
            </div>
        </div>
        
    );
}
export default Main_App;