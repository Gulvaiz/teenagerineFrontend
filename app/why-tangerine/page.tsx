"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function WhyTangerinePage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Header */}
            <section className={styles.headerSection}>
                <h1 className={styles.mainTitle}>WHY TANGERINE LUXURY ?</h1>
                <p className={styles.subTitle}>
                    &quot;Tangerine Luxury&quot; is India&apos;s first entrupy verified portal to buy and sell pre-owned, authenticated luxury online.
                </p>
            </section>

            {/* Section 1: Entrupy */}
            <section className={styles.sectionRow}>
                <div className={styles.contentCol}>
                    <div className={styles.orangeDot}></div>
                    <h2 className={styles.sectionTitle}>ENTRUPY BENEFIT FOREVER?</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionText}>
                        On returns, rescan to confirm identity. Entrupy Fingerprinting verifies an item&apos;s identity, ensuring that a returned item is the same as the one sold.
                    </p>
                    <Link href="#" className={styles.actionBtn}>
                        Learn More
                    </Link>
                </div>
                <div className={styles.imageCol}>
                    <Image
                        src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
                        alt="Entrupy Authentication"
                        width={600}
                        height={400}
                        className={styles.featureImage}
                    />
                </div>
            </section>

            {/* Section 2: Sell & Buy Safely */}
            <section className={`${styles.sectionRow} ${styles.reverse}`}>
                <div className={styles.contentCol}>
                    <div className={styles.orangeDot}></div>
                    <h2 className={styles.sectionTitle}>SELL & BUY SAFELY AND CONFIDENTLY</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionText}>
                        Identity, clarity, authenticity, and ownership are essential to a brand&apos;s success. We ensure that you are secured in every transaction.
                    </p>
                    <Link href="#" className={styles.actionBtn}>
                        Learn More
                    </Link>
                </div>
                <div className={styles.imageCol}>
                    <Image
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
                        alt="Sell and Buy Safely"
                        width={600}
                        height={400}
                        className={styles.featureImage}
                    />
                </div>
            </section>

            {/* Section 3: Discreet & Secure */}
            <section className={styles.sectionRow}>
                <div className={styles.contentCol}>
                    <div className={styles.orangeDot}></div>
                    <h2 className={styles.sectionTitle}>DISCREET & SECURE TRANSACTIONS</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionText}>
                        Our goal is to make sure that both buyers and sellers have a safe and easy experience. We ensure strict confidentiality and industry-standard encryption.
                    </p>
                    <Link href="#" className={styles.actionBtn}>
                        Learn More
                    </Link>
                </div>
                <div className={styles.imageCol}>
                    <Image
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
                        alt="Discreet Transactions"
                        width={600}
                        height={400}
                        className={styles.featureImage}
                    />
                </div>
            </section>

            {/* Section 4: One-Stop Shopping */}
            <section className={`${styles.sectionRow} ${styles.reverse}`}>
                <div className={styles.contentCol}>
                    <div className={styles.orangeDot}></div>
                    <h2 className={styles.sectionTitle}>EXPERIENCE ONE-STOP SHOPPING</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionText}>
                        An excellent site to shop for both adults and children. A wide range of styles, brands, sizes, and price points available for selection.
                    </p>
                    <Link href="#" className={styles.actionBtn}>
                        Learn More
                    </Link>
                </div>
                <div className={styles.imageCol}>
                    <Image
                        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop"
                        alt="One Stop Shopping"
                        width={600}
                        height={400}
                        className={styles.featureImage}
                    />
                </div>
            </section>

            {/* Section 5: Environmentally Conscious */}
            <section className={styles.sectionRow}>
                <div className={styles.contentCol}>
                    <div className={styles.orangeDot}></div>
                    <h2 className={styles.sectionTitle}>ENVIRONMENTALLY CONSCIOUS</h2>
                    <div className={styles.underline}></div>
                    <p className={styles.sectionText}>
                        When you purchase from &apos;Tangerine Luxury,&apos; you help reduce the environmental effect of the fashion industry. Every order you place contributes to a better future.
                    </p>
                    <Link href="#" className={styles.actionBtn}>
                        Learn More
                    </Link>
                </div>
                <div className={styles.imageCol}>
                    <Image
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=1000&auto=format&fit=crop"
                        alt="Environmentally Conscious"
                        width={600}
                        height={400}
                        className={styles.featureImage}
                    />
                </div>
            </section>
        </div>
    );
}
