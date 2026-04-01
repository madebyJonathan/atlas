"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "kitchen",
    label: "Kitchen & Bath",
    num: "01",
    heading: "Kitchen & Bath\nRemodeling",
    description:
      "Transform your kitchen or bathroom into a stunning, functional space. We handle everything from custom cabinetry and countertops to plumbing and tile work.",
    image:
      "https://images.unsplash.com/photo-1682888813788-373f947aacb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "whole-home",
    label: "Whole Home",
    num: "02",
    heading: "Whole Home\nRenovation",
    description:
      "Complete end-to-end home transformations that reimagine every room. From structural changes to interior finishes, we manage your entire project.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "outdoor",
    label: "Outdoor Living",
    num: "03",
    heading: "Outdoor Living\nSpaces",
    description:
      "Extend your living space outdoors with custom decks, patios, pergolas, and landscaping. We design and build beautiful outdoor environments.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "custom-builds",
    label: "Custom Builds",
    num: "04",
    heading: "Custom\nBuilds",
    description:
      "From ADUs to full custom home construction, we bring your architectural vision to life with precision craftsmanship and quality materials.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "interior",
    label: "Interior Design",
    num: "05",
    heading: "Interior\nDesign",
    description:
      "Our in-house design team works with you to create spaces that are both beautiful and functional, with custom selections tailored to your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1722888799634-c5093906feae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section
      id="our-expertise"
      className="w-full bg-white flex flex-col px-4 md:px-16 py-16 md:py-20 gap-12"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-[#2c2c2c]" />
          <span className="font-mono text-sm font-medium tracking-[0.1em] text-[#2c2c2c] uppercase">
            our expertise
          </span>
        </div>
        <h2 className="font-nineties text-3xl md:text-[48px] leading-[1.2] text-[#1a1a1a]">
          What we do best.
        </h2>
        <p className="font-mono text-base leading-[1.6] text-[#555555] max-w-[800px]">
          From full-scale renovations to custom builds, our team brings
          specialized knowledge to every project. Explore our core service areas
          below.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-row border-b border-[#e0e0e0] overflow-x-auto scroll-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={`flex items-center px-6 py-4 pb-5 font-mono text-[15px] tracking-[0.03em] whitespace-nowrap transition-colors ${
              i === activeTab
                ? "text-[#1a1a1a] font-medium border-b-2 border-[#1a1a1a] -mb-px"
                : "text-[#999999] font-normal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Showcase */}
      <div className="w-full flex flex-col md:flex-row rounded-[4px] overflow-hidden" style={{ height: 520 }}>
        {/* Image Area */}
        <div className="relative flex-1 flex flex-col justify-end p-12 min-h-[300px] md:min-h-0">
          <Image
            key={current.id}
            src={current.image}
            alt={current.label}
            fill
            className="object-cover"
          />
          {/* Image Counter */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-0.5 bg-white" />
            <span className="font-mono text-xs font-medium tracking-[0.08em] text-white/80">
              {String(activeTab + 1).padStart(2, "0")} / 05
            </span>
          </div>
        </div>

        {/* Info Panel */}
        <div
          className="flex flex-col justify-center gap-8 bg-[#1a1a1a] p-10 md:p-12 shrink-0 w-full md:w-[440px]"
        >
          <span className="font-mono text-[13px] font-medium tracking-[0.1em] text-[#666666]">
            {current.num}
          </span>
          <h3 className="font-nineties text-[36px] leading-[1.2] text-[#ecece3] whitespace-pre-line">
            {current.heading}
          </h3>
          <p className="font-mono text-sm leading-[1.6] text-[#999999]">
            {current.description}
          </p>
          <div className="flex items-center gap-6">
            <button className="font-mono text-[13px] font-medium tracking-[0.06em] text-[#1a1a1a] bg-[#ecece3] rounded-full px-7 py-3.5 hover:opacity-90 transition-opacity">
              LEARN MORE
            </button>
            <a
              href="#contact"
              className="font-mono text-[13px] tracking-[0.06em] text-[#ecece3] flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              GET A QUOTE
              <ArrowRight size={18} className="text-[#ecece3]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
