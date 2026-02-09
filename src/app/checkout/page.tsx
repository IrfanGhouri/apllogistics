'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import styles from './page.module.css';

export default function CheckoutPage() {
    const [mounted, setMounted] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
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
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate order placement
        setOrderPlaced(true);
        clearCart();
    };

    if (!mounted) {
        return (
            <section className={styles.loading}>
                <div className={styles.container}>
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

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
                    <form onSubmit={handleSubmit} className={styles.checkoutLayout}>
                        <div className={styles.formSection}>
                            <div className={styles.formCard}>
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
                            </div>

                            <div className={styles.formCard}>
                                <h2>Payment Information</h2>
                                <div className={styles.formGrid}>
                                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                        <label className={styles.label}>Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="1234 5678 9012 3456"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Expiry Date</label>
                                        <input
                                            type="text"
                                            name="expiry"
                                            value={formData.expiry}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="MM/YY"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="123"
                                            required
                                        />
                                    </div>
                                </div>
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
                            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                Place Order
                            </button>
                            <Link href="/cart" className={styles.backLink}>
                                ← Back to Cart
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
