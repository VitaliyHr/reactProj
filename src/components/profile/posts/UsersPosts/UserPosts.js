import react from 'react';
import { AvatarImage } from './AvatarImage/AvatarImage';
import style from './UserPosts.module.css';
import { TextPost } from './TextPost/TextPost';

function UserPosts() {
  return (
    <>
      <div className={style.userPosts}>
        <AvatarImage/>
        <TextPost message="I have a couple of questions for you"/>
      </div>
      <div className={style.userPosts}>
        <AvatarImage/>
        <TextPost message="Kind of?"/>
      </div>
      <div className={style.userPosts}>
        <AvatarImage/>
        <TextPost message="About your work... It's seem to be stupid but..."/>
      </div>
   </>
  );
}

export { UserPosts };
