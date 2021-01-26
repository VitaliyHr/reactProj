import React from 'react';
import style from './Menu.module.css';

function Menu () {
  return (
    <div className={style.menu}>
        <ul>
          <li className={style.menu__item}>
            <a href="/profile" className={style.menu__href}>Profile</a>
          </li>
          <li className={style.menu__item}>
            <a href="/chat" className={style.menu__href}>Messages</a>
          </li>
          <li className={style.menu__item}>
            <a href="/news" className={style.menu__href}>News</a>
          </li>
          <li className={style.menu__item}>
            <a href="/music" className={style.menu__href}>Music</a>
          </li>
          <li className={style.menu__item}>
            <a href="/settings" className={style.menu__href}>Settings</a>
          </li>
        </ul>
      </div>
  )
}

export { Menu };
