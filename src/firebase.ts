import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8UoHbSkMSw7gyrQyrIDo7gvcOKOHkrcQ",
  authDomain: "tag-aldc-6c405.firebaseapp.com",
  projectId: "tag-aldc-6c405",
  storageBucket: "tag-aldc-6c405.firebasestorage.app",
  messagingSenderId: "212803996997",
  appId: "1:212803996997:web:aee3b8bb775f0cffb8822c",
  measurementId: "G-S3B8F64LSB",
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  }),
});

export { db };
