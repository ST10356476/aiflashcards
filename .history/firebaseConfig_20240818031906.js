// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChBKirk2CFauviCCNRQMJM1IfdIaZQuQU",
    authDomain: "flashgenius-fd78d.firebaseapp.com",
    projectId: "flashgenius-fd78d",
    storageBucket: "flashgenius-fd78d.appspot.com",
    messagingSenderId: "1028067672049",
    appId: "1:1028067672049:web:01f4b273dbbfa6c462ce50",
    measurementId: "G-50B5N50ZTB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// dataFetcher.js
import { db } from './firebaseConfig'; // Adjust the path as needed
import { collection, getDocs } from 'firebase/firestore';

const fetchFlashcards = async () => {
  try {
    const colRef = collection(db, 'flashcards'); // Ensure 'flashcards' is your actual collection name
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched flashcards:', data);
    return data;
  } catch (error) {
    console.error('Error getting collection data:', error);
    return [];
  }
};

export default fetchFlashcards;
