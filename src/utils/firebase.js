// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC64Rt9oP1Xorpm_x9wVaO_60D6a8K2rio",
  authDomain: "myflix-ed777.firebaseapp.com",
  projectId: "myflix-ed777",
  storageBucket: "myflix-ed777.appspot.com",
  messagingSenderId: "606946944556",
  appId: "1:606946944556:web:496791c5e947874ebdd389",
  measurementId: "G-MGGEWD82YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();