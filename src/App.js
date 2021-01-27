import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import './App.css';
import { Chat } from './components/chat/Chat';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Route path='/profile' component={Profile}/>
        <Route path='/chat' component={Chat}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
