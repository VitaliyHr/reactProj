import react from 'react';
import { NavLink } from 'react-router-dom';

function ChatList(props) {
  return (
    <>
      {props.users.map((u, index) => {
      return (
      <NavLink key={index} to={`/chat/${u.id}`}>{u.name}</NavLink>
      )
      })}
    </>
  );
}

export { ChatList };