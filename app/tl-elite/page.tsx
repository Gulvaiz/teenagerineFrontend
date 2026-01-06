import styles from './tl-elite.module.css';

export const metadata = {
  title: 'Tangerine Luxury Elite',
};

export default function TLElitePage() {
  return (
    <main className={styles.elitePage}>

      {/* ================= HERO TITLE ================= */}
      <section className={styles.titleSection}>
        <h1 className={styles.title}>TANGERINE LUXURY ELITE</h1>
      </section>

      {/* ================= IMAGE PLACEHOLDERS ================= */}
      <section className={styles.modelSection}>
        <div className={styles.modelCard}>
          <span>TL Elite Model 1</span>
        </div>

        <div className={styles.modelCard}>
          <span>TL Elite Model 2</span>
        </div>
      </section>

      {/* ================= AFFILIATE SECTION ================= */}
      <section className={styles.affiliateSection}>
        <h2 className={styles.affiliateTitle}>
          JOIN THE TL ELITE AFFILIATE NETWORK
        </h2>

        <p className={styles.affiliateText}>
          Tangerine Luxury is looking for fashion-forward innovators and influencers
          with a focus on fashion, beauty, and all things luxury. By promoting
          Tangerine Luxury to your followers, you get exclusive access to our loyalty
          programme.
        </p>

        <button className={styles.ctaButton}>
          Get in Touch: 7042039009
        </button>
      </section>

    </main>
  );
}
