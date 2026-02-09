import styles from './page.module.css';

export default function AboutPage() {
    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>About Us</h1>
                    <p>Learn more about APL Logistics and our mission</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.story}>
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2020, APL Logistics began with a simple mission: to make quality products
                            accessible to everyone through reliable delivery services. What started as a small
                            local operation has grown into a comprehensive e-commerce platform serving thousands
                            of satisfied customers.
                        </p>
                        <p>
                            We believe that shopping should be convenient, affordable, and enjoyable. That&apos;s why
                            we&apos;ve built partnerships with the best suppliers to bring you premium products across
                            five major categories: Grocery & Foods, Pets Supplies, Water & Beverages, Household
                            Essentials, and Apparels.
                        </p>
                    </div>

                    <div className={styles.values}>
                        <h2>Our Values</h2>
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueCard}>
                                <span className={styles.valueIcon}>🎯</span>
                                <h3>Quality First</h3>
                                <p>We carefully curate every product to ensure it meets our high standards.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <span className={styles.valueIcon}>🤝</span>
                                <h3>Customer Focus</h3>
                                <p>Your satisfaction is our priority. We&apos;re here to help 24/7.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <span className={styles.valueIcon}>⚡</span>
                                <h3>Fast Delivery</h3>
                                <p>We know your time is valuable. That&apos;s why we deliver quickly and reliably.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <span className={styles.valueIcon}>🌱</span>
                                <h3>Sustainability</h3>
                                <p>We&apos;re committed to eco-friendly practices and sustainable packaging.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50K+</span>
                            <span className={styles.statLabel}>Happy Customers</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10K+</span>
                            <span className={styles.statLabel}>Products</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Cities Served</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>4.9</span>
                            <span className={styles.statLabel}>Average Rating</span>
                        </div>
                    </div>

                    <div className={styles.team}>
                        <h2>Our Promise</h2>
                        <p>
                            At APL Logistics, we promise to continue innovating and improving to serve you better.
                            Whether you&apos;re stocking up on groceries, treating your pets, or updating your wardrobe,
                            we&apos;re here to make your shopping experience seamless and enjoyable.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
