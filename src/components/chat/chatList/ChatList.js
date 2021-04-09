import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ChatList.module.css';

export function ChatList(props) {
  return (
    <div>
      {props.users.map((u, index) => {
      return (
      <NavLink key={index} to={`/chat/${u.id}`} className={style.chatList}>{u.name}</NavLink>
      )
      })}
    </div>
  );
}
