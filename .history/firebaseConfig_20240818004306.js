
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };