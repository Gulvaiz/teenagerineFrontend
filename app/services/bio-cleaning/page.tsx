"use client";

import Link from 'next/link';

import styles from '../services.module.css';

export default function BioCleaningPage() {
    return (
        <>

            <main>
                {/* Fallback hero background color/image if exact image not available */}
                <div className={styles.heroSection} style={{ backgroundColor: '#aaa' }}>
                    <div className={styles.heroOverlay}></div>
                    <h1 className={styles.heroTitle}>BIO CLEANING</h1>
                </div>

                <div className={styles.contentContainer}>
                    <h2 className={styles.mainHeading}>ADD A SECOND LIFE TO YOUR FAVOURITE PRODUCTS</h2>
                    <p className={styles.description}>
                        Our Bio-Cleaning Services not only increase the lifespan of your handbags and accessories, but they also get rid of the dirt and grime that prematurely ages the product and accelerates wear and tear.
                    </p>

                    <h3 className={styles.subHeading}>YOUR BAG NEEDS TO BREATHE BECAUSE IT HAS SEEN BETTER DAYS</h3>
                    <p className={styles.description}>
                        Including crackled and lightly used leathers, form loss, fading, and stains. We use our in-house experts to carefully repair any goods. With years of combined experience, our knowledgeable team of specialists can repair handbags from all brands and take care of some of the most expensive and irreplaceable accessories in the world.
                    </p>

                    <h3 className={styles.subHeading}>DON'T IGNORE THE AMOUNT OF BACTERIA YOU BRING IN YOUR SHOES AND HANDBAGS.</h3>
                    <p className={styles.description}>
                        According to studies, a lot of these things were infected with plenty of bacteria that unintentionally got transmitted and harmed YOU. The risk of infection can be significantly decreased by routine cleaning of your priceless possessions.
                    </p>

                    <Link href="/contact" className={styles.bookBtn}>
                        Book Now
                    </Link>
                </div>
            </main>

        </>
    );
}
