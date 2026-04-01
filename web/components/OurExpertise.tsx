"use client";

import { useState, useRef, useEffect } from "react";
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
    heading: "Whole Home Renovations",
    description:
      "From foundation to finish, we manage complete home renovations that transform your entire living space while maintaining structural integrity and design cohesion.",
    image:
      "https://images.unsplash.com/photo-1768321904126-e5e5872e0c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "outdoor",
    label: "Outdoor Living",
    num: "03",
    heading: "Outdoor Living Spaces",
    description:
      "Extend your living area outdoors with custom patios, pergolas, outdoor kitchens, and landscaping that blend seamlessly with your home.",
    image:
      "https://images.unsplash.com/photo-1762811054950-b74e0a055c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "custom-builds",
    label: "Custom Builds",
    num: "04",
    heading: "Custom Home Builds",
    description:
      "From the ground up, we bring your vision to life with precision-crafted custom homes designed around your lifestyle, preferences, and long-term needs.",
    image:
      "https://images.unsplash.com/photo-1673190889624-c1d5959289fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "interior",
    label: "Interior Design",
    num: "05",
    heading: "Interior Design",
    description:
      "Curate every detail of your space with our interior design services — from material selection and color palettes to furniture layout and finishing touches.",
    image:
      "https://images.unsplash.com/photo-1603072845032-7b5bd641a82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayTab, setDisplayTab] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const tab = tabRefs.current[activeTab];
    if (tab) {
      setIndicator({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [activeTab]);

  const handleTabChange = (i: number) => {
    if (i === activeTab) return;
    setContentVisible(false);
    setActiveTab(i);
    setTimeout(() => {
      setDisplayTab(i);
      setContentVisible(true);
    }, 200);
  };

  const current = tabs[displayTab];

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
      <div className="relative flex flex-row border-b border-[#e0e0e0]">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => handleTabChange(i)}
            className={`flex items-center px-6 py-4 pb-5 font-mono text-[15px] tracking-[0.03em] whitespace-nowrap transition-colors ${
              i === activeTab
                ? "text-[#1a1a1a] font-medium"
                : "text-[#999999] font-normal"
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* Sliding underline */}
        <span
          className="absolute bottom-0 h-0.5 bg-[#1a1a1a]"
          style={{
            left: indicator.left,
            width: indicator.width,
            transition: "left 250ms ease, width 250ms ease",
          }}
        />
      </div>

      {/* Showcase */}
      <div
        className="w-full flex flex-col md:flex-row rounded-[4px] overflow-hidden"
        style={{ height: 520 }}
      >
        {/* Image Area — all images stacked for crossfade */}
        <div className="relative flex-1 flex flex-col justify-end p-12 min-h-[300px] md:min-h-0">
          {tabs.map((tab, i) => (
            <Image
              key={tab.id}
              src={tab.image}
              alt={tab.label}
              fill
              className="object-cover"
              style={{
                opacity: i === activeTab ? 1 : 0,
                transition: "opacity 300ms ease",
              }}
            />
          ))}
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
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 200ms ease, transform 200ms ease",
          }}
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
