"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import AnimatedSection from "../Animations";

const faqs = [
  {
    question: "What services does Abdej Nigeria Limited offer?",
    answer:
      "We provide power system design and maintenance, generator servicing and repairs, engineered sourcing, custom fabrication, and technical consultancy services.",
  },
  {
    question: "Do you handle all types of generators?",
    answer:
      "Yes. We support a wide range of generator systems depending on project requirements and service scope.",
  },
  {
    question: "Can you fabricate custom equipment based on our needs?",
    answer:
      "Yes. We create tailored engineering and fabrication solutions based on technical specifications and operating conditions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope, materials, location, and technical complexity, but we always aim for timely delivery.",
  },
  {
    question: "Do you offer on-site services?",
    answer:
      "Yes. We provide on-site inspections, maintenance, and engineering support where required.",
  },
  {
    question: "How can I request a quote or get started?",
    answer:
      "You can contact us through the website form, WhatsApp, email, or direct phone call to discuss your requirements.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="faq-section py-20"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <AnimatedSection direction="up">
          <div className="mb-6 flex justify-center">
            <div
              className="mb-4 h-[2px] w-full max-w-[711px]"
             style={{ backgroundColor: "var(--divider-color)" }}
            />
          </div>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection direction="up" delay={0.1}>
          <div
            className="mt-4 flex justify-center text-center"
            style={{ color: "var(--section-text)" }}
          >
            <SectionHeader
              title="FAQs"
              subtitle="Have questions? Find answers to frequently asked questions about us."
            />
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <AnimatedSection
                key={index}
                direction="up"
                delay={0.15 + index * 0.08}
              >
                <div
                  className="rounded-2xl border bg-transparent"
                  style={{
                    borderColor: "var(--border-color)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    style={{ color: "var(--section-text)" }}
                  >
                    <span className="text-base font-medium">
                      {faq.question}
                    </span>

                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition"
                      style={{
                        backgroundColor: isOpen
                          ? "var(--toggle-open-bg)"
                          : "var(--toggle-closed-bg)",
                        color: isOpen
                          ? "var(--toggle-open-text)"
                          : "var(--toggle-closed-text)",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 pb-5 text-sm leading-7"
                      style={{ color: "var(--section-muted)" }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}