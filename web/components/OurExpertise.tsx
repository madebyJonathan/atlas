"use client";

import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const tabs = [
  {
    id: "kitchen",
    label: "Kitchen & Bath",
    heading: "Kitchen & Bath Remodeling",
    description:
      "Transform your kitchen or bathroom into a stunning, functional space. We handle everything from custom cabinetry and countertops to plumbing and tile work.",
    image:
      "https://images.unsplash.com/photo-1747538454766-9f4f99a2de8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "whole-home",
    label: "Whole Home",
    heading: "Whole Home Renovation",
    description:
      "Complete end-to-end home transformations that reimagine every room. From structural changes to interior finishes, we manage your entire project.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "outdoor",
    label: "Outdoor Living",
    heading: "Outdoor Living Spaces",
    description:
      "Extend your living space outdoors with custom decks, patios, pergolas, and landscaping. We design and build beautiful outdoor environments.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "custom-builds",
    label: "Custom Builds",
    heading: "Custom Builds",
    description:
      "From ADUs to full custom home construction, we bring your architectural vision to life with precision craftsmanship and quality materials.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "interior",
    label: "Interior Design",
    heading: "Interior Design",
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
      className="w-full bg-white flex flex-col items-center gap-12 md:gap-20 px-4 md:px-16 py-12 md:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-atlas-charcoal" />
          <span className="font-mono text-sm font-medium tracking-[0.1em] text-atlas-charcoal uppercase">
            our expertise
          </span>
        </div>
        <h2 className="font-nineties text-3xl md:text-[48px] leading-[1.2] text-atlas-dark">
          What we do best.
        </h2>
        <p className="font-mono text-base leading-[1.6] text-atlas-gray max-w-[800px]">
          From full-scale renovations to custom builds, our team brings
          specialized knowledge to every project. Explore our core service areas
          below.
        </p>
      </div>

      {/* Tabbed Card */}
      <div
        className="w-full border border-black overflow-hidden flex flex-col md:flex-row"
        style={{ minHeight: 448 }}
      >
        {/* Tab Content */}
        <div
          className="relative w-full md:w-[800px] flex-shrink-0 flex flex-col justify-center gap-8 p-8 md:p-16"
          style={{ minHeight: 448 }}
        >
          <Image
            src={current.image}
            alt={current.heading}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/67" />

          <div className="relative z-10 flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-6">
              <h3 className="font-nineties text-[40px] leading-[1.2] text-[#ecece3]">
                {current.heading}
              </h3>
              <p className="font-mono text-base leading-[1.5] text-[#ecece3cc]">
                {current.description}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button className="font-mono text-base tracking-[0.05em] text-[#ecece3] border border-[#ecece3] rounded-full px-6 py-3 hover:bg-[#ecece3] hover:text-atlas-charcoal transition-colors">
                LEARN MORE
              </button>
              <a
                href="#contact"
                className="font-mono text-base tracking-[0.05em] text-[#ecece3] flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                GET A QUOTE
                <ArrowRight size={20} className="text-[#ecece3]" />
              </a>
            </div>
          </div>
        </div>

        {/* Tabs Menu */}
        <div
          className="flex-1 flex flex-col border-l border-black"
          style={{ minHeight: 448 }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 flex items-center justify-between gap-4 px-8 py-6 text-left border-b border-black last:border-b-0 transition-colors ${
                i === activeTab ? "bg-atlas-dark" : "bg-white hover:bg-gray-50"
              }`}
            >
              <span
                className={`font-mono text-2xl leading-[1.4] w-full ${
                  i === activeTab ? "text-[#ecece3]" : "text-[#666666]"
                }`}
              >
                {tab.label}
              </span>
              <ChevronRight
                size={20}
                className={i === activeTab ? "text-[#ecece3cc]" : "text-[#cccccc]"}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
