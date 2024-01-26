import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD-Ap9ghqkbS0p4dArg1w1NR8dyZM7GSUs",
    authDomain: "olx-web-app-3cc0b.firebaseapp.com",
    projectId: "olx-web-app-3cc0b",
    storageBucket: "olx-web-app-3cc0b.appspot.com",
    messagingSenderId: "840429672519",
    appId: "1:840429672519:web:bd63ce3fc083869b513962",
    measurementId: "G-E7F394ZBQ5"
  };
  






  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


export  function registerApp(user){

    const {email, password} = user

    createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed up 
    // const user = userCredential.user;
    // ...
    alert("Successfully registered")
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });


}



export  function loginApp(user){
const [email, password] = user

    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed in 
    // const user = userCredential.user;
    // ...
    alert("Successfully registered")
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });


}


