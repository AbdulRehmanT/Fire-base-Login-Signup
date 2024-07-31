// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWyF7LwTZ4mQOjwnaq6GtD9C6tOji_0CY",
  authDomain: "app-login-signup.firebaseapp.com",
  projectId: "app-login-signup",
  storageBucket: "app-login-signup.appspot.com",
  messagingSenderId: "468963480352",
  appId: "1:468963480352:web:c8e577a581b3dfb2b57d45",
  measurementId: "G-GE9BK7982D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize Auth
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };
