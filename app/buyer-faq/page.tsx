'use client';

import { useState } from 'react';
import styles from './buyerFAQ.module.css';

const faqData = [
  {
    title: 'Authenticity & Quality',
    items: [
      {
        q: 'Are all the items on Tangerine Luxury genuine?',
        a: 'The authenticity of every item sold on our website is 100% guaranteed. Each item is evaluated by our team of specialists and our third-party authenticating partners situated in the USA based on its material, hardware, stitching, craftsmanship, stamping, date codes, etc. To learn more, please visit Authenticity.',
      },
      {
        q: "Are there any things on the site that don't have a certificate of authenticity?",
        a: "Yes, Tangerine Luxury and our authenticating partners provide a Certificate of Authenticity with every item sold on our website. However, not all products may come with the labels' original authenticity cards.",
      },
      {
        q: 'What kind of physical condition are the products in?',
        a: 'New and used items are both listed on Tangerine Luxury. These fall into the categories of new with tags, new without tags, pristine, good condition, and used quite well. These Product Condition Guidelines are listed for each specific product.',
      },
      {
        q: 'What is your policy on Tangerine Luxury?',
        a: 'Within 24 hours of receiving the merchandise, we can process any returns that have been requested. To submit a return request, please go to Order & Returns.',
      },
      {
        q: 'Which payment methods do you accept?',
        a: 'We accept most major credit and debit cards, online bank transfer via IMPS or NEFT. Cash-on-Delivery is offered in most locations within India. Paytm is supported, and we are adding additional online wallet providers as needed. EMI is also available from limited banks on our portal.',
      },
    ],
  },
  {
    title: 'Orders & Security',
    items: [
      {
        q: 'Is the data on my credit card secure?',
        a: 'Yes, all transactions are conducted using industry-standard encryption through well-known payment gateways. Information about credit cards is not kept on our servers.',
      },
      {
        q: 'Does your website display my name or my contact information?',
        a: 'No, we respect your privacy and offer a secure and private shopping experience.',
      },
      {
        q: 'Do the products come with a warranty?',
        a: 'We make every effort to maintain quality control with our Authentication and Product Spa services, but as the majority of our items are pre-owned, we are unable to provide a warranty. Please review the product descriptions for any manufacturer warranties that might apply to certain items.',
      },
      {
        q: 'When will my order arrive?',
        a: 'Most orders placed with Tangerine Luxury are delivered within 7 to 10 business days. Delivery durations could change by an extra 2–5 days depending on your location.',
      },
      {
        q: 'What takes place if there is an issue with my order?',
        a: 'Please contact us at sales@tangerineluxury.com or call +91 704 203 9009 and we will make it right.',
      },
    ],
  },
  {
    title: 'Services & Support',
    items: [
      {
        q: 'If my thing is IN-AUTHENTIC, what happens?',
        a: "We have a very thorough evaluation procedure that is really strict, and we have built our reputation on these inflexible standards. In the incredibly unlikely scenario that the item is discovered to be fake, we provide a 100% refund within 21 business days. Within 15 business days of the claimed product's receipt, we would need verification from the brand that it is not authentic, either in the form of a letter on letterhead or an email.",
      },
      {
        q: 'Do you have a physical location where I can come and see the products?',
        a: 'Tangerine Luxury anticipates opening retail shops in a few places. We presently provide an online shopping experience.',
      },
      {
        q: 'Is there a possibility for me to examine the things before buying them?',
        a: 'We do, in fact, we provide an on-site preview service. You can choose up to three items to shortlist online, and our sales team will make arrangements to have them delivered to you for a small transportation fee of Rs 500. This fee is eliminated if you choose to buy any of the things while you are there. For further information, please visit Private Viewing.',
      },
      {
        q: "What if I don't feel comfortable trying things on at home. Where can I find them?",
        a: 'Yes, you are welcome to view at the location of your choice and time in advance and provide a list of the things you want to look at. They will be kept on hand for you. Please get in touch with our personal shopper team at sales@tangerineluxury.com or by calling +91 704 203 9009.',
      },
      {
        q: 'Is Tangerine Luxury a global retailer?',
        a: 'We do ship internationally. For further details, please see Shipping & Delivery.',
      },
    ],
  },
];

export default function BuyerFAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>BUYER FAQ&apos;S</h1>
          <p>
            Find answers to frequently asked questions about shopping with
            Tangerine Luxury
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <div className={styles.searchWrap}>
        <div className={styles.searchBox}>
          <input placeholder="Search FAQ..." />
        </div>
      </div>

      {/* FAQ GRID */}
      <section className={styles.grid}>
        {faqData.map((section, sIdx) => (
          <div key={sIdx} className={styles.card}>
            <h3>{section.title}</h3>

            {section.items.map((item, iIdx) => {
              const key = `${sIdx}-${iIdx}`;
              const isOpen = open === key;

              return (
                <div
                  key={key}
                  className={`${styles.item} ${
                    isOpen ? styles.open : ''
                  }`}
                >
                  <button onClick={() => setOpen(isOpen ? null : key)}>
                    <span>{item.q}</span>
                    <span className={styles.icon}>+</span>
                  </button>

                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>

      {/* SUPPORT */}
      <section className={styles.support}>
        <h2>Still have questions?</h2>
        <p>Our support team is here to help you with any additional queries</p>
        <div className={styles.actions}>
          <button className={styles.email}>Email Support</button>
          <button className={styles.call}>Call Us</button>
        </div>
      </section>

{/* QUICK LINKS */}
<section className={styles.quickLinks}>
  <div className={styles.quickCard}>
    <h4>Order & Returns</h4>
    <p>Learn about our return policy</p>
  </div>

  <div className={styles.quickCard}>
    <h4>Authenticity</h4>
    <p>How we verify products</p>
  </div>

  <div className={styles.quickCard}>
    <h4>Shipping & Delivery</h4>
    <p>Delivery information</p>
  </div>

  <div className={styles.quickCard}>
    <h4>Private Viewing</h4>
    <p>Book an appointment</p>
  </div>
</section>


    </main>
  );
}
