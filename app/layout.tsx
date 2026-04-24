import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
});


export const metadata: Metadata = {
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
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "Reliable Generator & Power Solutions in Lagos | ABDEJ",
    description:
      "Expert generator repairs, power system installation, and custom fabrication services. Trusted by homes and businesses across Lagos.",
    url: "https://yourdomain.com",
    siteName: "ABDEJ Power Solutions",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
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