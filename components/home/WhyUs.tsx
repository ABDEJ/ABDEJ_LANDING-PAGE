// import SectionHeader from "../SectionHeader";
// import Image from "next/image";
// import AnimatedSection from "../Animations";

// const features = [
//   {
//     title: "Proven Technical Expertise",
//     desc: "We bring hands-on experience and solid technical knowledge to every project, ensuring efficient and reliable engineering solutions.",
//     icon: "/WhyChooseUsIcon.svg",
//     iconWidth: 35,
//     iconHeight: 35,
//     wide: false,
//   },
//   {
//     title: "Reliable & Timely Delivery",
//     desc: "Our team is committed to completing every project on schedule while maintaining consistent performance and attention to detail.",
//     icon: "/WhyChooseUsIcon2.svg",
//     iconWidth: 38,
//     iconHeight: 38,
//     wide: false,
//   },
//   {
//     title: "Cost-Effective Quality Solutions",
//     desc: "We deliver high-quality results at competitive prices, helping you get durable and efficient solutions without unnecessary costs.",
//     icon: "/WhyChooseUsIcon3.svg",
//     iconWidth: 58,
//     iconHeight: 58,
//     wide: true,
//   },
// ];

// // export default function WhyChooseUs() {
// //   return (
// //     <section className="bg-[#1A1D20] py-20">
// //       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
// //         <AnimatedSection direction="right">
// //           <div className="mb-10 flex justify-center">
// //             <div className="h-[2px] w-full max-w-[711px] bg-secondary" />
// //           </div>
// //         </AnimatedSection>

// //         <AnimatedSection direction="right" delay={0.1}>
// //           <div className="flex justify-center text-center">
// //             <SectionHeader
// //               title="Why Choose Us ?"
// //               subtitle="We combine technical expertise, reliable service delivery, and cost-effective solutions to meet your power and engineering needs."
// //             />
// //           </div>
// //         </AnimatedSection>

// //        <div className="mt-12 grid gap-5 md:grid-cols-2">
// //   {features.map((item, index) => (
// //     <AnimatedSection
// //       key={index}
// //       direction="right"
// //       delay={0.15 + index * 0.1}
// //       className={item.wide ? "md:col-span-2" : ""}
// //     >
// //       <div className="group rounded-[24px] border border-white/10 bg-[#202326] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-7">
// //         <div className="mb-6 flex items-start justify-between gap-4">
// //           <h3 className="max-w-[75%] text-xl font-semibold leading-tight text-white sm:text-2xl">
// //             {item.title}
// //           </h3>

// //           <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px]">
// //             <Image
// //               src={item.icon}
// //               alt={item.title}
// //               width={item.iconWidth}
// //               height={item.iconHeight}
// //               className="object-contain"
// //             />
// //           </div>
// //         </div>

// //         <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-base">
// //           {item.desc}
// //         </p>

// //         <button className="mt-6 h-[48px] w-[139px] rounded-full bg-secondary text-sm font-semibold text-dark transition hover:opacity-90">
// //           Learn More
// //         </button>
// //       </div>
// //     </AnimatedSection>
// //   ))}
// // </div>
// //       </div>
// //     </section>
// //   );
// // }

// export default function WhyChooseUs() {
//   return (
//     <section
//       className="why-choose-section py-20"
//       style={{ backgroundColor: "var(--section-bg)" }}
//     >
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <AnimatedSection direction="right">
//           <div className="mb-10 flex justify-center">
//             <div
//               className="h-[2px] w-full max-w-[711px]"
//               style={{ backgroundColor: "var(--line-bg)" }}
//             />
//           </div>
//         </AnimatedSection>

//         <AnimatedSection direction="right" delay={0.1}>
//           <div
//             className="flex justify-center text-center"
//             style={{ color: "var(--section-text)" }}
//           >
//             <SectionHeader
//               title="Why Choose Us ?"
//               subtitle="We combine technical expertise, reliable service delivery, and cost-effective solutions to meet your power and engineering needs."
//             />
//           </div>
//         </AnimatedSection>

