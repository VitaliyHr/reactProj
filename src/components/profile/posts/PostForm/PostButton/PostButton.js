import react from 'react';
import style from './PostButton.module.css';

function PostButton() {
  return (
    <div className={style.postButton}>
      <button className={style.postButton__button} type='submit'>send</button>
    </div>
  );
}

export { PostButton };
