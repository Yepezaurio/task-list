import * as firebase from 'firebase';
import firestore from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyB2-QzqeFht5qbMCJ-PHf4MYbadwKQVzMM",
    authDomain: "task-list-9cc32.firebaseapp.com",
    databaseURL: "https://task-list-9cc32.firebaseio.com",
    projectId: "task-list-9cc32",
    storageBucket: "task-list-9cc32.appspot.com",
    messagingSenderId: "1057526303869",
    appId: "1:1057526303869:web:5de424cd74847268e87514",
    measurementId: "G-SKFCQWJLJK"
  };
  
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
