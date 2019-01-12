import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from './img/logo_sr.png';

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="logo"/>
    </Link>
    <div className="Top-menu">
      <a href="">О нас</a>
      <p>|</p>
      <a href="">Проекты</a>
      <p>|</p>
      <a href="">Расписание</a>
      <p>|</p>
      <Link to="/about/">Контакты</Link>
    </div>
  </header>
);

export default Header;
