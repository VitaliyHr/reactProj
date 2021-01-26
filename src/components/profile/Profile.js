import React from 'react';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileImage } from './ProfileImage/ProfileImage';
import style from './Profile.module.css';
import { Posts } from './posts/Posts';
import { Title } from './title/Title';

function Profile () {
  return (
    <div className={style.profile}>
      <Title />
      <ProfileImage />
      <ProfileData />
      <Posts />
    </div>
  );
}

export { Profile };
