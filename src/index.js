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
];

const users = [
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
