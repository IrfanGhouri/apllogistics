'use client';

import { ReactNode } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe with the publishable key from environment variables
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface StripeProviderProps {
    children: ReactNode;
}

export default function StripeProvider({ children }: StripeProviderProps) {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
        console.warn('Stripe Publishable Key is missing. Check your .env house file.');
    }

    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    );
}
