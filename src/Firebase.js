import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATE8dTa2PYQg8jn05xoR-bch-U8nnrbUM",
    authDomain: "clone-9ce50.firebaseapp.com",
    projectId: "clone-9ce50",
    storageBucket: "clone-9ce50.appspot.com",
    messagingSenderId: "772807445868",
    appId: "1:772807445868:web:4b6291bef88e5e4a9d7749",
    measurementId: "G-MDRZ9HE8PB"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };