import React, { Component } from 'react';
import './App.css';

import whereImg1 from './img/where-img1.png';
import whereImg2 from './img/where-img2.png';
import whereImg3 from './img/where-img3.png';
import whereImg4 from './img/where-img4.png';

import partnerImg1 from './img/partner-img-1.png';
import partnerImg2 from './img/partner-img-2.png';
import partnerImg3 from './img/partner-img-3.png';
import partnerImg4 from './img/partner-img-4.png';
import partnerImg5 from './img/partner-img-5.png';
import partnerImg6 from './img/partner-img-6.png';
import partnerImg7 from './img/partner-img-7.png';
import partnerImg8 from './img/partner-img-8.png';
import partnerImg9 from './img/partner-img-9.png';

import phone from './img/phone-registration.png';
import mail from './img/mail.png';

// ____________________________________

import logo from './img/logo_sr.png';

// import bigFoto1 from './img/big_foto_1.png';
// import bigFoto2 from './img/big_foto_2.png';

import ellipse from './img/ellipse.png';

import foto1 from './img/foto_1.png';
import foto2 from './img/foto_2.png';
import foto3 from './img/foto_3.png';
import foto4 from './img/foto_4.png';

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


import fb from './img/fb.png';
import inst from './img/inst.png';

const App = () => {
    return (
      <div className="Wrapper">
        <div className="Container">

          <header>
            <img src={logo} alt="logo"/>
            <div className="Top-menu">
              <a href="">О нас</a>
              <p>|</p>
              <a href="">Проекты</a>
              <p>|</p>
              <a href="">Расписание</a>
              <p>|</p>
              <a href="">Контакты</a>
            </div>
          </header>

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

          <div className="Sphere">
            <h3>В каких сферах?</h3>
            <div className="Sphere-container">
              <div className="Sphere-box">
                <div className="Sphere-img">
                </div>
                <p>Переговоры</p>
              </div>
              <div className="Sphere-box">
                <div className="Sphere-img">
                </div>
                <p>Управленческое искусcтво</p>
              </div>
              <div className="Sphere-box">
                <div className="Sphere-img">
                </div>
                <p>GR</p>
              </div>
              <div className="Sphere-box">
                <div className="Sphere-img">
                </div>
                <p>Финансы</p>
              </div>
              <div className="Sphere-box">
                <div className="Sphere-img">
                </div>
                <p>Коммуникации</p>
              </div>
              <div className="Sphere-box">
                <div className="Sphere-img">
                </div>
                <p>Инвестирование</p>
              </div>
            </div>
          </div>

          <div className="Collaboration">
            <h3>Collaboration Forum 2017</h3>
            <ul>
              <li>
                <div className="Point"></div>
                <p>20 спикеров-практиков, 6 направлений, топовая локация страны.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Практические воркшопы.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Турнир по управленческим переговорным поединкам (принимаются заявки на участие).</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Ведущие эксперты-практики.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Нетворкинг и возможность расширить границы собственного социального капитала.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Возможность представить свою компанию и ее услуги.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Место, где получают новые знания и знакомятся с трендами.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Очаг зарождения настоящей дружбы и плодотворного сотрудничества.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Территория, где возникают инсайты относительно вашего будущего прорыва.</p>
              </li>
              <li>
                <div className="Point"></div>
                <p>Лучшая платформа для новых коллабораций.</p>
              </li>
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETarL7liZ6HuIl98ssT5lp-j9xELReoyFma1hmwNfrI7kJw/viewform?usp=sf_link">
              <button className="Main-button" type="button" name="button">Регистрация</button>
            </a>
          </div>

          <div className="Speakers">
            <h3>Спикеры</h3>
            <div className="Speakers-container">
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Катерина Мартыненко</p>
                <p className="Speakers-company">Spectrum</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Владимир Рогов</p>
                <p className="Speakers-company">Spectrum</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Игорь Порох</p>
                <p className="Speakers-company">iTuber</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Сергей Оглобля</p>
                <p className="Speakers-company">iCrypta</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Алексей Кутепов</p>
                <p className="Speakers-company">Kinohub</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Арина Яворских</p>
                <p className="Speakers-company">BonTonAcademy</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Любовь Цымбал</p>
                <p className="Speakers-company">Finance Solutions Group</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Шон Шемш</p>
                <p className="Speakers-company">VIP Sky</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Андрей Станченко</p>
                <p className="Speakers-company">IMC-Ukraine</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Вадим Келлер</p>
                <p className="Speakers-company">Resto Week</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Тадеуш Муратов</p>
                <p className="Speakers-company">T1 Business Group</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Юрий Кислов</p>
                <p className="Speakers-company">I’minvest</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Сергей Развадовский</p>
                <p className="Speakers-company">l’minvest</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Дарья Манжарова</p>
                <p className="Speakers-company">МІМ Київ</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Наталья Вагнер</p>
                <p className="Speakers-company">BEEF meat & wine</p>
              </div>
              <div className="Speakers-box">
                <div className="Speakers-img"></div>
                <p className="Speakers-name">Олег Демчик</p>
                <p className="Speakers-company">Клуб профессиональных переговорщиков</p>
              </div>
            </div>
          </div>

          <div className="Partners">
            <h3>Партнеры</h3>
            <div className="Partners-container">
              <img src={partnerImg1} alt="foto1"/>
              <img src={partnerImg2} alt="foto2"/>
              <img src={partnerImg3} alt="foto3"/>
              <img src={partnerImg4} alt="foto4"/>
              <img src={partnerImg5} alt="foto5"/>
              <img src={partnerImg6} alt="foto6"/>
              <img src={partnerImg7} alt="foto7"/>
              <img src={partnerImg8} alt="foto8"/>
              <img src={partnerImg9} alt="foto9"/>
            </div>
          </div>

          <div className="Timetable">
            <h3>17.12 | Расписание</h3>
          </div>

          <p className="Timetable-container">

            <span>10:00 – 11:00</span> Регистрация. <br/>

            <span>11:00 – 11:15</span> Открытие форума. <br/>

            <span>11:15 – 11:30</span> Владимир Рогов. Управленческие переговорные поединки. <br/>

            <span>11:30 – 14:00</span> Управленческие переговорные поединки. Четвертьфинал. <br/>

            <span>14:00 – 15:00</span> Дискуссионная панель “Инвестиции. Криптовалюта vs Недвижимость”. <br/>

            Модератор: Арина Яворских <br/>

            Участники: Любовь Цымбал, Игорь Порох, Сергей Оглобля, <br/>

            Сергей Развадовский, Юрий Кислов. <br/>

            <span>15:00 – 15:40</span> Обед. Нетворкинг. <br/>

            <span>15:40 – 16:30</span> Управленческие переговорные поединки. Полуфинал. <br/>

            <span>16:30 – 17:30</span> Дискуссионная панель “X на Y: как управлять сотрудниками поколения Миллениум”. <br/>

            Модератор: Владимир Рогов <br/>

            Участники: Арина Яворских, Наталья Вагнер, Игорь Порох, Тадеуш Муратов, Андрей Станченко <br/>

            <span>17:30 – 18:30</span> Управленческие поединки. Финал. <br/>

            <span>18:30 – 19:00</span> Награждение победителей. Подведение итогов форума.

          </p>

            <div className="Registration">
              <h3>Регистрация</h3>
              <p className="Registration-1">Стоимость участия: 1200 грн (включая обед)</p>
              <p className="Registration-2">Для ваших детей работает детская комната и аниматор :)</p>
              <a href="tel:+380934295216"><img src={phone} alt="phone"/></a>
              <p className="Registration-3"><a href="tel:+380934295216">+38 (093) 429 52 16</a></p>
              <p className="Registration-3"><a href="https://www.facebook.com/martynenko.katya">FB:  Ekaterina Martynenko</a></p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETarL7liZ6HuIl98ssT5lp-j9xELReoyFma1hmwNfrI7kJw/viewform?usp=sf_link">
                <button className="Main-button" type="button" name="button">Регистрация</button>
              </a>
            </div>

            <footer>
              <div className="Footer-box">
                <a href="mailto:spectrumkyiv@gmail.com"><img src={mail} alt="mail"/></a>
                <p><a href="mailto:spectrumkyiv@gmail.com">spectrumkyiv@gmail.com</a></p>
              </div>
            </footer>
        </div>
      </div>
    );
  }

export default App;
