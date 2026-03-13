"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#2c2c2c] flex items-center px-4 md:px-16 py-16 md:py-28"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full max-w-[1440px] mx-auto">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Section Title */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-[#ecece3cc] opacity-50" />
              <span className="font-mono text-sm font-medium tracking-[0.1em] text-[#ecece3cc] uppercase">
                get in touch
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-nineties text-3xl md:text-[48px] leading-[1.2] text-[#ecece3]">
                Let&apos;s Build Something Great
              </h2>
              <p className="font-mono text-lg leading-[1.5] text-[#ecece3aa]">
                Ready to start your next construction project? Reach out and let
                us know how we can help bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-[#ecece3]" />
              <span className="font-mono text-base text-[#ecece3]">
                info@atlasconstruction.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-[#ecece3]" />
              <span className="font-mono text-base text-[#ecece3]">
                +1 (555) 234-5678
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-[#ecece3]" />
              <span className="font-mono text-base text-[#ecece3]">
                450 Construction Blvd, Los Angeles, CA 90012
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Name Row */}
          <div className="flex gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-mono text-base leading-[1.5] text-[#ecece3]">
                First name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full font-mono text-base text-[#ecece3] bg-transparent border border-[#ecece355] p-3 outline-none focus:border-[#ecece3aa] transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-mono text-base leading-[1.5] text-[#ecece3]">
                Last name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full font-mono text-base text-[#ecece3] bg-transparent border border-[#ecece355] p-3 outline-none focus:border-[#ecece3aa] transition-colors"
              />
            </div>
          </div>

          {/* Email + Phone Row */}
          <div className="flex gap-6 w-full">
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-mono text-base leading-[1.5] text-[#ecece3]">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full font-mono text-base text-[#ecece3] bg-transparent border border-[#ecece355] p-3 outline-none focus:border-[#ecece3aa] transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="font-mono text-base leading-[1.5] text-[#ecece3]">
                Phone number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full font-mono text-base text-[#ecece3] bg-transparent border border-[#ecece355] p-3 outline-none focus:border-[#ecece3aa] transition-colors"
              />
            </div>
          </div>

          {/* Project Type */}
          <div className="flex flex-col gap-2">
            <label className="font-mono text-base leading-[1.5] text-[#ecece3]">
              Project type
            </label>
            <div className="relative">
              <select
                value={form.projectType}
                onChange={(e) =>
                  setForm({ ...form, projectType: e.target.value })
                }
                className="w-full font-mono text-base text-[#ecece3] bg-transparent border border-[#ecece355] p-3 pr-10 outline-none appearance-none focus:border-[#ecece3aa] transition-colors cursor-pointer"
              >
                <option value="" disabled className="bg-atlas-charcoal">
                  Select one...
                </option>
                <option value="kitchen" className="bg-atlas-charcoal">
                  Kitchen &amp; Bath
                </option>
                <option value="whole-home" className="bg-atlas-charcoal">
                  Whole Home
                </option>
                <option value="outdoor" className="bg-atlas-charcoal">
                  Outdoor Living
                </option>
                <option value="custom" className="bg-atlas-charcoal">
                  Custom Build
                </option>
                <option value="interior" className="bg-atlas-charcoal">
                  Interior Design
                </option>
              </select>
              <ChevronDown
                size={24}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ecece3] pointer-events-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-mono text-base leading-[1.5] text-[#ecece3]">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Type your message..."
              rows={6}
              className="w-full h-[180px] font-mono text-base text-[#ecece3] placeholder-[#ecece344] bg-transparent border border-[#ecece355] p-3 outline-none resize-none focus:border-[#ecece3aa] transition-colors"
            />
          </div>

          {/* Checkbox + Submit */}
          <div className="flex items-center gap-2 pb-4">
            <input
              type="checkbox"
              id="terms"
              checked={form.terms}
              onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              className="w-[18px] h-[18px] border border-[#ecece355] bg-transparent accent-[#ecece3] cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="font-mono text-base leading-[1.5] text-[#ecece3] cursor-pointer"
            >
              I accept the Terms
            </label>
          </div>

          <button
            type="submit"
            className="self-start font-mono text-base font-semibold tracking-[0.05em] text-atlas-charcoal bg-[#ecece3] rounded-full px-6 py-3 hover:bg-white transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
