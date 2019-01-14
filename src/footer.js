import React from 'react';
import './App.css';
import fb from './img/fb.png';
import inst from './img/inst.png';

const Footer = () => (
  <footer>
    <div className="Footer-box">
      <p>© 2012 - 2019 Speak room. Все права защищены</p>
      <div className="Footer-social-box">
        <a href="https://www.facebook.com/speakroomua/"><img src={fb} alt="fb"/></a>
        <a href="https://instagram.com/speakroom"><img src={inst} alt="inst"/></a>
      </div>
    </div>
  </footer>
);

export default Footer;
