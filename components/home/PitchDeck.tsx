"use client";

import Image from "next/image";

export default function PitchDeckCTA() {
  return (
    <section
      className="pitchdeck-section pb-14 sm:pb-16 lg:pb-20"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-[20px] px-5 py-8 sm:rounded-[24px] sm:px-8 sm:py-10 md:px-12 lg:rounded-[28px]"
          style={{
            backgroundColor: "var(--card-bg)",
            color: "var(--card-text)",
          }}
        >
          <div className="mx-auto max-w-2xl text-left">
            <h3 className="text-2xl font-bold sm:text-[28px] md:text-3xl">
              Our Firm's Pitch-Deck
            </h3>

            <p className="mt-3 text-sm leading-6 opacity-80 sm:text-base sm:leading-7">
              Providing end-to-end power and engineering solutions that enhance
              efficiency, reduce downtime, and ensure reliable operations for
              businesses.
            </p>

            <button
              className="mt-6 flex h-[56px] w-full items-center justify-center gap-2 rounded-[30px] font-medium transition hover:scale-[1.02] sm:h-[60px] sm:w-[240px] md:h-[64px] md:w-[290px]"
              style={{
                backgroundColor: "var(--button-bg)",
                color: "var(--button-text)",
              }}
            >
              <span className="flex items-center gap-2">
                Download Pitchdeck
                <Image
                  src="/DownloadIcon.svg"
                  width={20}
                  height={20}
                  alt="Download"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}