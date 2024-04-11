// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-mern-4da2a.firebaseapp.com",
  projectId: "real-state-mern-4da2a",
  storageBucket: "real-state-mern-4da2a.appspot.com",
  messagingSenderId: "367163402182",
  appId: "1:367163402182:web:12a8a20ad7ee87c4e1f4c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);