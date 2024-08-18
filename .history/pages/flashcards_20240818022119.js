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

  // Example flashcards data
  const exampleFlashcards = [
    { question: "What is the chemical symbol for Gold?", answer: "Au" },
    { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    { question: "What is the capital city of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What element has the atomic number 1?", answer: "Hydrogen" },
    { question: "Who is known as the father of modern physics?", answer: "Isaac Newton" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
    { question: "What gas do plants use for photosynthesis?", answer: "Carbon Dioxide" }
  ];

  // Generate flashcards using OpenAI and save to Firestore
  const handleGenerateFlashcards = async () => {
    if (!topic) {
      alert('Please enter a topic.');
      return;
    }

    try {
      const generatedFlashcards = exampleFlashcards; // Use example flashcards for testing
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
              <div key={idx} className={styles.flashcardItem}>
                <p><strong>Q:</strong> {card.question}</p>
                <p><strong>A:</strong> {card.answer}</p>
              </div>
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
