import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3JS4nR-dsH6iZTYGx-HO8I25AknUPhLA",
//   authDomain: "mealstogo-fb4e7.firebaseapp.com",
//   projectId: "mealstogo-fb4e7",
//   storageBucket: "mealstogo-fb4e7.appspot.com",
//   messagingSenderId: "39538723071",
//   appId: "1:39538723071:web:9c582b0103edaeaf51a4ca",
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export const loginRequest = async (email, password) => {
//   signInWithEmailAndPassword(auth, email, password);
// };
export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
