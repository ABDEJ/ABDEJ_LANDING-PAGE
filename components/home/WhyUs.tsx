import SectionHeader from "../SectionHeader";
import Image from "next/image";
import AnimatedSection from "../Animations";

const features = [
  {
    title: "Proven Technical Expertise",
    desc: "We bring hands-on experience and solid technical knowledge to every project, ensuring efficient and reliable engineering solutions.",
    icon: "/WhyChooseUsIcon1.svg",
    iconWidth: 35,
    iconHeight: 35,
    wide: false,
  },
  {
    title: "Reliable & Timely Delivery",
    desc: "Our team is committed to completing every project on schedule while maintaining consistent performance and attention to detail.",
    icon: "/WhyChooseUsIcon2.svg",
    iconWidth: 38,
    iconHeight: 38,
    wide: false,
  },
  {
    title: "Cost-Effective Quality Solutions",
    desc: "We deliver high-quality results at competitive prices, helping you get durable and efficient solutions without unnecessary costs.",
    icon: "/WhyChooseUsIcon3.svg",
    iconWidth: 58,
    iconHeight: 58,
    wide: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1A1D20] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="right">
          <div className="mb-10 flex justify-center">
            <div className="h-[2px] w-full max-w-[711px] bg-secondary" />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.1}>
          <div className="flex justify-center text-center">
            <SectionHeader
              title="Why Choose Us ?"
              subtitle="We combine technical expertise, reliable service delivery, and cost-effective solutions to meet your power and engineering needs."
            />
          </div>
        </AnimatedSection>

       <div className="mt-12 grid gap-5 md:grid-cols-2">
  {features.map((item, index) => (
    <AnimatedSection
      key={index}
      direction="right"
      delay={0.15 + index * 0.1}
      className={item.wide ? "md:col-span-2" : ""}
    >
      <div className="group rounded-[24px] border border-white/10 bg-[#202326] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 className="max-w-[75%] text-xl font-semibold leading-tight text-white sm:text-2xl">
            {item.title}
          </h3>

          <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px]">
            <Image
              src={item.icon}
              alt={item.title}
              width={item.iconWidth}
              height={item.iconHeight}
              className="object-contain"
            />
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-base">
          {item.desc}
        </p>

        <button className="mt-6 h-[48px] w-[139px] rounded-full bg-secondary text-sm font-semibold text-dark transition hover:opacity-90">
          Learn More
        </button>
      </div>
    </AnimatedSection>
  ))}
</div>
      </div>
    </section>
  );
}