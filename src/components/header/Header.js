import React from 'react';
import { Logo } from './logo/Logo';
import { Menu } from './menu/Menu';
import style from './Header.module.css';

export function Header () {
  return (
    <div className={style.header}>
        <Logo/>
        <Menu/>
      </div>
  );
}
 