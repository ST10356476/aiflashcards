// pages/index.js
import Link from 'next/link';
import React from 'react';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to FlashGenius</h1>
      <p className={styles.description}>This is your AI-powered flashcard assistant.</p>
      <Link href="/flashcards">
        <a className={styles.button}>Go to Flashcards</a>
      </Link>
    </div>
  );
}
