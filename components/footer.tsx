"use client";

import Link from "next/link";
import { FOOTER, SITE_CONFIG } from "@/lib/constants";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Music,
  Globe,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  // 🔧 Fungsi deteksi ikon otomatis
  const getSocialIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("instagram")) return <Instagram className="h-5 w-5" />;
    if (lower.includes("youtube")) return <Youtube className="h-5 w-5" />;
    if (lower.includes("linkedin")) return <Linkedin className="h-5 w-5" />;
    if (lower.includes("twitter") || lower.includes("x"))
      return <Twitter className="h-5 w-5" />;
    if (lower.includes("tiktok")) return <Music className="h-5 w-5" />;
    if (lower.includes("whatsapp"))
      return <MessageCircle className="h-5 w-5" />;
    return <Globe className="h-5 w-5" />; // fallback icon
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* === Menu Footer === */}
        <div className="flex flex-wrap justify-between gap-8 mb-12">
          {/* Company */}
          {FOOTER.company && (
            <div className="flex flex-col min-w-[150px] sm:min-w-[200px]">
              <h3 className="font-semibold uppercase mb-4 tracking-wide text-xl font-sans text-foreground">
                {FOOTER.company.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER.company.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-lg font-serif"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Support */}
          {FOOTER.support && (
            <div className="flex flex-col min-w-[150px] sm:min-w-[200px]">
              <h3 className="font-semibold uppercase mb-4 tracking-wide text-xl font-sans text-foreground">
                {FOOTER.support.title}
              </h3>
              <ul className="space-y-3">
                {FOOTER.support.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-lg font-serif"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social (auto detect icons) */}
          {Array.isArray(FOOTER.social) && FOOTER.social.length > 0 && (
            <div className="flex flex-col min-w-[150px] sm:min-w-[200px]">
              <h3 className="font-semibold uppercase mb-4 tracking-wide text-xl font-sans text-foreground">
                Social
              </h3>
              <div className="flex flex-col space-y-3">
                {FOOTER.social.map((s) => {
                  const href = s.href.startsWith("http")
                    ? s.href
                    : `https://${s.href.replace(/^https?:\/\//, "")}`;
                  return (
                    <a
                      key={s.name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-lg font-serif"
                    >
                      {getSocialIcon(s.name)}
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* === Bawah Footer === */}
        <div className="border-t border-border pt-6 text-center text-muted-foreground font-serif">
          <p className="text-lg">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
