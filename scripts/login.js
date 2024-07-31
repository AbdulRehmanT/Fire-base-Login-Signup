import { auth, signInWithEmailAndPassword } from "./firebase.js";

const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", async  (event) => {
  event.preventDefault();
  try {
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#password").value;
    
    const result = await signInWithEmailAndPassword(auth,email,pass)
    // console.log(`Email: ${email}`);
    // console.log(`Password: ${pass}`);

    window.location = "./dashboard.html";
  } catch (error) {
    alert(error.message);
  }
});
