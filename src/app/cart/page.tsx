'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import styles from './page.module.css';

export default function CartPage() {
    const [mounted, setMounted] = useState(false);
    const [loadingItems, setLoadingItems] = useState<{ [key: string]: string }>({});
    const { items, removeFromCart, updateQuantity, getTotal } = useCartStore();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleUpdateQuantity = (productId: string, newQuantity: number, action: string) => {
        setLoadingItems(prev => ({ ...prev, [productId]: action }));
        updateQuantity(productId, newQuantity);
        setTimeout(() => {
            setLoadingItems(prev => {
                const updated = { ...prev };
                delete updated[productId];
                return updated;
            });
        }, 300);
    };

    const handleRemove = (productId: string) => {
        setLoadingItems(prev => ({ ...prev, [productId]: 'remove' }));
        setTimeout(() => {
            removeFromCart(productId);
        }, 200);
    };

    if (!mounted) {
        return (
            <section className={styles.loading}>
                <div className={styles.container}>
                    <p>Loading cart...</p>
                </div>
            </section>
        );
    }

    if (items.length === 0) {
        return (
            <>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1>Your Cart</h1>
                        <p>Review your items before checkout</p>
                    </div>
                </section>

                <section className={styles.emptyCart}>
                    <div className={styles.container}>
                        <div className={styles.emptyState}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="8" cy="21" r="1" />
                                <circle cx="19" cy="21" r="1" />
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                            </svg>
                            <h3>Your cart is empty</h3>
                            <p>Looks like you haven&apos;t added any items yet</p>
                            <Link href="/products" className="btn btn-primary">
                                Start Shopping
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Your Cart</h1>
                    <p>{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.cartLayout}>
                        <div className={styles.cartItems}>
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className={`${styles.cartItem} ${loadingItems[item.product.id] === 'remove' ? styles.removing : ''}`}
                                >
                                    <div className={styles.itemImage}>
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            fill
                                            sizes="100px"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3 className={styles.itemName}>{item.product.name}</h3>
                                        <p className={styles.itemCategory}>{item.product.category}</p>
                                        <p className={styles.itemPrice}>${item.product.price.toFixed(2)}</p>
                                    </div>
                                    <div className={styles.itemActions}>
                                        <div className={styles.quantityControl}>
                                            <button
                                                className={`${styles.quantityBtn} ${loadingItems[item.product.id] === 'decrease' ? styles.active : ''}`}
                                                onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1, 'decrease')}
                                                disabled={!!loadingItems[item.product.id]}
                                            >
                                                −
                                            </button>
                                            <span className={styles.quantityValue}>{item.quantity}</span>
                                            <button
                                                className={`${styles.quantityBtn} ${loadingItems[item.product.id] === 'increase' ? styles.active : ''}`}
                                                onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1, 'increase')}
                                                disabled={!!loadingItems[item.product.id]}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className={styles.itemTotal}>
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                        <button
                                            className={`${styles.removeBtn} ${loadingItems[item.product.id] === 'remove' ? styles.removing : ''}`}
                                            onClick={() => handleRemove(item.product.id)}
                                            disabled={!!loadingItems[item.product.id]}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${getTotal().toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span>{getTotal() >= 50 ? 'Free' : '$5.99'}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Tax</span>
                                <span>${(getTotal() * 0.08).toFixed(2)}</span>
                            </div>
                            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                                <span>Total</span>
                                <span>
                                    ${(getTotal() + (getTotal() >= 50 ? 0 : 5.99) + getTotal() * 0.08).toFixed(2)}
                                </span>
                            </div>
                            <Link href="/checkout" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                Proceed to Checkout
                            </Link>
                            <Link href="/products" className={styles.continueLink}>
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
