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
    // 🔧 tambahkan suppressHydrationWarning untuk cegah mismatch class/style antara SSR & client
    <html lang="en" suppressHydrationWarning>
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
