import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const clerkFrontendApi = process.env.CLERK_FRONTEND_API;

  if (!clerkFrontendApi) {
    console.error('Clerk publishable key is missing.');
  }

  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}  // Using Next.js router instead of window.location.href
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
