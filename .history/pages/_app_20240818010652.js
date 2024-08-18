import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const clerkFrontendApi = "pk_test_aGFuZHktb3NwcmV5LTguY2xlcmsuYWNjb3VudHMuZGV2JA";

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
