import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import './App.css';
import { Chat } from './components/chat/Chat';
import { Route, BrowserRouter } from 'react-router-dom';
import { Messages } from './components/chat/message/Message';

const ProfileRender = () => <Profile/>
const ChatRender = () => <Chat/>
const MessagesRender = () => <Messages/>

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Route path='/profile' render={ProfileRender}/>
        <Route exact='/chat' path='/chat' render={ChatRender}/>
        <Route path='/chat/:id' component={MessagesRender}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
