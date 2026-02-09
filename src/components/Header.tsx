'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import styles from './Header.module.css';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'All Products', href: '/products' },
    { name: 'Grocery & Foods', href: '/category/grocery-foods' },
    { name: 'Pets Supplies', href: '/category/pets-supplies' },
    { name: 'Water & Beverages', href: '/category/water-beverages' },
    { name: 'Household Essentials', href: '/category/household-essentials' },
    { name: 'Apparels', href: '/category/apparels' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const getItemCount = useCartStore((state) => state.getItemCount);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Also stop Lenis smooth scroll
            window.lenis?.stop();
        } else {
            document.body.style.overflow = '';
            // Resume Lenis smooth scroll
            window.lenis?.start();
        }

        return () => {
            document.body.style.overflow = '';
            window.lenis?.start();
        };
    }, [isMenuOpen]);

    const itemCount = mounted ? getItemCount() : 0;

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>📦</span>
                    APL Logistics
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={styles.navLink}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <Link href="/cart" className={styles.cartBtn}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
                    </Link>

                    <button
                        className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnActive : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
