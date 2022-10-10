// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDOnYiYu86l6oH_COctsEYxvFvdD-d1-M",
  authDomain: "batalla-naval-4da6b.firebaseapp.com",
  projectId: "batalla-naval-4da6b",
  storageBucket: "batalla-naval-4da6b.appspot.com",
  messagingSenderId: "67343307272",
  appId: "1:67343307272:web:a9c15a28569d2450d237bd",
  measurementId: "G-1ZGK6XH1V3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);