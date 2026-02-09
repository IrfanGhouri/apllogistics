'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.categorySlug === selectedCategory));
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (gridRef.current && gridRef.current.children.length > 0) {
            const ctx = gsap.context(() => {
                gsap.fromTo(gridRef.current!.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.05,
                        duration: 0.4,
                        ease: 'power2.out'
                    }
                );
            });
            return () => ctx.revert();
        }
    }, [filteredProducts]);

    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>All Products</h1>
                    <p>Browse our complete collection of quality products</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.filters}>
                        <button
                            className={`${styles.filterBtn} ${selectedCategory === 'all' ? styles.active : ''}`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            All Products
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`${styles.filterBtn} ${selectedCategory === cat.slug ? styles.active : ''}`}
                                onClick={() => setSelectedCategory(cat.slug)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <p className={styles.resultCount}>
                        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                    </p>

                    <div ref={gridRef} className={styles.productsGrid}>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
