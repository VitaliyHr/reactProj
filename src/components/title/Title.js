import React from 'react';
import style from './Title.module.css';
import titleImage from '../../static/images/12_daniel_can_bc-207.jpg'

function Title () {
  return (
    <div className={style.title}>
      <img className={style.title__image} alt="tilte" src={titleImage}></img>
    </div>
  );
}

export { Title };
