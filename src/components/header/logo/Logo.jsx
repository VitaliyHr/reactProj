import React from 'react';
import style from './Logo.module.css';

function Logo () {
  return (
    <div className={style.logo}>
          <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"></img>
    </div>
  )
}

export { Logo };
