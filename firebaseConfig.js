


import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "",
    authDomain: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
    measurementId: 
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
