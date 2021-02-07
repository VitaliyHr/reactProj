import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import './App.css';
import { Chat } from './components/chat/Chat';
import { Route, BrowserRouter } from 'react-router-dom';
import { Messages } from './components/chat/message/Message';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Route path='/profile' component={Profile}/>
        <Route exact='/chat' path='/chat' component={Chat}/>
        <Route path='/chat/:id' component={Messages}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
