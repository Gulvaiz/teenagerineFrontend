"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Heart, RefreshCw, User, ShoppingBag, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export default function OurMissionPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroIconWrapper}>
                        <div className={styles.heartIconCircle}>
                            <Heart size={32} color="white" fill="white" />
                        </div>
                    </div>
                    <h1 className={styles.heroTitle}>OUR MISSION</h1>
                    <p className={styles.heroSubtitle}>
                        Transforming fashion consumption for a sustainable future
                    </p>
                    <div className={styles.divider}></div>
                    <p className={styles.heroDescription}>
                        Our goal is to alter how people consume fashion. We wish to increase sustainability of consumption without reducing your options and variety.
                    </p>
                    <p className={styles.heroDescription}>
                        We want to make it more accessible for consumers to purchase luxury goods.
                    </p>
                </div>
                <div className={styles.heroImageWrapper}>
                    <div className={styles.imageBackdrop}></div>
                    <Image
                        src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop"
                        alt="Luxury Green Bag"
                        width={600}
                        height={600}
                        className={styles.heroImage}
                        priority
                    />
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className={styles.pillarsSection}>
                <div className={styles.pillarCard}>
                    <div className={styles.iconCircle}>
                        <RefreshCw size={32} />
                    </div>
                    <h3 className={styles.pillarTitle}>Sustainability</h3>
                    <p className={styles.pillarText}>
                        Promoting circular fashion to reduce waste and environmental impact through conscious consumption.
                    </p>
                </div>
                <div className={styles.pillarCard}>
                    <div className={styles.iconCircle}>
                        <User size={32} />
                    </div>
                    <h3 className={styles.pillarTitle}>Accessibility</h3>
                    <p className={styles.pillarText}>
                        Making luxury fashion more accessible to everyone through pre-loved and authenticated items.
                    </p>
                </div>
                <div className={styles.pillarCard}>
                    <div className={styles.iconCircle}>
                        <ArrowRight size={32} style={{ transform: 'rotate(-45deg)' }} />
                    </div>
                    <h3 className={styles.pillarTitle}>Innovation</h3>
                    <p className={styles.pillarText}>
                        Revolutionizing the fashion industry with modern recommerce solutions and expert authentication.
                    </p>
                </div>
            </section>

            {/* Dark Section - Buy, Adore, Sell */}
            <section className={styles.darkSection}>
                <div className={styles.darkIconCircle}>
                    <ShoppingBag size={40} color="white" />
                </div>
                <h2 className={styles.darkTitle}>Buy, adore, then sell again.</h2>
                <p className={styles.darkText}>
                    An investment in fine goods. For both the buyer and the seller, our team of professionals is committed to making each sale a worthwhile investment. In this contemporary era of recommerce, we motivate our vendors to &quot;sell with us&quot; and our consumers to &quot;purchase with us.&quot;
                </p>
            </section>

            {/* Join Mission Card */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <h2 className={styles.ctaTitle}>Join Our Mission</h2>
                    <p className={styles.ctaText}>
                        Be part of the sustainable fashion revolution. Whether you&apos;re buying or selling, you&apos;re contributing to a more conscious future.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/new-arrivals" className={styles.primaryBtn}>
                            Shop Sustainable
                        </Link>
                        <Link href="/sell-with-us" className={styles.secondaryBtn}>
                            Sell With Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
