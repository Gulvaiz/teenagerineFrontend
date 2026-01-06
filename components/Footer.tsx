import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock,
  MessageCircle
} from "lucide-react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* 1️⃣ BRAND */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Image
                src="/Tangerine-Logo-200px.png"
                alt="Tangerine Luxury"
                width={200}
                height={100}
                priority
              />
            </div>

            <div className={styles.contactItem}>
              <Phone size={16} /> +91 7042039009
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} /> +91 7042029009
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} /> sales@tangerineluxury.com
            </div>
            <div className={styles.contactItem}>
              <Clock size={16} /> Open Time: 11:00 AM – 7:00 PM
            </div>
          </div>

          {/* 2️⃣ ABOUT */}
          <div className={styles.column}>
            <h4>ABOUT TANGERINE LUXURY</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/our-founder">Our Founder</Link></li>
              <li><Link href="/our-mission">Our Mission</Link></li>
              <li><Link href="/why-tangerine">Why Tangerine Luxury</Link></li>
              <li><Link href="/authenticity">Authenticity</Link></li>
              <li><Link href="/product-condition-guidelines">Product Condition Guidelines</Link></li>
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link href="/order-policy">Orders and Returns</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/shipping-and-delivery">Shipping and Delivery</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3️⃣ MY ACCOUNT */}
          <div className={styles.column}>
            <h4>MY ACCOUNT</h4>
            <ul>
              <li><Link href="#">Sign In</Link></li>
              <li><Link href="/wishlist">My Wishlist</Link></li>
              <li><Link href="/trackOrder">Track My Order</Link></li>
            </ul>
          </div>

          {/* 4️⃣ FAQ */}
          <div className={styles.column}>
            <h4>FAQ&apos;s</h4>
            <ul>
              <li><Link href="/buyer-faq">Buyer&apos;s FAQ</Link></li>
              <li><Link href="/seller-faq">Seller&apos;s FAQ</Link></li>
              <li><Link href="/sell-with-us">Sell With Us</Link></li>
              <li><Link href="/lavaway">Layaway</Link></li>
              <li><Link href="/tl-elite">TL Elite</Link></li>
            </ul>
          </div>

          {/* 5️⃣ SUBSCRIBE */}
          <div className={styles.subscribe}>
            <div className={styles.socials}>
              <MessageCircle size={18} className={styles.whatsappIcon} />
              <Instagram size={18} className={styles.instaIcon} />
              <Facebook size={18} className={styles.facebookIcon} />
              <Youtube size={18} className={styles.youtubeIcon} />
            </div>

            <input
              type="email"
              placeholder="Enter your email address"
            />
            <button>Subscribe</button>

            <p>
              By subscribing, you agree to receive promotional emails.
              You can unsubscribe at any time.
            </p>
          </div>

        </div>

        <div className={styles.bottom}>
          © 2025 Tangerine Luxury. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
