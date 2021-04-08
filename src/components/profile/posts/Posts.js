import React from 'react';
import { PostForm } from './PostForm/PostForm';
import style from './Posts.module.css';
import { UserPosts } from './UsersPosts/UserPosts';

export function Posts() {
  return (
    <div className={style.posts}>
      <h2 className={style.posts__title}>My posts</h2>
      <PostForm/>
      <UserPosts/>
    </div>
  )
}
