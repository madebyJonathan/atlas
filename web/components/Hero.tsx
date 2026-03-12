import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[780px] flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/atlas-construction-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-end h-full gap-20 px-16 pb-[112px]">
        <div className="flex items-end gap-20 w-full">
          {/* Heading */}
          <div className="flex-1 flex flex-col justify-end gap-6">
            <h1 className="font-nineties text-[56px] leading-[1.2] text-[#ecece3] w-full">
              Build your dream space with confidence
            </h1>
          </div>

          {/* Right column: description + CTAs */}
          <div className="flex-1 flex flex-col items-end gap-8">
            <p className="font-mono text-lg leading-relaxed text-[#ecece3] w-full">
              Quality craftsmanship meets honest communication. We bring your
              renovation vision to life with clear pricing, expert guidance, and
              on-time delivery. Serving West Los Angeles since 2014.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="font-mono text-base font-semibold tracking-[0.05em] text-[#ecece3] border border-[#ecece3] rounded-full px-6 py-3 hover:bg-[#ecece3] hover:text-atlas-charcoal transition-colors"
              >
                GET FREE CONSULTATION
              </a>
              <a
                href="#selected-works"
                className="font-mono text-base font-semibold tracking-[0.05em] text-[#ecece3] flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                VIEW PORTFOLIO
                <ArrowRight size={20} className="text-[#ecece3]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
