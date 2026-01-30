// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8UoHbSkMSw7gyrQyrIDo7gvcOKOHkrcQ",
  authDomain: "tag-aldc-6c405.firebaseapp.com",
  projectId: "tag-aldc-6c405",
  storageBucket: "tag-aldc-6c405.firebasestorage.app",
  messagingSenderId: "212803996997",
  appId: "1:212803996997:web:aee3b8bb775f0cffb8822c",
  measurementId: "G-S3B8F64LSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == "failed-precomdition") {
    console.log("Persistence failed: Multiple tabs open");
  } else if (err.code == "unimplemented") {
    console.log("Persistence not supported by browser");
  }
});
