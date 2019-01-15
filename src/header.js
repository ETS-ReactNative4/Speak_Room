import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from './img/logo_sr.png';
import logoMob from './img/logo-mob.png';
import gambMob from './img/gamb-mob.png';


const Header = () => {

class SubMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {

    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });

  }

  render() {
    return (
      <div>
        <a onClick={this.showMenu}>
          О нас
        </a>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                <div className="Top-submenu">
                  <Link to="/team/">Владимир Рогов</Link>
                  <Link to="/team1/">Катерина Мартыненко</Link>
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}


class SubMenuMob extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {

    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });

  }

  render() {
    return (
      <div>
        <a onClick={this.showMenu}>
          <img src={gambMob} alt="menu"/>
        </a>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                <div className="Top-menu-mob">
                  <Link to="/team/">Владимир Рогов</Link>
                  <Link to="/team1/">Катерина Мартыненко</Link>
                  <Link to="/contacts/">Контакты</Link>
                </div>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}


  return (
    <header>
      <div className="mob gamb">
        <SubMenuMob />
      </div>
      <Link className="pc" to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <Link className="mob" to="/">
        <img src={logoMob} alt="logo"/>
      </Link>
      <div className="Top-menu pc">
        <SubMenu />
        <p>|</p>
        <Link to="/contacts/">Контакты</Link>
      </div>
    </header>
  );
}

export default Header;

// <p>|</p>
// <a href="">Проекты</a>
// <p>|</p>
// <a href="">Расписание</a>
