import Image from "next/image";

const stats = [
  { value: "10+", label: "years of experience" },
  { value: "200+", label: "projects completed" },
  { value: "98%", label: "client satisfaction" },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="w-full bg-white flex flex-col md:flex-row items-center px-4 md:px-16 py-12 md:py-20 gap-10 md:gap-16"
    >
      {/* Text Column */}
      <div className="flex-1 flex flex-col gap-8 md:gap-10 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-atlas-charcoal" />
          <span className="font-mono text-sm font-medium tracking-[0.1em] text-atlas-charcoal uppercase">
            who we are
          </span>
        </div>

        <h2 className="font-nineties text-3xl md:text-[44px] leading-[1.2] text-atlas-dark">
          Licensed Contractors You Can Trust
        </h2>

        <p className="font-mono text-base leading-[1.7] text-atlas-gray">
          Atlas Construction Co. has been serving West Los Angeles homeowners
          since 2014. We are a team of 12 dedicated professionals who believe
          great construction starts with honest conversations and ends with
          exceptional craftsmanship. We&apos;re not the biggest contractor in
          LA—we are the one you can trust.
        </p>

        {/* Stats */}
        <div className="flex gap-8 md:gap-12 pt-6" style={{ borderTop: "1px solid #e0e0e0" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-nineties text-[32px] md:text-[40px] leading-none text-atlas-dark">
                {stat.value}
              </span>
              <span className="font-mono text-[12px] md:text-[13px] tracking-[0.05em] text-atlas-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-[520px] h-[300px] md:h-[560px] rounded overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1722888799634-c5093906feae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Atlas Construction team"
          width={520}
          height={560}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
