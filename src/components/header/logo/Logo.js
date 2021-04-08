import React from 'react';
import logo from '../../../static/images/768px-Instagram_logo_2016.svg.webp';
import style from './Logo.module.css';

export function Logo () {
  return (
    <div className={style.logo}>
          <a href='/'>
          <img alt="logo" src={logo}></img>
          </a>
    </div>
  )
}
