
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
//   import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDMoEkFBvqPwZJGevcmflSjaq_1sHV3FkM",
    authDomain: "aolx-2564b.firebaseapp.com",
    projectId: "aolx-2564b",
    storageBucket: "aolx-2564b.appspot.com",
    messagingSenderId: "711354405572",
    appId: "1:711354405572:web:59c7738f3f045b5d496f91"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   const auth = getAuth(app);
  console.log(app);
  function signupfunc(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmpassword = document.querySelector('#confirm_password').value;
    console.log("password",password);

    if (password != confirmpassword)
    {
        alert("password and confirm password must be same");
        return ;
    }
    firebase.auth(app).createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            var user = userCredential.user;
            console.log(user);
        })
        .catch(function(error) {
            console.error(error.message);
        });
  }

  function loginfunc() {
    const email = document.querySelector("#login_email").value;
    const password = document.querySelector("#login_password").value;
    firebase.auth(app).signInWithEmailAndPassword(email, password)
    .then((result)=>{
        console.log(result);
    })
    .catch(err => console.error(err.message))
  }

  
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });