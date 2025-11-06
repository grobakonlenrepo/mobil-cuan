"use client"

import { FAQS } from "@/lib/constants"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2
            className="md:text-4xl font-bold uppercase tracking-tight text-balance text-primary mb-4 text-2xl"
            style={{ letterSpacing: "0.025em" }}
          >
            Pertanyaan Yang Sering Ditanyakan
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed font-serif"></p>
        </div>

        <div className="max-w-7xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-lg md:text-xl pr-4 font-serif tracking-wider italic text-primary">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="leading-relaxed font-serif tracking-wide text-foreground text-base md:text-xl">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
