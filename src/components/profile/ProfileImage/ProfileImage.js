import React from 'react';
import style from './ProfileImage.module.css';
import image from '../../../static/images/322868_1100-800x825.jpg';

export function ProfileImage () {
  return (
    <div className={style.profileImage}>
      <img className={style.profileImage__image} alt="titleImage" src={image}></img>
    </div>
  );
}
