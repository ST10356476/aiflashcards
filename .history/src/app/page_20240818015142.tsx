// src/app/page.tsx
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-black text-white p-6">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-neonBlue">
        Welcome to FlashGenius
      </h1>
      <p className="text-lg mb-8 text-center max-w-lg">
        Explore the ultimate flashcard experience with FlashGenius. Discover powerful tools for learning and mastering new concepts.
      </p>
      <Link href="/flashcards">
        <button className="px-8 py-4 bg-neonBlue text-white font-semibold text-xl rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          Go to Flashcards
        </button>
      </Link>
    </div>
  );
}
