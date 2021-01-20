import { Component } from 'react';
import { Logo } from './logo/Logo';
import { Menu } from './menu/Menu';
import style from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <Logo/>
        <Menu/>
      </div>
    );
  }
}

export { Header };
 