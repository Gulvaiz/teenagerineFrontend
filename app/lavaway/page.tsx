import styles from './layaway.module.css';

export const metadata = {
  title: 'Layaway | Tangerine Luxury',
};

export default function LayawayPage() {
  return (
    <main className={styles.layawayPage}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <h1 className={styles.heroTitle}>LAYAWAY</h1>
      </section>

      {/* FEATURE CARDS */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>

          <div className={styles.card}>
            <div className={styles.icon}>👤</div>
            <h3>BRING YOUR DREAM BAG TO LIFE!</h3>
            <p>
              Did you know that we provide almost all of our items with a flexible
              3–6 week layaway period at NO ADDITIONAL COST? To reserve your PRODUCT,
              just pay a 25% non-refundable deposit today. The remaining money is due
              at any time throughout the agreed time frame.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🔳</div>
            <h3>AFTER FULL PAYMENT, YOU OWN THE ITEM!</h3>
            <p>
              Layaway is a type of payment plan in which a customer makes a deposit on
              an item or items to ‘LAY AWAY’ it for a later pick-up when they are able
              to pay the remaining balance. Additionally, layaway enables buyers to
              make incremental payments on the item(s) until the whole amount is paid.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🕒</div>
            <h3>We provide a 2 to 6 week layaway period</h3>
            <p>
              If you'd want to have a longer layaway term, you can also call our
              Customer Care Team at +91 7042039009 or send us an email at
              sales@tangerineluxury.com.
            </p>
          </div>

        </div>
      </section>

      {/* TABLE SECTION */}
      <section className={styles.tableSection}>
        <h2 className={styles.tableTitle}>Layaway Period Details</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.layawayTable}>
            <thead>
              <tr>
                <th>SL. NO</th>
                <th>IF THE PRODUCT IS PRICED</th>
                <th>LAYAWAY PERIOD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>above INR 10,000 to INR 25,000</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td>2</td>
                <td>above INR 25,000 to INR 50,000</td>
                <td>3 weeks</td>
              </tr>
              <tr>
                <td>3</td>
                <td>above INR 50,000 to INR 1,00,000</td>
                <td>4 weeks</td>
              </tr>
              <tr>
                <td>4</td>
                <td>above INR 1,00,000</td>
                <td>5 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}
