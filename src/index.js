import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyBkzgWiIMUYHXwJ9pv2fW-s9Q2FCXBtNIA",
  authDomain: "react-chat-7f4f8.firebaseapp.com",
  projectId: "react-chat-7f4f8",
  storageBucket: "react-chat-7f4f8.appspot.com",
  messagingSenderId: "430161706609",
  appId: "1:430161706609:web:d9e29ab95cb380da2525d0"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


