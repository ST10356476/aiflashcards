// pages/flashcards.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styles from '../styles/flashcards.module.css';

export default function FlashcardsPage() {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const querySnapshot = await getDocs(collection(db, "flashcards"));
      const flashcardsData = querySnapshot.docs.map(doc => doc.data());
      setFlashcards(flashcardsData);
    };

    fetchFlashcards();
  }, []);

  const handleGenerateFlashcards = async () => {
    const generatedFlashcards = await generateFlashcards(topic);
    setFlashcards([...flashcards, { topic, flashcards: generatedFlashcards }]);

    await addDoc(collection(db, "flashcards"), {
      topic,
      flashcards: generatedFlashcards,
    });
  };

  return (
    <div className={styles.container}>
      <h1>AI Flashcards</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
        className={styles.input}
      />
      <button onClick={handleGenerateFlashcards} className={styles.button}>
        Generate Flashcards
      </button>

      <div>
        {flashcards.map((cardSet, index) => (
          <div key={index} className={styles.flashcard}>
            <h3>Topic: {cardSet.topic}</h3>
            {cardSet.flashcards.map((card, idx) => (
              <p key={idx}>{card}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
