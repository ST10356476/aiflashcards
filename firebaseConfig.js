


import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "",
    authDomain: "flashgenius-fd78d.firebaseapp.com",
    projectId: "flashgenius-fd78d",
    storageBucket: "flashgenius-fd78d.appspot.com",
    messagingSenderId: "1028067672049",
    appId: "1:1028067672049:web:01f4b273dbbfa6c462ce50",
    measurementId: "G-50B5N50ZTB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getCollectionData = async () => {
  try {
    const colRef = collection(db, 'flashcards'); // Ensure 'flashcards' is your actual collection name
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map(doc => doc.data());
    console.log(data);
  } catch (error) {
    console.error('Error getting collection data:', error);
  }
};
