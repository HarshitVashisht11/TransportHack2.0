// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCHHjGsEvhqdZjGhwE4i7_hSLn7ClvGw74",
  authDomain: "transport-hack-10b1b.firebaseapp.com",
  databaseURL: "https://transport-hack-10b1b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "transport-hack-10b1b",
  storageBucket: "transport-hack-10b1b.appspot.com",
  messagingSenderId: "74418803669",
  appId: "1:74418803669:web:dc357939daa27794f1a35c",
  measurementId: "G-JB9B4KNLR3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };