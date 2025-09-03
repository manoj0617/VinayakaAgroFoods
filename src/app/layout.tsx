import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Butterfly Tutti Frutti | Vinayaka Agro Foods – Manufacturer & Exporter in India",
  description: "Vinayaka Agro Foods, manufacturer of Butterfly brand tutti frutti, is India's trusted supplier and exporter of high-quality candied papaya for bakeries, ice creams, and confectionery worldwide.",
  keywords: "tutti frutti manufacturer India, tutti frutti suppliers, tutti frutti wholesale, bulk tutti frutti exporter, butterfly tutti frutti",
  authors: [{ name: "Vinayaka Agro Foods" }],
  creator: "Vinayaka Agro Foods",
  publisher: "Vinayaka Agro Foods",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vinayakaagrofoods.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vinayakaagrofoods.com',
    siteName: 'Vinayaka Agro Foods',
    title: 'Butterfly Tutti Frutti | Vinayaka Agro Foods – Manufacturer & Exporter in India',
    description: 'India\'s leading tutti frutti manufacturer and exporter. Premium quality candied papaya for global markets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Butterfly Tutti Frutti | Vinayaka Agro Foods',
    description: 'India\'s leading tutti frutti manufacturer and exporter.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you get them from Google Search Console
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vinayaka Agro Foods',
    alternateName: 'Butterfly Tutti Frutti',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vinayakaagrofoods.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://vinayakaagrofoods.com'}/logo.png`,
    description: 'India\'s leading manufacturer and exporter of Butterfly brand tutti frutti for bakeries, ice cream, and confectionery.',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Industrial Area, Food Park, Sector 15, MIDC',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400001',
      addressCountry: 'IN'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9441587748',
        contactType: 'sales',
        email: 'contact@vinayakaagrofoods.com',
        availableLanguage: ['English', 'Hindi']
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9441587748',
        contactType: 'wholesale',
        email: 'contact@vinayakaagrofoods.com'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9441587748',
        contactType: 'export',
        email: 'contact@vinayakaagrofoods.com'
      }
    ],
    sameAs: [
      'https://www.facebook.com/vinayakaagrofoods',
      'https://www.linkedin.com/company/vinayaka-agro-foods'
    ]
  }

  return (
    <html lang="en">
      <head suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
