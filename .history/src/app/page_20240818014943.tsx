// src/app/page.tsx
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-neonGreen">
        Welcome to FlashGenius
      </h1>
      <p className="text-xl mb-6 text-center">
        This is the default page for your Flashcard SaaS application.
      </p>
      <Link href="/flashcards">
        <button className="px-6 py-3 bg-neonBlue text-white font-semibold text-lg rounded-full shadow-neon hover:shadow-lg transition-all duration-300">
          Go to Flashcards
        </button>
      </Link>
    </div>
  );
}
