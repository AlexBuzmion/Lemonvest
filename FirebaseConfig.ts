// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLsI4xNOJ0l8-vMhK7zplsUjJtqobz94o",
  authDomain: "stoxly-936fc.firebaseapp.com",
  projectId: "stoxly-936fc",
  storageBucket: "stoxly-936fc.firebasestorage.app",
  messagingSenderId: "361373445521",
  appId: "1:361373445521:web:d0d891932ed3e08570be30"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getAuth(FIREBASE_APP);