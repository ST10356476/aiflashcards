import { ClerkProvider } from '@clerk/nextjs';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const clerkFrontendApi = process.env.VITE_CLERK_PUBLISHABLE_KEY;

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
