import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const userData = {
  name: "Vitaliy",
  birthday: "29 junary 1999",
  education: "Higer buisness school. Germany",
  city: "Kamianets-Podilski",
  website: "https://staging.mevzu.app",
};

const posts = [
  "I have a couple of questions for you",
  "Kind of?",
  "About your work... It's seem to be stupid but...",
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
