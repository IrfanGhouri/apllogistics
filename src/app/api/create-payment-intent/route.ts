import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: Request) {
    try {
        const { amount } = await request.json();

        // Create a PaymentIntent with strictly 'card' payment method
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Stripe expects amounts in cents
            currency: 'usd',
            payment_method_types: ['card'],
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        console.error('Error creating payment intent:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
