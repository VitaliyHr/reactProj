import React from 'react';
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileImage } from './ProfileImage/ProfileImage';
import style from './Profile.module.css';
import { Posts } from './posts/Posts';

export function Profile () {
  return (
    <div className={style.profile}>
      <ProfileImage />
      <ProfileData />
      <Posts />
    </div>
  );
}
