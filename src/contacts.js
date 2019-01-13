import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

import mail from './img/mail.png';
import phone from './img/phone.png';
import contacts_foto from './img/contacts_foto.png';

const Contacts = () => (
  <div className="Wrapper">
    <div className="Container">

      <Header />
      <div className="Main-сontacts">
        <div className="Main-сontacts-block">
          <div className="Main-сontacts-card">
            <img src={phone} alt="mail"/>
            <p className="Main-сontacts-main-text">
              Телефон
            </p>
            <a className="Main-сontacts-text" href="tel: +380662604145">
              +38 (066) 260 41 45
            </a>
          </div>
          <div className="Main-сontacts-card">
            <img src={mail} alt="mail"/>
            <p className="Main-сontacts-main-text">
              Email
            </p>
            <a className="Main-сontacts-text" href="mailto: speakroom.ua@gmail.com">
              speakroom.ua@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="Сustomers">
        <div className="Backgraung-сontacts-1">
          <p className="Backgraung-сontacts-text">
            Форма обратной связи
          </p>
        </div>
        <div className="Backgraung-сontacts-2">
            <img src={contacts_foto} alt="mail"/>
        </div>
      </div>

      <Footer />

    </div>
  </div>
);

export default Contacts;
