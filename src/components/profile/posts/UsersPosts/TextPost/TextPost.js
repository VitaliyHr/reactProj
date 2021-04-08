import React from 'react';
import style from './TextPost.module.css';

export function TextPost(props) {
  return (
    <span className={style.textPost}>
      {props.message}
    </span>
  );
}
