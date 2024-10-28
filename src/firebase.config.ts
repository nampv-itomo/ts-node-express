// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCakg3Kx4A2eCZm2o6l0fg3WUeeFkOm3MI",
  authDomain: "test-otp-13a6d.firebaseapp.com",
  projectId: "test-otp-13a6d",
  storageBucket: "test-otp-13a6d.appspot.com",
  messagingSenderId: "654232418257",
  appId: "1:654232418257:web:dc841724e694508ac352f0",
  measurementId: "G-Z3EB3ZM2QS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
