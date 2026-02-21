'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import StripeProvider from '@/components/StripeProvider';
import StripePaymentForm from '@/components/StripePaymentForm';
import styles from './page.module.css';

export default function CheckoutPage() {
    const [mounted, setMounted] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'zelle'>('card');
    const { items, getTotal, clearCart } = useCartStore();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const isFormValid = formData.firstName && formData.lastName && formData.email &&
        formData.phone && formData.address && formData.city &&
        formData.state && formData.zipCode;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };


    const handlePaymentSuccess = () => {
        setOrderPlaced(true);
        clearCart();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Billing info is handled by the form state, 
        // Stripe payment is handled by handlePaymentSuccess callback
    };


    useEffect(() => {
        setMounted(true);
    }, []);

    // 1. Loading state (Pre-hydration / Client mounting)
    if (!mounted) {
        return (
            <section className={styles.loading}>
                <div className={styles.container}>
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    // 2. Success state
    if (orderPlaced) {
        return (
            <>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1>Order Confirmed!</h1>
                        <p>Thank you for your purchase</p>
                    </div>
                </section>

                <section className={styles.success}>
                    <div className={styles.container}>
                        <div className={styles.successCard}>
                            <div className={styles.successIcon}>✓</div>
                            <h2>Your order has been placed successfully!</h2>
                            <p>We&apos;ve sent a confirmation email to your inbox with the order details.</p>
                            <p className={styles.orderNumber}>Order #APL{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                            <Link href="/products" className="btn btn-primary">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    // 3. Empty cart state
    if (items.length === 0) {
        return (
            <>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1>Checkout</h1>
                        <p>Complete your order</p>
                    </div>
                </section>

                <section className={styles.emptyCart}>
                    <div className={styles.container}>
                        <div className={styles.emptyState}>
                            <h3>Your cart is empty</h3>
                            <p>Add some items to your cart before checking out</p>
                            <Link href="/products" className="btn btn-primary">
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }


    const subtotal = getTotal();
    const shipping = subtotal >= 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;


    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Checkout</h1>
                    <p>Complete your order</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.checkoutLayout}>
                        <div className={styles.formSection}>
                            <form className={styles.formCard}>
                                <h2>Shipping Information</h2>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label className={styles.label}>Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>ZIP Code</label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                </div>
                            </form>

                            <div className={styles.formCard} style={{ marginTop: '2rem' }}>
                                <h2>Payment Method</h2>
                                <div className={styles.paymentMethods}>
                                    <div
                                        className={`${styles.methodCard} ${paymentMethod === 'card' ? styles.active : ''}`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <div className={styles.methodIcon}>💳</div>
                                        <div className={styles.methodName}>Card</div>
                                    </div>
                                    <div
                                        className={`${styles.methodCard} ${paymentMethod === 'bank' ? styles.active : ''}`}
                                        onClick={() => setPaymentMethod('bank')}
                                    >
                                        <div className={styles.methodIcon}>🏦</div>
                                        <div className={styles.methodName}>Bank</div>
                                    </div>
                                    <div
                                        className={`${styles.methodCard} ${paymentMethod === 'zelle' ? styles.active : ''}`}
                                        onClick={() => setPaymentMethod('zelle')}
                                    >
                                        <div className={styles.methodIcon}>📱</div>
                                        <div className={styles.methodName}>Zelle</div>
                                    </div>
                                </div>

                                {paymentMethod === 'card' && (
                                    <StripePaymentForm
                                        onSuccess={handlePaymentSuccess}
                                        totalAmount={total}
                                        disabled={!isFormValid}
                                    />
                                )}

                                {paymentMethod === 'bank' && (
                                    <div className={styles.instructionBox}>
                                        <h3>Bank Transfer Details</h3>
                                        <p>Please transfer the total amount to the following account:</p>
                                        <ul>
                                            <li><strong>Bank:</strong> Revolut</li>
                                            <li><strong>Account Name:</strong> APL Logistics LLC</li>
                                            <li><strong>Account Number:</strong> 214617352526</li>
                                        </ul>
                                        <p className={styles.screenshotNote}>
                                            ⚠️ IMPORTANT: Send a screenshot/receipt of the payment to +1 (773) 668-8078 on WhatsApp to confirm your order.
                                        </p>
                                        <button
                                            onClick={handlePaymentSuccess}
                                            disabled={!isFormValid}
                                            className="btn btn-primary"
                                            style={{ width: '100%', marginTop: '1.5rem' }}
                                        >
                                            {isFormValid ? 'Place Order (Bank Transfer)' : 'Complete Shipping Details First'}
                                        </button>
                                    </div>
                                )}

                                {paymentMethod === 'zelle' && (
                                    <div className={styles.instructionBox}>
                                        <h3>Zelle Payment Instructions</h3>
                                        <p>Send your payment via Zelle to:</p>
                                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '1rem 0' }}>
                                            achilleas.loumis@gmail.com
                                        </p>
                                        <p className={styles.screenshotNote}>
                                            ⚠️ IMPORTANT: Send a screenshot of the Zelle confirmation to +1 (773) 668-8078 on WhatsApp to confirm your order.
                                        </p>
                                        <button
                                            onClick={handlePaymentSuccess}
                                            disabled={!isFormValid}
                                            className="btn btn-primary"
                                            style={{ width: '100%', marginTop: '1.5rem' }}
                                        >
                                            {isFormValid ? 'Place Order (Zelle)' : 'Complete Shipping Details First'}
                                        </button>
                                    </div>
                                )}

                                {!isFormValid && (
                                    <div className={styles.validationWarning}>
                                        Please fill in all shipping details to enable payment.
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <div className={styles.orderItems}>
                                {items.map((item) => (
                                    <div key={item.product.id} className={styles.orderItem}>
                                        <div className={styles.orderItemImage}>
                                            <Image
                                                src={item.product.image}
                                                alt={item.product.name}
                                                fill
                                                sizes="60px"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={styles.orderItemDetails}>
                                            <p className={styles.orderItemName}>{item.product.name}</p>
                                            <p className={styles.orderItemQty}>Qty: {item.quantity}</p>
                                        </div>
                                        <p className={styles.orderItemPrice}>
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Link href="/cart" className={styles.backLink}>
                                ← Back to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

