import React from 'react';

function getUserById(id, users) {
  const [user] = users.filter( u => String(u.id) === String(id));
  return user;
}

export function Messages (props) {
  console.log(props);
  const user = getUserById(props.match.params.id, props.users);
  return (
    <div>
     {user.messages.map((m, index) => {
       return (
         <>
            <div key={index}>{m}</div>
         </>
       );
     })}
    </div>
  );
}
