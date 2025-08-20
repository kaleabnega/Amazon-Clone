// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiYVNEVAQmKACMA_qqqSvmZvpOD_TDkQM",
  authDomain: "clone-project-a81db.firebaseapp.com",
  projectId: "clone-project-a81db",
  storageBucket: "clone-project-a81db.firebasestorage.app",
  messagingSenderId: "669761261790",
  appId: "1:669761261790:web:7c8e4da4b633a667fd324f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
