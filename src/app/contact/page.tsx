'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Contact Us</h1>
                    <p>We&apos;d love to hear from you</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.info}>
                            <h2>Get in Touch</h2>
                            <p>Have a question, feedback, or need assistance? Reach out to us and we&apos;ll get back to you as soon as possible.</p>

                            <div className={styles.contactCards}>
                                <div className={styles.contactCard}>
                                    <span className={styles.icon}>📍</span>
                                    <div>
                                        <h3>Address</h3>
                                        <p>2116 W Birchwood Ave, Suite 3<br />Chicago, IL 60645</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <span className={styles.icon}>📞</span>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+1 (773) 668-8078<br />Mon-Fri: 9AM - 6PM</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <span className={styles.icon}>✉️</span>
                                    <div>
                                        <h3>Email</h3>
                                        <p>support@apllogistics.com<br />sales@apllogistics.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            {submitted ? (
                                <div className={styles.success}>
                                    <span className={styles.successIcon}>✓</span>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for contacting us. We&apos;ll respond within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h2>Send a Message</h2>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Email Address</label>
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
                                        <label className={styles.label}>Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.textarea}
                                            rows={5}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
