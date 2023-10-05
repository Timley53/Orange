// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getFirestore
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQmcIntaEYx3acC23FDsF86fxyUlUc1z4",
  authDomain: "orange-3ba1a.firebaseapp.com",
  projectId: "orange-3ba1a",
  storageBucket: "orange-3ba1a.appspot.com",
  messagingSenderId: "57781250361",
  appId: "1:57781250361:web:ce6a7d7212d810df1920e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const database = getFirestore()
// export const database = null;
// export const auth = null;