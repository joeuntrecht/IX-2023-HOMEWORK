// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtSmjfx0or8kmwRHA1VaNdypLagNFirJI",
  authDomain: "library-73580.firebaseapp.com",
  projectId: "library-73580",
  storageBucket: "library-73580.appspot.com",
  messagingSenderId: "48594840363",
  appId: "1:48594840363:web:010f818c83d2428be9b36e",
  measurementId: "G-P31DLC6P6B"
};

// Initialize Firebase and Firestorm
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export{db, auth};
