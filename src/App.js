import WebcamComponent from './webcamera';
import React, { useState } from 'react';
function App() {
  const [theme, setTheme] = useState('light'); // состояние для смены темы
  const switchTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }; // переключатель темы
  return (
    <div className="wrapper" id={theme}>
      <header>
        <h1>Leaf</h1>
        <h3>Profile</h3>
        <h3>Settings</h3>
        <h3 onClick={switchTheme}>Dark mode</h3>
      </header>
      <main className="content">
        <div className="block_txt">
          <img src="/img/text.svg" />
          <p contenteditable="true">Начните вводить текст</p>
        </div>

        <div className="replace">
          {theme === 'light' ? (
            <img src="/img/change-circle.svg" />
          ) : (
            <img src="/img/change-circle-dark.svg" />
          )}
        </div>

        <div className="block_gestures">
          <img src="/img/hand.svg" />
          <p contenteditable="true">Жесты будут показаны после ввода текста</p>
        </div>
        {/* <WebcamComponent/>  */}
      </main>

      <footer>
        <div onClick={switchTheme}>
          {theme === 'light' ? <img src="/img/moon.svg" /> : <img src="/img/light-theme.svg" />}
        </div>
        <img src="/img/person.svg" />
        <img src="/img/gear.svg" />
      </footer>
    </div>
  );
}

export default App;
