"use client";

import styles from '../dashboard.module.css';

export default function AddressesPage() {
    return (
        <div>
            <h1 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Add Shipping Address</h1>

            <div className={styles.sectionCard} style={{ padding: '30px' }}>
                <p style={{ color: '#666', marginBottom: '30px' }}>Please add a shipping address to continue with your order.</p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Full Name */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                    </div>

                    {/* Address Line 1 */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Address Line 1</label>
                        <input
                            type="text"
                            placeholder="Street address"
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                    </div>

                    {/* Address Line 2 */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Address Line 2 (Optional)</label>
                        <input
                            type="text"
                            placeholder="Apartment, suite, etc."
                            style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {/* City */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>City</label>
                            <input
                                type="text"
                                placeholder="City"
                                style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                            />
                        </div>
                        {/* State */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>State</label>
                            <input
                                type="text"
                                placeholder="State"
                                style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {/* Postal Code */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Postal Code</label>
                            <input
                                type="text"
                                placeholder="Postal code"
                                style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                            />
                        </div>
                        {/* Country */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Country</label>
                            <input
                                type="text"
                                placeholder="Country"
                                style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc' }}
                            />
                        </div>
                    </div>
                    {/* Address Type */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: 500 }}>Address Type</label>
                        <select style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fcfcfc', color: '#666' }}>
                            <option>Home</option>
                            <option>Office</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Default Checkbox */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                        <div>
                            <div style={{ fontWeight: 500, color: '#333' }}>Set as default address</div>
                            <div style={{ fontSize: '0.85rem', color: '#888' }}>Use this address as your primary shipping address</div>
                        </div>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                            {/* Simple CSS toggle switch simulation */}
                            <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                            <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#eee', borderRadius: '34px', transition: '.4s' }}>
                                <span style={{ position: 'absolute', content: '""', height: '18px', width: '18px', left: '4px', bottom: '3px', backgroundColor: 'white', borderRadius: '50%', transition: '.4s' }}></span>
                            </span>
                        </label>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <button type="submit" style={{ backgroundColor: '#e67e22', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>
                            Add Address
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
