import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import DiscountModal from "@/components/DiscountModal";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import CartDrawer from "@/components/CartDrawer";
import CookieBanner from "@/components/CookieBanner";

import { AuthProvider } from "@/context/AuthContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import InitialLoader from "@/components/InitialLoader";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tangerine Luxury - Authenticated Luxury",
  description: "Buy and sell authenticated, pre-loved luxury fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <InitialLoader />
              {children}
              <DiscountModal />
              <CartDrawer />
              <WhatsAppButton />
              <CookieBanner />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
