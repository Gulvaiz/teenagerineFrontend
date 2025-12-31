import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import servicesStyles from '../services.module.css'; // Shared styles
import styles from './page.module.css'; // We can reuse the shared module mainly, but let's stick to inline styles or shared classes for simplicity if possible. Or just strictly use services.module.css
import { Upload, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AuthenticationPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero with Overlay */}
                <div className={servicesStyles.heroSection} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=600&fit=crop&q=80")' }}>
                    <div className={servicesStyles.heroOverlay}></div>
                    {/* Title removed from hero image area in this design, content moved to white box */}
                </div>

                <div className={servicesStyles.authContainer}>
                    {/* Floating Hero Box */}
                    <div className={servicesStyles.authHeroBox}>
                        <h1 className={servicesStyles.authQuestion}>
                            ARE YOU UNSURE IF A PIECE YOU PURCHASED IS ORIGINAL?
                        </h1>
                        <p className={servicesStyles.authSubQuestion}>
                            ACCIDENTALLY PURCHASED A COUNTERFEIT ITEM?
                        </p>
                        <p className={servicesStyles.authSecondThought}>
                            DO YOU HAVE SECOND THOUGHTS?
                        </p>
                    </div>

                    <div className={servicesStyles.authBtnContainer}>
                        <Link href="/contact" className={servicesStyles.bookBtn}>
                            Authenticate Now
                        </Link>
                    </div>

                    {/* How It Works */}
                    <h2 className={servicesStyles.authSectionTitle}>HOW IT WORKS</h2>
                    <div className={servicesStyles.processGrid}>
                        <div className={servicesStyles.processItem}>
                            <Upload size={48} className={servicesStyles.processIcon} />
                            <h3 className={servicesStyles.processTitle}>UPLOAD IMAGES</h3>
                            <p className={servicesStyles.processText}>
                                Simply upload your photographs, and you'll get a response in 48-72 hours. Even provide immediate turnaround time! Please include the front, back, buckle, inside lining, and date code area of your hardware.
                            </p>
                        </div>
                        <div className={servicesStyles.processItem}>
                            <ShieldCheck size={48} className={servicesStyles.processIcon} />
                            <h3 className={servicesStyles.processTitle}>THE AUTHENTICATION PROCESS</h3>
                            <p className={servicesStyles.processText}>
                                Your item will always be validated by Our Expert Luxury Authenticators best in house & Third Party based out in the USA with decades of experience in this action.
                            </p>
                        </div>
                        <div className={servicesStyles.processItem}>
                            <CheckCircle size={48} className={servicesStyles.processIcon} />
                            <h3 className={servicesStyles.processTitle}>FAKE OR REAL</h3>
                            <p className={servicesStyles.processText}>
                                According to Tangerine Luxury's certification, if a thing is either REAL or FAKE, or we need more information, you can upgrade your order or anytime.
                            </p>
                        </div>
                    </div>

                    {/* Services Offered */}
                    <h2 className={servicesStyles.authSectionTitle}>LUXURY AUTHENTICATION SERVICES WE OFFER</h2>
                    <div className={servicesStyles.offeringsSection}>
                        <div className={servicesStyles.offeringsList}>
                            <div className={servicesStyles.offeringItem}>HANDBAG AUTHENTICATION (DOES NOT INCLUDE HERMÈS)</div>
                            <div className={servicesStyles.offeringItem}>FOOTWEAR AUTHENTICATION</div>
                            <div className={servicesStyles.offeringItem}>FINE JEWELLERY AUTHENTICATION</div>
                            <div className={servicesStyles.offeringItem}>APPARELS AUTHENTICATION</div>
                            <div className={servicesStyles.offeringItem}>ACCESSORIES AUTHENTICATION (BELTS, SCARF, TIE, ETC.)</div>
                            <div className={servicesStyles.offeringItem}>WATCHES</div>
                            <div className={servicesStyles.offeringItem}>24 HR TURNAROUND (ANY SERVICE EXCEPT WATCHES & FINE JEWELLERY)</div>
                            <div className={servicesStyles.offeringItem}>AUTHENTICITY CARD (SIZE OF AN ID CARD)</div>
                            <div className={servicesStyles.offeringItem}>AUTHENTICITY CARD (FINE JEWELLERY & WATCHES)</div>
                            <div className={servicesStyles.offeringItem}>ITEM IDENTIFICATION (INCLUDES STYLE NAME, MATERIAL, PATTERN, AND PRODUCTION DATE OR CIRCA)</div>
                            <div className={servicesStyles.offeringItem}>HERMÈS HANDBAGS (LEATHER & EXOTIC)</div>
                        </div>
                    </div>

                    {/* T&C */}
                    <div className={servicesStyles.authTerms}>
                        <h2 className={servicesStyles.authSectionTitle} style={{ fontSize: '1.4rem' }}>TERMS & CONDITIONS</h2>
                        <ul className={servicesStyles.authTermsList}>
                            <li>Please be aware that the authentication process takes 48-72 hours.</li>
                            <li>Weekends and public holidays can not be included in the 24-hour turnaround service.</li>
                            <li>Tangerine Luxury Authentications is the final authority on item verification.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
