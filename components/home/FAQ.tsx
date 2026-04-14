"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";


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
    <section className="bg-dark py-20">
  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    
   
  <div className="mb-6 flex justify-center">
  <div className="h-[2px] w-[711px] bg-secondary mb-4" />
</div>

    <div className="flex justify-center mt-4 text-center">
  <SectionHeader
    title="FAQs"
    subtitle="Have questions? Find answers to frequently asked questions about us."
  />
</div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-transparent"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                      isOpen
                        ? "bg-[#F4C430] text-[#111111]"
                        : "bg-white text-[#111111]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}