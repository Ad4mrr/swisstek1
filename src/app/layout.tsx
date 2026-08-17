import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://swisstekceylon.com';
const socialImage = '/og.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Swisstek Ceylon — For the Perfect Finish', template: '%s — Swisstek Ceylon' },
  description: 'Explore the Swisstek solutions behind spaces built to last in an immersive architectural experience.',
  openGraph: { title: 'Swisstek Ceylon — For the Perfect Finish', description: 'The system behind the perfect finish.', type: 'website', images: [{ url: socialImage, width: 1536, height: 1024, alt: 'Swisstek — For the Perfect Finish' }] },
  twitter: { card: 'summary_large_image', title: 'Swisstek Ceylon — For the Perfect Finish', description: 'The system behind the perfect finish.', images: [socialImage] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#bd0d23' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Swisstek (Ceylon) PLC',
    url: 'https://swisstekceylon.com',
    email: 'info@swisstekceylon.com',
    telephone: '+94 11 780 7000',
    address: { '@type': 'PostalAddress', streetAddress: 'No. 118A, Nawala Road, Narahenpita', addressLocality: 'Colombo 05', addressCountry: 'LK' },
  };
  return <html lang="en"><body className={inter.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /><Header />{children}<Footer /></body></html>;
}
