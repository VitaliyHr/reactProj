import react from 'react';
import style from './Likes.module.css'

function Likes (props) {
  return (
    <div className={style.likes}>Likes: {props.count}</div>
  );
}

export { Likes };
