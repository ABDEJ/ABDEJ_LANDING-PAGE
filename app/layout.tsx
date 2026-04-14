import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'High-converting landing page for your business',
  keywords: ['landing page', 'your niche', 'your service'],
  openGraph: {
    title: 'Your Company Name',
    description: 'High-converting landing page',
    url: 'https://yourdomain.com',
    siteName: 'Your Company',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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