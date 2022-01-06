// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGEwEIPFS7LzSBL8RMpNiu29VndKVsP0U",
  authDomain: "house-marketplace-d997d.firebaseapp.com",
  projectId: "house-marketplace-d997d",
  storageBucket: "house-marketplace-d997d.appspot.com",
  messagingSenderId: "662034399497",
  appId: "1:662034399497:web:5c069d2eee2002331413d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()