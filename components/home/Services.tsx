"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All Categories",
  "Our Services",
  "Projects",
  "About Us",
  "Safety Equipment",
];

const services = [
  {
    title: "Generator Overhauling, Maintenance & Repairs",
    desc: "Complete servicing, fault diagnosis, and repairs for all generator types to guarantee consistent performance.",
  },
  {
    title: "Power System Design & Optimization",
    desc: "We design and optimize power systems to improve efficiency, reduce downtime, and ensure stable energy supply.",
  },
  {
    title: "Components Repairs & Sourcing",
    desc: "We repair damaged components and source high-quality parts to extend the lifespan of your equipment.",
  },
  {
    title: "Custom Fabrication",
    desc: "We fabricate hoses, pipelines, tanks, and other custom-engineered solutions built to meet your exact specifications.",
  },
];

const partners = [
  "VOLVO",
  "CAT",
  "CUMMINS",
  "HITACHI",
  "JCB",
  "SAMSUNG",
];

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState("All Categories");

  return (
    <section className="bg-dark text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/40 backdrop-blur-md rounded-full p-2 flex gap-2 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-secondary text-dark font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our Core Services
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            Skip the paperwork. Source materials, track shipments, and manage
            invoices—all in one dashboard.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-16">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Image
                    src="/CheckImage.svg"
                    alt="Check"
                    width={32}
                    height={32}
                  />
                </div>
              </div>

              <div className="border-b border-white/10 pb-6 w-full">
                <h3 className="font-medium text-sm md:text-base">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button className="bg-white text-dark px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
            View Projects
          </button>
        </div>
      </div>



{/* Partners Section */}
<div className="relative left-1/2 right-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-[#F3F1EB] py-6 text-black">
  <div className="mx-auto max-w-6xl px-4">
    {/* Heading */}
  <div className="mb-7 flex justify-center">
  <div className="flex items-center gap-1">
    
    {/* Left curved line */}
    <svg className="-translate-y-4 -mr-7" width="60" height="10" viewBox="0 0 42 10">
      <path
        d="M0 6 C8 4, 16 4, 24 6 S 36 8, 42 5"
        stroke="#FFD95A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>

    {/* Text */}
    <h3 className="text-[18px] font-semibold text-dark md:text-[20px]">
      Our Partners
    </h3>

    {/* Right curved line */}
    <svg className="translate-y-4" width="40" height="12" viewBox="0 0 40 12" fill="none">
      <path
        d="M0 6 C10 12, 30 0, 40 6"
        stroke="#FFD95A"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>

  </div>
</div>
    {/* Slider */}
    <div className="relative overflow-hidden">
      <div className="partners-marquee flex items-center">
        {/* First full row */}
        <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24">
          {partners.map((partner) => (
            <span
              key={partner}
              className="whitespace-nowrap text-[13px] font-bold tracking-[0.15em] text-dark md:text-[15px]"
            >
              {partner}
            </span>
          ))}
        </div>

        {/* Second full row */}
        <div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24">
          {partners.map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              className="whitespace-nowrap text-[13px] font-bold tracking-[0.15em] text-[#1A1A1A] md:text-[15px]"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .partners-marquee {
      width: max-content;
      animation: partners-scroll 8s linear infinite;
    }

    @keyframes partners-scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
</div>
    </section>
  );
}