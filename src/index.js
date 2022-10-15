import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestApp from './TestApp'
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFyjhNncojnoL4eXmiLwnvXROUhhxyyR0",
  authDomain: "cerabyn.firebaseapp.com",
  projectId: "cerabyn",
  storageBucket: "cerabyn.appspot.com",
  messagingSenderId: "122208935618",
  appId: "1:122208935618:web:aea682a2cdf7bd2a1de55b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
