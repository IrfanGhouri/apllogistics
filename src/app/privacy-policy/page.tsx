import styles from './page.module.css';

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Privacy Policy</h1>
                    <p>Last updated: February 2026</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.document}>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to APL Logistics. We respect your privacy and are committed to protecting
                            your personal data. This privacy policy explains how we collect, use, and safeguard
                            your information when you visit our website or make a purchase.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>We collect several types of information from and about users of our website:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and billing information when you create an account or make a purchase.</li>
                            <li><strong>Transaction Data:</strong> Details about purchases and orders you make through our platform.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and products viewed.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process and fulfill your orders</li>
                            <li>Send you order confirmations and shipping updates</li>
                            <li>Provide customer support</li>
                            <li>Improve our website and services</li>
                            <li>Send promotional emails (with your consent)</li>
                            <li>Prevent fraud and enhance security</li>
                        </ul>

                        <h2>4. Information Sharing</h2>
                        <p>
                            We do not sell your personal information to third parties. We may share your
                            information with trusted service providers who assist us in operating our business,
                            such as payment processors and shipping carriers. These parties are bound by
                            confidentiality agreements.
                        </p>

                        <h2>5. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your personal
                            information. All payment transactions are encrypted using SSL technology.
                            However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h2>6. Cookies</h2>
                        <p>
                            We use cookies to enhance your browsing experience, analyze site traffic, and
                            personalize content. You can control cookie preferences through your browser settings.
                        </p>

                        <h2>7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt out of marketing communications</li>
                            <li>Data portability</li>
                        </ul>

                        <h2>8. Children&apos;s Privacy</h2>
                        <p>
                            Our website is not intended for children under 13 years of age. We do not
                            knowingly collect personal information from children under 13.
                        </p>

                        <h2>9. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of any
                            changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                        </p>

                        <h2>10. Contact Us</h2>
                        <p>
                            If you have questions about this privacy policy, please contact us at:<br />
                            Email: privacy@apllogistics.com<br />
                            Phone: +1 (773) 668-8078<br />
                            Address: 2116 W Birchwood Ave, Suite 3, Chicago, IL 60645
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
