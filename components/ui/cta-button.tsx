"use client"

import type React from "react"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  href?: string
  children: React.ReactNode
  className?: string
  textColor?: "dark" | "light"
}

export function CtaButton({ href = "#", children, className, textColor = "dark" }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        // parallelogram with slight rounding
        "group relative  skew-x-[-12deg] rounded-xl overflow-hidden text-center",
        // strong brand gradient background
        "bg-gradient-to-r from-[var(--grad-from)] via-[var(--grad-mid)] to-[var(--grad-to)]",
        // depth
        "shadow-[0_10px_24px_rgba(255,122,0,0.35)] transition-transform hover:scale-[1.02] active:scale-95",
        className,
      )}
    >
      {/* inner wrapper unskews content so text/icons stay readable */}
      <span
        className={cn(
          "skew-x-[12deg] inline-flex items-center gap-3 px-6 pr-7 py-3 text-sm font-semibold sm:text-lg uppercase pt-3 text-center",
          textColor === "dark" ? "text-[#0b1220]" : "text-white",
          // slight text shadow for readability on gradient
          "[text-shadow:0_1px_0_rgba(255,255,255,0.25)]",
        )}
      >
        {/* left icon puck */}
        
        {children}
      </span>
    </Link>
  )
}
