// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzkLcA0A6cuJuixnHbk806mXk5x8Uwa3U",
  authDomain: "programacion---tp3.firebaseapp.com",
  projectId: "programacion---tp3",
  storageBucket: "programacion---tp3.appspot.com",
  messagingSenderId: "1033450028686",
  appId: "1:1033450028686:web:62676d680503e0081dd3df"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;