import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dots from './images/menu-dots.png'
import profile from './images/user.png'
import google from './images/google.png'

function Button(name) {
  return <button className='btn'>{name}</button>
}

function Header() {
  return (
    <div className='header'>
      <ul className='header_list'>
        <li className='header_item'><a href='#'>Почта</a></li>
        <li className='header_item'><a href='#'>Картинки</a></li>
        <li className='header_item'><a href='#'><img src={dots} className='header_image' /></a></li>
        <li className='header_item'><a href='#'><img src={profile} className='header_image' /></a></li>
      </ul>
    </div>
  )
}

function Content() {
  return (
    <div className='main'>
      <a href='#'><img src={google} className='main_image' /></a>
      <input type='text' />
      <div className='main_buttons'>
        {Button('Поиск в Google')}
        {Button('Мне повезёт!')}
      </div>
      <div className='main_language'>
        <p>Сервисы Google доступны на разных языках:</p>
        <a href='#'>English</a>
        <a href='#'>Русский</a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <ul className='left-list'>
        <li className='left-list_item'><a href='#'>Всё о Google</a></li>
        <li className='left-list_item'><a href='#'>Рекалма</a></li>
        <li className='left-list_item'><a href='#'>Для бизнеса</a></li>
        <li className='left-list_item'><a href='#'>Как работает Google Поиск</a></li>
      </ul>
      <ul className='right-list'>
        <li className='right-list_item'><a href='#'>Конфиденциальность</a></li>
        <li className='right-list_item'><a href='#'>Условия</a></li>
        <li className='right-list_item'><a href='#'>Всё о Google</a></li>
      </ul>
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <div className='wrapper'>
      <Header />
      <Content />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


