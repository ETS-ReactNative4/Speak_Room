import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from './img/logo_sr.png';

const Header = () => {

let supmMenu = 0;
function ChangeSubMenu() {
  if (supmMenu === 1){
    supmMenu = 0;
  }else {
    supmMenu = 1;
  }
}


  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <div className="Top-menu">
        <div className="Top-submenu-box">
          <p onClick={ChangeSubMenu}>
            О нас
          </p>
          {supmMenu ? <div className="Top-submenu"> <Link to="/about/">Катерина Мартыненко</Link> <Link to="/about/">Владимир Рогов</Link> </div>  : <div></div>}
        </div>
        <p>|</p>
        <Link to="/team/">Владимер</Link>
        <p>|</p>
        <a href="">Проекты</a>
        <p>|</p>
        <a href="">Расписание</a>
        <p>|</p>
        <Link to="/contacts/">Контакты</Link>
      </div>
    </header>
  );
}

export default Header;
