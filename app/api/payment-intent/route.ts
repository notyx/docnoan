import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy');

export async function POST() {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 9700, // 97.00 EUR
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      metadata: {
        product: 'Formation Vente de Produits Digitaux',
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Erreur inconnue';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
