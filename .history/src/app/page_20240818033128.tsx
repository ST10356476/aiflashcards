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

      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/flashcards">
              <a className={styles.navLink}>Flashcards</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <a className={styles.navLink}>About Us</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/faq">
              <a className={styles.navLink}>FAQ</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/flashcards">
        <button className={styles.button}>
          Go to Flashcards
        </button>
      </Link>
    </div>
  );
}
