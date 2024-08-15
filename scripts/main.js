import {
  auth,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location = "./pages/dashboard.html";
  } else {
    window.location = "./pages/login.html";
  }
});