"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedSection from "../Animations";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  { label: "All Categories", id: "core-services" },
  { label: "Our Services", id: "our-services" },
  { label: "Projects", id: "projects" },
  { label: "About Us", id: "about-us" },
];

const services = 
[
  {
    title:
      "Sales, Servicing, & Maintenance of Generators, Industrial Engines, & Marine Engines – Caterpillar, Perkins, & Cummins Brands",
    desc:
      "Expert sales, preventive maintenance, diagnostics, and repairs for Caterpillar, Perkins, and Cummins generators, industrial engines, and marine engines to ensure maximum reliability and performance.",
  },
  {
    title:
      "Sales, Servicing & Maintenance of Caterpillar Earth-Moving Equipment",
    desc:
      "Professional sales, maintenance, troubleshooting, and repair services for Caterpillar earth-moving equipment, helping construction and mining operations minimize downtime and maximize productivity.",
  },
  {
    title:
      "Power System Design, Optimization, & Electrical Applications",
    desc:
      "We provide power system design, load analysis, optimization, and electrical engineering solutions that improve energy efficiency, reliability, and operational performance.",
  },
  {
    title:
      "Generator Synchronization & Automatic Transfer Switch (ATS) Installation",
    desc:
      "Specialized generator synchronization and ATS installation services designed to ensure seamless power transitions, load sharing, and uninterrupted operations.",
  },
  {
    title:
      "Overhauling, Maintenance, & Repairs of Generator Prime Movers",
    desc:
      "Comprehensive overhauling, preventive maintenance, and repair services for generator prime movers to restore efficiency, extend equipment lifespan, and prevent costly failures.",
  },
  {
    title: "Components Repairs & Sourcing",
    desc:
      "Reliable component repair and genuine parts sourcing services for generators and industrial equipment, ensuring optimal performance and long-term durability.",
  },
  {
    title: "Custom Fabrication of Hoses, Pipelines, & Tanks",
    desc:
      "Precision fabrication of industrial hoses, pipelines, storage tanks, and custom-engineered solutions tailored to meet your operational and industry requirements.",
  },
  {
    title: "Technical Consultancy & Training",
    desc:
      "Industry-focused technical consultancy and hands-on training programs that equip teams with the knowledge and skills to operate, maintain, and optimize industrial equipment effectively.",
  },
];

const partners = [
  { name: "Gt bank", logo: "/OurPartners/gtbank.svg" },
  { name: "Zenith bank", logo: "/OurPartners/zenithbank.svg" },
  { name: "Nigerian Stock Exchange", logo: "/OurPartners/nse.png" },
  { name: "Poly product", logo: "/OurPartners/polygroup.svg" },
  { name: "Viathan Nigeria Limited", logo: "/OurPartners/viathan.png" },
  { name: "Cappa & D'Alberto Nigeria Limited", logo: "/OurPartners/Cappa.svg" },
];

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState("core-services");
  const [isTabsFixed, setIsTabsFixed] = useState(false);

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabsWrapperRef = useRef<HTMLDivElement | null>(null);

  const isManualScrolling = useRef(false);
  const manualScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const scrollTabs = (direction: "left" | "right") => {
  if (!tabsContainerRef.current) return;

  tabsContainerRef.current.scrollBy({
    left: direction === "left" ? -200 : 200,
    behavior: "smooth",
  });
};

  useEffect(() => {
    const handleScrollSpy = () => {
      if (isManualScrolling.current) return;

      const scrollPoint = window.scrollY + 180;
      let currentSection = "core-services";

      tabs.forEach((tab) => {
        const section = document.getElementById(tab.id);
        if (!section) return;

        if (section.offsetTop <= scrollPoint) {
          currentSection = tab.id;
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth < 768) {
      setIsTabsFixed(false);
      return;
    }

    if (!tabsWrapperRef.current) return;

    const tabsTop = tabsWrapperRef.current.getBoundingClientRect().top;
    setIsTabsFixed(tabsTop <= 80);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
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

    const yOffset = isTabsFixed ? -90 : -70;
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
    }, 1200);
  };

  return (
    <section
      id="core-services"
      className="services-section bg-[var(--section-bg)] py-20 text-[var(--section-text)] transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-4">
       <div ref={tabsWrapperRef} className="mb-12 h-[64px]">
  <motion.div
    initial={false}
    animate={{ y: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 180,
      damping: 20,
    }}
 className={`z-[999] flex justify-center transition-colors duration-300 ${
  isTabsFixed
    ? "md:fixed md:left-0 md:right-0 md:top-0 md:bg-[var(--fixed-tabs-bg)] md:px-2 md:py-3 md:backdrop-blur-md md:shadow-sm"
    : "relative bg-transparent py-0"
}`}
  >
    <div className="relative flex w-full max-w-6xl items-center">

      {/* LEFT ARROW - MOBILE ONLY */}
      <button
        onClick={() => scrollTabs("left")}
        className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--tabs-container)] shadow-md md:hidden"
      >
        <ChevronLeft size={18} />
      </button>

      {/* TABS */}
    <div
  ref={tabsContainerRef}
  className="no-scrollbar mx-10 md:mx-0 flex w-full overflow-x-auto scroll-smooth md:justify-center"
>
        <div
     className={`mx-auto flex w-max flex-nowrap gap-2 rounded-full border border-[var(--tabs-border)] p-2 backdrop-blur-md transition-colors duration-300 ${
  isTabsFixed
    ? "bg-[var(--tabs-container-fixed)]"
    : "bg-[var(--tabs-container)]"
}`}
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
                    ? "bg-[var(--tab-active-bg)] font-medium text-[var(--tab-active-text)] shadow-sm"
                    : "text-[var(--tab-text)] hover:text-[var(--tab-hover)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT ARROW - MOBILE ONLY */}
      <button
        onClick={() => scrollTabs("right")}
        className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--tabs-container)] shadow-md md:hidden"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  </motion.div>
