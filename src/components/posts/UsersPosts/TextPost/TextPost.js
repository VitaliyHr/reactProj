import react from 'react';
import style from './TextPost.module.css';

function TextPost(props) {
  return (
    <div className={style.textPost}>
      {props.message}
    </div>
  );
}

export { TextPost };