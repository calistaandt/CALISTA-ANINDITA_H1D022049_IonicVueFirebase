// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWmWphsrmNdw2Zqvzfqxi16Ov8PtOZBPE",
  authDomain: "prakmobile-firebase.firebaseapp.com",
  projectId: "prakmobile-firebase",
  storageBucket: "prakmobile-firebase.firebasestorage.app",
  messagingSenderId: "41606593737",
  appId: "1:41606593737:web:b2d832f264e5733392e118"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };