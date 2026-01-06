"use client";


import Link from 'next/link';
import servicesStyles from '../services.module.css';

export default function PrivateViewingPage() {
    return (
        <>

            <main>
                {/* Hero Section */}
                <div className={servicesStyles.heroSection} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&h=600&fit=crop&q=80")' }}>
                    <div className={servicesStyles.heroOverlay} style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}></div>
                    {/* Light overlay for dark text "PRIVATE VIEWING" if we want to match screenshot exactly, 
                         but screenshot shows white text on very light background? 
                         Wait, screenshot has "PRIVATE VIEWING" in big white letters on light bg. 
                         Let's stick to our standard hero or try to match the "ghostly" look.
                         Actually, let's use standard hero style but maybe lighter text color if needed.
                         For now, reusing standard hero for consistency.
                     */}
                    <h1 className={servicesStyles.heroTitle} style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>PRIVATE VIEWING</h1>
                </div>

                <div className={servicesStyles.contentContainer}>
                    <p className={servicesStyles.pvIntro}>
                        Shop for pre-owned luxury items in the safety and comfort of your home using our personal concierge service.
                    </p>

                    {/* Table Section */}
                    <div className={servicesStyles.pvSectionContainer}>
                        <h2 className={servicesStyles.pvHeading}>The Personal Concierge Service from Tangerine Luxury</h2>
                        <table className={servicesStyles.pvTable}>
                            <thead>
                                <tr>
                                    <th>S. NO.</th>
                                    <th>OUR SERVICES</th>
                                    <th>SERVICES FEE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>IN PERSON (Available only in Delhi and NCR)</td>
                                    <td>
                                        UP TO 4 PRODUCTS – INR 700<br />
                                        MORE THAN 4 PRODUCTS - INR 100 EXTRA PER PRODUCT
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>VIDEO CALL (Pan India/Worldwide)</td>
                                    <td>FREE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Terms & Conditions Section */}
                    <div className={servicesStyles.pvTermsBox}>
                        <h2 className={servicesStyles.pvHeading}>Terms & Conditions</h2>
                        <ol className={servicesStyles.pvTermsList}>
                            <li>Trying on clothing during COVID-19 is not allowed.</li>
                            <li>Private viewing times must be scheduled in advance.</li>
                            <li>Fees are waived in the case of an immediate sale.</li>
                            <li>Additional shipping fees may apply for ordered products.</li>
                            <li>Video calls must be scheduled 24-48 hours in advance.</li>
                            <li>Without a booking fee, products cannot be held.</li>
                            <li>If a product is sold before your appointment, it will be shown via video call.</li>
                        </ol>
                    </div>

                    {/* CTA Section */}
                    <div className={servicesStyles.pvCtaSection}>
                        <Link href="/contact" className={servicesStyles.bookBtn}>
                            Book Now
                        </Link>
                        <h3 className={servicesStyles.pvLimitedSlots}>Limited Slots Available!</h3>
                    </div>

                </div>
            </main>

        </>
    );
}
