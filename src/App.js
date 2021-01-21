import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import './App.css';
import { Title } from './components/title/Title';
import { Posts } from './components/posts/Posts';

function App() {
  return (
    <div className="app">
      <Header/>
      <Title/>
      <Profile/>
      <Posts/>
    </div>
  );
}

export default App;
