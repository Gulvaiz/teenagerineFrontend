import type { Metadata } from "next";
import "./globals.css";
import DiscountModal from "@/components/DiscountModal";

export const metadata: Metadata = {
  title: "Tangerine Luxury | Authenticated Luxury",
  description: "Shop authenticated luxury products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DiscountModal />
        {children}
      </body>
    </html>
  );
}
