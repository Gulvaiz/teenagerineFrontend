"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, BarChart2, Target, User, Zap, X } from 'lucide-react';
import styles from './CookieBanner.module.css';

type CookiePreferences = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    personalization: boolean;
    functionality: boolean;
};

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true,
        analytics: true,
        marketing: true,
        personalization: true,
        functionality: true
    });

    useEffect(() => {
        // Check for existing consent
        const savedConsent = localStorage.getItem('cookieConsent');
        if (!savedConsent) {
            setIsVisible(true);
        } else {
            // Apply saved preferences if needed in the future
            // const parsedConsent = JSON.parse(savedConsent);
            // setPreferences(parsedConsent);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            personalization: true,
            functionality: true
        };
        savePreferences(allAccepted);
    };

    const handleRejectAll = () => {
        const allRejected = {
            necessary: true,
            analytics: false,
            marketing: false,
            personalization: false,
            functionality: false
        };
        setPreferences(allRejected); // Update state to reflect rejection if they reopen modal before reloading (though banner hides)
        savePreferences(allRejected);
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem('cookieConsent', JSON.stringify(prefs));
        setIsVisible(false);
        setShowPreferences(false);
        // Here you would trigger actual cookie logic/scripts based on 'prefs'
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return; // Cannot toggle necessary
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Main Bottom Banner */}
            {!showPreferences && (
                <div className={styles.bannerOverlay}>
                    <div className={styles.content}>
                        <div className={styles.title}>We value your privacy</div>
                        <p className={styles.description}>
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and
                            analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can customize
                            your preferences or learn more in our <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>.
                        </p>
                    </div>
                    <div className={styles.actions}>
                        <button className={`${styles.btn} ${styles.btnOutline}`} onClick={() => setShowPreferences(true)}>
                            Customize
                        </button>
                        <button className={`${styles.btn} ${styles.btnOutline}`} onClick={handleRejectAll}>
                            Reject All
                        </button>
                        <button className={`${styles.btn} ${styles.btnBlack}`} onClick={handleAcceptAll}>
                            Accept All
                        </button>
                        <button className={styles.closeBanner} onClick={() => setIsVisible(false)}>
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Preferences Modal */}
            {showPreferences && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Cookie Preferences</h2>
                            <button className={styles.closeBtn} onClick={() => setShowPreferences(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <p className={styles.modalDescription}>
                                We use cookies to improve your experience on our website. You can choose which types of cookies you want to
                                allow. Some cookies are necessary for the website to function and cannot be disabled.
                            </p>

                            {/* Necessary */}
                            <div className={styles.preferenceItem}>
                                <div className={`${styles.iconWrapper} ${styles.iconNecessary}`}>
                                    <Shield size={24} />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemTitle}>Necessary Cookies <span className={styles.requiredBadge}>(Required)</span></span>
                                        <label className={styles.switch}>
                                            <input type="checkbox" checked={true} disabled />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.itemDescription}>
                                        Essential cookies required for the website to function properly. These cannot be disabled.
                                    </p>
                                    <p className={styles.examples}>
                                        Examples: Authentication, Security, Session management, Shopping cart
                                    </p>
                                </div>
                            </div>

                            {/* Analytics */}
                            <div className={styles.preferenceItem}>
                                <div className={`${styles.iconWrapper} ${styles.iconAnalytics}`}>
                                    <BarChart2 size={24} />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemTitle}>Analytics Cookies</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={() => togglePreference('analytics')}
                                            />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.itemDescription}>
                                        Help us understand how visitors interact with our website by collecting and reporting information.
                                    </p>
                                    <p className={styles.examples}>
                                        Examples: Google Analytics, Page views, User behavior, Performance metrics
                                    </p>
                                </div>
                            </div>

                            {/* Marketing */}
                            <div className={styles.preferenceItem}>
                                <div className={`${styles.iconWrapper} ${styles.iconMarketing}`}>
                                    <Target size={24} />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemTitle}>Marketing Cookies</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={() => togglePreference('marketing')}
                                            />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.itemDescription}>
                                        Used to track visitors across websites for advertising and marketing purposes.
                                    </p>
                                    <p className={styles.examples}>
                                        Examples: Facebook Pixel, Google Ads, Retargeting, Ad personalization
                                    </p>
                                </div>
                            </div>

                            {/* Personalization */}
                            <div className={styles.preferenceItem}>
                                <div className={`${styles.iconWrapper} ${styles.iconPersonal}`}>
                                    <User size={24} />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemTitle}>Personalization Cookies</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={preferences.personalization}
                                                onChange={() => togglePreference('personalization')}
                                            />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.itemDescription}>
                                        Allow us to provide personalized content and remember your preferences.
                                    </p>
                                    <p className={styles.examples}>
                                        Examples: Language settings, Theme preferences, Personalized content, User preferences
                                    </p>
                                </div>
                            </div>

                            {/* Functionality */}
                            <div className={styles.preferenceItem}>
                                <div className={`${styles.iconWrapper} ${styles.iconFunction}`}>
                                    <Zap size={24} />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemTitle}>Functionality Cookies</span>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={preferences.functionality}
                                                onChange={() => togglePreference('functionality')}
                                            />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </div>
                                    <p className={styles.itemDescription}>
                                        Enable enhanced functionality and personalization features.
                                    </p>
                                    <p className={styles.examples}>
                                        Examples: Chat widgets, Social media integration, Enhanced features, User interface
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <div className={styles.footerLeft}>
                                <Link href="/cookie-policy" className={styles.footerLink}>Learn more about cookies</Link>
                            </div>
                            <div className={styles.footerActions}>
                                <button className={`${styles.btn} ${styles.btnOutline}`} onClick={handleRejectAll}>
                                    Reject All
                                </button>
                                <button className={`${styles.btn} ${styles.btnGreen}`} onClick={handleAcceptAll}>
                                    Accept All
                                </button>
                                <button className={`${styles.btn} ${styles.btnBlack}`} onClick={handleSavePreferences}>
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
