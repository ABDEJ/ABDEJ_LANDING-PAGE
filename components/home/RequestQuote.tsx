"use client";

import Image from "next/image";
import AnimatedSection from "../Animations";
import Link from "next/link";

export default function RequestQuote() {
  return (
    <section id="request-quote"
      className="request-quote-section py-12 sm:py-14 lg:py-16"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(260px,476px)_1fr] lg:gap-12 lg:px-8">
        
        {/* Image */}
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

        {/* Content */}
        <AnimatedSection direction="right" delay={0.1}>
          <div
            className="text-left lg:pl-6"
            style={{ color: "var(--section-text)" }}
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              Request a Quote
            </h3>

            <p
              className="mt-3 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--section-text)", opacity: 0.8 }}
            >
              Contact us so we can give you pricing for your project. We’ll work
              with you to understand your needs and provide a customized quote
              that fits your budget and timeline.
            </p>

 <Link
  href="/contact-us"
  scroll={true}
  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
>
  <button
    className="mt-6 h-[56px] w-full rounded-[30px] sm:h-[64px] sm:w-[181px] transition hover:scale-[1.02]"
    style={{
      backgroundColor: "var(--button-bg)",
      color: "var(--button-text)",
    }}
  >
    Contact Us
  </button>
</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}