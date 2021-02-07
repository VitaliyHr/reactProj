import react from 'react';
import { ChatList } from './chatList/ChatList';

export const users = [
  {
    id: 1,
    name: "Betty",
    messages: [
      "Hello!1",
      "How are you?1",
      "I think you are beautifull1",
    ],
  },
  {
    id: 2,
    name: "Anii",
    messages: [
      "Hello!2",
      "How are you?2",
      "I think you are beautifull2",
    ],
  },
  {
    id: 3,
    name: "Den",
    messages: [
      "Hello!3",
      "How are you?3",
      "I think you are beautifull3",
    ],
  },
  {
    id: 4,
    name: "Stiflerr",
    messages: [
      "Hello!4",
      "How are you?4",
      "I think you are beautifull4",
    ],
  },
];

function Chat (){
  return (
    <>
      <ChatList users={users}/>
    </>
  );
}

export { Chat };
