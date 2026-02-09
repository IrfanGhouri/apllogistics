'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

interface ProductDetailClientProps {
    product: Product | undefined;
    relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [mounted, setMounted] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!product || !mounted) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
            );
            gsap.fromTo(contentRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
            );
        });
        return () => ctx.revert();
    }, [product, mounted]);

    if (!mounted) {
        return (
            <section className={styles.loading}>
                <div className={styles.container}>
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    if (!product) {
        return (
            <section className={styles.notFound}>
                <div className={styles.container}>
                    <h1>Product Not Found</h1>
                    <p>The product you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/products" className="btn btn-primary">
                        Browse Products
                    </Link>
                </div>
            </section>
        );
    }

    const handleAddToCart = () => {
        if (isAdding) return;
        setIsAdding(true);

        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }

        setTimeout(() => setIsAdding(false), 800);
    };

    return (
        <>
            <section className={styles.breadcrumb}>
                <div className={styles.container}>
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/products">Products</Link>
                    <span>/</span>
                    <Link href={`/category/${product.categorySlug}`}>{product.category}</Link>
                    <span>/</span>
                    <span className={styles.current}>{product.name}</span>
                </div>
            </section>

            <section className={styles.productSection}>
                <div className={styles.container}>
                    <div className={styles.productLayout}>
                        <div ref={imageRef} className={styles.imageSection}>
                            <div className={styles.mainImage}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    className={styles.image}
                                />
                                {product.originalPrice && (
                                    <span className={styles.saleBadge}>
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        <div ref={contentRef} className={styles.contentSection}>
                            <span className={styles.category}>{product.category}</span>
                            <h1 className={styles.title}>{product.name}</h1>

                            <div className={styles.rating}>
                                <span className={styles.stars}>
                                    {'★'.repeat(Math.floor(product.rating))}
                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                </span>
                                <span className={styles.ratingValue}>{product.rating}</span>
                                <span className={styles.reviews}>({product.reviews} reviews)</span>
                            </div>

                            <div className={styles.priceBlock}>
                                <span className={styles.price}>${product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                    <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
                                )}
                            </div>

                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.stockStatus}>
                                {product.inStock ? (
                                    <span className={styles.inStock}>✓ In Stock</span>
                                ) : (
                                    <span className={styles.outOfStock}>✗ Out of Stock</span>
                                )}
                            </div>

                            <div className={styles.addToCartSection}>
                                <div className={styles.quantitySelector}>
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        disabled={quantity <= 1}
                                    >
                                        −
                                    </button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)}>+</button>
                                </div>
                                <button
                                    className={`btn btn-primary btn-lg ${styles.addToCartBtn} ${isAdding ? styles.adding : ''}`}
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock || isAdding}
                                >
                                    {isAdding ? (
                                        <>
                                            <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            Added!
                                        </>
                                    ) : (
                                        <>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="8" cy="21" r="1" />
                                                <circle cx="19" cy="21" r="1" />
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                            </svg>
                                            Add to Cart
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>🚚</span>
                                    <span>Free shipping over $50</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>↩️</span>
                                    <span>Easy 30-day returns</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>🔒</span>
                                    <span>Secure checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {relatedProducts.length > 0 && (
                <section className={`section ${styles.relatedSection}`}>
                    <div className={styles.container}>
                        <h2 className="section-title">Related Products</h2>
                        <p className="section-subtitle">You might also like these</p>
                        <div className={styles.relatedGrid}>
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
