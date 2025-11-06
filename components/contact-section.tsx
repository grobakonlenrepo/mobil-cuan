"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Harap isi nama, nomor HP, dan pesan terlebih dahulu.");
      return;
    }

    setIsSubmitting(true);

    // Buat pesan WhatsApp
    const message = `
Halo ${SITE_CONFIG.name}! 👋
Saya ingin menghubungi Anda.

Nama: ${formData.name}
Email: ${formData.email || "-"}
Nomor HP: ${formData.phone}
Pesan:
${formData.message}
  `.trim();

    // Nomor WA dari constants.ts
    const phoneNumber = SITE_CONFIG.whatsapp;

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            className="title-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans uppercase mb-3 sm:mb-4 text-balance tracking-wide"
            style={{ letterSpacing: "0.025em" }}
          >
            {"HUBUNGI KAMI"}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-serif tracking-wider">
            Punya pertanyaan tentang kendaraan impian Anda? Tim kami siap
            membantu Anda menemukan solusi terbaik.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">
          {/* Google Maps - Full Width */}
          <div className="rounded-lg overflow-hidden border border-border h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322635!2d106.8227!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b5d%3A0x5b45e34db13dab0!2sMobilCuan!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form and Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium mb-2 font-serif tracking-wider text-lg"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full font-serif tracking-wider text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium mb-2 font-serif text-lg tracking-wider"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full font-serif tracking-wider"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium mb-2 font-serif text-lg tracking-wider"
                  >
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full tracking-wider font-serif"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium mb-2 font-serif text-lg tracking-wider"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary tracking-wider font-serif text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary uppercase hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-colors text-lg tracking-wider cursor-pointer"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold uppercase text-foreground mb-1 tracking-wide text-lg">
                    Email
                  </h3>
                  <a
                    href="mailto:info@mobilcuan.com"
                    className="hover:underline font-serif text-lg tracking-wider text-card-foreground"
                  >
                    info@mobilcuan.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold uppercase text-foreground mb-1 text-lg tracking-wide">
                    Telepon
                  </h3>
                  <a
                    href="tel:+6281234567890"
                    className="hover:underline text-card-foreground font-serif text-lg tracking-wider"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold uppercase text-foreground mb-1 text-lg tracking-wide">
                    Alamat
                  </h3>
                  <p className="font-serif tracking-wider text-card-foreground text-base">
                    Jl. Merdeka No. 123
                    <br />
                    Jakarta Selatan, 12345
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold uppercase text-foreground mb-1 text-lg tracking-wide">
                    Jam Operasional
                  </h3>
                  <p className="font-serif tracking-wider text-card-foreground text-base">
                    Senin - Jumat: 09:00 - 18:00
                    <br />
                    Sabtu: 10:00 - 16:00
                    <br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
