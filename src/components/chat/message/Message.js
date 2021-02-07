import react from 'react';
import { users } from '../Chat';

function getUserById(id) {
  const [user] = users.filter( u => String(u.id) === String(id));
  return user;
}

function Messages (props) {
  const user = getUserById(props.match.params.id);
  return (
    <>
     {user.messages.map((m, index) => {
       return (
         <>
            <div key={index}>{m}</div>
         </>
       );
     })}
    </>
  );
}

export { Messages };