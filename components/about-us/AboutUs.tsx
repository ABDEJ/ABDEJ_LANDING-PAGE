"use client";

import Image from "next/image";
import AnimatedSection from "../Animations";

type CardItem = {
  title?: string;
  description: string;
  icon?: string;
  acronym?: string;
};

const missionItems: CardItem[] = [
  {
    description:
      "Empowering businesses to succeed through cutting-edge engineering solutions and unparalleled customer service.",
    icon: "/AboutUsIcons/Mission/MissionIcon1.svg",
  },
  {
    description:
      "Providing exceptional engineering services that prioritize quality, safety, and sustainability.",
    icon: "/AboutUsIcons/Mission/MissionIcon2.svg",
  },
  {
    description:
      "Delivering innovative engineering solutions that exceed client expectations and transform industries.",
    icon: "/AboutUsIcons/Mission/MissionIcon3.svg",
  },
];

const valueItems: CardItem[] = [
  {
    title: "Integrity",
    description:
      "We operate with honesty, fairness, and ethics in all our interactions.",
    icon: "/AboutUsIcons/Value/ValueIcon1.svg",
  },
  {
    title: "Innovation",
    description:
      "We foster a culture of creativity, embracing new technologies and ideas to drive growth.",
    icon: "/AboutUsIcons/Value/ValueIcon2.svg",
  },
  {
    title: "Customer Focus",
    description:
      "Delivering innovative engineering solutions that exceed client expectations and transform industries.",
    icon: "/AboutUsIcons/Value/ValueIcon3.svg",
  },
  {
    title: "Collaboration",
    description:
      "We operate with transparency, honesty, and ethics in all our interactions.",
    icon: "/AboutUsIcons/Value/ValueIcon4.svg",
  },
  {
    title: "Excellence",
    description:
      "We foster a culture of creativity, embracing new technologies and ideas to drive growth.",
    icon: "/AboutUsIcons/Value/ValueIcon5.svg",
  },
  {
    title: "Sustainability",
    description:
      "Delivering innovative engineering solutions that exceed client expectations and transform industries.",
    icon: "/AboutUsIcons/Value/ValueIcon6.svg",
  },
];

const coreValues: CardItem[] = [
  { acronym: "A", title: "Accountability", description: "We take ownership of every responsibility and deliver on our promises." },
  { acronym: "B", title: "Brilliance", description: "We strive for excellence in everything we do." },
  { acronym: "D", title: "Dynamism", description: "We adapt to changing circumstances, embracing innovation." },
  { acronym: "E", title: "Expertise", description: "We develop and maintain specialized knowledge." },
  { acronym: "J", title: "Judgment", description: "We exercise sound judgment, balancing risk and opportunity." },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2 text-center">
    <Image
      src="/AboutUsIcons/Gear.svg"
      alt="Gear Icon"
      width={65}
      height={65}
      className="gear-spin"
      style={{ filter: "var(--map-filter)" }}
    />
      <h2
        className="text-lg font-semibold sm:text-xl md:text-2xl"
        style={{ color: "var(--section-text)" }}
      >
        {title}
      </h2>
    </div>
  );
}

function InfoCard({ title, description, icon }: CardItem) {
  return (
    <div
      className="group rounded-[22px] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
      }}
    >
      {icon && (
        <div className="mb-4 flex justify-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full transition"
            style={{
              background: "var(--icon-bg)",
              boxShadow: `0 0 0 1px var(--icon-ring)`,
            }}
          >
            <Image
              src={icon}
              alt="icon"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              style={{ filter: "var(--icon-filter, none)" }}
            />
          </div>
        </div>
      )}

      {title && (
        <h3
          className="mb-2 text-base font-semibold sm:text-lg"
          style={{ color: "var(--title-color)" }}
        >
          {title}
        </h3>
      )}

      <p
        className="mx-auto max-w-[240px] text-sm leading-6"
        style={{ color: "var(--section-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

function AcronymCard({ acronym, title, description }: CardItem) {
  return (
    <div
      className="group h-full rounded-[22px] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
      }}
    >
      <div className="mb-4 flex justify-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{
            background: "var(--icon-bg)",
            boxShadow: `0 0 0 1px var(--icon-ring)`,
          }}
        >
          <span
            className="text-xl font-bold sm:text-2xl"
            style={{ color: "var(--title-color)" }}
          >
            {acronym}
          </span>
        </div>
      </div>

      {title && (
        <h3
          className="mb-2 text-base font-semibold sm:text-lg"
          style={{ color: "var(--title-color)" }}
        >
          {title}
        </h3>
      )}

      <p
        className="mx-auto max-w-[240px] text-sm leading-6"
        style={{ color: "var(--section-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      className="about-us-section overflow-hidden"
      style={{ background: "var(--section-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading title="Our Mission Statement" />
            <div className="grid gap-6 md:grid-cols-3">
              {missionItems.map((card, i) => (
                <InfoCard key={i} {...card} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading title="Our Value Statement" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {valueItems.map((card, i) => (
                <InfoCard key={i} {...card} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-12">
            <SectionHeading title="Core Values Acronym - ABDEJ" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
              {coreValues.map((card, i) => {
                const spanClass =
                  i < 3
                    ? "lg:col-span-2"
                    : i === 3
                    ? "lg:col-start-2 lg:col-span-2"
                    : "lg:col-start-4 lg:col-span-2";

                return (
                  <div key={i} className={spanClass}>
                    <AcronymCard {...card} />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}