// src/app/page.tsx
import Link from 'next/link';
import React from 'react';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to FlashGenius</h1>
      <p>Your gateway to powerful AI-generated flashcards!</p>
      <Link href="/flashcards">
        <button className={styles.button}>Go to Flashcards</button>
      </Link>
    </div>
  );
}
