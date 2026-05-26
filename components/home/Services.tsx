"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedSection from "../Animations";
import { motion } from "framer-motion";
import Link from "next/link";

const tabs = [
  { label: "All Categories", id: "core-services" },
  { label: "Our Services", id: "our-services" },
  { label: "Projects", id: "projects" },
  { label: "About Us", id: "about-us" },
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
  { name: "Poly product", logo: "/OurPartners/polygroup.svg" },
  { name: "Viathan Nigeria Limited", logo: "/OurPartners/viathan.svg" },
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
                ? "fixed left-0 right-0 top-0 bg-[var(--fixed-tabs-bg)] px-4 py-3 backdrop-blur-md shadow-sm"
                : "relative bg-transparent py-0"
            }`}
          >
            <div className="no-scrollbar w-full max-w-6xl overflow-x-auto">
              <div
                ref={tabsContainerRef}
                className={`mx-auto flex w-max min-w-full flex-nowrap gap-2 rounded-full border border-[var(--tabs-border)] p-2 backdrop-blur-md transition-colors duration-300 md:w-fit md:min-w-0 md:justify-center ${
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
          </motion.div>
        </div>

        <AnimatedSection delay={0.1}>
          <div id="our-services" className="mb-14 scroll-mt-40 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Our Core Services
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--section-muted)]">
              Engineering solutions to keep your operations running without
              interruption.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full">
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
                  <h3 className="text-sm font-medium md:text-base">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[var(--section-muted)] md:text-sm">
                    {service.desc}
                  </p>
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
                    width={140}
                    height={52}
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