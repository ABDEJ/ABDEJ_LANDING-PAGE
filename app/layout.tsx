import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
});

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://abdejgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Generator Maintenance & Power Solutions Company in Lagos | ABDEJ Power Solutions",

  description:
    "ABDEJ Power Solutions offers professional generator maintenance, diesel generator repairs, power system installation, and custom metal fabrication services in Lagos, Nigeria. Reliable, efficient, and affordable energy solutions for homes and businesses.",

  keywords: [
    "generator maintenance Lagos",
    "diesel generator repair Nigeria",
    "power solutions company Lagos",
    "generator installation services",
    "industrial generator servicing",
    "custom metal fabrication Nigeria",
    "power system design and installation",
    "generator repair near me",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title: "Reliable Generator & Power Solutions in Lagos | ABDEJ",
    description:
      "Expert generator repairs, power system installation, and custom fabrication services. Trusted by homes and businesses across Lagos.",
    url: siteUrl,
    siteName: "ABDEJ Power Solutions",
    images: [
      {
        url: "/brand/abdej-og.png",
        width: 1200,
        height: 630,
        alt: "ABDEJ Nigeria Limited",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
