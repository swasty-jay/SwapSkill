import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxJyFiBBz3gal2q4Y6w5njGIiCrGrBEKU",
  authDomain: "swapskill-dc959.firebaseapp.com",
  projectId: "swapskill-dc959",
  storageBucket: "swapskill-dc959.firebasestorage.app",
  messagingSenderId: "1041162090524",
  appId: "1:1041162090524:web:2bd95ed6905984e96907d9",
  measurementId: "G-5T3Q471L6Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
