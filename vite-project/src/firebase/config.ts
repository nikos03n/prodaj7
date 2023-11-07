// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLYa_II28JaOufkPLQNA4OxN7IHN4TQ8U",
  authDomain: "prodaj7-63697.firebaseapp.com",
  projectId: "prodaj7-63697",
  storageBucket: "prodaj7-63697.appspot.com",
  messagingSenderId: "777218247044",
  appId: "1:777218247044:web:a6dc9690fe65f2769b35d1",
  measurementId: "G-CY0ZVZDQG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);