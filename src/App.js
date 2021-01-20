import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import './App.css';
import { Title } from './components/title/Title';

function App() {
  return (
    <div className="app">
      <Header/>
      <Title/>
      <Profile/>
    </div>
  );
}

export default App;
