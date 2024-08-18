import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Use environment variable for the publishable key
  const clerkFrontendApi = process.env.CLERK_FRONTEND_API;

  useEffect(() => {
    if (!clerkFrontendApi) {
      console.error('Clerk publishable key is missing.');
    }
  }, [clerkFrontendApi]);

  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => {
        window.location.href = to;
      }}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
