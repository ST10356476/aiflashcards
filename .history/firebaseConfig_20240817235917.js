// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChBKirk2CFauviCCNRQMJM1IfdIaZQuQU",
  authDomain: "flashgenius-fd78d.firebaseapp.com",
  projectId: "flashgenius-fd78d",
  storageBucket: "flashgenius-fd78d.appspot.com",
  messagingSenderId: "1028067672049",
  appId: "1:1028067672049:web:01f4b273dbbfa6c462ce50",
  measurementId: "G-50B5N50ZTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);