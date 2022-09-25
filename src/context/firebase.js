import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC4vp-zJYcc94Poqifii4pHCtyzJKHOBw",
  authDomain: "twoofus-d95e1.firebaseapp.com",
  projectId: "twoofus-d95e1",
  storageBucket: "twoofus-d95e1.appspot.com",
  messagingSenderId: "850339454573",
  appId: "1:850339454573:web:0f0d8449729486184c6964"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// authDomain: "twoofus-d95e1.firebaseapp.com",
// projectId: "twoofus-d95e1",