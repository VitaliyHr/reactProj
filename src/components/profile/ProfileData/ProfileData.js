import React from 'react';
import style from './ProfileData.module.css';

function ProfileData () {
  return (
    <table className={style.profileData}>
      <tr className={style.profileData__name}>
        <td>Name: </td> <td>Vitaliy</td>
      </tr>
      <tr className={style.profileData__birth}>
        <td>Date of birth: </td> <td>29 junary 1999</td>
      </tr>
      <tr className={style.profileData__education}>
        <td>Education:</td><td> Higer buisness school. Germany</td>
      </tr>
      <tr className={style.profileData__city}>
        <td>City:</td><td>Kamianets-Podilski</td>
      </tr>
      <tr className={style.profileData__website}>
        <td>Website: </td><td>https://staging.mevzu.app</td>
      </tr>
    </table>
  );
}

export { ProfileData };