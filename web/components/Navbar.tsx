"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#who-we-are" },
  { label: "Our Work", href: "#selected-works" },
  { label: "Services", href: "#our-expertise" },
  { label: "Process", href: "#our-process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-16 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-black/10 shadow-sm"
          : "bg-transparent border-b border-white/20"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center h-10">
          <span
            className={`font-nineties text-2xl tracking-wide transition-colors ${
              scrolled ? "text-atlas-dark" : "text-[#ecece3]"
            }`}
          >
            ATLAS
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-sm tracking-[0.05em] transition-colors hover:opacity-70 ${
                scrolled ? "text-atlas-dark" : "text-[#ecece3]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
