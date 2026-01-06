import styles from './trackOrder.module.css';

export default function TrackOrderPage() {
  return (
    <main className={styles.pageWrapper}>
      {/* PAGE TITLE */}
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>Track Your Order</h1>
        <p className={styles.subheading}>
          Enter your tracking number to get real-time updates
        </p>
      </div>

      {/* CARD */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.icon}>📦</span>
          <h2>Track Your Order</h2>
        </div>

        <p className={styles.cardDesc}>
          Enter your order number (ORD/2025/001) or courier tracking number to see detailed tracking information
        </p>

        {/* INPUT ROW */}
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="Enter order number (ORD/2025/001) or tracking number"
            className={styles.input}
          />
          <button className={styles.button}>Track Order</button>
        </div>

        {/* INFO BOX */}
        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>You can track using any of these:</p>
          <ul className={styles.list}>
            <li>
              Order Number: <span>ORD/2025/001</span>
            </li>
            <li>
              Short Form: <span>001</span>
            </li>
            <li>
              Courier Tracking: <span>1234567890</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
