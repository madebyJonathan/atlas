import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We visit your space, listen to your vision, assess the scope, and provide a detailed estimate with clear pricing.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our designers create detailed plans and 3D renderings so you can see your new space before a single nail is hammered.",
  },
  {
    number: "03",
    title: "Build & Craft",
    description: "Our skilled team executes with precision, keeping you updated at every milestone with weekly progress reports.",
  },
  {
    number: "04",
    title: "Reveal & Handoff",
    description: "We walk you through your completed space, handle final touch-ups, and ensure everything meets our quality standards.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="our-process"
      className="relative w-full bg-[#2c2c2c] overflow-hidden py-16 md:py-28 px-4 md:px-16"
    >
      <div
        className="absolute bg-[#3a3a3a] opacity-60 pointer-events-none hidden md:block"
        style={{ width: 500, height: 1235, right: 0, top: -221, transform: "rotate(26deg)", transformOrigin: "center" }}
      />

      <div className="relative z-10 flex flex-col gap-12 md:gap-20 max-w-[1440px] mx-auto">
        {/* Section Title */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-[#ecece3cc]" />
            <span className="font-mono text-sm font-medium tracking-[0.1em] text-[#ecece3cc] uppercase">
              our process
            </span>
          </div>
          <h2 className="font-nineties text-3xl md:text-[48px] leading-[1.2] text-[#ecece3]">
            From vision to reality in four steps.
          </h2>
          <p className="font-mono text-base md:text-lg leading-[1.5] text-[#ecece3aa]">
            We&apos;ve refined our approach over hundreds of projects to ensure a
            smooth, transparent experience from start to finish. Here&apos;s how
            we bring your vision to life.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8 w-full">
          <div
            className="flex flex-col md:flex-row gap-0 w-full"
            style={{ borderTop: "1px solid #ecece333" }}
          >
            {steps.map((step, i) => (
              <div key={step.number} className="flex md:items-start w-full">
                <div className="flex flex-col gap-4 md:gap-6 justify-center py-6 md:py-8 w-full">
                  <span className="font-nineties text-[40px] md:text-[48px] leading-none text-[#ecece355]">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <h3 className="font-nineties text-xl md:text-2xl leading-[1.4] text-[#ecece3]">
                      {step.title}
                    </h3>
                    <p className="font-mono text-sm md:text-base leading-[1.5] text-[#ecece3aa]">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block self-stretch w-px flex-shrink-0 mx-8"
                    style={{ background: "#ecece333" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <a
              href="#contact"
              className="font-mono text-sm md:text-base font-semibold tracking-[0.05em] text-[#ecece3] border border-[#ecece3] rounded-full px-6 py-3 hover:bg-[#ecece3] hover:text-atlas-charcoal transition-colors"
            >
              START YOUR PROJECT
            </a>
            <a
              href="#selected-works"
              className="font-mono text-sm md:text-base tracking-[0.05em] text-[#ecece3] flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              VIEW OUR WORK
              <ArrowRight size={20} className="text-[#ecece3]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
