
import styles from "./page.module.css";
import { Home, Globe, Clock, Truck, Landmark, CreditCard, FileText, Phone, Mail } from "lucide-react";
import Image from "next/image"; // If needed for specific icons, else Lucide is good. Screenshots used customized icons, but Lucide is close.

export default function ShippingAndDelivery() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1>Shipping & Delivery</h1>
                <p>Fast, secure, and reliable delivery worldwide for your luxury purchases</p>
            </div>

            {/* Info Cards Section */}
            <div className={styles.infoCardsWrapper}>
                {/* Domestic Shipping */}
                <div className={styles.infoCard}>
                    <div className={styles.iconCircle}>
                        <Home size={24} />
                    </div>
                    <h3>DOMESTIC SHIPPING</h3>
                    <p>
                        Tangerine luxury charges a flat shipping rate of Rs 500 for all of India.
                    </p>
                </div>

                {/* Worldwide Shipping */}
                <div className={styles.infoCard}>
                    <div className={styles.iconCircle}>
                        <Globe size={24} />
                    </div>
                    <h3>WORLDWIDE SHIPPING</h3>
                    <p>
                        Import duties, taxes, customs fees, or shipping costs are not included in the prices of the products featured on Tangerine luxury. These are all additional costs that the buyer will pay. It is advised that a foreign purchaser confirms all of the aforementioned expenses with the customs office in their country.
                    </p>
                </div>

                {/* Departure Times */}
                <div className={styles.infoCard}>
                    <div className={styles.iconCircle}>
                        <Clock size={24} />
                    </div>
                    <h3>DEPARTURE TIMES</h3>
                    <p>
                        Tangerine luxury makes every effort to ship all orders within 7 to 10 days of the purchase date, however delays are beyond our control. Domestic deliveries can be made within 15 days of the purchase date, and deliveries to Delhi/NCR can be made in 7 to 12 days. From the date of dispatch, international deliveries could take up to 20 to 25 days.
                    </p>
                </div>
            </div>

            {/* Cash on Delivery (COD) Section */}
            <div className={styles.codSection}>
                <div className={styles.codBox}>
                    <div className={styles.codIconWrapper}>
                        <Truck size={28} />
                    </div>
                    <h3>Cash on Delivery (COD)</h3>
                    <p>
                        Cash on Delivery (COD) is offered throughout India. Please reach out to our Personal Shopper Team at <strong>+91 7071-045-045</strong> or <a href="mailto:sales@tangerineluxury.com" className={styles.codEmail}>sales@tangerineluxury.com</a> for any additional assistance.
                    </p>
                </div>
            </div>

            {/* Delivery Timeline Section */}
            <div className={styles.timelineSection}>
                <h2>Delivery Timeline</h2>
                <div className={styles.timelineSteps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepContent}>
                            <h4>Order Processing</h4>
                            <p>7-10 days from purchase date</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepContent}>
                            <h4>Domestic Delivery</h4>
                            <p>Within 15 days (Delhi/NCR: 7-12 days)</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepContent}>
                            <h4>International Delivery</h4>
                            <p>20-25 days from dispatch date</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Purchase Methods Section */}
            <div className={styles.purchaseMethodsSection}>
                <h2>PURCHASE METHODS</h2>
                <p>
                    We provide Cash on Delivery (COD) throughout India. For the most COD Value, please get in touch with Our Personal Shopper Team.
                    <br /><br />
                    We take all major credit and debit cards, including American Express, Mastercard, and Visa.
                </p>

                <div className={styles.methodCardsWrapper}>
                    {/* Bank Transfer */}
                    <div className={styles.methodCard}>
                        <div className={styles.methodHeader}>
                            {/* Placeholder for Bank Icon - using Image if available or Lucide */}
                            <div className={styles.methodIconWrapper}>
                                <Landmark size={32} color="#4A5568" />
                            </div>
                            <h3>Bank Transfer</h3>
                        </div>
                        <p>
                            For more help, get in touch with Our Personal Shopper Team.
                        </p>
                    </div>

                    {/* Paytm */}
                    <div className={styles.methodCard}>
                        <div className={styles.methodHeader}>
                            <div className={styles.methodIconWrapper}>
                                <CreditCard size={32} color="#4A5568" />
                            </div>
                            <h3>Paytm</h3>
                        </div>
                        <p>
                            For more help, get in touch with Our Personal Shopper Team.
                        </p>
                    </div>

                    {/* Cheque */}
                    <div className={styles.methodCard}>
                        <div className={styles.methodHeader}>
                            <div className={styles.methodIconWrapper}>
                                <FileText size={32} color="#4A5568" />
                            </div>
                            <h3>Cheque</h3>
                        </div>
                        <p>
                            Cheque payments are only accepted in very specific circumstances, and the merchandise is delivered once the check has cleared.
                        </p>
                    </div>
                </div>
            </div>

            {/* Need Additional Help Section */}
            <div className={styles.helpSection}>
                <h2>Need Additional Help?</h2>
                <p>Please get in touch with Our Personal Shopper Team if you need more help.</p>

                <div className={styles.helpCards}>
                    <div className={styles.helpCard}>
                        <div className={styles.helpIcon}>
                            <Phone size={32} />
                        </div>
                        <h3>Call Us</h3>
                        <p>+91 7071-045-045</p>
                    </div>

                    <div className={styles.helpCard}>
                        <div className={styles.helpIcon}>
                            <Mail size={32} />
                        </div>
                        <h3>Email Us</h3>
                        <p>sales@tangerineluxury.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
