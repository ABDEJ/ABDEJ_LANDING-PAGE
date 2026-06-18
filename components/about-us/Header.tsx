import Image from "next/image";
import SectionHeader from "../SectionHeader";
import AnimatedSection from "../Animations";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Custom Solutions",
  "Experienced Team",
  "Sustainability",
  "High-quality and durable solutions",
  "Cost-effective services",
  "Friendly Support",
];

export default function AboutUs() {
  return (
    <section
      className="about-us-section py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Divider line */}
        <AnimatedSection direction="left">
          <div className="mb-8 flex justify-center sm:mb-10">
            <div
              className="h-[2px] w-full max-w-[711px]"
              style={{ backgroundColor: "var(--line-bg)" }}
            />
          </div>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection direction="left" delay={0.1}>
          <div
            className="flex justify-center text-center"
            style={{ color: "var(--section-text)" }}
          >
            <SectionHeader
              title="About Us"
              subtitle="Engineering Reliable Power Solutions"
            />
          </div>
        </AnimatedSection>


            <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[480px_1fr] lg:gap-16">
          {/* IMAGE SECTION */}
          <div className="lg:ml-20">
            {/* MOBILE / TABLET */}
            <div className="grid grid-cols-2 gap-4 lg:hidden items-stretch">

              <div className="relative w-full aspect-[298/447] overflow-hidden rounded-[15px]">
                 <AnimatedSection direction="left" delay={0.15}>
                <Image
                  src="/AboutUsEngineer.svg"
                  alt="worker"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                  priority
                />
                              </AnimatedSection>
              </div>


              <div className="relative w-full aspect-[314/447] overflow-hidden rounded-[15px]">
                <AnimatedSection direction="right" delay={0.2}>
                <Image
                  src="/AboutUsEngineer2.svg"
                  alt="worker"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                />
                   </AnimatedSection>
              </div>           
            </div>

            {/* DESKTOP */}
            <div className="relative hidden lg:flex lg:w-[620px] items-start gap-6">

              <div className="relative w-[298px] h-[447px] rounded-[15px] overflow-hidden">
                <AnimatedSection direction="left" delay={0.15}>
                <Image
                  src="/AboutUsEngineer.svg"
                  alt="worker"
                  fill
                  className="object-contain object-top"
                  sizes="298px"
                />
                </AnimatedSection>
              </div>

              <div className="relative w-[314px] h-[447px] mt-16 rounded-[15px] overflow-hidden">
                <AnimatedSection direction="right" delay={0.25}>
                <Image
                  src="/AboutUsEngineer2.svg"
                  alt="worker"
                  fill
                  className="object-contain object-top"
                  sizes="314px"
                />
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Content */}
          <AnimatedSection direction="left" delay={0.25}>
            <div
              className="lg:pl-16"
              style={{ color: "var(--section-text)" }}
            >
                    <div className="lg:-ml-36">
  <p
    className="text-sm leading-7 sm:text-base sm:leading-8"
    style={{ color: "var(--section-muted)" }}
  >
    Abdej Nigeria Limited (Abdej Ltd){" "}

    <span className="italic font-extrabold text-[var(--section-text)] text-base mr-2">
      RC: 9180516
    </span>

    is the successor to Abdej Nigeria Enterprises. It is an indigenous
    company incorporated in 2012. We are driven by the need for high
    throughput innovations in the Nigerian power sector. As a duly
    incorporated limited liability company, we provide top notch tailored
    solutions to meet the ever growing demand for different forms of
    robust, clean and engineering solutions in Nigeria. Our clients cut
    across small, medium and large scale businesses.
  </p>
</div>

              <div className="mt-8 grid gap-6 md:grid-cols-[156px_1fr] md:items-start">
                {/* Experience Card */}
                <div className="flex h-[220px] w-full max-w-[156px] flex-col items-center justify-center rounded-[13px] bg-secondary text-center text-[#111111] shadow-lg">
                  <span className="text-4xl font-extrabold leading-none sm:text-5xl">
                    14
                  </span>

                  <span className="mt-3 text-sm font-semibold uppercase tracking-wide text-white">
                    Years Of
                  </span>

                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    Experience
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 border-b border-black/10 pb-3"
                      style={{ color: "var(--section-muted)" }}
                    >
                      <Image
                        alt="checkIcon"
                        src="/AboutUsCheckIcon.svg"
                        width={32}
                        height={32}
                        className="h-7 w-7 sm:h-8 sm:w-8"
                      />

                      <span className="text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Text */}
              <p
                className="mt-8 max-w-3xl text-sm leading-7"
                style={{ color: "var(--section-muted)" }}
              >
                Our team of dedicated experts are committed to ensuring that
                every project we undertake is executed with the highest level of
                quality and professionalism.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <motion.button
  whileHover={{ y: -3, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 280, damping: 18 }}
  className="group flex h-[56px] w-full items-center justify-center gap-2 rounded-[30px] bg-secondary text-dark sm:h-[63px] sm:w-[226px]"
>
  <span className="flex items-center gap-2">
    LEARN MORE

    <Image
      src="/AboutUsLearnMoreRightIcon.svg"
      width={20}
      height={20}
      alt="Arrow"
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</motion.button>

               <motion.button
  whileHover={{ y: -4, scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300, damping: 18 }}
  className="group flex h-[56px] w-full items-center justify-center gap-2 rounded-[30px] sm:h-[63px] sm:w-[290px]"
  style={{
    backgroundColor: "var(--button-bg)",
    color: "var(--button-text)",
  }}
>
  <span className="flex items-center gap-2">
    DOWNLOAD PROFILE
    <Download className="h-5 w-5 text-current transition-transform duration-300 group-hover:translate-y-0.5" />
  </span>
</motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}