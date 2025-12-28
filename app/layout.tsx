import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import DiscountModal from "@/components/DiscountModal";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
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
      <body className={`${playfair.variable} ${lato.variable}`}>
        <CartProvider>
          {children}
          <DiscountModal />
        </CartProvider>
      </body>
    </html>
  );
}
