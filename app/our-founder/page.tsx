import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';


export default function OurFounderPage() {
    return (
        <>

            <main className={styles.container}>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainHeading}>Our Founder</h1>

                    <div className={styles.grid}>
                        {/* Left Column: Image */}
                        <div className={styles.imageColumn}>
                            <div className={styles.imageCard}>
                                <Image
                                    src="/Founder.webp"
                                    alt="Tanya Bhatia - Founder & CEO"
                                    width={500}
                                    height={600}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                    priority
                                />
                                <div className={styles.badge}>
                                    Founder & CEO
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text */}
                        <div className={styles.textColumn}>
                            <div className={styles.bioText}>
                                <p>
                                    Everyone desires and is entitled to a small amount of luxury in their life.
                                    Tangerine Luxury has something for everyone, whether you are a luxury collector
                                    or have only recently begun your venture into the world of luxury.
                                </p>
                                <br />
                                <p>
                                    The goal of Tangerine Luxury is to make luxury a daily experience for everyone.
                                    The new approach of living is circular. Improve the quality of life on this planet.
                                </p>
                            </div>

                            <div className={styles.founderNameWrapper}>
                                <h3 className={styles.founderName}>Tanya Bhatia</h3>
                                <div className={styles.divider}></div>
                            </div>

                            <Link href="/contact" className={styles.connectBtn}>
                                Connect
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
