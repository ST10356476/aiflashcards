// pages/api/create-checkout-session.js
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15', // Ensure this version matches your Stripe account settings
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { flashcardId } = req.body;

      // Create a Checkout Session with the required information
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `Flashcard Access: ${flashcardId}`,
              },
              unit_amount: 500, // Amount in cents ($50.00)
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`, // Replace with your success URL
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,   // Replace with your cancel URL
      });

      // Respond with the session ID
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
