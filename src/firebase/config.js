// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJBnozYJv_1rUbQKTlZ-tt2pLKAKH7JzI",
  authDomain: "proyectofinalreact-437b3.firebaseapp.com",
  projectId: "proyectofinalreact-437b3",
  storageBucket: "proyectofinalreact-437b3.appspot.com",
  messagingSenderId: "346895015152",
  appId: "1:346895015152:web:1b1afb39c68e48377a3635",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
