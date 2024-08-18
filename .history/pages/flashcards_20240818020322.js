// pages/flashcards.tsx
import { useUser, useClerk } from '@clerk/nextjs';
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { db } from '../firebaseConfig'; // Ensure this file exports a configured Firestore instance
import { collection, getDocs, addDoc } from 'firebase/firestore';
import styles from '../styles/flashcards.module.css'; // Ensure this CSS module exists

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function FlashcardsPage() {
  const { user, isSignedIn } = useUser();
  const [flashcards, setFlashcards] = useState([]);

  // Example flashcards data
  const exampleFlashcards = [
    { id: '1', question: "What is the chemical symbol for Gold?", answer: "Au" },
    { id: '2', question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    { id: '3', question: "What is the capital city of France?", answer: "Paris" },
    { id: '4', question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { id: '5', question: "What element has the atomic number 1?", answer: "Hydrogen" },
    { id: '6', question: "Who is known as the father of modern physics?", answer: "Isaac Newton" },
    { id: '7', question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { id: '8', question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { id: '9', question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
    { id: '10', question: "What gas do plants use for photosynthesis?", answer: "Carbon Dioxide" }
  ];

  // Fetch flashcards from Firestore on page load
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'flashcards'));
        const flashcardsData = querySnapshot.docs.map(doc => doc.data());
        if (flashcardsData.length === 0) {
          // Add example flashcards if none exist
          setFlashcards(exampleFlashcards);
          for (const card of exampleFlashcards) {
            await addDoc(collection(db, 'flashcards'), card);
          }
        } else {
          setFlashcards(flashcardsData);
        }
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

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

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-neonGreen">
          Please Sign In
        </h1>
        <p className="text-xl mb-6 text-center">
          You need to be signed in to access flashcards.
        </p>
        <a href="/login" className="px-6 py-3 bg-neonBlue text-white font-semibold text-lg rounded-full shadow-neon hover:shadow-lg transition-all duration-300">
          Sign In
        </a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FlashGenius</h1>
      <p className={styles.subtitle}>
        Create and explore AI-generated flashcards with a futuristic touch.
      </p>

      <div className="mt-8 w-full max-w-3xl">
        {flashcards.map((card) => (
          <div key={card.id} className={styles.flashcard}>
            <p><strong className="text-neonPink">Q:</strong> {card.question}</p>
            <p><strong className="text-neonBlue">A:</strong> {card.answer}</p>
            <button 
              onClick={() => handleCheckout(card.id)} 
              className={styles.button}
            >
              Purchase Access for $5
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
