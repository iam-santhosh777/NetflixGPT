// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp0BuVfTuvCwe18TD9ehXYJvPKRKBlPuU",
  authDomain: "netflixgpt-ee777.firebaseapp.com",
  projectId: "netflixgpt-ee777",
  storageBucket: "netflixgpt-ee777.appspot.com",
  messagingSenderId: "1052686955531",
  appId: "1:1052686955531:web:b5b0445af1817abd68030e",
  measurementId: "G-PXJKBH3PX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);