
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteConfig = {
  name: 'JJ Bags',
  url: 'https://jjbags.in',
  description: 'High-quality, eco-friendly jute, juco, and tote bags for personal and corporate needs. Sustainable, stylish, and durable bags for a greener planet.',
  ogImage: 'https://jjbags.in/og-image.png', // Should be absolute URL
  links: {
    twitter: 'https://twitter.com/jjbags',
    facebook: 'https://facebook.com/jjbags'
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Sustainable Jute and Tote Bags`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "jute bags",
    "eco-friendly bags",
    "tote bags",
    "juco bags",
    "reusable bags",
    "corporate gifts",
    "sustainable products",
    "JJ Bags",
    "custom bags",
  ],
  authors: [{ name: "JJ Bags", url: siteConfig.url }],
  creator: "JJ Bags",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jjbags",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
        <head>
            <link rel="preconnect" href="https://r2cdn.perplexity.ai" />
        </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
