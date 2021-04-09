import React from 'react';
import { AvatarImage } from './AvatarImage/AvatarImage';
import style from './UserPosts.module.css';
import { TextPost } from './TextPost/TextPost';
import { Likes } from './Likes/Likes';

export function UserPosts(props) {
  return (
    <>
      {props.posts.map((p, index) => {
        return (
          <>
          <div key={index} className={style.userPosts}>
            <AvatarImage/>
            <TextPost message={p} />
            <Likes count='5' />
          </div>
          </>
        )
      })}
   </>
  );
}
