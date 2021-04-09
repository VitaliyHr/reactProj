import React from 'react';
import style from './ProfileData.module.css';

const userData = {
  name: "Vitaliy",
  birthday: "29 junary 1999",
  education: "Higer buisness school. Germany",
  city: "Kamianets-Podilski",
  website: "https://staging.mevzu.app",
};

export function ProfileData () {
  return (
    <div className={style.profileData}>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Name: </div> <div>{userData.name}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Date of birth: </div> <div>{userData.birthday}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Education:</div><div> {userData.education}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>City:</div><div>{userData.city}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Website: </div><div><a href={userData.website}>{userData.website}</a></div>
      </div>
    </div>
  );
}
