// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Gk04-D8cQdiJc9l6sPuaM7Y6hHdXKXw",
  authDomain: "auth-4172c.firebaseapp.com",
  projectId: "auth-4172c",
  storageBucket: "auth-4172c.firebasestorage.app",
  messagingSenderId: "816272158783",
  appId: "1:816272158783:web:b75161cb99f927ea47088a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app, ) 


export const db = getFirestore(app)