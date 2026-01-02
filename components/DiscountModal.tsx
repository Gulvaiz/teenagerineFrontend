"use client";

import { useState, useEffect } from 'react';
import { X, User, Mail, Lock, Gift } from 'lucide-react';
import styles from './DiscountModal.module.css';

export default function DiscountModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // Show modal after a short delay for better UX - always show on reload/visit
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        // Handle form submission here
        // console.log('Form submitted:', formData);
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
                    <X size={24} />
                </button>

                <div className={styles.content}>
                    {/* Header with stars */}
                    <div className={styles.header}>
                        <span className={styles.star}>✨</span>
                        <h2 className={styles.title}>Exclusive Offer!</h2>
                        <span className={styles.star}>✨</span>
                    </div>

                    <p className={styles.subtitle}>Get ₹2000 off on your first order above ₹15000</p>

                    <div className={styles.modalBody}>
                        {/* Left side - Coupon section */}
                        <div className={styles.leftSection}>
                            <div className={styles.couponBox}>
                                <p className={styles.couponLabel}>Use coupon code:</p>
                                <input
                                    type="text"
                                    value="MYFIRST"
                                    readOnly
                                    className={styles.couponInput}
                                />
                                <p className={styles.couponNote}>Applied automatically at checkout</p>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className={styles.rightSection}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <User size={18} className={styles.inputIcon} />
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <User size={18} className={styles.inputIcon} />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <Mail size={18} className={styles.inputIcon} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <Lock size={18} className={styles.inputIcon} />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <button type="submit" className={styles.claimButton}>
                                    <Gift size={18} />
                                    Claim My 2000 OFF
                                </button>
                            </form>
                        </div>
                    </div>

                    <p className={styles.terms}>
                        By signing up, you agree to our terms and conditions. Limited time offer • New customers only
                    </p>
                </div>
            </div>
        </div>
    );
}


