'use client';

import { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from '@/app/checkout/page.module.css';

// Initialize Stripe outside of the component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface StripePaymentFormProps {
    onSuccess: () => void;
    totalAmount: number;
    disabled?: boolean;
}

// Internal Form Component that uses Stripe hooks
function PaymentForm({ onSuccess, totalAmount, clientSecret, disabled }: StripePaymentFormProps & { clientSecret: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements || disabled) {
            return;
        }

        setProcessing(true);
        setError(null);

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) return;

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
            },
        });

        if (confirmError) {
            setError(confirmError.message || 'An error occurred during payment');
        } else if (paymentIntent.status === 'succeeded') {
            onSuccess();
        }

        setProcessing(false);
    };

    return (
        <div className={styles.formCard} style={{ boxShadow: 'none', padding: 0, background: 'transparent' }}>
            <div className={styles.stripeElementContainer} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '4px', background: 'white' }}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
            </div>

            {error && <div className={styles.errorMessage} style={{ color: '#e63946', marginTop: '1rem' }}>{error}</div>}

            <button
                type="button"
                onClick={handleSubmit}
                disabled={!stripe || processing || disabled}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '2rem' }}
            >
                {processing ? 'Processing...' : disabled ? 'Complete Shipping Info' : `Pay $${totalAmount.toFixed(2)}`}
            </button>
            <p className={styles.stripeNote}>
                Your payment is processed securely by Stripe. We do not store your card details.
            </p>
        </div>
    );
}

// Wrapper Component that fetches clientSecret and provides Elements context
export default function StripePaymentForm({ onSuccess, totalAmount, disabled }: StripePaymentFormProps) {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                // Add a timestamp to avoid any potential caching
                const response = await fetch(`/api/create-payment-intent?t=${Date.now()}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ amount: totalAmount }),
                });
                const data = await response.json();
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                } else if (data.error) {
                    setError(data.error);
                }
            } catch (err) {
                console.error('Failed to fetch client secret:', err);
                setError('Could not initialize payment. Please try again later.');
            }
        };

        if (totalAmount > 0) {
            fetchClientSecret();
        }
    }, [totalAmount]);

    if (error) {
        return <div className={styles.errorMessage}>{error}</div>;
    }

    if (!clientSecret) {
        return (
            <div className={styles.loadingPayment}>Loading secure card interface...</div>
        );
    }

    return (
        <Elements stripe={stripePromise}>
            <PaymentForm onSuccess={onSuccess} totalAmount={totalAmount} clientSecret={clientSecret} disabled={disabled} />
        </Elements>
    );
}
