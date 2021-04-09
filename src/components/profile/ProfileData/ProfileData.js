import React from 'react';
import style from './ProfileData.module.css';

export function ProfileData (props) {
  return (
    <div className={style.profileData}>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Name: </div> <div>{props.userData.name}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Date of birth: </div> <div>{props.userData.birthday}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Education:</div><div> {props.userData.education}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>City:</div><div>{props.userData.city}</div>
      </div>
      <div className={style.profileData__component}>
        <div className={style.profileData__description}>Website: </div><div><a href={props.userData.website}>{props.userData.website}</a></div>
      </div>
    </div>
  );
}
