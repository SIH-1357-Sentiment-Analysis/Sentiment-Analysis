import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABTriFpfH53EeGvhquDgtZdLkaX6t8wxg",
  authDomain: "smartindiahack-31508.firebaseapp.com",
  databaseURL: "https://smartindiahack-31508-default-rtdb.firebaseio.com",
  projectId: "smartindiahack-31508",
  storageBucket: "smartindiahack-31508.appspot.com",
  messagingSenderId: "723099420524",
  appId: "1:723099420524:web:dc99e9f4864767f4101549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};
