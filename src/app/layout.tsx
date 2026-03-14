import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BOOYAA Fishing Wear — Premium Fishing Clothing & Accessories",
    template: "%s | BOOYAA Fishing Wear",
  },
  description:
    "BOOYAA Fishing Wear — Premium fishing clothing including shorts, shirts, hats, and jackets for the avid angler.",
  keywords: ["fishing wear", "fishing clothing", "fishing hats", "fishing shirts", "BOOYAA"],
  openGraph: {
    title: "BOOYAA Fishing Wear",
    description: "Premium fishing clothing for the avid angler",
    url: "https://booyaa.com",
    siteName: "BOOYAA Fishing Wear",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOOYAA Fishing Wear",
    description: "Premium fishing clothing for the avid angler",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
