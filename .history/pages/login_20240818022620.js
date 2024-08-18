// pages/login.js
import { SignIn } from '@clerk/clerk-react';
import styles from '../styles/login.module.css'; // Adjust the path as necessary

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.signInContainer}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.subtitle}>Please sign in to continue.</p>
        <SignIn 
          // Optional: Pass any necessary props to the SignIn component
        />
        {/* Optional: Add a styled button if needed */}
        {/* <button className={styles.signInButton}>Sign In</button> */}
      </div>
    </div>
  );
}
