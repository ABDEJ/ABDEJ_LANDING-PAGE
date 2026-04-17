import Image from "next/image";
import AnimatedSection from "../Animations";

export default function RequestQuote() {
  return (
    <section className="bg-secondary py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(260px,476px)_1fr] lg:gap-12 lg:px-8">
        
        {/* Image (from LEFT) */}
        <AnimatedSection direction="left">
          <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-white/20 sm:h-[320px] lg:h-[400px]">
            <Image
              src="/RequestQuote.svg"
              alt="windmill"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Content (from RIGHT) */}
        <AnimatedSection direction="right" delay={0.1}>
          <div className="text-left lg:pl-6">
            <h3 className="text-2xl font-bold text-black sm:text-3xl">
              Request a Quote
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-black/80 sm:text-base">
              Contact us so we can give you pricing for your project. We’ll work
              with you to understand your needs and provide a customized quote
              that fits your budget and timeline.
            </p>

            <button className="mt-6 h-[56px] w-full rounded-[30px] bg-white text-dark sm:h-[64px] sm:w-[181px] transition hover:scale-[1.02]">
              Contact Us
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}