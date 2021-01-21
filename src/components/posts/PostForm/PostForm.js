import react from 'react';
import { PostButton } from './PostButton/PostButton';
import style from './PostForm.module.css';


function PostForm() {
  return (
    <>
      <form className={style.postForm} method="POST" action='#'>
        <textarea className={style.postForm__textarea} placeholder='your news...'></textarea>
        <PostButton/>
      </form>
    </>
  );
}

export { PostForm };
