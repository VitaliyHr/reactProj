import React from 'react';
import logo from '../../../static/images/768px-Instagram_logo_2016.svg.webp';
import style from './Logo.module.css';

function Logo () {
  return (
    <div className={style.logo}>
          <img alt="logo" src={logo}></img>
    </div>
  )
}

export { Logo };
