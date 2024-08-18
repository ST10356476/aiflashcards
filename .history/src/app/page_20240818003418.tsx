import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the default page.</p>
      <Link href="/flashcards">
        <button>Go to Flashcards</button>
      </Link>
    </div>
  );
}
