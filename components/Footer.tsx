import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Clock
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
              <span className={styles.logoIcon}>🍊</span>
              <h2>TANGERINE LUXURY</h2>
            </div>

            <div className={styles.contactItem}><Phone size={16} /> +91 7042039009</div>
            <div className={styles.contactItem}><Phone size={16} /> +91 7042029009</div>
            <div className={styles.contactItem}><Mail size={16} /> sales@tangerineluxury.com</div>
            <div className={styles.contactItem}><Clock size={16} /> Open Time: 11:00 AM – 7:00 PM</div>
          </div>

          {/* 2️⃣ ABOUT */}
          <div className={styles.column}>
            <h4>ABOUT TANGERINE LUXURY</h4>
            <ul>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Our Founder</Link></li>
              <li><Link href="#">Our Mission</Link></li>
              <li><Link href="#">Why Tangerine Luxury</Link></li>
              <li><Link href="#">Authenticity</Link></li>
              <li><Link href="#">Product Condition Guidelines</Link></li>
              <li><Link href="#">Terms and Conditions</Link></li>
              <li><Link href="#">Orders and Returns</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Shipping and Delivery</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3️⃣ MY ACCOUNT */}
          <div className={styles.column}>
            <h4>MY ACCOUNT</h4>
            <ul>
              <li><Link href="#">Sign In</Link></li>
              <li><Link href="#">My Wishlist</Link></li>
              <li><Link href="#">Track My Order</Link></li>
            </ul>
          </div>

          {/* 4️⃣ FAQ */}
          <div className={styles.column}>
            <h4>FAQ&apos;s</h4>
            <ul>
              <li><Link href="#">Buyer&apos;s FAQ</Link></li>
              <li><Link href="#">Seller&apos;s FAQ</Link></li>
              <li><Link href="#">Sell With Us</Link></li>
              <li><Link href="#">Layaway</Link></li>
              <li><Link href="#">TL Elite</Link></li>
            </ul>
          </div>

          {/* 5️⃣ SUBSCRIBE */}
          <div className={styles.subscribe}>
            <div className={styles.socials}>
              <span className={styles.whatsapp}></span>
              <Instagram size={18} />
              <Facebook size={18} />
              <Youtube size={18} />
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
