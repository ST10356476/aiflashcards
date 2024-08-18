// src/app/page.tsx
import Link from 'next/link';
import React from 'react';
import styles from '../app/HomePage.module.css'; // Ensure this path is correct

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Welcome to FlashGenius
      </h1>
      <p className={styles.description}>
        Explore the ultimate flashcard experience with FlashGenius. Discover powerful tools for learning and mastering new concepts.
      </p>
      <Link href="/flashcards">
        <button className={styles.button}>
          Go to Flashcards
        </button>
      </Link>
    </div>
  );
}
