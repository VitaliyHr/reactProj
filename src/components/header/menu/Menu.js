import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';

export function Menu () {
  return (
    <div className={style.menu}>
        <ul>
          <li className={style.menu__item}>
            <NavLink to='/profile' activeClassName={style.menu__href__active} className={style.menu__href}>Profile</NavLink>
          </li>
          <li className={style.menu__item}>
            <NavLink to='/chat' activeClassName={style.menu__href__active} className={style.menu__href}>Messages</NavLink>
          </li>
          <li className={style.menu__item}>
            <NavLink to='/news' activeClassName={style.menu__href__active} className={style.menu__href}>News</NavLink>
          </li>
          <li className={style.menu__item}>
            <NavLink to='/music' activeClassName={style.menu__href__active} className={style.menu__href}>Music</NavLink>
          </li>
          <li className={style.menu__item}>
            <NavLink to="/settings" activeClassName={style.menu__href__active} className={style.menu__href}>Settings</NavLink>
          </li>
        </ul>
      </div>
  )
}
