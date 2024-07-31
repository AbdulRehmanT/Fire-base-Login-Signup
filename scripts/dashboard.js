import {auth, onAuthStateChanged, signOut} from "./firebase.js"

const userEmail = document.querySelector('#user-email')
const signoutButton = document.querySelector("#signout-button");


onAuthStateChanged(auth, (user) => {
    if (user) {
        userEmail.innerText = user.email
    } else {
      window.location = "./login.html";
    }
  });
  

signoutButton.addEventListener('click', async () => {
    try {
        await signOut(auth)
    } catch (error) {
        alert(error.message)
    }
    
})