'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { getProductsByCategory } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function PetsSuppliesPage() {
    const category = getCategoryBySlug('pets-supplies');
    const categoryProducts = getProductsByCategory('pets-supplies');
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gridRef.current && gridRef.current.children.length > 0) {
            const ctx = gsap.context(() => {
                gsap.fromTo(gridRef.current!.children,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
                );
            });
            return () => ctx.revert();
        }
    }, []);

    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>{category?.name}</h1>
                    <p>{category?.description}</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.resultCount}>
                        {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''} available
                    </p>

                    <div ref={gridRef} className={styles.productsGrid}>
                        {categoryProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
