import react from 'react';
import { AvatarImage } from './AvatarImage/AvatarImage';
import style from './UserPosts.module.css';
import { TextPost } from './TextPost/TextPost';
import { Likes } from './Likes/Likes';

const posts = [
  "I have a couple of questions for you",
  "Kind of?",
  "About your work... It's seem to be stupid but...",
];

const postsElements = posts.map(p => (<TextPost message={p}/>))

function UserPosts() {
  return (
    <>
      {posts.map((p, index) => {
        return (
          <>
          <div key={index} className={style.userPosts}>
            <AvatarImage/>
            {postsElements[index]}
            <Likes count='5' />
          </div>
          </>
        )
      })}
   </>
  );
}

export { UserPosts };