</div>

        <AnimatedSection delay={0.1}>
          {/* <div id="our-services" className="mb-14 scroll-mt-40 text-center"> */}
            <div id="our-services"
            className="flex justify-center text-center"
            style={{ color: "var(--section-text)" }}
          >
             <SectionHeader
                          title="Our Core Services"
                          subtitle=" Engineering solutions to keep your operations running without
              interruption."
                        />
          </div>
        </AnimatedSection>
{/* 
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
          <div className="border-b border-[var(--service-border)] pb-6">
  <div className="flex items-start gap-4">
    <div className="mt-1 shrink-0">
                    <Image
                      src="/check-dark-mode.svg"
                      alt="Check"
                      width={32}
                      height={32}
                      className="hidden dark-check-icon"
                    />
                    <Image
                      src="/check-light-mode.svg"
                      alt="Check"
                      width={32}
                      height={32}
                      className="hidden light-check-icon"
                    />
                  </div>
                </div>

                <div className="w-full border-b border-[var(--service-border)] pb-6">
                 <h3 className="text-base font-semibold leading-snug md:text-lg">
                    {service.title}
                  </h3>
<p className="mt-3 text-sm leading-7 text-[var(--section-muted)] md:text-[15px]">
  {service.desc}
</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div> */}

  <div className="grid gap-x-16 gap-y-0 md:grid-cols-2">
  {services.map((service, index) => (
    <AnimatedSection key={index} delay={0.12 + index * 0.05}>
      <div className="h-full border-b border-[var(--service-border)] py-8">
        <div className="flex h-full items-start gap-4">
          
          {/* ICON */}
          <div className="mt-1 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full">
              <Image
                src="/check-dark-mode.svg"
                alt="Check"
                width={32}
                height={32}
                className="hidden dark-check-icon"
              />
              <Image
                src="/check-light-mode.svg"
                alt="Check"
                width={32}
                height={32}
                className="hidden light-check-icon"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold leading-relaxed md:text-lg">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--section-muted)] md:text-[15px]">
              {service.desc}
            </p>
          </div>

        </div>
      </div>
    </AnimatedSection>
  ))}
</div>

        <AnimatedSection delay={0.55}>
          <div className="mt-14 flex justify-center">
            <Link
  href="/projects"
  className="rounded-full bg-[var(--button-bg)] px-8 py-3 text-sm font-medium text-[var(--button-text)] transition hover:scale-105 hover:bg-[var(--button-hover)]"
>
  View Projects
</Link>
          </div>
        </AnimatedSection>
      </div>

      <div
        id="projects"
        className="relative left-1/2 right-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-[var(--partners-bg)] py-6 text-[var(--partners-text)] scroll-mt-40"
      >
        <div className="mx-auto max-w-6xl px-4">
          <AnimatedSection>
            <div className="mb-7 flex justify-center">
              <h3 className="text-[18px] font-semibold md:text-[20px]">
                Our Partners
              </h3>
            </div>
          </AnimatedSection>

          <div className="relative overflow-hidden">
            <div className="partners-marquee flex items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="mr-12 flex h-[40px] w-[100px] shrink-0 items-center justify-center md:mr-20 md:h-[52px] md:w-[140px]"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={60}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
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