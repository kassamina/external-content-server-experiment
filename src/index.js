import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav.js'
// import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBELZiOuQkBGzmNsDGQeWoIntMeMb6aC4Y",
  authDomain: "tovi-external-test.firebaseapp.com",
  projectId: "tovi-external-test",
  storageBucket: "tovi-external-test.appspot.com",
  messagingSenderId: "261353465528",
  appId: "1:261353465528:web:4932ebbd1affacdc0b364d"
});

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();