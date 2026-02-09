'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isAdding, setIsAdding] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseEnter = () => {
            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isAdding) return;

        setIsAdding(true);
        addToCart(product);

        // Button animation
        const button = e.currentTarget as HTMLButtonElement;
        gsap.fromTo(button,
            { scale: 1 },
            { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
        );

        // Reset after animation
        setTimeout(() => setIsAdding(false), 800);
    };

    return (
        <div ref={cardRef} className={styles.card}>
            <Link href={`/products/${product.slug}`} className={styles.link}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={styles.image}
                    />
                    {product.originalPrice && (
                        <span className={styles.saleBadge}>Sale</span>
                    )}
                </div>
                <div className={styles.content}>
                    <span className={styles.category}>{product.category}</span>
                    <h3 className={styles.title}>{product.name}</h3>
                    <div className={styles.rating}>
                        <span className={styles.stars}>{'★'.repeat(Math.floor(product.rating))}</span>
                        <span className={styles.ratingValue}>{product.rating}</span>
                        <span className={styles.reviews}>({product.reviews})</span>
                    </div>
                    <div className={styles.priceRow}>
                        <div className={styles.prices}>
                            <span className={styles.price}>${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
                            )}
                        </div>
                        <button
                            className={`${styles.addBtn} ${isAdding ? styles.adding : ''}`}
                            onClick={handleAddToCart}
                            aria-label="Add to cart"
                            disabled={isAdding}
                        >
                            {isAdding ? (
                                <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
