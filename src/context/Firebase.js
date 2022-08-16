import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxd8YFTYHMqPyEv8MhvGbHlXere37wyaQ",
    authDomain: "better-relation.firebaseapp.com",
    projectId: "better-relation",
    storageBucket: "better-relation.appspot.com",
    messagingSenderId: "161413746064",
    appId: "1:161413746064:web:4ef81d9cfd74c2b83a7715",
    measurementId: "G-F9M3LLZT9Q"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();