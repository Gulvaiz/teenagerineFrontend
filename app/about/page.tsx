import Image from 'next/image';
import styles from './about.module.css';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className={styles.aboutContainer}>


            {/* HERO BANNER */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <h1 className={styles.heroTitle}>ABOUT US</h1>
            </section>

            {/* INTRO CONTENT SECTION */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <p>
                                Sell the items in your closet, so you can go shopping for what you actually want today.
                            </p>
                            <p>
                                Set aside your preconceived notions about secondhand luxury and join us in the circular revolution.
                            </p>
                        </div>
                        <div className={styles.introImageWrapper}>
                            <Image
                                src="/ABOUTUS2.webp"
                                alt="Luxury Clutch"
                                width={600}
                                height={450}
                                className={styles.introImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BRAND STORY SECTION (MISSING FIXED) */}
            <section className={styles.brandStorySection}>
                <div className={styles.container}>
                    <div className={styles.brandStoryLogoWrapper}>
                        <Image
                            src="/Tangerine-Logo-200px.png"
                            alt="Tangerine Luxury"
                            width={300}
                            height={100}
                            className={styles.brandStoryLogo}
                        />
                    </div>
                    <div className={styles.brandStoryContent}>
                        <p>
                            An online marketplace like <strong>Tangerine Luxury</strong> allows users to buy and sell pre loved women&apos;s, men&apos;s, and children&apos;s clothing and accessories.
                        </p>
                        <p>
                            Every single item in our collection was carefully chosen..! You won&apos;t need to worry about anything when you shop with us because each and every product meets the highest standards for both quality and style.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT OUR COMMUNITY SAYS */}
            <section className={styles.communitySection}>
                <div className={styles.communityContainer}>
                    <h2 className={styles.communityTitle}>What Our Community Says</h2>
                    <p className={styles.communitySubtitle}>
                        Discover the Tangerine Luxury experience through our community&apos;s stories
                    </p>

                    <div className={styles.communityGrid}>
                        <div className={styles.communityCard}>
                            <div className={styles.cardText}>
                                Our concept <span className={styles.emoji}>💖 🍃</span>
                                &quot;At Tangerine Luxury, we&apos;ve reimagined luxury as something accessible
                                to all through an eco-friendly online platform for buying and selling
                                pre-loved luxurious items, because we believe it&apos;s your moment to
                                embrace the luxury you adore.&quot;
                            </div>
                            <div className={styles.cardFooter}>Company Vision</div>
                        </div>

                        <div className={styles.communityCard}>
                            <div className={styles.cardText}>
                                What is &apos;pre-loved&apos; luxury? <span className={styles.emoji}>👜 ♻️</span>
                                &quot;Previously owned, but still cherished. Rediscover luxury fashion sustainably.&quot;
                            </div>
                            <div className={styles.cardFooter}>Our Definition</div>
                        </div>

                        <div className={styles.communityCard}>
                            <div className={styles.cardText}>
                                Our concept <span className={styles.emoji}>💖 ♻️</span>
                                &quot;Prioritizing sustainability in fashion is paramount. We&apos;re all about
                                mindful, earth-friendly, and affordable luxury through pre-loved designer
                                accessories with trusted authenticity.&quot;
                            </div>
                            <div className={styles.cardFooter}>Sustainability Mission</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE (TEXT FIXED & QUOTE BOX ADDED) */}
            <section className={styles.whoWeAreSection}>
                <div className={styles.whoOverlay}></div>
                <div className={styles.whoContainer}>
                    <h2 className={styles.whoTitle}>WHO WE ARE</h2>
                    <div className={styles.whoText}>
                        <p>
                            Tangerine Luxury is who we are. And we adore fashion tremendously. Fashion is incredibly good at generating desire and creating magical worlds.
                        </p>
                        <p>
                            However, let&apos;s face it, the sector has also contributed to a number of the largest issues facing the planet.
                        </p>
                        <p>
                            Overconsumption, Overproduction, Climate change, Workplace morals, etc.
                        </p>
                        <p>
                            For a more sustainable future, it is why we transform it. But it&apos;s not about having any less love for fashion.<br />
                            The world needs to love it more, in fact. Existing trends are most popular on the planet.<br />
                            For a reason, it is referred to as pre-LOVED fashion.
                        </p>
                    </div>
                    {/* QUOTE BOX */}
                    <div className={styles.quoteBox}>
                        <p>
                            &quot;I know our minds no longer think LONG TERM, it&apos;s all about NOW, but it&apos;s about time we do.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 className={styles.valuesTitle}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Sustainability</h3>
                            <p className={styles.valueDesc}>We believe in giving fashion a second life, reducing waste and environmental impact.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Quality</h3>
                            <p className={styles.valueDesc}>Every item is carefully curated and authenticated to meet the highest standards.</p>
                        </div>
                        <div className={`${styles.valueCard} ${styles.elevated}`}>
                            <h3 className={styles.valueTitle}>Community</h3>
                            <p className={styles.valueDesc}>Building a community of fashion lovers who care about the planet&apos;s future.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Authenticity</h3>
                            <p className={styles.valueDesc}>Genuine luxury items, verified and guaranteed for your peace of mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Join the Circular Revolution</h2>
                    <p className={styles.ctaSubtitle}>Transform your closet and help create a more sustainable future for fashion</p>
                    <div className={styles.ctaButtons}>
                        <Link href="/shop" className={styles.btnPrimary}>
                            Start Shopping
                        </Link>
                        <Link href="/sell-with-us" className={styles.btnOutline}>
                            Sell Your Items
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
}
