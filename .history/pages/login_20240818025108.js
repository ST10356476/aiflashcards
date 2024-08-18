import { SignIn } from '@clerk/nextjs';
import styles from '../styles/login.module.css'; // Ensure this path is correct

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please Sign In</h1>
      <div className={styles.signinContainer}>
        <SignIn />
      </div>
    </div>
  );
}
