import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

import ellipse from './img/ellipse.png';

import icon1 from './img/icon_1.png';
import icon2 from './img/icon_2.png';
import icon3 from './img/icon_3.png';
import icon4 from './img/icon_4.png';

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

const Main = () => {
    return (
      <div className="Wrapper">
        <div className="Container">

          <Header />

          <div className="Backgraung-header">
            <div className="Main-text">
              <h1>Speak <span className="Bold">Room</span></h1>
              <p className="Main-text-1">
                Это сообщество переговорщиков
              </p>
              <p className="Main-text-2">
                Мы собрали экспертов в сфере ведения переговоров, продаж и психологии, с которыми за 7 лет работы провели более 900 переговорных поединков, стратегических сессий и переговорных тренингов.
              </p>
            </div>
          </div>

          <div className="Where">
            <div className="Where-block-1">
              <h2>Программы SpeakRoom</h2>
              <p className="Where-main-text-1">
                Мы разработали программы, которые помогают:
              </p>
              <p className="Where-text-1">
                <span>
                  <img src={ellipse} alt="ellipse"/>
                </span>
                Решать конфликтные ситуации и эффективно вести трудные диалоги.
              </p>
              <p className="Where-text-1">
                <span>
                  <img src={ellipse} alt="ellipse"/>
                </span>
                Добиваться своих целей в переговорах, при этом сохраняя власть и отношения.
              </p>
              <p className="Where-text-1">
                <span>
                  <img src={ellipse} alt="ellipse"/>
                </span>
                Вести жесткие переговоры и противостоять манипуляции.
              </p>
              <div className="Where-btn-box">
              <a href="">
                <button className="Where-btn-1" type="button" name="button">Проекты</button>
              </a>
              <a href="">
                <button className="Where-btn-2" type="button" name="button">Расписание</button>
              </a>
              </div>
            </div>
            <div className="Where-block-2">
              <div className="Where-card">
                <div className="Where-foto Where-foto-1">
                  <div className="Where-foto-date">
                    Старт 10 февраля
                  </div>
                </div>
                <p className="Where-card-main-text">
                  Курс по переговорам
                </p>
                <p className="Where-card-text">
                  Чтобы добиваться поставленных целей в жизни, нужно быть мастером переговоров.
                </p>
              </div>
              <div className="Where-card">
                <div className="Where-foto Where-foto-2">
                  <div className="Where-foto-date">
                    Каждое воскресенье
                  </div>
                </div>
                <p className="Where-card-main-text">
                  Переговорные Поединки
                </p>
                <p className="Where-card-text">
                  Ежедневно мы ведем переговоры в коллективе, с клиентами, сыном-подростком, начальником или с подчиненным.
                  Если власть и контроль над переговорами на вашей стороне — вы получите желаемое.
                </p>
              </div>
              <div className="Where-card">
                <div className="Where-foto Where-foto-3">
                </div>
                <p className="Where-card-main-text">
                  Корпоративное обучение
                </p>
                <p className="Where-card-text">
                  Разработка уникальных программ и технологий для вашей компании
                </p>
              </div>
              <div className="Where-card">
                <div className="Where-foto Where-foto-4">
                  <div className="Where-foto-date">
                    3 марта
                  </div>
                </div>
                <p className="Where-card-main-text">
                  Talks Forum
                </p>
                <p className="Where-card-text">
                  Бизнес-конференция с уникальным набором спикеров из разных сфер и стран.
                  идеры в сфере переговоров, коммуникации и управленческого искусства делятся своим опытом, факапами и честно отвечают на ваши вопросы.
                </p>
              </div>
            </div>
          </div>

          <div className="Backgraung-nambers">
              <h3>В цифрах</h3>
              <div className="Nambers-cards">
                <div className="Nambers-card">
                  <img src={icon1} alt="icon1"/>
                  <p className="Nambers-card-main-text">
                    900+
                  </p>
                  <p className="Nambers-card-text">
                    переговорных поединков
                  </p>
                </div>
                <div className="Nambers-card">
                  <img src={icon2} alt="icon2"/>
                  <p className="Nambers-card-main-text">
                    500+
                  </p>
                  <p className="Nambers-card-text">
                    проведенных тренингов, лекций и мастер-классов для самых разных аудиторий
                  </p>
                </div>
                <div className="Nambers-card">
                  <img src={icon3} alt="icon3"/>
                  <p className="Nambers-card-main-text">
                    1500+
                  </p>
                  <p className="Nambers-card-text">
                    выпускников наших программ
                  </p>
                </div>
                <div className="Nambers-card">
                  <img src={icon4} alt="icon4"/>
                  <p className="Nambers-card-main-text">
                    640+
                  </p>
                  <p className="Nambers-card-text">
                    часов корпоративного обучения
                  </p>
                </div>
              </div>
          </div>

          <div className="Mission">
            <p className="Mission-text-1">Наша миссия</p>
            <p className="Mission-text-2">Обучаем людей качественно коммуницировать</p>
          </div>

          <div className="Сustomers">
            <div className="Сustomers-block-1">
              <p className="Сustomers-main-text">
                Наши клиенты
              </p>
              <p className="Сustomers-text">
                Мы проводим тренинги и мастер-классы как в открытом, так и в корпоративном формате.
                Наши клиенты — успешные украинские и международные компании, которые понимают, что от качества коммуникации зависит все.
              </p>
            </div>
            <div className="Сustomers-block-2">
              <img src={par1} alt="par1"/>
              <img src={par2} alt="par1"/>
              <img src={par3} alt="par1"/>
              <img src={par4} alt="par1"/>
              <img src={par5} alt="par1"/>
              <img src={par6} alt="par1"/>
              <img src={par7} alt="par1"/>
              <img src={par8} alt="par1"/>
              <img src={par9} alt="par1"/>
              <img src={par10} alt="par1"/>
              <img src={par11} alt="par1"/>
              <img src={par12} alt="par1"/>
              <img src={par13} alt="par1"/>
              <img src={par14} alt="par1"/>
              <img src={par15} alt="par1"/>
              <img src={par16} alt="par1"/>
              <img src={par17} alt="par1"/>
            </div>
          </div>

            <Footer />

        </div>
      </div>
    );
  }

export default Main;


// <div className="Registration">
//   <h3>Регистрация</h3>
//   <p className="Registration-1">Стоимость участия: 1200 грн (включая обед)</p>
//   <p className="Registration-2">Для ваших детей работает детская комната и аниматор :)</p>
//   <a href="tel:+380934295216"><img src="" alt="phone"/></a>
//   <p className="Registration-3"><a href="tel:+380934295216">+38 (093) 429 52 16</a></p>
//   <p className="Registration-3"><a href="https://www.facebook.com/martynenko.katya">FB:  Ekaterina Martynenko</a></p>
//   <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETarL7liZ6HuIl98ssT5lp-j9xELReoyFma1hmwNfrI7kJw/viewform?usp=sf_link">
//     <button className="Main-button" type="button" name="button">Регистрация</button>
//   </a>
// </div>
