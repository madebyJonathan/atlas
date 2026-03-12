import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const navLinks = ["Home", "About Us", "Our Work", "Services", "Contact"];
const serviceLinks = [
  "Residential",
  "Commercial",
  "Renovations",
  "Consulting",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] flex flex-col gap-20 px-16 py-20">
      {/* Main Content */}
      <div className="flex gap-16 w-full">
        {/* Company Column */}
        <div className="flex-1 flex flex-col gap-8">
          <span className="font-nineties text-2xl text-[#ecece3]">ATLAS</span>

          <div className="flex flex-col gap-1 w-full">
            <span className="font-mono text-sm font-semibold leading-[1.5] text-[#ecece3]">
              Address:
            </span>
            <span className="font-mono text-sm leading-[1.5] text-[#ecece3aa]">
              450 Construction Blvd, Los Angeles, CA 90012
            </span>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="font-mono text-sm font-semibold leading-[1.5] text-[#ecece3]">
              Contact:
            </span>
            <span className="font-mono text-sm leading-[1.5] text-[#ecece3aa]">
              +1 (555) 234-5678
            </span>
            <span className="font-mono text-sm leading-[1.5] text-[#ecece3aa]">
              info@atlasconstruction.com
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <Facebook size={24} className="text-[#ecece3]" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <Instagram size={24} className="text-[#ecece3]" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
              <Twitter size={24} className="text-[#ecece3]" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <Linkedin size={24} className="text-[#ecece3]" />
            </a>
          </div>
        </div>

        {/* Nav Links Column */}
        <div className="flex-1 flex gap-6">
          <div className="flex-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-sm font-semibold leading-[1.5] text-[#ecece3] py-2 hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex-1 flex flex-col">
            {serviceLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-sm font-semibold leading-[1.5] text-[#ecece3] py-2 hover:opacity-70 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Credits Row */}
      <div className="flex flex-col gap-8 w-full">
        <div className="w-full h-px" style={{ background: "#ecece333" }} />
        <div className="flex items-center justify-between w-full">
          <span className="font-mono text-sm leading-[1.5] text-[#ecece3aa]">
            © 2025 Atlas Construction. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="font-mono text-sm leading-[1.5] text-[#ecece3aa] hover:text-[#ecece3] transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
