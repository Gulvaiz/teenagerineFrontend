"use client";

import styles from '../dashboard.module.css';

export default function ChangePasswordPage() {
    return (
        <div>
            <h1 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Update Password</h1>

            <div className={styles.sectionCard} style={{ padding: '30px' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Current Password */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Current Password</label>
                        <input
                            type="password"
                            placeholder="Enter your current password"
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                    </div>

                    {/* New Password */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>New Password</label>
                        <input
                            type="password"
                            placeholder="Enter your new password"
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                        <p style={{ marginTop: '5px', color: '#888', fontSize: '0.8rem' }}>Password must be at least 6 characters long</p>
                    </div>

                    {/* Confirm New Password */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Confirm New Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your new password"
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <button type="submit" style={{ width: '100%', backgroundColor: '#e67e22', color: 'white', border: 'none', padding: '15px', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>
                            Update Password
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
