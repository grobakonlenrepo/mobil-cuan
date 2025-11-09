import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Racing_Sans_One, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";
import type React from "react";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const racingSans = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-racing-sans-one",
});
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name + " - " + SITE_CONFIG.tagline,
  description: SITE_CONFIG.description,
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/mobilcuan-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/mobilcuan-logo.png" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Mobil Cuan - Marketplace Mobil Terpercaya" />
        <meta property="og:description" content="Temukan mobil impian Anda di Mobil Cuan - Platform jual beli mobil terpercaya dengan berbagai pilihan mobil berkualitas" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mobilcuan.com" />
        <meta property="og:image" content="https://mobilcuan.com/images/mobilcuan-logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobil Cuan - Marketplace Mobil Terpercaya" />
        <meta name="twitter:description" content="Temukan mobil impian Anda di Mobil Cuan - Platform jual beli mobil terpercaya dengan berbagai pilihan mobil berkualitas" />
        <meta name="twitter:image" content="https://mobilcuan.com/images/mobilcuan-logo.png" />

        {/* Theme Color */}
        <meta name="theme-color" content="#FFA500" />
      </head>
      <body
        suppressHydrationWarning
        className={`font-sans ${racingSans.variable} ${bebasNeue.variable} ${GeistMono.variable} antialiased`}
      >
        {/* 🧩 pastikan ThemeProvider punya properti ini */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
