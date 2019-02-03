import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

import par1 from './img/par_1.png';
import par2 from './img/par_2.png';
import par3 from './img/par_3.png';
import par4 from './img/par_4.png';
import par5 from './img/par_5.png';
import par6 from './img/par_6.png';
import par7 from './img/par_7.png';
import par8 from './img/par_8.png';
import par9 from './img/par_9.png';
import par10 from './img/par_10.png';
import par11 from './img/par_11.png';
import par12 from './img/par_12.png';
import par13 from './img/par_13.png';
import par14 from './img/par_14.png';
import par15 from './img/par_15.png';
import par16 from './img/par_16.png';
import par17 from './img/par_17.png';

import corp2 from './img/corp-2.png';

const Main = () => {
    return (
      <div className="Wrapper">
        <div className="Container">
        <Header />
        <div className="Corp-header">
          <div className="Corp-box-text">
            <p className="Corp-main-text">
              КОРПОРАТИВНЫЕ ТРЕНИНГИ
            </p>
            <p className="Corp-text-1">
              Мы проводим тренинги и мастер-классы как в открытом, так и в корпоративном формате.
              Наши клиенты — украинские и международные компании,
              которые понимают, что от качества коммуникации зависит все.
            </p>
          </div>
        </div>
        <div className="Corp-clints">
          <p>Наши клиенты</p>
        </div>
        <div className="Corp-clints-box">
          <img src={par1} alt="par1"/>
          <img src={par2} alt="par1"/>
          <img src={par3} alt="par1"/>
          <img src={par4} alt="par1"/>
          <img src={par5} alt="par1"/>
          <img src={par6} alt="par1"/>
          <img src={par7} alt="par1"/>
          <img src={par8} alt="par1"/>
          <img src={par9} alt="par1"/>
          <img src={par11} alt="par1"/>
          <img src={par12} alt="par1"/>
          <img src={par13} alt="par1"/>
          <img src={par14} alt="par1"/>
          <img src={par15} alt="par1"/>
          <img src={par16} alt="par1"/>
          <img src={par17} alt="par1"/>
        </div>
        <div className="Corp-tex-box-2">
          <p>
            Каждый из наших тренингов и мастер-классов мы можем провести эксклюзивно для вашей компании.
            Мы работаем как с маленькими, так и с большими аудиториями.
            Формат видоизменяется в зависимости от количества людей и целей мероприятия.
          </p>
        </div>
        <div className="Corp-clints">
          <p className="w610h70">КОРПОРАТИВНЫЕ ПРОГРАММЫ МОГУТ БЫТЬ В НЕСКОЛЬКИХ ФОРМАТАХ:</p>
        </div>
        <div className="Corp-tex-box-3">
          <div className="Corp-smoll-box">
            <p className="Corp-smoll-main-text">
              Короткие мастер-классы
            </p>
            <p className="Corp-smoll-main-text-2">
            Продолжительность: <span> от 1 до 5 часов.</span>
            <br/>
            Количество участников: <span> от 10 до 900 человек.</span>
            <br/>
            Темы:
            </p>
              <ul>
                 <li>Эффективные переговоры </li>
                 <li>Управленческие переговорные поединки</li>
                 <li>Продажи</li>
                 <li>Управленческое мастерство</li>
                 <li>Картина мира</li>
                 <li>Трудные диалоги</li>
                 <li>Лидерство</li>
              </ul>
            </div>
            <div className="Corp-smoll-box">
              <p className="Corp-smoll-main-text">
                Длительные тренинговые программы
              </p>
              <p className="Corp-smoll-main-text-2">
              Продолжительность: <span> от 1 дня. </span>
              <br/>
              Количество участников: <span> до 50 человек.</span>
              <br/>
              Тематические блоки:
              </p>
              <br/>
              <ul>
                 <li>Переговоры внутри организации</li>
                 <li>Продажи</li>
                 <li>Мастер переговоров. Стратегия и тактика</li>
                 <li>Персональное управленческое мастерство</li>
                 <li>Эффективный переговорщик</li>
                 <li>Командообразование.</li>
                 <li>Управление изменениями в организации по методологии И.Адизеса.</li>
                 <li>Миссия, видение, ценности, стратегии, управление в рамках теории и методологии И.Адизеса.</li>
                 <li>Проведение собраний и совещаний по методологии И.Адизеса.</li>
                 <li>Управленческие переговорные поединки по технологиям Владимира Тарасова.</li>
              </ul>
            </div>
        </div>
        <div className="Corp-tex-box-4">
            <img src={corp2} alt="corp2"/>
            <a href="https://goo.gl/forms/pfqKin4BT7wSRqKl2">
              <div className="btn-prod">
                отправить заявку
              </div>
            </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
