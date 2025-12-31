"use client";

import { ShoppingBag, Box, MapPin, BarChart2, Settings, ChevronDown } from 'lucide-react';
import styles from './dashboard.module.css';

export default function DashboardPage() {
    return (
        <div>
            <div className={styles.headerRow}>
                <h1 className={styles.title}>My Dashboard</h1>
                <div className={styles.controls}>
                    <button className={styles.controlBtn}>
                        ₹ INR <ChevronDown size={14} />
                    </button>
                    <button className={styles.controlBtn}>
                        <Settings size={16} /> Settings
                    </button>
                </div>
            </div>

            <div className={styles.statsGrid}>
                {/* Total Orders */}
                <div className={styles.statCard}>
                    <div className={styles.statInfo}>
                        <h3>Total Orders</h3>
                        <div className={styles.statValue}>0</div>
                    </div>
                    <div className={`${styles.statIcon} ${styles.bgOrange}`}>
                        <ShoppingBag size={20} color="#e67e22" />
                    </div>
                </div>

                {/* Active Orders */}
                <div className={styles.statCard}>
                    <div className={styles.statInfo}>
                        <h3>Active Orders</h3>
                        <div className={styles.statValue}>0</div>
                    </div>
                    <div className={`${styles.statIcon} ${styles.bgOrange}`}>
                        <Box size={20} color="#e67e22" />
                    </div>
                </div>

                {/* Saved Addresses */}
                <div className={styles.statCard}>
                    <div className={styles.statInfo}>
                        <h3>Saved Addresses</h3>
                        <div className={styles.statValue}>0</div>
                    </div>
                    <div className={`${styles.statIcon} ${styles.bgOrange}`}>
                        <MapPin size={20} color="#e67e22" />
                    </div>
                </div>

                {/* Total Spent */}
                <div className={styles.statCard}>
                    <div className={styles.statInfo}>
                        <h3>Total Spent</h3>
                        <div className={styles.statValue}>₹0</div>
                    </div>
                    <div className={`${styles.statIcon} ${styles.bgOrange}`}>
                        <BarChart2 size={20} color="#e67e22" />
                    </div>
                </div>
            </div>

            <div className={styles.sectionCard}>
                <h2 className={styles.sectionTitle}>Recent Orders</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty state or sample row could go here, but screenshot shows header only for now or empty list implied */}
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', padding: '30px', color: '#999' }}>
                                    No recent orders found
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
