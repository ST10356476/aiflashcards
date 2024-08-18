// pages/login.tsx
import { SignIn } from '@clerk/nextjs';
import styles from '../styles/login.module.css'; // Adjust the path if necessary

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className={styles.signin-heading}>
        Please Sign In
      </h1>
      <div className={styles.signin-container}>
        <SignIn
          path="/sign-in" // Ensure to specify the path if required
          signUpUrl="/sign-up" // Optional: if you have a sign-up page
        />
      </div>
    </div>
  );
}
