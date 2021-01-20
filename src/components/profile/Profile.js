import React from 'react';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileImage } from './ProfileImage/ProfileImage';
import style from './Profile.module.css';

function Profile () {
  return (
    <div className={style.profile}>
      <ProfileImage/>
      <ProfileData/>
    </div>
  );
}

export { Profile };
