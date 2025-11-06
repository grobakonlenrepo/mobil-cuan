"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b dark:bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl bg-primary-foreground border-chart-5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* === LOGO === */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/mobilguan-logo.png"
              alt="MobilGuan"
              className="h-5 w-auto sm:h-6"
            />
            <span className="sr-only">MobilGuan</span>
          </Link>

          {/* === NAVIGATION (desktop only) === */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="relative font-serif tracking-wide bg-gradient-to-r from-[var(--grad-from)] via-[var(--grad-mid)] to-[var(--grad-to)] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.15)] hover:text-white transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* === ACTION BUTTONS === */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Tombol WA hanya di desktop */}
            <Link
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              className="hidden lg:inline-flex hover:bg-[#e56f0a] text-black bg-gradient-to-r from-[var(--grad-from)] via-[var(--grad-mid)] to-[var(--grad-to)] transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer text-lg font-medium tracking-wide py-2 px-4 rounded-full"
            >
              HUBUNGI KAMI
            </Link>

            {/* Tombol menu muncul di mobile & tablet */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </Button>
          </div>
        </div>

        {/* === MOBILE MENU (aktif di < lg) === */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/20 text-center">
            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="font-serif tracking-wide bg-gradient-to-r from-[var(--grad-from)] via-[var(--grad-mid)] to-[var(--grad-to)] bg-clip-text text-transparent hover:text-white transition-colors text-xl"
                >
                  {item.name}
                </Link>
              ))}
              <Link href={`https://wa.me/${SITE_CONFIG.whatsapp}`}>
                <Button className="w-full bg-primary hover:bg-[#e56f0a] uppercase text-black text-base tracking-wide font-semibold cursor-pointer">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