//         <div className="mt-12 grid gap-5 md:grid-cols-2">
//           {features.map((item, index) => (
//             <AnimatedSection
//               key={index}
//               direction="right"
//               delay={0.15 + index * 0.1}
//               className={item.wide ? "md:col-span-2" : ""}
//             >
//               <div
//                 className="group rounded-[24px]  p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-7"
//                 style={{
//                   backgroundColor: "var(--card-bg)",
//                   // borderColor: "var(--card-border)",
//                 }}
//               >
//                 <div className="mb-6 flex items-start justify-between gap-4">
//                   <h3
//                     className="max-w-[75%] text-xl font-semibold leading-tight sm:text-2xl"
//                     style={{ color: "var(--section-text)" }}
//                   >
//                     {item.title}
//                   </h3>

//                   <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[18px]">
//                     <Image
//                         src={item.icon}
//                       alt={item.title}
//                       width={item.iconWidth}
//                       height={item.iconHeight}
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>

//                 <p
//                   className="max-w-2xl text-sm leading-7 md:text-base"
//                   style={{ color: "var(--section-muted)" }}
//                 >
//                   {item.desc}
//                 </p>

//                 <button
//                   className="mt-6 h-[48px] w-[139px] rounded-full text-sm font-semibold transition hover:opacity-90"
//                   style={{
//                     backgroundColor: "var(--button-bg)",
//                     color: "var(--button-text)",
//                   }}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeader from "../SectionHeader";
import AnimatedSection from "../Animations";

const features = [
  {
    title: "Proven Technical Expertise",
    desc: "We bring hands-on experience and solid technical knowledge to every project, ensuring efficient and reliable engineering solutions.",
    details:
      "Our engineers possess deep field experience across industrial systems, electrical installations, and engineering design. We focus on delivering practical, efficient, and safe solutions backed by industry standards and proven methodologies.",
    icon: "/WhyChooseUsIcon.svg",
    iconWidth: 35,
    iconHeight: 35,
    wide: false,
  },
  {
    title: "Reliable & Timely Delivery",
    desc: "Our team is committed to completing every project on schedule while maintaining consistent performance and attention to detail.",
    details:
      "We operate with strict project timelines, structured workflows, and accountability systems to ensure every deliverable is completed efficiently without compromising quality or safety.",
    icon: "/WhyChooseUsIcon2.svg",
    iconWidth: 38,
    iconHeight: 38,
    wide: false,
  },
  {
    title: "Cost-Effective Quality Solutions",
    desc: "We deliver high-quality results at competitive prices, helping you get durable and efficient solutions without unnecessary costs.",
    details:
      "Our approach focuses on optimizing resources, reducing operational waste, and providing engineering solutions that balance affordability with long-term reliability and performance.",
    icon: "/WhyChooseUsIcon3.svg",
    iconWidth: 58,
    iconHeight: 58,
    wide: true,
  },
];

