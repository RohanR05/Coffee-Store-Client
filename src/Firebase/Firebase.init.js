// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNrfskFD9QRG-JLOJX-BUVntpVriUyb3c",
  authDomain: "coffee-auth-app.firebaseapp.com",
  projectId: "coffee-auth-app",
  storageBucket: "coffee-auth-app.firebasestorage.app",
  messagingSenderId: "473133460282",
  appId: "1:473133460282:web:10c607e292781c7e613e03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);