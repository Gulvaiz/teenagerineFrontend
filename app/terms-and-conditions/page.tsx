import styles from "./page.module.css";
import { User, FileText, Box, ShieldCheck, Scale, CheckCircle, AlertCircle, ArrowRight, ArrowDown } from "lucide-react";
import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1>Terms and Conditions</h1>
                <p>Please read these terms carefully before using our services</p>
            </div>

            {/* User Terms */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <User size={24} />
                    </div>
                    <h2>User Terms</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        You declare that you accept to be bound by these terms by using this website. In the event of a conflict between such Terms and these Terms & Conditions of Use, the Terms shall govern.
                    </p>
                    <p>
                        Any modification to the terms and conditions of this website shall be effective as of the date and time of its publication as a part hereof, and shall be deemed given to the user upon such publication.
                    </p>
                    <p>
                        You have agreed to the updated Terms if you continue to use the service after any such changes.
                    </p>
                    <p>
                        Important: The brands whose used and refurbished products are sold on or through www.tangerineluxury.com are not affiliated with Tangerine luxury in any way.
                    </p>
                </div>
            </section>

            {/* Terms and Conditions */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <FileText size={24} />
                    </div>
                    <h2>Terms and Conditions</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        According to the Information Technology Act of 2000, these &quot;Terms & Conditions of Use&quot; are an electronic record.
                    </p>
                    <p>
                        The Information Technology Act of 2000&apos;s Section 2(1)(w) defines us as an &quot;intermediary,&quot; and this is what we do.
                    </p>
                    <p>
                        This Agreement is published in accordance with the requirements of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011, which mandates the publication of the terms for accessing or using the services as well as the rules and regulations, privacy policy, and other related information.
                    </p>
                    <p>
                        The terms &quot;User,&quot; &quot;Client,&quot; &quot;You&quot; and &quot;Your&quot; refer to the user who accesses this website and agrees to be bound by the terms and conditions of Tangerine Luxury.
                    </p>
                </div>
            </section>

            {/* Company Model */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Box size={24} />
                    </div>
                    <h2>Company Model</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        Tangerine luxury is your go-to source for previously owned and refurbished goods (apparel and accessories) that go through a rigorous procedure encompassing inspection, verification, and refurbishing to assure successful reuse.
                    </p>
                    <p>
                        Environmental Commitment: The company will plant one tree and maintain it for three years for every 50 goods sold as part of its contribution to environmental protection.
                    </p>
                    <p>
                        The linear &quot;take-make-waste&quot; approach is replaced by the circular &quot;close-the-loop&quot; model, which calls for each product to be ethically used and to have a responsible usage and end-of-life.
                    </p>
                </div>
            </section>

            {/* Collection Procedures */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Box size={24} />
                    </div>
                    <h2>Collection Procedures</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        Contact Information: The seller can notify Tangerine luxury that the items are ready for collection by calling +7065070422 or sending an email to sales@tangerineluxury.com.
                    </p>
                    <p><strong>Collection Requirements:</strong></p>
                    <ul>
                        <li>We only collect items from parents or households of newborns or kids up to the age of 13</li>
                        <li>Each seller is only allowed to give out 30-40 pieces of merchandise (apparel & accessories) at once</li>
                        <li>Collection or sale from or through vendors is not permitted</li>
                        <li>The seller must ensure the item is accessible for pick-up at the scheduled time and day</li>
                    </ul>
                    <p><strong>Seller Responsibilities:</strong></p>
                    <ul>
                        <li>The item is legally owned by the seller</li>
                        <li>The seller is not a reseller of the product</li>
                        <li>The item is authentic and not counterfeit</li>
                        <li>All documentation, receipts, warranty cards, and packaging must be provided</li>
                        <li>All items sent to Tangerine Luxury must be inspected and verified by the seller.</li>
                        <li>If we find valuables not meant for collection, we&apos;ll try to return them to the seller.</li>
                        <li>We are not responsible for any loss of such items.</li>
                        <li>The seller must provide all paperwork, receipts, warranty cards, packaging, dust bags, and extras for pickup.</li>
                        <li>Removing an item from Tangerine Luxury may incur delivery costs for the seller.</li>
                        <li>The seller will receive a receipt for items collected by Tangerine Luxury.</li>
                    </ul>
                </div>
            </section>

            {/* Process of Post-Authentication / Cost Analysis */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <ShieldCheck size={24} />
                    </div>
                    <h2>Process of Post-Authentication / Cost Analysis</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        Important: If our authentication team does not approve your product, we will return your product(s) to you in the same condition in exchange for a rejection charge of Rs.3000.
                    </p>
                    <p>
                        This is why we suggest you make sure the products you provide us are genuine, in good shape (with no signs of functional wear and tear), and that the estimated price is more or less acceptable to you.
                    </p>
                    <p>
                        Tangerine luxury will rigorously examine acceptance using a variety of inspection, verification, and authentication procedures used on the collected objects.
                    </p>
                    <p>
                        Upon acceptance of any collected items, Tangerine luxury will choose the price to be applied to any accepted products and the sum to which Tangerine luxury shall be entitled upon the sale of such products.
                    </p>
                    <p>
                        If the worth or costing is not acceptable to the seller, the product(s) would be returned at a nominal cost of <strong>Rs.500</strong> or the seller might have it picked up from our office at no cost.
                    </p>
                    <p>
                        Our runner will contact the Seller with an agreement once the Seller has agreed on the cost of the product(s), and at that point, the agreement must be properly completed, signed, and returned to the runner.
                    </p>
                </div>
            </section>

            {/* Valuation Procedures */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Scale size={24} />
                    </div>
                    <h2>Valuation Procedures</h2>
                </div>
                <div className={styles.content}>
                    <p><strong>Product Categories:</strong></p>
                    <div className={styles.categories}>
                        <span className={styles.category}>WITH TAGS</span>
                        <span className={styles.category}>NEW WITHOUT TAGS</span>
                        <span className={styles.category}>PRISTINE</span>
                        <span className={styles.category}>GOOD CONDITION</span>
                        <span className={styles.category}>USED FAIRLY WELL</span>
                    </div>
                    <p>
                        The condition, value, and potential for refurbishment of the item will be examined, verified, and authenticated by our in-house personnel. The product&apos;s marketability and approximate market value will then be determined.
                    </p>
                    <p>
                        We will email the seller the price at which the seller&apos;s products can be sold once the product(s) have passed the INSPECTION/AUTHENTICATION/VERIFICATION PROCESS.
                    </p>
                </div>
            </section>

            {/* Listing Preloved */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <FileText size={24} />
                    </div>
                    <h2>Listing Preloved</h2>
                </div>
                <div className={styles.content}>
                    <p><strong>Listing Timeline:</strong></p>
                    <ul>
                        <li>Products will be posted on the website within 2-3 weeks after contract signing</li>
                        <li>Products will be advertised on social media</li>
                        <li>Products remain listed for 4 months initially</li>
                        <li>If unsold after 4 months, products are returned to seller</li>
                        <li>Seller may request additional 2 months with discounted pricing</li>
                        <li>The person delivering items cannot object to how they are displayed on Tangerine Luxury&apos;s website.</li>
                    </ul>
                    <p>
                        Handling Fee: 20% of the price will be charged if seller decides not to sell or requests return before agreement establishment.
                    </p>
                </div>
            </section>

            {/* Restoration Process */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Box size={24} />
                    </div>
                    <h2>Restoration Process</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        Following the execution of the contract, we will begin the cleaning procedure, which includes product spa and product photography.
                    </p>
                    <p>
                        Tangerine luxury won&apos;t significantly affect or change the item&apos;s character or design during the refurbishing process. However, refurbishing would involve performing any necessary cleaning, tailoring, or textile work to increase the pre-owned item&apos;s worth and longevity.
                    </p>
                    <p>
                        Disclaimer: Tangerine luxury disclaims any liability for any harm or alteration brought about by the application of refurbishment procedures.
                    </p>
                </div>
            </section>

            {/* Sales of Refurbished and Preloved Items */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <CheckCircle size={24} />
                    </div>
                    <h2>Sales of Refurbished and Preloved Items</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        At the time of sale, the product&apos;s packaging would just say &quot;Tangerine luxury&quot; to denote that Tangerine luxury had refurbished the pre-owned item.
                    </p>
                    <p><strong>Sales Process:</strong></p>
                    <ol>
                        <li>Seller will be notified within 15 days when merchandise is sold</li>
                        <li>All taxes, GST, commission, and value-added services will be paid by the seller</li>
                        <li>Payment will be made within 30 days via account transfer or check</li>
                        <li>Customers can return items within 3 days of purchase</li>
                        <li>Refunds are issued as credit notes with 6-month validity</li>
                    </ol>
                </div>
            </section>

            {/* Disclaimer */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <AlertCircle size={24} />
                    </div>
                    <h2>Disclaimer</h2>
                </div>
                <div className={styles.content}>
                    <ul>
                        <li>Use the website and transact at your own risk.</li>
                        <li>Orders are for personal, not commercial, use.</li>
                        <li>We are not liable for sellers&apos; actions or breaches.</li>
                        <li>Disputes with sellers or manufacturers are your responsibility.</li>
                        <li>No warranties on product quality, accuracy, or suitability.</li>
                        <li>All products, prices, and content are provided &quot;as is.&quot;</li>
                        <li>Website and services are used entirely at your own risk.</li>
                    </ul>
                </div>
            </section>

            {/* Rules and jurisdiction for goverment */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <Scale size={24} />
                    </div>
                    <h2>Rules and jurisdiction for goverment</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        The courts in Faridabad shall have exclusive jurisdiction over any matter or dispute relating to or arising out of this Agreement, subject to the requirements of Clause.14 (Dispute Resolution) below. This Agreement shall be governed by the laws of India.
                    </p>
                </div>
            </section>

            {/* Controversy resolution */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <FileText size={24} />
                    </div>
                    <h2>Controversy resolution</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        Grievance Officer details are published on www.tangerineluxury.com as per IT Rules, 2011.
                    </p>
                    <p>
                        Complaints acknowledged within 36 hours of receipt.
                    </p>
                    <p>
                        Data in question removed or access denied within 36 hours.
                    </p>
                    <p>
                        Complaints resolved within one month of receipt.
                    </p>
                </div>
            </section>

            {/* Arbitration informally */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <ArrowRight size={24} />
                    </div>
                    <h2>Arbitration informally</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        – Good faith talks between the buyer and the Tangerine luxury Coordinator, as described on www.tangerineluxury.com, shall be used to settle any issues between the parties relating to the Sale of Products or the conditions as mentioned above. Any party may begin arbitration in accordance with the Arbitration provision of this Agreement if the issue is not addressed within sixty (60) days of the request for negotiation by giving writing notice to the other party.
                    </p>
                </div>
            </section>

            {/* Arbitration. If */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <ArrowDown size={24} />
                    </div>
                    <h2>Arbitration. If</h2>
                </div>
                <div className={styles.content}>
                    <p>
                        When a dispute is not resolved in accordance with the provisions of the Informal Dispute Resolution section of this Agreement and a party (the &quot;Pursuing Party&quot;) is still willing to pursue it, the pursuing party may request that any dispute, difference, or question arising from or related to the terms and conditions mentioned herein, the commission of any violation of any provision of this Agreement, or in any other way connected with this Agreement or the business conducted on www.tangerineluxury.com be resolved. The judgment or reward made in this manner shall be conclusive.
                    </p>
                    <p>
                        For any additional questions about the aforementioned, don&apos;t hesitate to get in touch with us. #Tangerineluxuryteam
                    </p>
                    <p>
                        To consign or sell with us, please get in touch with us at
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
                <h2>Questions About Our Terms?</h2>
                <p>Contact our team for clarification on any terms and conditions</p>
                <div className={styles.ctaButtons}>
                    <a href="mailto:sales@tangerineluxury.com" className={styles.ctaButton}>
                        Email: sales@tangerineluxury.com
                    </a>
                    <a href="tel:+917065070422" className={styles.ctaButton}>
                        Call: +91 706 507 0422
                    </a>
                </div>
            </div>
        </div>
    );
}
