import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import './App.css';
import { Chat } from './components/chat/Chat';
import { Route, BrowserRouter } from 'react-router-dom';
import { Messages } from './components/chat/message/Message';

function App(props) {
  const ProfileRender = () => <Profile userData={props.userData} posts={props.posts}/>
  const ChatRender = () => <Chat users={props.users} />
  const MessagesRender = (properties) => <Messages users={props.users} match={properties.match} />

  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Route path='/profile' render={ProfileRender}/>
        <Route path='/chat' render={ChatRender}/>
        <Route path='/chat/:id' render={MessagesRender}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
