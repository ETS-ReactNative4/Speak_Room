import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

import ellipse from './img/ellipse.png';

import kater2 from './img/kater-2.png';
import kater3 from './img/kater-3.png';
import kater4 from './img/kater-4.png';
import kater5 from './img/kater-5.png';
import kater6 from './img/kater-6.png';
import kater7 from './img/kater-7.png';
import kater8 from './img/kater-8.png';
import kater9 from './img/kater-9.png';

import katerMob2 from './img/kater-mob-2.png';
import katerMob3 from './img/kater-mob-3.png';
import katerMob4 from './img/kater-mob-4.png';

const Katerina = () => (
  <div className="Wrapper">
    <div className="Container">

    <Header />

    <div className="Kater-header">
      <div className="Main-text">
        <p className="Rogov-main-text Kater-main-text">
          Мартыненко Катерина
        </p>
      </div>
    </div>
    <div className="mob RogovForText">
    </div>

      <div className="Rogov-block">
        <div className="Rogov-block-1">
          <p className="Rogov-block-text norm-text">
            Мартыненко Катерина - основатель, идейный вдохновитель и куратор проекта SpeakRoom.
            Входит в ТОП 100 влиятельных женщин Украины 2018
          </p>
        </div>
        <div className="Rogov-block-2">
          <img className="pc" src={kater2} alt="par1"/>
          <img className="mob" src={katerMob2} alt="par1"/>
        </div>
      </div>

      <div className="Rogov-block Rogov-block-mob">
        <div className="Rogov-block-2 Rogov-block-mob-1">
          <img className="pc" src={kater3} alt="par1"/>
          <img className="mob" src={katerMob3} alt="par1"/>
        </div>
        <div className="Rogov-block-1 Kater-block-mob-1">
          <p className="Rogov-block-main-text">
            Образование
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Киевский университет туризма, экономики и права по специальности “Международные отношения”
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Hult International Business School “Bachelor of Business Administration”
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Hult International Business School “Masters in International Business”
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Christian Life School of Theology “Leadership”
          </p>
        </div>
      </div>

      <div className="Rogov-block">
        <div className="Rogov-block-1">
          <p className="Rogov-block-main-text">
            Другая деятельность
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Ресторанный консалтинг
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Бег
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Организация ивентов любой сложности
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Благотворительность
          </p>
        </div>
        <div className="Rogov-block-2">
        <img className="pc" src={kater4} alt="par1"/>
        <img className="mob" src={katerMob4} alt="par1"/>
        </div>
      </div>

      <div className="Rogov-block-white pc">
        <p className="Rogov-block-white-text">
        Галерея
        </p>
      </div>

      <div className="Rogov-gallery">
        <img className="Rogov-gallery-img" src={kater5} alt="par1"/>
        <div className="Rogov-gallery-part">
          <img className="Rogov-gallery-img" src={kater6} alt="par1"/>
          <img className="Rogov-gallery-img" src={kater7} alt="par1"/>
        </div>
        <div className="Rogov-gallery-part">
          <img className="Rogov-gallery-img" src={kater8} alt="par1"/>
          <img className="Rogov-gallery-img" src={kater9} alt="par1"/>
        </div>
      </div>





      <Footer />

    </div>
  </div>
);

export default Katerina;
