// components/RootLayout.tsx
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';
  import '../styles/login.module.css'; // Ensure this path is correct
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </body>
        </html>
      </ClerkProvider>
    );
  }
  