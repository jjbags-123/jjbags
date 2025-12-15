
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
  description: 'Premium sustainable jute, cotton & canvas bags. Replace plastic with ethically-made, biodegradable alternatives. Free customization & worldwide shipping.',
  ogImage: 'https://jjbags.in/og-image.png',
  links: {
    twitter: 'https://twitter.com/jjbags',
    facebook: 'https://facebook.com/jjbags'
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Eco-Friendly Jute Bags | Sustainable Alternatives to Plastic | JJ Bags",
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
    "biodegradable bags",
    "ethical manufacturing",
    "jute bags India",
    "eco bags Kolkata",
    "sustainable bags Chennai"
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JJ Bags",
    "url": "https://jjbags.in",
    "logo": "https://jjbags.in/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-82481-09131",
        "contactType": "customer service",
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-63740-51113",
        "contactType": "customer service",
        "areaServed": "IN"
      }
    ],
    "sameAs": [
      "https://facebook.com/jjbags",
      "https://twitter.com/jjbags"
    ]
  };

  const localBusinessSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JJ Bags - Chennai Office",
      "description": "Leading manufacturer of eco-friendly jute and sustainable bags in Chennai.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.8/133 , Kalaignar street, Sithalapakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600131",
        "addressCountry": "IN"
      },
      "telephone": "+91-82481-09131",
      "image": "https://jjbags.in/logo.png",
      "url": "https://jjbags.in",
       "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.8847054,
        "longitude": 80.1910913
      },
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "India"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JJ Bags - Kolkata Office",
      "description": "Leading manufacturer of eco-friendly jute and sustainable bags in Kolkata.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Benaras Road (Opp. Bara Masjid), Eskara",
        "addressLocality": "Howrah",
        "addressRegion": "West Bengal",
        "postalCode": "711323",
        "addressCountry": "IN"
      },
      "telephone": "+91-63740-51113",
      "image": "https://jjbags.in/logo.png",
      "url": "https://jjbags.in",
       "serviceArea": {
        "@type": "Country",
        "name": "India"
      }
    }
  ];

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
        </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
