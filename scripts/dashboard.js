import {
  auth,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "./firebase.js";

const userEmail = document.querySelector("#user-email");
const signoutButton = document.querySelector("#signout-button");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDes = document.querySelector("#product-description");
const addProductBtn = document.querySelector("#add-product-btn");
const res = document.querySelector('#result')

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.innerText = user.email;
  } else {
    window.location = "./login.html";
  }
});

signoutButton.addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error.message);
  }
});

addProductBtn.addEventListener("click", (e) => {
  e.preventDefault();

  res.innerHTML = `${{productName} , {productPrice} , {productDes}}`


});
