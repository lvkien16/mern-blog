// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2a4af.firebaseapp.com",
  projectId: "mern-blog-2a4af",
  storageBucket: "mern-blog-2a4af.appspot.com",
  messagingSenderId: "727572001421",
  appId: "1:727572001421:web:fa767c599d3927946528c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);