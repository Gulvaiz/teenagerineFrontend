import Image from "next/image";
import { Search, Clock, Award } from "lucide-react";
import styles from "./page.module.css";

export default function AuthenticityPage() {
    return (
        <div className={styles.container}>
            {/* Hero Section with Video */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <video
                    className={styles.heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/authenticityMov.mov" type="video/quicktime" />
                    <source src="/authenticityMov.mov" type="video/mp4" />
                </video>
                <h1 className={styles.heroTitle}>Authentication Process</h1>
            </section>

            <h2 className={styles.mainTitle}>Authentication Methods</h2>

            {/* Section 1: Hardware */}
            <section className={styles.section}>
                <div className={styles.textBlock}>
                    <h3>Hardware</h3>
                    <p>
                        Hardware from luxury companies is of very high quality and style.
                        The relevant brand name is typically engraved with care and accuracy.
                        The primary indicator of legitimate hardware is that it always feels solid and safe.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <Image
                        src="/authenticity1.png"
                        alt="Hardware Detail"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* Section 2: Code Data (Reversed) */}
            <section className={`${styles.section} ${styles.reverse}`}>
                <div className={styles.textBlock}>
                    <h3>Code Data</h3>
                    <p>
                        The product code acts as a distinctive identifier when confirming the bag&apos;s validity.
                        A parameter that can ensure the authenticity of a premium item is checking the product code.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <Image
                        src="/authenticity2.png"
                        alt="Authenticity Card Inspection"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* Section 3: Closures */}
            <section className={styles.section}>
                <div className={styles.textBlock}>
                    <h3>Closures</h3>
                    <p>
                        Verifying the zippers used is one of the most important examination strategies to
                        determine whether a luxury goods is genuine. While some upscale companies, like YSL,
                        utilize their own branded zippers, others use well-known zipper manufacturers, like Lampo.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <Image
                        src="/authenticity3.png"
                        alt="Zipper Detail"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* Section 4: Uneven Stitching Errors (Reversed) */}
            <section className={`${styles.section} ${styles.reverse}`}>
                <div className={styles.textBlock}>
                    <h3>Uneven Stitching Errors</h3>
                    <p>
                        Uneven stitching is a dead giveaway that a product is phony because all high-end
                        luxury brands ensure that their items are expertly produced.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <Image
                        src="/authenticity4.png"
                        alt="Stitching Craftsmanship"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* Section 5: Logo / Embossing */}
            <section className={styles.section}>
                <div className={styles.textBlock}>
                    <h3>Logo / Embossing</h3>
                    <p>
                        Every premium brand has a distinctive logo that serves as its identity.
                        Instead of being printed on it, the brand name is often neatly and evenly
                        written or embossed. Every high-end business has a unique method for
                        embossing its monogram or emblem onto a product.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <Image
                        src="/authenticity5.png"
                        alt="Logo Embossing"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            {/* Authenticity Certification */}
            <section className={styles.certificationSection}>
                <h2>Authenticity Certification</h2>
                <p className={styles.certificationText}>
                    By making sure every item on our website is 100 percent genuine, we maintain
                    the essence of luxury reselling. We offer authenticity certification while
                    ensuring the following elements to make sure you only receive genuine premium
                    goods from us:
                </p>
            </section>

            {/* Three Column Features Grid */}
            <section className={styles.gridSection}>
                <div className={styles.gridItem}>
                    <div className={styles.iconWrapper}>
                        <Search size={48} strokeWidth={1.5} />
                    </div>
                    <h3>Focus on Detail</h3>
                    <p>
                        Our team makes sure that every small element of the luxury goods being offered
                        for sale on our website is evaluated in order to properly carry out what we do.
                        The soles, date codes, brand care labels, logo designs, and other important
                        things are some of the tests that are really necessary.
                    </p>
                </div>

                <div className={styles.gridItem}>
                    <div className={styles.iconWrapper}>
                        <Clock size={48} strokeWidth={1.5} />
                    </div>
                    <h3>Maintain of a Trustable Platform</h3>
                    <p>
                        Prior to being posted on our website, our team of professionals makes sure
                        that every item is carefully inspected by our team of experts.
                    </p>
                </div>

                <div className={styles.gridItem}>
                    <div className={styles.iconWrapper}>
                        <Award size={48} strokeWidth={1.5} />
                    </div>
                    <h3>Trustworthy between Seller & Buyer</h3>
                    <p>
                        We ensure that only trustworthy things are displayed on our website for a fast
                        and easy purchasing and selling experience. We appreciate our clients&apos;
                        faith in this website very much!
                    </p>
                </div>
            </section>

            {/* Info Card Section using Shadow Box */}
            <section className={styles.infoCardContainer}>
                <div className={styles.infoCard}>
                    <p>
                        Nothing spoils a purchase faster than realizing it&apos;s fake. At Tangerine Luxury,
                        we make authenticity our top priority. Every supplier is thoroughly vetted, and
                        every product undergoes meticulous checks before being listed on our site.
                    </p>
                    <p>
                        Our expert team follows a strict authentication process to ensure every
                        transaction is secure and every item is 100% genuine. We know the trust
                        it takes to shop for preloved luxury, which is why we work around the
                        clock to guarantee only authentic, top-quality products reach our
                        customers.
                    </p>
                    <p>
                        With Tangerine Luxury, you can shop confidently—knowing every item is
                        carefully verified and never counterfeit.
                    </p>
                </div>
            </section>

            {/* Technical Text Section */}
            <section className={styles.technicalSection}>
                <p>
                    Physical goods counterfeiting affects over 7% of global trade, making it a major issue. While there have been a number of overt
                    technologies, such as holograms and specialized barcodes, as well as covert technologies, such as taggants and PUFs, these solutions
                    have had a limited impact on the market for counterfeit goods because of a variety of reasons, including cost, adoption barriers, and
                    clonability. Entrupy present a novel method for differentiating between authentic and fake products by using machine learning algorithms
                    to tiny photographs of real physical things.
                </p>
                <p>
                    Our system&apos;s fundamental tenet is based on the notion that microscopic traits in a genuine product or a class of products (matching to
                    the same larger product line) reveal intrinsic commonalities that can be exploited to separate real products from their corresponding
                    counterfeit version. A wide-angle microscopy gadget that takes a microscopic image of a significant portion of a physical object is a
                    crucial component of our system. We demonstrate that a highly accurate classification engine may be created using machine learning
                    methods (ConvNets and bag of words) based on the tiny images that were recorded.
                </p>
                <p>
                    Based on the captured microscopic images, we demonstrate that one can create a highly accurate classification engine for differentiating
                    the authentic versions of a product from the counterfeit ones using machine learning algorithms (ConvNets and bag of words). This
                    property also holds for &quot;super-fake&quot; counterfeits observed in the market that are difficult to detect with the naked eye. We outline the
                    architecture of an end-to-end physical authentication system that makes use of portable hardware, mobile devices, and a cloud-based
                    ecosystem for object verification. Utilizing a sizable dataset of 3 million photos of diverse products and materials, including fabrics, leather,
                    medicines, electronics, toys, and shoes, we test our method. To ensure the validity of common objects, the categorization accuracy is
                    around 98%.
                </p>
            </section>
        </div>
    );
}
