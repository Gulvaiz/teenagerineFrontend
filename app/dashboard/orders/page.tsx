"use client";

import styles from '../dashboard.module.css';

export default function OrderTrackingPage() {
    // Mock orders - in real app fetch from API
    // Setting to empty array to match requirement "if no order place than it should display 'no order placed'"
    const orders: any[] = [];

    return (
        <div>
            <h1 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Order Tracking</h1>

            {orders.length === 0 ? (
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                }}>
                    <h3 style={{ color: '#666', fontWeight: 500 }}>No order placed</h3>
                    <p style={{ marginTop: '10px', color: '#999', fontSize: '0.9rem' }}>You haven't placed any orders yet.</p>
                </div>
            ) : (
                <div className={styles.sectionCard}>
                    {/* Table code would go here similar to dashboard overview */}
                    <p>Orders list...</p>
                </div>
            )}
        </div>
    );
}
