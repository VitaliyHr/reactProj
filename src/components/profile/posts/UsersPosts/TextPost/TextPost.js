import react from 'react';
import style from './TextPost.module.css';

function TextPost(props) {
  return (
    <span className={style.textPost}>
      {props.message}
    </span>
  );
}

export { TextPost };