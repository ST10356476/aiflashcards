import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

  if (!clerkFrontendApi) {
    console.error('Clerk frontend API key is missing.');
  }

  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)} // Use Next.js router for navigation
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
