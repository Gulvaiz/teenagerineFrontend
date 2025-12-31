"use client";

import styles from '../dashboard.module.css';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function PurchaseHistoryPage() {
    // Mock data - empty to trigger state
    const history: any[] = [];

    return (
        <div>
            <h1 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Purchase History</h1>
            <p style={{ color: '#888', marginBottom: '30px', fontSize: '0.9rem' }}>View and manage your past orders</p>

            {history.length === 0 ? (
                <div style={{
                    backgroundColor: 'white',
                    padding: '60px 20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{ padding: '20px', backgroundColor: '#fff9f0', borderRadius: '50%' }}>
                        <ShoppingBag size={40} color="#e67e22" />
                    </div>
                    <h3 style={{ color: '#333', fontWeight: 600, fontSize: '1.2rem' }}>No purchase history found</h3>
                    <p style={{ color: '#888', maxWidth: '400px', lineHeight: '1.5' }}>
                        You haven't purchased any items yet. Start shopping to find items you love!
                    </p>
                    <Link href="/">
                        <button style={{
                            backgroundColor: '#e67e22',
                            color: 'white',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}>
                            Let's Start Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <div className={styles.sectionCard}>
                    <p>History list...</p>
                </div>
            )}
        </div>
    );
}
