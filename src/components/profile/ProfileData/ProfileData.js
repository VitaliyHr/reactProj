import React from 'react';
import style from './ProfileData.module.css';

const userData = {
  name: "Vitaliy",
  birthday: "29 junary 1999",
  education: "Higer buisness school. Germany",
  city: "Kamianets-Podilski",
  website: "https://staging.mevzu.app",
};

function ProfileData () {
  return (
    <table className={style.profileData}>
      <tr className={style.profileData__name}>
        <td>Name: </td> <td>{userData.name}</td>
      </tr>
      <tr className={style.profileData__birth}>
        <td>Date of birth: </td> <td>{userData.birthday}</td>
      </tr>
      <tr className={style.profileData__education}>
        <td>Education:</td><td> {userData.education}</td>
      </tr>
      <tr className={style.profileData__city}>
        <td>City:</td><td>{userData.city}</td>
      </tr>
      <tr className={style.profileData__website}>
        <td>Website: </td><td><a href={userData.website}>{userData.website}</a></td>
      </tr>
    </table>
  );
}

export { ProfileData };