// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl-M9p4FhL5Vx7_QcL4ifR2WDqdKQ95A0",
  authDomain: "bookstay-b29b8.firebaseapp.com",
  projectId: "bookstay-b29b8",
  storageBucket: "bookstay-b29b8.appspot.com",
  messagingSenderId: "522496313200",
  appId: "1:522496313200:web:b43888c255c646ce5531b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth,provider };
