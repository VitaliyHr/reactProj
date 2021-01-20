import React from 'react';
import style from './ProfileImage.module.css';

function ProfileImage () {
  return (
    <div className={style.profileImage}>
      <img className={style.profileImage__image} alt="titleImage" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"></img>
    </div>
  );
}

export { ProfileImage };