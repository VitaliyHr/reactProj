import React from 'react';
import style from './PostButton.module.css';

export function PostButton() {
  return (
    <div className={style.postButton}>
      <button className={style.postButton__button} type='submit'>send</button>
    </div>
  );
}
