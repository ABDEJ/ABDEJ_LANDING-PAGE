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
  {
    acronym: "A",
    title: "Accountability",
    description:
      "We take ownership of every responsibility and deliver on our promises.",
  },
  {
    acronym: "B",
    title: "Brilliance",
    description:
      "We strive for excellence in everything we do. We are committed to overcoming challenges and delivering results.",
  },
  {
    acronym: "D",
    title: "Dynamism",
    description:
      "We adapt to changing circumstances, embracing innovation and progress.",
  },
  {
    acronym: "E",
    title: "Expertise",
    description:
      "We develop and maintain specialized knowledge to deliver exceptional results.",
  },
  {
    acronym: "J",
    title: "Judgment",
    description:
      "We exercise sound judgment, balancing risk and opportunity.",
  },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2 text-center">
      <Image
        src="/AboutUsIcons/Gear.svg"
        alt="Gear Icon"
        width={65}
        height={65}
        className="-mr-8"
      />
      <h2 className="text-lg font-semibold text-primary sm:text-xl md:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function InfoCard({
  title,
  description,
  icon,
}: {
  title?: string;
  description: string;
  icon?: string;
}) {
  return (
    <div className="group rounded-[22px] border border-white/5 bg-dark-card px-5 py-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30">
      {icon && (
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition group-hover:bg-secondary/10 group-hover:ring-secondary/30">
            <Image
              src={icon}
              alt={title ? `${title} icon` : "Card icon"}
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>
      )}

      {title && (
        <h3 className="mb-2 text-base font-semibold text-secondary sm:text-lg">
          {title}
        </h3>
      )}

      <p className="mx-auto max-w-[240px] text-sm leading-6 text-white/75">
        {description}
      </p>
    </div>
  );
}

function AcronymCard({
  acronym,
  title,
  description,
}: {
  acronym: string;
  title?: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-[22px] border border-white/5 bg-dark-card px-5 py-7 text-center shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30">
      
      {/* SAME ICON CONTAINER AS OTHER CARDS */}
      <div className="mb-4 flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition group-hover:bg-secondary/10 group-hover:ring-secondary/30">
          <span className="text-xl font-bold text-secondary sm:text-2xl">
            {acronym}
          </span>
        </div>
      </div>

      {title && (
        <h3 className="mb-2 text-base font-semibold text-secondary sm:text-lg">
          {title}
        </h3>
      )}

      <p className="mx-auto max-w-[240px] text-sm leading-6 text-white/75">
        {description}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-[#1A1D20]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading title="Our Mission Statement" />

            <div className="grid gap-6 md:grid-cols-3">
              {missionItems.map((card, index) => (
                <InfoCard
                  key={`mission-${index}`}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading title="Our Value Statement" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {valueItems.map((card, index) => (
                <InfoCard
                  key={`value-${index}`}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-12">
            <SectionHeading title="Core Values Acronym - ABDEJ" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
              {coreValues.map((card, index) => {
                const spanClass =
                  index < 3
                    ? "lg:col-span-2"
                    : index === 3
                    ? "lg:col-start-2 lg:col-span-2"
                    : "lg:col-start-4 lg:col-span-2";

                return (
                  <div key={`core-${index}`} className={spanClass}>
                    <AcronymCard
                      acronym={card.acronym || ""}
                      title={card.title}
                      description={card.description}
                    />
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