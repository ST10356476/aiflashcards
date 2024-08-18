// pages/_app.js
import { ClerkProvider } from '@clerk/clerk-react';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi="Ypk_test_aGFuZHktb3NwcmV5LTguY2xlcmsuYWNjb3VudHMuZGV2JA">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;


