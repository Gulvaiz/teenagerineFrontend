"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './services.module.css';

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="container">
                <div className={styles.pageContainer}>
                    <h1 className={styles.title}>OUR SERVICES</h1>

                    <div className={styles.servicesGrid}>
                        <Link href="/services/bio-cleaning" className={styles.serviceCard}>
                            <div
                                className={styles.serviceImage}
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop&q=80")'
                                }}
                            />
                            <div className={styles.serviceLabel}>BIO CLEANING</div>
                        </Link>

                        <Link href="/services/authentication" className={styles.serviceCard}>
                            <div
                                className={styles.serviceImage}
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop&q=80")'
                                }}
                            />
                            <div className={styles.serviceLabel}>AUTHENTICATION</div>
                        </Link>

                        <Link href="/services/private-viewing" className={styles.serviceCard}>
                            <div
                                className={styles.serviceImage}
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop&q=80")'
                                }}
                            />
                            <div className={styles.serviceLabel}>PRIVATE VIEWING</div>
                        </Link>

                        <Link href="/services/request-product" className={styles.serviceCard}>
                            <div
                                className={styles.serviceImage}
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&h=600&fit=crop&q=80")'
                                }}
                            />
                            <div className={styles.serviceLabel}>REQUEST A PRODUCT</div>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
