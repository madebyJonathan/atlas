"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#who-we-are" },
  { label: "Our Work", href: "#selected-works" },
  { label: "Services", href: "#our-expertise" },
  { label: "Process", href: "#our-process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-4 md:px-16 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white border-b border-black/10 shadow-sm"
            : "bg-transparent border-b border-white/20"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center h-10">
            <span
              className={`font-nineties text-2xl tracking-wide transition-colors ${
                scrolled || menuOpen ? "text-atlas-dark" : "text-[#ecece3]"
              }`}
            >
              ATLAS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-base uppercase tracking-[0.05em] transition-colors hover:opacity-70 ${
                  scrolled ? "text-atlas-dark" : "text-[#ecece3]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} className={scrolled || menuOpen ? "text-atlas-dark" : "text-[#ecece3]"} />
            ) : (
              <Menu size={24} className={scrolled ? "text-atlas-dark" : "text-[#ecece3]"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-black/10 flex flex-col md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-base uppercase tracking-[0.05em] text-atlas-dark px-6 py-4 border-b border-black/5 hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
