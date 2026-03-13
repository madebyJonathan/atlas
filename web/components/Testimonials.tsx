import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="w-full bg-white flex flex-col items-center gap-10 md:gap-12 px-4 md:px-16 py-16 md:py-28">
      <div className="flex items-center gap-2">
        <div className="w-8 h-px bg-atlas-charcoal opacity-50" />
        <span className="font-mono text-sm font-medium tracking-[0.1em] text-[#2c2c2ccc] uppercase">
          testimonials
        </span>
      </div>

      <blockquote className="font-nineties text-2xl md:text-[32px] leading-[1.4] text-black text-center max-w-[900px]">
        &ldquo;Atlas Construction transformed our outdated office into a modern
        workspace that perfectly reflects our brand. Their attention to detail
        and transparent communication made the entire process seamless.&rdquo;
      </blockquote>

      <div className="w-16 h-px bg-black/20" />

      <div className="flex flex-col items-center gap-4 w-full max-w-[300px]">
        <Image
          src="/images/generated-1773342594112.png"
          alt="Sarah Mitchell"
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col items-center gap-1 w-full">
          <span className="font-mono text-base font-semibold text-black text-center w-full">
            Sarah Mitchell
          </span>
          <span className="font-mono text-base text-black/60 text-center w-full">
            CEO, Mitchell &amp; Partners
          </span>
        </div>
      </div>
    </section>
  );
}
