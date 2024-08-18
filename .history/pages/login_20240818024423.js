// pages/login.tsx
import { SignIn } from '@clerk/nextjs';
import '../styles/globals.css'; // Adjust the path if necessary

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-neonGreen">
        Please Sign In
      </h1>
      <SignIn />
    </div>
  );
}
