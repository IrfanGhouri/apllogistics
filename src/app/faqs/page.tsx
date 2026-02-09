'use client';

import { useState } from 'react';
import styles from './page.module.css';

const faqs = [
    {
        question: 'What is APL Logistics?',
        answer: 'APL Logistics is a comprehensive e-commerce platform offering quality products across five categories: Grocery & Foods, Pets Supplies, Water & Beverages, Household Essentials, and Apparels. We focus on providing reliable delivery and excellent customer service.'
    },
    {
        question: 'How long does shipping take?',
        answer: 'Standard shipping typically takes 3-5 business days. Express shipping options are available for 1-2 day delivery. Shipping times may vary based on your location and product availability.'
    },
    {
        question: 'Is there free shipping?',
        answer: 'Yes! We offer free shipping on all orders over $50. For orders under $50, a flat shipping fee of $5.99 applies.'
    },
    {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for most products. Items must be in their original condition and packaging. Some products like perishables and personal care items may have different return policies. Please check the product page for specific details.'
    },
    {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you\'ll receive an email with tracking information. You can also log into your account to view order status and tracking details.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. All transactions are secured with industry-standard encryption.'
    },
    {
        question: 'Can I modify or cancel my order?',
        answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, please contact our customer support team as soon as possible, and we\'ll do our best to accommodate your request.'
    },
    {
        question: 'How do I contact customer support?',
        answer: 'You can reach our customer support team via email at support@apllogistics.com, phone at +1 (773) 668-8078 (Mon-Fri, 9AM-6PM), or through our Contact Us page. We typically respond within 24 hours.'
    },
    {
        question: 'Are the products authentic?',
        answer: 'Absolutely! We only work with verified suppliers and authorized distributors. All products sold on APL Logistics are 100% authentic and backed by our quality guarantee.'
    },
    {
        question: 'Do you offer wholesale pricing?',
        answer: 'Yes, we offer wholesale and bulk pricing for businesses. Please contact our sales team at sales@apllogistics.com for more information about corporate accounts and volume discounts.'
    }
];

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about APL Logistics</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <h2>Still have questions?</h2>
                        <p>Our customer support team is here to help.</p>
                        <a href="/contact" className="btn btn-primary">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
