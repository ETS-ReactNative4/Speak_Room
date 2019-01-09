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

class App extends Component {
  render()
  {
    return (
      <div className="Wrapper">
        <div className="Container">

          <div className="Backgraung-header">
            <h6>Киев | 17.12</h6>
            <h1>Collaboration Forum 2017</h1>
            <h2>II международная конференция объединения ведущих <br/> предпринимателей Украины</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdETarL7liZ6HuIl98ssT5lp-j9xELReoyFma1hmwNfrI7kJw/viewform?usp=sf_link">
              <button className="Main-button" type="button" name="button">Регистрация</button>
            </a>
          </div>

          <div className="Where">
            <h3>Где и когда?</h3>
            <p className="Where-1">17 декабря</p>
            <p className="Where-2">BEEF meat & wine</p>
            <p className="Where-3">Киев, Шота Руставели, 11</p>
            <div className="Where-container">
              <img src={whereImg1} alt="foto1"/>
              <img src={whereImg2} alt="foto2"/>
              <img src={whereImg3} alt="foto3"/>
              <img src={whereImg4} alt="foto4"/>
            </div>
          </div>

          <div className="Whom">
            <h3>Для кого?</h3>
            <div className="Whom-container">
              <div className="Whom-box">
                <div className="Whom-img">
                </div>
                <p>Для начинающих и опытных управленцев</p>
              </div>
              <div className="Whom-box">
                <div className="Whom-img">
                </div>
                <p>HR-директоров</p>
              </div>
              <div className="Whom-box">
                <div className="Whom-img">
                </div>
                <p>Директоров по развитию бизнеса</p>
              </div>
              <div className="Whom-box">
                <div className="Whom-img">
                </div>
                <p>Владельцев и руководителей бизнеса</p>
              </div>
            </div>
          </div>

          <div className="Why">
            <h3>Зачем?</h3>
            <p className="Why-1">Для совместного достижения общих и личных <br/> целей, обмена знаниями, обучения и развития</p>
            <p className="Why-2">"Талант выигрывает игры, а командная работа - чемпионаты."</p>
            <p className="Why-3">Майкл Джордан</p>
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
}

export default App;
