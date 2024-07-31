import { auth,createUserWithEmailAndPassword } from "./firebase.js";

const signupButton = document.querySelector("#signup-button");

signupButton.addEventListener("click", async (event) => {
  event.preventDefault();
 
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#password").value;
  const conPass = document.querySelector("#confirm-password").value;


  if (pass !== conPass) {
    alert("Passwords do not match");
    
  } else {
    try {
      const result = await createUserWithEmailAndPassword(auth, email , pass)
      // console.log(`Email: ${email}`);
      // console.log(`Password: ${pass}`);
  
      window.location = "./dashboard.html";
      
    } catch (error) {
      alert(error.message)
    }
  }
});


