import styles from './page.module.css';

export default function TermsConditionsPage() {
    return (
        <>
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>Terms & Conditions</h1>
                    <p>Last updated: February 2026</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.document}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the APL Logistics website, you accept and agree to be bound
                            by these Terms and Conditions. If you do not agree to these terms, please do not
                            use our website or services.
                        </p>

                        <h2>2. Use of the Website</h2>
                        <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
                        <ul>
                            <li>Infringe the rights of others</li>
                            <li>Restrict or inhibit others&apos; use of the website</li>
                            <li>Violate any applicable laws or regulations</li>
                            <li>Interfere with the proper functioning of the website</li>
                        </ul>

                        <h2>3. Account Registration</h2>
                        <p>
                            When creating an account, you must provide accurate and complete information.
                            You are responsible for maintaining the confidentiality of your account credentials
                            and for all activities that occur under your account.
                        </p>

                        <h2>4. Products and Pricing</h2>
                        <p>
                            We strive to display accurate product information and pricing. However, errors may
                            occur. We reserve the right to correct any errors and to cancel orders based on
                            incorrect pricing. Prices are subject to change without notice.
                        </p>

                        <h2>5. Orders and Payment</h2>
                        <p>
                            By placing an order, you are making an offer to purchase products. We reserve the
                            right to accept or decline any order. Payment must be made at the time of order
                            placement. We accept major credit cards and other payment methods as displayed.
                        </p>

                        <h2>6. Shipping and Delivery</h2>
                        <p>
                            Shipping times are estimates and not guaranteed. We are not responsible for delays
                            caused by shipping carriers, customs, or other factors beyond our control. Risk of
                            loss passes to you upon delivery to the carrier.
                        </p>

                        <h2>7. Returns and Refunds</h2>
                        <p>
                            Our 30-day return policy applies to most products. Items must be unused and in
                            original packaging. Some products may have different return policies. Refunds
                            will be processed within 5-10 business days after we receive the returned item.
                        </p>

                        <h2>8. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, images, and software,
                            is the property of APL Logistics or its content suppliers and is protected by
                            intellectual property laws. You may not reproduce, distribute, or create derivative
                            works without our prior written consent.
                        </p>

                        <h2>9. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, APL Logistics shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages arising from your
                            use of the website or purchase of products.
                        </p>

                        <h2>10. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless APL Logistics, its officers, directors,
                            employees, and agents from any claims, damages, losses, or expenses arising from
                            your violation of these terms or your use of the website.
                        </p>

                        <h2>11. Governing Law</h2>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with
                            the laws of the jurisdiction in which APL Logistics operates, without regard to
                            its conflict of law provisions.
                        </p>

                        <h2>12. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Changes will be effective
                            immediately upon posting to the website. Your continued use of the website after
                            any changes constitutes acceptance of the new terms.
                        </p>

                        <h2>13. Contact Information</h2>
                        <p>
                            For questions about these Terms and Conditions, please contact us at:<br />
                            Email: legal@apllogistics.com<br />
                            Phone: +1 (773) 668-8078<br />
                            Address: 2116 W Birchwood Ave, Suite 3, Chicago, IL 60645
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
