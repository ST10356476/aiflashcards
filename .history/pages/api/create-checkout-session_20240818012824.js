// pages/api/create-checkout-session.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { flashcardId } = await request.json();

  try {
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
            unit_amount: 5000, // Amount in cents ($50.00)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`, // Replace with your success URL
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,   // Replace with your cancel URL
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.error();
  }
}
