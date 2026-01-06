import styles from "./page.module.css";
import { RefreshCcw, ShieldCheck } from "lucide-react";

export default function OrderPolicy() {
    return (
        <div className={styles.container}>
            {/* Top Banner is likely handled by Header, focusing on content */}

            {/* Cards Section */}
            <div className={styles.topSection}>
                {/* Order and Return Policy Card */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <RefreshCcw size={48} strokeWidth={1.5} />
                    </div>
                    <h2>Order and Return Policy</h2>
                    <p>
                        We encourage you to visit your Returns Page or get in touch with us directly to initiate a return request if you determine that an item isn&apos;t the correct fit for you. Within 24 hours of receiving the order, we must be notified of any returns or exchanges, and all returns must be returned back within 5 days of the delivery date. Your Returns would be impacted if you didn&apos;t do this.
                    </p>
                </div>

                {/* Our Guarantee Card */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <ShieldCheck size={48} strokeWidth={1.5} />
                    </div>
                    <h2>Our Guarantee</h2>
                    <p>
                        We will put things right if we list an item inaccurately or if there is an issue with your order or an item. Send us an email at sales@tangerineluxury.com with a brief description of the problem, and we&apos;ll respond as quickly as we can...!
                    </p>
                </div>
            </div>

            {/* Key Informations Section */}
            <div className={styles.infoSection}>
                <h2>Key Informations</h2>
                <ul className={styles.infoList}>
                    <li>We must receive notification of the return within 24 hours of receiving the order in order to be eligible.</li>
                    <li>Buyers are responsible for shipping back all returns to Tangerine luxury. If you would want the return address, please contact your personal shopper.</li>
                    <li>Everything must be in the same state as when you first acquired it (New with Tags items must be returned with original tags attached, dust bag, Original Invoice, Authenticity Certificate etc.)</li>
                    <li>There must be no damage to the product return tag.</li>
                    <li>The item(s) purchased during the sale are non-refundable.</li>
                    <li>Tangerine luxury has the right to refuse to accept the returned product or to withhold a specific amount in accordance with the harm suffered if the buyer fails to return the item in the same condition as it was supplied to them. If Tangerine luxury rejects the return, the buyer is responsible for paying Tangerine luxury&apos;s shipping costs to return the item.</li>
                    <li>All products bought under reduction will be considered sale.</li>
                    <li>On all returns, we provide 6 month-valid exchanges and store credits equal to the purchase price. All store credits may be applied to a single transaction or several.</li>
                    <li>During COVID-19 or any variations, NO returns on apparel will be accepted; 100% cashback will only be given if the product is proved fake. Within 15 days of receiving the merchandise, we require official confirmation from the brand on letterhead or via email that the item is not real. If you have any additional questions, please contact us to learn more.</li>
                    <li>Once the goods are sold, Tangerine luxury is not liable for any color fading or change.</li>
                    <li>Tangerine luxury does not accept returns for products that have color discrepancies that could be caused by digital photography.</li>
                    <li>Please contact the Tangerine luxury support team at +91 704 202 9009 if an item is received damaged.</li>
                    <li>When returning things, original shipping costs are non-refundable.</li>
                    <li>Each and every dispute is subject to Faridabad&apos;s jurisdiction. Disclaimer: Order cancellations are only permitted within 24 hours after purchase for all orders.</li>
                </ul>
            </div>

            {/* Need Help Section */}
            <div className={styles.helpSection}>
                <h2>Need Help?</h2>
                <p>Contact our support team for any assistance</p>
                <div className={styles.contactLinks}>
                    <a href="mailto:sales@tangerineluxury.com" className={styles.contactLink}>
                        Email: sales@tangerineluxury.com
                    </a>
                    <a href="tel:+917042029009" className={styles.contactLink}>
                        Phone: +91 704 202 9009
                    </a>
                </div>
            </div>
        </div>
    );
}
