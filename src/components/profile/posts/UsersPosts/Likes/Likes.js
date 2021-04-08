import React from 'react';
import style from './Likes.module.css'

export function Likes (props) {
  return (
    <div className={style.likes}>Likes: {props.count}</div>
  );
}
