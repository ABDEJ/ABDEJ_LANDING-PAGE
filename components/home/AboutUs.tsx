import Image from "next/image";
import SectionHeader from "../SectionHeader";

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
    <section className="bg-[#1A1D20] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Yellow divider line */}
        <div className="mb-8 flex justify-center sm:mb-10">
          <div className="h-[2px] w-full max-w-[711px] bg-secondary" />
        </div>

        {/* Centered Header */}
        <div className="flex justify-center text-center">
          <SectionHeader
            title="About Us"
            subtitle="Engineering Reliable Power Solutions"
          />
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[480px_1fr] lg:gap-16">
          {/* Images */}
          <div className="lg:ml-20">
            {/* Mobile / Tablet layout */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              <div className="overflow-hidden rounded-[15px]">
                <Image
                  src="/AboutUsEngineer.svg"
                  alt="worker"
                  width={298}
                  height={447}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[15px] pt-8">
                <Image
                  src="/AboutUsEngineer2.svg"
                  alt="worker"
                  width={314}
                  height={447}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Desktop layout */}
            <div className="relative hidden h-[720px] w-full lg:block lg:w-[480px]">
              <div className="absolute -left-16 top-0 overflow-hidden rounded-[15px]">
                <Image
                  src="/AboutUsEngineer.svg"
                  alt="worker"
                  width={298}
                  height={447}
                  className="object-cover"
                />
              </div>

              <div className="absolute left-[260px] top-[260px] overflow-hidden rounded-[15px]">
                <Image
                  src="/AboutUsEngineer2.svg"
                  alt="worker"
                  width={314}
                  height={447}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-16">
            <div className="lg:-ml-36">
              <p className="text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
                Abdej Nigeria Limited. (Abdej LTD) is an indigenous company
                incorporated in 2018. We are driven by the need for high
                throughput innovations in the Nigerian power sector. We provide
                top-notch tailored solutions to meet the ever-growing demand for
                different forms of robust, clean and sustainable energy in
                Nigeria. Our clients cut across small, medium and large scale
                businesses.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[156px_1fr] md:items-start">
              <div className="flex h-[220px] w-full max-w-[156px] flex-col items-center justify-center rounded-[13px] bg-secondary text-center text-[#111111] shadow-lg">
                <span className="text-4xl font-extrabold leading-none sm:text-5xl">
                  15
                </span>
                <span className="mt-3 text-sm font-semibold uppercase tracking-wide text-white">
                  Years Of
                </span>
                <span className="text-sm font-semibold uppercase tracking-wide text-white">
                  Experience
                </span>
              </div>

              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 border-b border-white/10 pb-3 text-white/85"
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

            <p className="mt-8 max-w-3xl text-sm leading-7 text-white/65">
              Providing dedicated expertise and committed service, Abdej Nigeria
              Limited has established itself as the trusted standard for quality
              and professionalism.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button className="h-[56px] w-full rounded-[30px] bg-secondary text-dark sm:w-[226px] sm:h-[63px]">
                Learn More
              </button>

              <button className="h-[56px] w-full rounded-[30px] bg-white text-dark sm:w-[290px] sm:h-[63px]">
                Download Profile ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}