export default function WhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState<
    (typeof features)[number] | null
  >(null);

  // ESC close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedFeature(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section
      className="why-choose-section py-20"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* LINE */}
        <AnimatedSection direction="right">
          <div className="mb-10 flex justify-center">
            <div
              className="h-[2px] w-full max-w-[711px]"
              style={{ backgroundColor: "var(--line-bg)" }}
            />
          </div>
        </AnimatedSection>

        {/* HEADER */}
        <AnimatedSection direction="right" delay={0.1}>
          <div
            className="flex justify-center text-center"
            style={{ color: "var(--section-text)" }}
          >
            <SectionHeader
              title="Why Choose Us ?"
              subtitle="We combine technical expertise, reliable service delivery, and cost-effective solutions to meet your power and engineering needs."
            />
          </div>
        </AnimatedSection>

        {/* CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((item, index) => (
            <AnimatedSection
              key={index}
              direction="right"
              delay={0.15 + index * 0.1}
              className={item.wide ? "md:col-span-2" : ""}
            >
              <div
                className="group rounded-[24px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-7"
                style={{
                  backgroundColor: "var(--card-bg)",
                }}
              >
                {/* HEADER */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3
                    className="max-w-[75%] text-xl font-semibold leading-tight sm:text-2xl"
                    style={{ color: "var(--section-text)" }}
                  >
                    {item.title}
                  </h3>

                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={item.iconWidth}
                      height={item.iconHeight}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="max-w-2xl text-sm leading-7 md:text-base"
                  style={{ color: "var(--section-muted)" }}
                >
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setSelectedFeature(item)}
                  className="mt-6 h-[48px] w-[139px] rounded-full text-sm font-semibold transition duration-300 hover:scale-105 hover:opacity-90"
                  style={{
                    backgroundColor: "var(--button-bg)",
                    color: "var(--button-text)",
                  }}
                >
                  Learn More
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {/* <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-[28px] p-8 shadow-2xl"
              style={{
                backgroundColor: "var(--card-bg)",
              }}
            >
              {/* CLOSE BUTTON */}
              {/* <button
                onClick={() => setSelectedFeature(null)}
                className="absolute right-5 top-5 text-2xl transition hover:rotate-90"
                style={{
                  color: "var(--section-muted)",
                }}
              >
                ×
              </button> */}

              {/* CONTENT */}
              {/* <Image
                src={selectedFeature.icon}
                alt={selectedFeature.title}
                width={60}
                height={60}
                className="mb-6"
              />

              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: "var(--section-text)" }}
              >
                {selectedFeature.title}
              </h3>

              <p
                className="leading-8"
                style={{ color: "var(--section-muted)" }}
              >
                {selectedFeature.details}
              </p>

              <button
                onClick={() => setSelectedFeature(null)}
                className="mt-8 rounded-full px-6 py-3 font-semibold transition hover:scale-105"
                style={{
                  backgroundColor: "var(--button-bg)",
                  color: "var(--button-text)",
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */} 


      <AnimatePresence>
  {selectedFeature && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedFeature(null)}
    >
      {/* MODAL CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 25 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* TOP ACCENT */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: "var(--button-bg)" }}
        />

        {/* CLOSE */}
        <button
          onClick={() => setSelectedFeature(null)}
          className="absolute right-5 top-4 text-2xl transition hover:opacity-60"
          style={{ color: "var(--section-text)" }}
        >
          ×
        </button>

        {/* LOGO HERO */}
        <div className="flex flex-col items-center px-6 pt-10 text-center">
          <div
            className="rounded-2xl p-6 shadow-lg"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Image
              src="/logo.png"
              alt="Abdej Logo"
              width={110}
              height={110}
              className="object-contain"
            />
          </div>

          <p
            className="mt-5 text-xs tracking-[3px] uppercase"
            style={{
              color: "var(--section-muted)",
              opacity: 0.9,
            }}
          >
            Abdej Engineering
          </p>

          <h2
            className="mt-2 text-2xl font-bold sm:text-3xl"
            style={{
              color: "var(--section-text)",
              letterSpacing: "-0.02em",
            }}
          >
            {selectedFeature.title}
          </h2>
        </div>

        {/* CONTENT */}
        <div className="px-6 pb-10 pt-6">
          <p
            className="mb-6 text-center text-sm leading-7 sm:text-base"
            style={{
              color: "var(--section-text)",
              opacity: 0.85,
              fontWeight: 500,
            }}
          >
            {selectedFeature.desc}
          </p>

          {/* DETAILS */}
          <div
            className="rounded-2xl p-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="text-sm leading-7 sm:text-base"
              style={{
                color: "var(--section-text)",
                opacity: 0.9,
                lineHeight: "1.9",
              }}
            >
              {selectedFeature.details}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-7 flex justify-center">
            <button
              onClick={() => setSelectedFeature(null)}
              className="rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105"
              style={{
                backgroundColor: "var(--button-bg)",
                color: "var(--button-text)",
              }}
            >
              Got it
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      
    </section>
  );
}