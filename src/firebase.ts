// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxSR4MvtDs-sVv6X8N87LzxifIM93w3pQ",
  authDomain: "tag-project-80a86.firebaseapp.com",
  projectId: "tag-project-80a86",
  storageBucket: "tag-project-80a86.firebasestorage.app",
  messagingSenderId: "23002944815",
  appId: "1:23002944815:web:35e15e73beee4097923dda",
  measurementId: "G-FV29P9NDFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
