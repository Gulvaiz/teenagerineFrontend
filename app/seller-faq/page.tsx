"use client";

import { useState } from "react";
import styles from "./sellerFaq.module.css";

type FAQ = {
  q: string;
  a: string;
};

const faqColumns: FAQ[][] = [
  [
    {
      q: "How can I put something up for sale on Tangerine Luxury?",
      a: "Simply start the process by filling out our Sales form on our Sell with us Page. To request a price, you can also reach us directly by calling +91 704 202 9009. After receiving your inquiry, our sales team will get back with an estimate within 48 hours..",
    },
    {
      q: "What products do you accept for sale listing?",
      a: "We welcome all significant Luxury Brands. We accept all upscale clothing and accessories for adults, teenagers, and children. For more details, you may check out our list of designers. We won’t reject a brand just because it isn’t mentioned there. Contact our Personal Shopper team by calling +91 704 202 9009",
    },
    {
      q: "Do i have to share my name or my contact information on teenagerine luxury?",
      a: "Not at all—we respect your privacy. Our Sellers’ and Buyers’ identities are kept private and secure.",
    },
    {
      q:"How are prices determined?",
      a:"Pricing will depend on a number of factors like brand, style, product condition and market demand to list a few. At Tangerine luxury, we try to decide the costings mutually with the client so our sellers can get the best-value out of their pre-loved products. Our Sales Team will then provide a tentative costing based on the product pictures and your expectations and a confirmed costing upon reviewing the product physically.",
    },
    {
      q: "What happens if I don’t accept the consignment price?",
      a: "Tangerine luxury makes every effort to provide you with the desired price. We can always rework the price if it is unacceptable to you. If we are unable to meet your expectations, we will either send your item back to you for a small service fee of Rs 400 (inside New Delhi/NCR) to cover our courier costs, or you can pick it up for free at our headquarters. For our sellers across India, return shipping costs may be based on actuals.",
    },
  ],
  [
    {
      q: "Are there any additional expenses?",
      a: "No, we keep things straightforward, and there are no additional fees. The price we quote is the price you get in hand. Simply list your product with us, sit back, and start making money.",
    },
    {
      q: "What is the commission for Tangerine Luxury?",
      a: "The commission we receive varies depending on the product. However, we charge between 15% and 20%, which also covers GST, free pick-up, product spa, listing, and promotion on our website and social media platforms.",
    },
    {
      q: "What is the procedure for authentication?",
      a: "Each item that you submit is put through a multi-stage verification procedure by our experienced internal experts and our third party authenticators situated in the USA.",
    },
    {
      q: "What happens if my item fails authentication?",
      a: "Selling counterfeits is illegal and goes against our company’s policy, so if an item fails our authentication procedure and is found to be a fake, we will be unable to advertise it and will instead bring it back to you for a service fee of Rs. 3000 per product (extra shipping costs may apply). Tangerine Luxury will donate the merchandise to an NGO if the seller doesn’t pay for their counterfeit item within 30 business days.",
    },
    {
      q: "How long do you keep things",
      a: "We provide a 4-month initial Consigning period. When the contract expires, you have the option to either remove your item from the Consigning or, as part of a special offer, to keep it there for a further two months."
    }
  ],
  [
    {
      q: "Does Tangerine Luxury offer any assurances regarding the security of the products sold by its sellers?",
      a: "Yes, Tangerine Luxury signs a digital contract with each of its sellers that is valid for 4 months and guarantees the security of the our sellers products.",
    },
    {
      q: "Do you lower a consignement without getting the first seller's consent",
      a: "As per the deal, your item will be advertised for 4 months at the agreed price. Any costing reductions must first receive the seller’s approval before being processed.",
    },
    {
      q: "After agreeing to the digital contract, how can i get my products back?",
      a: "You always have the option to remove your product from the listing. However, a service charge of 20% per product will be applied to the pricing we quoted you as our handling fee if a product is removed before the contract within the contract period or before 4 months, regardless of the cause.",
    },
    {
      q: "What happens if my product doesn't sell?",
      a: "You can choose to take your item back if it doesn’t sell during the contract period of 4 months; in this situation, we will bring it to you for a little delivery fee of Rs 400 or you can choose to pick it up for free at our headquarters. A minimal courier fee would be charged to PAN INDIA sellers based on actual costs. As an alternative, you can decide to add an extra two months to the listing of your goods with a discount.",
    },
    {
      q: "When do you make the payment to user",
      a: "Tangerine luxury pays its sellers for sold items within 48 hours. Cheques or bank transfers are used for payments.",
    }
  ],
  [
    {
      q: "Can I receive cash in exchange for my goods?",
      a: "On request, we might be able to provide a cash payout option for particular items; these must be picked up from our headquarters. All cash payouts are subject to a 5% processing charge deducted from them and can take up to 15 business days. You can also choose the bank transfer option, which is free of deductions and is sent within 24 hours. Please contact our Seller Support team, who will be pleased to address any queries you may have on this.",
    },
    {
      q: "Do you ever make outright purchases?",
      a: "Yes, if they are in pristine to new condition and part of the most recent collection, we will purchase things from certain brands like Chanel, Hermes, Louis Vuitton, Goyard, Gucci, etc. Within 21 business days, payment for any outright purchases is handled.",
    },
    {
      q: "Do all pre-owned items from Tangerine Luxury undergo cleaning or refurbishment before being listed?",
      a: "Yes. Most pre-owned products will undergo bio-cleaning, which involves cleaning the interior and exterior, taking care of any stains, refurbishing the hardware, etc. before the photoshoot and online listing, in order to assure successful sales",
    },
    {
      q: "Can Tangerine Luxury cancel the agreement midway?",
      a: "Yes,Tangerine luxury has the power to terminate the Seller’s contract in the midway if the Seller doesn’t respect the Company’s policies. As stated in the sellers contract ,Tangerine luxury has the authority to charge 20% termination fees per product because we have incurred expenses for services like photoshoots, product pick-ups, social media promotion, etc. The contract will be terminated and the Seller’s products will be delivered back after full payment if the Seller is rude and abusive to the Company. Any additional shipping costs will be the seller’s responsibility to pay once the products have been received."
    }
  ],
];

export default function SellerFAQPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey(prev => (prev === key ? null : key));
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <h1>SELLER FAQ&apos;S</h1>
      </section>

      <section className={styles.grid}>
        {faqColumns.map((column, colIdx) => (
          <div key={colIdx} className={styles.card}>
            {column.map((item, idx) => {
              const key = `${colIdx}-${idx}`;
              const isOpen = openKey === key;

              return (
                <div
                  key={key}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                >
                  <button onClick={() => toggle(key)}>
                    <span>{item.q}</span>
                    <span className={styles.icon}>{isOpen ? "×" : "+"}</span>
                  </button>

                  <div className={styles.answerWrapper}>
                    <div className={styles.answer}>{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>
    </main>
  );
}
