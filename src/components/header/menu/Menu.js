import React from 'react';
import style from './Menu.module.css';

function Menu () {
  return (
    <div className={style.menu}>
        <ul>
          <li className={style.menu__item}>
            <a href="#1" className={style.menu__href}>Profile</a>
          </li>
          <li className={style.menu__item}>
            <a href="#2" className={style.menu__href}>Messages</a>
          </li>
          <li className={style.menu__item}>
            <a href="#3" className={style.menu__href}>News</a>
          </li>
          <li className={style.menu__item}>
            <a href="#4" className={style.menu__href}>Music</a>
          </li>
          <li className={style.menu__item}>
            <a href="#5" className={style.menu__href}>Settings</a>
          </li>
        </ul>
      </div>
  )
}

export { Menu };
