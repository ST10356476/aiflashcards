// pages/flashcards.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { db } from '../firebaseConfig';  // Ensure this file exports a configured Firestore instance
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { generateFlashcards } from '../openai';  // Ensure this file exports a function to generate flashcards
import styles from '../styles/flashcards.module.css';  // Ensure this CSS module exists

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function FlashcardsPage() {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  // Fetch flashcards from Firestore on page load
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'flashcards'));
        const flashcardsData = querySnapshot.docs.map(doc => doc.data());
        setFlashcards(flashcardsData);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  // Generate flashcards using OpenAI and save to Firestore
  const handleGenerateFlashcards = async () => {
    if (!topic) {
      alert('Please enter a topic.');
      return;
    }

    try {
      const generatedFlashcards = await generateFlashcards(topic);
      const newFlashcardSet = { topic, flashcards: generatedFlashcards };

      setFlashcards([...flashcards, newFlashcardSet]);

      await addDoc(collection(db, 'flashcards'), newFlashcardSet);
    } catch (error) {
      console.error('Error generating or saving flashcards:', error);
    }
  };

  // Handle Stripe checkout
  const handleCheckout = async (flashcardId) => {
    try {
      const stripe = await stripePromise;
      const response = await axios.post('/api/create-checkout-session', { flashcardId });
      const sessionId = response.data.id;

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    }
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
            <button onClick={() => handleCheckout(cardSet.topic)} className={styles.button}>
              Purchase Access for $5
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
