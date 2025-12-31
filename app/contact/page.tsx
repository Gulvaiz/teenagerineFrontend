"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <div className={styles.pageContainer}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>
                        We'd love to hear from you. Get in touch and let us know how we can help.
                    </p>

                    <div className={styles.contentGrid}>
                        {/* Left Side: Get in Touch */}
                        <div className={styles.infoCard}>
                            <h2 className={styles.sectionTitle}>
                                <MessageSquare size={24} /> Get in Touch
                            </h2>
                            <p className={styles.introText}>
                                Have questions about our luxury collection? Need assistance with your order? Our dedicated team is here to provide personalized service and expert guidance.
                            </p>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}><Mail size={24} /></div>
                                <div className={styles.contactDetails}>
                                    <h4>Email</h4>
                                    <p>sales@tangerineluxury.com</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}><Phone size={24} /></div>
                                <div className={styles.contactDetails}>
                                    <h4>Contact</h4>
                                    <p>+917042039009</p>
                                    <p>+917042029009</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}><Clock size={24} /></div>
                                <div className={styles.contactDetails}>
                                    <h4>Working Hours</h4>
                                    <p>11:00 AM - 7:00 PM</p>
                                </div>
                            </div>

                            <div className={styles.whyChooseCard}>
                                <div className={styles.whyChooseTitle}>
                                    <CheckCircle size={20} color="#27ae60" /> Why Choose Tangerine Luxury?
                                </div>
                                <ul className={styles.whyChooseList}>
                                    <li>100% Authenticated luxury items</li>
                                    <li>Expert personal shopping service</li>
                                    <li>Secure worldwide shipping</li>
                                    <li>Dedicated customer support</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className={styles.formCard}>
                            <h2 className={styles.sectionTitle}>
                                <Send size={24} style={{ transform: 'rotate(-45deg)' }} /> Send us a Message
                            </h2>
                            <form>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input type="text" className={styles.input} placeholder="Enter your full name" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email Address *</label>
                                    <input type="email" className={styles.input} placeholder="Enter your email address" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Subject *</label>
                                    <input type="text" className={styles.input} placeholder="What is this regarding?" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Message *</label>
                                    <textarea className={styles.textarea} placeholder="Tell us how we can help you..." required></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <Send size={18} /> Send Message
                                </button>
                                <p className={styles.formFooter}>
                                    We'll get back to you within 24 hours during business hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Immediate Assistance Section */}
                <section className={styles.assistanceSection}>
                    <h2 className={styles.assistanceTitle}>Need Immediate Assistance?</h2>
                    <p className={styles.assistanceSubtitle}>
                        Our personal shopping team is available to help with urgent inquiries
                    </p>
                    <div className={styles.buttonsRow}>
                        <a href="tel:+917042039009" className={styles.outlineBtn}>
                            <Phone size={18} /> Call Now: +91 704 203 9009
                        </a>
                        <a href="mailto:sales@tangerineluxury.com" className={styles.outlineBtn}>
                            <Mail size={18} /> Email Us
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
