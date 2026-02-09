'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { categories } from '@/data/categories';
import { getLatestProducts } from '@/data/products';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: '🚚', value: 'Free Shipping', label: 'On orders over $50' },
  { icon: '⏰', value: '24/7 Support', label: 'Always here to help' },
  { icon: '↩️', value: 'Easy Returns', label: '30-day return policy' },
  { icon: '🔒', value: 'Secure Payment', label: '100% protected' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    text: 'APL Logistics has completely changed how I shop. Fast delivery, great prices, and the quality is always top-notch!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    text: 'We use APL for all our office supplies. Their reliability and customer service are unmatched.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Pet Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    text: 'Finally found a place that has everything my pets need. The pet supplies selection is amazing!',
    rating: 5,
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  const latestProducts = getLatestProducts(8);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTl = gsap.timeline();
      heroTl
        .fromTo(`.${styles.heroContent} > *`,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(`.${styles.heroImageWrapper}`,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
          '-=0.5'
        );

      // Stats animation
      gsap.fromTo(`.${styles.statCard}`,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Categories animation
      gsap.fromTo(`.${styles.categoriesGrid} > *`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Products animation
      gsap.fromTo(`.${styles.productsGrid} > *`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Testimonials animation
      gsap.fromTo(`.${styles.testimonialCard}`,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);


  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>🎉 Free shipping on orders over $50</span>
            <h1 className={styles.heroTitle}>
              Quality Products,
              <span className={styles.heroGradient}> Delivered Fast</span>
            </h1>
            <p className={styles.heroText}>
              Your one-stop shop for groceries, pet supplies, beverages, household essentials,
              and trendy apparels. Experience convenience at its finest.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/products" className="btn btn-primary btn-lg">
                Shop Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/about" className="btn btn-secondary btn-lg">
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageBg} />
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Shopping experience"
              width={600}
              height={500}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
        <div className={styles.heroShapes}>
          <div className={styles.shape1} />
          <div className={styles.shape2} />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className={`section ${styles.categories}`}>
        <div className={styles.container}>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Explore our diverse range of product categories
          </p>
          <div className={`grid-4 ${styles.categoriesGrid}`}>
            {categories.slice(0, 4).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section ref={productsRef} className={`section ${styles.products}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 8 }}>
                Latest Products
              </h2>
              <p className={styles.sectionSubtitle}>
                Discover our newest arrivals
              </p>
            </div>
            <Link href="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
          <div className={`grid-4 ${styles.productsGrid}`}>
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className={`section ${styles.testimonials}`}>
        <div className={styles.container}>
          <h2 className={styles.testimonialsTitle}>What Our Customers Say</h2>
          <p className={styles.testimonialsSubtitle}>
            Don&apos;t just take our word for it
          </p>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className={styles.authorImage}
                  />
                  <div>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
