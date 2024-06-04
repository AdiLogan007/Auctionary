// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "property-palace-bec51.firebaseapp.com",
  projectId: "property-palace-bec51",
  storageBucket: "property-palace-bec51.appspot.com",
  messagingSenderId: "908623739056",
  appId: "1:908623739056:web:75b3394dbdf547d5636375"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);