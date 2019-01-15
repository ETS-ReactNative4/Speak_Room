import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

import ellipse from './img/ellipse.png';

import rogov2 from './img/rogov-2.png';
import rogov3 from './img/rogov-3.png';
import rogov4 from './img/rogov-4.png';
import rogov5 from './img/rogov-5.png';
import rogov6 from './img/rogov-6.png';
import rogov7 from './img/rogov-7.png';
import rogov8 from './img/rogov-8.png';
import rogov9 from './img/rogov-9.png';

import rogovMob2 from './img/rogov-mob-2.png';
import rogovMob3 from './img/rogov-mob-3.png';
import rogovMob4 from './img/rogov-mob-4.png';


const Vladimir = () => (
  <div className="Wrapper">
    <div className="Container">

    <Header />

    <div className="Rogov-header">
      <div className="Main-text">
        <p className="Rogov-main-text">
          Владимир Рогов
        </p>
        <p className="Rogov-text-1">
          Тренер по переговорам и управленческому искусству с 28-летним опытом в бизнесе
        </p>
      </div>
    </div>
    <div className="mob RogovForText">
    </div>


      <div className="Rogov-block">
        <div className="Rogov-block-1">
          <p className="Rogov-block-text">
            Владимир Рогов — сооснователь и ведущий тренер проекта SpeakRoom. На его счету более 500 проведенных тренингов, курсов и мастер-классов для самых разных аудиторий — от 10 до 9000 человек.
          </p>
        </div>
        <div className="Rogov-block-2">
          <img className="pc" src={rogov2} alt="par1"/>
          <img className="mob" src={rogovMob2} alt="par1"/>
        </div>
      </div>

      <div className="Rogov-block Rogov-block-mob">
        <div className="Rogov-block-2">
          <img className="pc" src={rogov3} alt="par1"/>
          <img className="mob" src={rogovMob3} alt="par1"/>
        </div>
        <div className="Rogov-block-1 Rogov-block-mob-1">
          <p className="Rogov-block-main-text">
            Образование
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            МВТУ им. Баумана Москва
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Всероссийская Академия Внешней Торговли. МОСКВА
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            MBA в MIM-Kyiv Business School
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Таллиннская Школа Менеджеров
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
            Консультант Adizes Institute
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Бизнесмен
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Счастливый отец
          </p>
          <p className="Rogov-block-text">
            <span>
              <img src={ellipse} alt="ellipse"/>
            </span>
            Спортсмен
          </p>
        </div>
        <div className="Rogov-block-2">
        <img className="pc" src={rogov4} alt="par1"/>
        <img className="mob" src={rogovMob4} alt="par1"/>
        </div>
      </div>

      <div className="Rogov-block-white pc">
        <p className="Rogov-block-white-text">
        Галерея
        </p>
      </div>

      <div className="Rogov-gallery">

        <img className="Rogov-gallery-img" src={rogov5} alt="par1"/>
        <div className="Rogov-gallery-part">
          <img className="Rogov-gallery-img" src={rogov6} alt="par1"/>
          <img className="Rogov-gallery-img" src={rogov7} alt="par1"/>
        </div>
        <div className="Rogov-gallery-part">
          <img className="Rogov-gallery-img" src={rogov8} alt="par1"/>
          <img className="Rogov-gallery-img" src={rogov9} alt="par1"/>
        </div>
      </div>





      <Footer />

    </div>
  </div>
);

export default Vladimir;
