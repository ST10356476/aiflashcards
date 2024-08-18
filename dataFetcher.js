// dataFetcher.js
import { db } from './firebaseConfig'; // Import the Firestore instance
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
