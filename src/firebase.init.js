// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7juFLFfGZvzzovnf0w-g3WNwzeBN52iE",
  authDomain: "explore-email-password-a-26872.firebaseapp.com",
  projectId: "explore-email-password-a-26872",
  storageBucket: "explore-email-password-a-26872.firebasestorage.app",
  messagingSenderId: "134897217361",
  appId: "1:134897217361:web:1226cc405a3decc3a22d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);