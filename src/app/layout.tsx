import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe Estates | Premium Apartment Construction & Installment Plans",
  description: "Experience luxury living with Luxe Estates. Premium apartments starting from 20,000 PKR monthly installments. Book your dream home on WhatsApp today.",
  keywords: ["real estate", "apartments", "luxury homes", "installment plan", "Pakistan property", "Luxe Estates"],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23c5a059"/><path d="M30 75V25h8v42h22v8H30z" fill="white"/></svg>',
  },
  openGraph: {
    title: "Luxe Estates | Premium Apartments",
    description: "Luxury living made affordable with flexible installment plans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
