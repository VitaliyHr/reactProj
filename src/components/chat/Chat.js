import React from 'react';
import { ChatList } from './chatList/ChatList';

export function Chat (props){
  return (
    <>
      <ChatList users={props.users}/>
    </>
  );
}
