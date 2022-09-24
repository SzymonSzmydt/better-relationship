import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxd8YFTYHMqPyEv8MhvGbHlXere37wyaQ",
  authDomain: "northshape.eu",
  projectId: "better-relation",
  storageBucket: "better-relation.appspot.com",
  messagingSenderId: "161413746064",
  appId: "1:161413746064:web:4ef81d9cfd74c2b83a7715",
  measurementId: "G-F9M3LLZT9Q"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);