/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mer-blog-5baf3.firebaseapp.com",
  projectId: "mer-blog-5baf3",
  storageBucket: "mer-blog-5baf3.firebasestorage.app",
  messagingSenderId: "543945721152",
  appId: "1:543945721152:web:86a024ad9f87082f3ba6a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



