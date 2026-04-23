"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedSection from "../Animations";

const tabs = [
  { label: "All Categories", id: "core-services" },
  { label: "Our Services", id: "our-services" },
  { label: "Projects", id: "projects" },
  { label: "About Us", id: "about-us" },
  { label: "Safety Equipment", id: "safety-equipment" },
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
  { name: "Gt bank", logo: "/OurPartners/gtbank.svg" },
  { name: "Zenith bank", logo: "/OurPartners/zenithbank.svg" },
  { name: "Nigerian Stock Exchange", logo: "/OurPartners/nse.svg" },
  // { name: "Jeruzeth International Limited", logo: "/partners/hitachi.svg" },
  // { name: "Federal Palace Hotel", logo: "/partners/jcb.svg" },
  { name: "Poly product", logo: "/OurPartners/polygroup.svg" },
  // { name: "Esorae", logo: "/partners/samsung.svg" },
  { name: "Viathan Nigeria Limited", logo: "/Ourpartners/viathan.svg" },
  { name: "Cappa & D'Alberto Nigeria Limited", logo: "/OurPartners/Cappa.svg" },
];

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState("core-services");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isManualScrolling = useRef(false);
  const manualScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionIds = [...new Set(tabs.map((tab) => tab.id))];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const activeId = visibleEntries[0].target.id;
          setActiveTab(activeId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.25, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
    };
  }, []);

useEffect(() => {
  const activeButton = tabRefs.current[activeTab];
  const container = tabsContainerRef.current;

  if (!activeButton || !container) return;

  const buttonLeft = activeButton.offsetLeft;
  const buttonWidth = activeButton.offsetWidth;
  const containerWidth = container.offsetWidth;

  container.scrollTo({
    left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
    behavior: "smooth",
  });
}, [activeTab]);

  const handleTabClick = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    isManualScrolling.current = true;
    setActiveTab(id);

    const yOffset = -100;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    if (manualScrollTimeout.current) {
      clearTimeout(manualScrollTimeout.current);
    }

    manualScrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 1500);
  };

  return (
    <section
      id="core-services"
      className="overflow-hidden bg-dark py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <div className="mb-12 flex justify-center">
            <div className="no-scrollbar w-full overflow-x-auto">
             <div
  ref={tabsContainerRef}
  className="mx-auto flex w-max min-w-full flex-nowrap gap-2 rounded-full bg-black/40 p-2 backdrop-blur-md md:w-fit md:min-w-0 md:justify-center"
>
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={`${tab.label}-${tab.id}`}
                      ref={(el) => {
                        tabRefs.current[tab.id] = el;
                      }}
                      onClick={() => handleTabClick(tab.id)}
                      className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-secondary font-medium text-dark"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div id="our-services" className="mb-14 scroll-mt-28 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
              Skip the paperwork. Source materials, track shipments, and manage
              invoices—all in one dashboard.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Image
                      src="/CheckImage.svg"
                      alt="Check"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>

                <div className="w-full border-b border-white/10 pb-6">
                  <h3 className="text-sm font-medium md:text-base">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400 md:text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.55}>
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => handleTabClick("projects")}
              className="rounded-full bg-white px-8 py-3 text-sm font-medium text-dark transition hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </AnimatedSection>
      </div>

      <div
        id="projects"
        className="relative left-1/2 right-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-[#F3F1EB] py-6 text-black scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl px-4">
          <AnimatedSection>
            <div className="mb-7 flex justify-center">
              <div className="flex items-center gap-1">
                <svg
                  className="-mr-7 -translate-y-4"
                  width="60"
                  height="10"
                  viewBox="0 0 42 10"
                >
                  <path
                    d="M0 6 C8 4, 16 4, 24 6 S 36 8, 42 5"
                    stroke="#FFD95A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                <h3 className="text-[18px] font-semibold text-dark md:text-[20px]">
                  Our Partners
                </h3>

                <svg
                  className="translate-y-4"
                  width="40"
                  height="12"
                  viewBox="0 0 40 12"
                  fill="none"
                >
                  <path
                    d="M0 6 C10 12, 30 0, 40 6"
                    stroke="#FFD95A"
                    strokeWidth="2"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          <div className="relative overflow-hidden">
            <div className="partners-marquee flex items-center">
              <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-[40px] w-[100px] items-center justify-center md:h-[52px] md:w-[140px]"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={52}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20">
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex h-[40px] w-[100px] items-center justify-center md:h-[52px] md:w-[140px]"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={52}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .partners-marquee {
            width: max-content;
            animation: partners-scroll 12s linear infinite;
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