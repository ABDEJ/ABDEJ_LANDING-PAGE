// "use client";

// import Image from "next/image";
// import SectionHeader from "../SectionHeader";
// import AnimatedSection from "../Animations";

// const testimonials = [
//   {
//     name: "Oluwaya Michael",
//     role: "Industrial Tank Owner",
//     text: "Amazing service! Got all my materials delivered on time. The quality is top-notch and prices are very competitive.",
//     avatar: "/MichaelTestimonial.svg",
//     images: [],
//   },
//   {
//     name: "Adunni Ewatomi",
//     role: "Generator Owner",
//     text: "Great selection and easy ordering process. The expert advice from their team helped me choose the right materials.",
//     avatar: "/EwatomiTestimonial.svg",
//     images: [
//       "/galleryTestimonial1.svg",
//       "/galleryTestimonial2.svg",
//       "/galleryTestimonial3.svg",
//     ],
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       className="testimonials-section py-20"
//       style={{ backgroundColor: "var(--section-bg)" }}
//     >
//       <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <AnimatedSection delay={0.1}>
//           <div
//             className="flex justify-center text-center"
//             style={{ color: "var(--section-text)" }}
//           >
//             <SectionHeader
//               title="Testimonials"
//               subtitle="See what our customers have to say about their experience."
//             />
//           </div>
//         </AnimatedSection>

//         {/* Testimonials */}
//         <div className="mt-12 space-y-10">
//           {testimonials.map((item, index) => (
//             <AnimatedSection
//               key={index}
//               delay={0.15 + index * 0.12}
//               direction="up"
//             >
//               <div className="max-w-3xl">
//                 <div className="mb-3 flex items-center gap-3">
//                   <Image
//                     src={item.avatar}
//                     alt={item.name}
//                     width={42}
//                     height={42}
//                     className="rounded-full object-cover"
//                   />

//                   <div>
//                     <h4
//                       className="text-base font-semibold"
//                       style={{ color: "var(--section-text)" }}
//                     >
//                       {item.name}
//                     </h4>

//                     <div className="mt-1 flex items-center gap-3">
//                       <span className="text-secondary">★★★★★</span>

//                       <p
//                         className="text-sm"
//                         style={{ color: "var(--section-muted)" }}
//                       >
//                         {item.role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <p
//                   className="text-sm leading-7 md:text-base"
//                   style={{ color: "var(--section-muted)" }}
//                 >
//                   “{item.text}”
//                 </p>

//                 {item.images.length > 0 && (
//                   <div className="mt-5 flex gap-3">
//                     {item.images.map((img, i) => (
//                       <div
//                         key={i}
//                         className="relative h-16 w-24 overflow-hidden rounded-lg"
//                       >
//                         <Image
//                           src={img}
//                           alt={`gallery-${i}`}
//                           width={120}
//                           height={120}
//                           className="h-full w-full object-cover"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         {/* Arrows */}
//         <AnimatedSection delay={0.45}>
//           <div className="mt-10 flex justify-end gap-4">
//             <button className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-secondary text-3xl text-dark">
//               ‹
//             </button>
//             <button className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-secondary text-3xl text-dark">
//               ›
//             </button>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import SectionHeader from "../SectionHeader";
// import AnimatedSection from "../Animations";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Oluwaya Michael",
//     role: "Industrial Tank Owner",
//     text:
//       "We've sourced tank fabrication materials from Abdej for over a year now. Their delivery times have been consistent, and the material quality has never disappointed us.",
//     avatar: "/MichaelTestimonial.svg",
//     images: [],
//   },
//   {
//     name: "Adunni Ewatomi",
//     role: "Generator Owner",
//     text:
//       "I wasn't sure which products would work best for my generator setup, but their team explained everything clearly. It saved me both time and money.",
//     avatar: "/EwatomiTestimonial.svg",
//     images: [
//       "/galleryTestimonial1.svg",
//       "/galleryTestimonial2.svg",
//       "/galleryTestimonial3.svg",
//     ],
//   },
//   {
//     name: "Segun Adeyemi",
//     role: "Mechanical Contractor",
//     text:
//       "What impressed me most was the professionalism. My order arrived exactly when promised and every item matched the specifications.",
//     initials: "SA",
//     images: [],
//   },
//   {
//     name: "Chioma Nwosu",
//     role: "Facility Manager",
//     text:
//       "Abdej has become our preferred supplier. Their customer support responds quickly and the pricing remains competitive.",
//     initials: "CN",
//     images: [],
//   },
//   {
//     name: "Ibrahim Musa",
//     role: "Site Supervisor",
//     text:
//       "We've completed multiple projects using materials purchased here. The consistency in quality gives us confidence every time.",
//     initials: "IM",
//     images: [],
//   },
// ];

// function getVisibleCount() {
//   if (typeof window === "undefined") return 1;
//   if (window.innerWidth >= 1024) return 3;
//   if (window.innerWidth >= 640) return 2;
//   return 1;
// }

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(1);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setVisibleCount(getVisibleCount());
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const next = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     setCurrent((prev) => (prev + visibleCount) % testimonials.length);

//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prev = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     setCurrent((prev) =>
//       prev - visibleCount < 0
//         ? testimonials.length - visibleCount
//         : prev - visibleCount
//     );

//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const getVisibleTestimonials = () => {
//     const items = [];
//     for (let i = 0; i < visibleCount; i++) {
//       items.push(testimonials[(current + i) % testimonials.length]);
//     }
//     return items;
//   };

//   return (
//     <section
//       className="testimonials-section py-20"
//       style={{ backgroundColor: "var(--section-bg)" }}
//     >
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

//         {/* HEADER (FIXED CENTERING) */}
//         <AnimatedSection delay={0.1}>
//           <div className="text-center flex flex-col items-center justify-center">
//             <div style={{ color: "var(--section-text)" }}>
//               <SectionHeader
//                 title="Testimonials"
//                 subtitle="See what our customers have to say about their experience."
//               />
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* CARDS */}
//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-in-out">

//           {getVisibleTestimonials().map((item, index) => (
//             <AnimatedSection key={index} delay={0.15 + index * 0.08}>
//               <div
//                 className="flex h-full flex-col justify-between rounded-xl p-6 shadow-sm transition hover:shadow-md bg-white/40 dark:bg-black/20"
//               >
//                 {/* TOP */}
//                 <div>
//                   {/* USER */}
//                   <div className="mb-4 flex items-center gap-3">
//                     {item.avatar ? (
//                       <Image
//                         src={item.avatar}
//                         alt={item.name}
//                         width={44}
//                         height={44}
//                         className="rounded-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-dark font-semibold">
//                         {item.initials}
//                       </div>
//                     )}

//                     <div>
//                       <h4
//                         className="text-sm font-semibold"
//                         style={{ color: "var(--section-text)" }}
//                       >
//                         {item.name}
//                       </h4>

//                       <p
//                         className="text-xs"
//                         style={{ color: "var(--section-muted)" }}
//                       >
//                         {item.role}
//                       </p>
//                     </div>
//                   </div>

//                   {/* STARS */}
//                   <div className="mb-3 text-secondary">★★★★★</div>

//                   {/* TEXT */}
//                   <p
//                     className="text-sm leading-6"
//                     style={{ color: "var(--section-muted)" }}
//                   >
//                     “{item.text}”
//                   </p>
//                 </div>

//                 {/* IMAGES (BOTTOM FIXED AREA) */}
//                 <div>
//                   {item.images?.length > 0 && (
//                     <div className="mt-4 flex gap-2">
//                       {item.images.map((img, i) => (
//                         <div
//                           key={i}
//                           className="h-14 w-20 overflow-hidden rounded-md"
//                         >
//                           <Image
//                             src={img}
//                             alt="testimonial image"
//                             width={80}
//                             height={80}
//                             className="h-full w-full object-cover"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         {/* CONTROLS */}
//         <AnimatedSection delay={0.4}>
//           <div className="mt-10 flex items-center justify-between">

//             {/* DOTS */}
//             <div className="flex gap-2">
//               {Array.from({
//                 length: Math.ceil(testimonials.length / visibleCount),
//               }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i * visibleCount)}
//                   className={`h-2.5 rounded-full transition-all ${
//                     i === Math.floor(current / visibleCount)
//                       ? "w-6 bg-secondary"
//                       : "w-2.5 bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* ARROWS */}
//             <div className="flex gap-3">
//               <button
//                 onClick={prev}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-dark transition hover:scale-105"
//               >
//                 <ChevronLeft size={18} />
//               </button>

//               <button
//                 onClick={next}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-dark transition hover:scale-105"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </div>
//         </AnimatedSection>

//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import AnimatedSection from "../Animations";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Oluwaya Michael",
    role: "Industrial Tank Owner",
    text:
      "We've sourced tank fabrication materials from Abdej for over a year now. Their delivery times have been consistent, and the material quality has never disappointed us.",
    avatar: "/MichaelTestimonial.svg",
    images: [],
  },
  {
    name: "Adunni Ewatomi",
    role: "Generator Owner",
    text:
      "I wasn't sure which products would work best for my generator setup, but their team explained everything clearly. It saved me both time and money.",
    avatar: "/EwatomiTestimonial.svg",
    images: [
      "/galleryTestimonial1.svg",
      "/galleryTestimonial2.svg",
      "/galleryTestimonial3.svg",
    ],
  },
  {
    name: "Segun Adeyemi",
    role: "Mechanical Contractor",
    text:
      "What impressed me most was the professionalism. My order arrived exactly when promised and every item matched the specifications.",
    initials: "SA",
    images: [],
  },
  {
    name: "Chioma Nwosu",
    role: "Facility Manager",
    text:
      "Abdej has become our preferred supplier. Their customer support responds quickly and the pricing remains competitive.",
    initials: "CN",
    images: [],
  },
  {
    name: "Ibrahim Musa",
    role: "Site Supervisor",
    text:
      "We've completed multiple projects using materials purchased here. The consistency in quality gives us confidence every time.",
    initials: "IM",
    images: [],
  },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = useRef(false);

  // -----------------------------
  // RESPONSIVE COUNT
  // -----------------------------
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // -----------------------------
  // AUTO PLAY
  // -----------------------------
  const startAutoPlay = () => {
    stopAutoPlay();

    intervalRef.current = setInterval(() => {
      if (!userInteractedRef.current) {
        setCurrent(
          (prev) => (prev + visibleCount) % testimonials.length
        );
      }
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [visibleCount]);

  // -----------------------------
  // NAVIGATION
  // -----------------------------
  const next = () => {
    userInteractedRef.current = true;

    setCurrent((prev) => (prev + visibleCount) % testimonials.length);

    setTimeout(() => {
      userInteractedRef.current = false;
    }, 8000);
  };

  const prev = () => {
    userInteractedRef.current = true;

    setCurrent((prev) =>
      prev - visibleCount < 0
        ? testimonials.length - visibleCount
        : prev - visibleCount
    );

    setTimeout(() => {
      userInteractedRef.current = false;
    }, 8000);
  };

  // -----------------------------
  // SLICE VISIBLE ITEMS
  // -----------------------------
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      className="testimonials-section py-20"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <AnimatedSection delay={0.1}>
          <div className="text-center flex flex-col items-center justify-center">
            <div style={{ color: "var(--section-text)" }}>
              <SectionHeader
                title="Testimonials"
                subtitle="See what our customers have to say about their experience."
              />
            </div>
          </div>
        </AnimatedSection>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {visibleTestimonials.map((item, index) => (
            <AnimatedSection key={index} delay={0.12 + index * 0.08}>
              <div
                className="flex h-full flex-col justify-between rounded-xl p-6 shadow-sm transition hover:shadow-md bg-white/40 dark:bg-black/20"
              >
                {/* TOP */}
                <div>
                  {/* USER */}
                  <div className="mb-4 flex items-center gap-3">
                    {item.avatar ? (
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-dark font-semibold">
                        {item.initials}
                      </div>
                    )}

                    <div>
                      <h4
                        className="text-sm font-semibold"
                        style={{ color: "var(--section-text)" }}
                      >
                        {item.name}
                      </h4>

                      <p
                        className="text-xs"
                        style={{ color: "var(--section-muted)" }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* STARS */}
                  <div className="mb-3 text-secondary">★★★★★</div>

                  {/* TEXT */}
                  <p
                    className="text-sm leading-6"
                    style={{ color: "var(--section-muted)" }}
                  >
                    “{item.text}”
                  </p>
                </div>

                {/* IMAGES */}
                <div>
                  {item.images?.length > 0 && (
                    <div className="mt-4 flex gap-2">
                      {item.images.map((img, i) => (
                        <div
                          key={i}
                          className="h-14 w-20 overflow-hidden rounded-md"
                        >
                          <Image
                            src={img}
                            alt="testimonial image"
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CONTROLS */}
        <AnimatedSection delay={0.4}>
          <div className="mt-10 flex items-center justify-between">

            {/* DOTS */}
            <div className="flex gap-2">
              {Array.from({
                length: Math.ceil(testimonials.length / visibleCount),
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    userInteractedRef.current = true;
                    setCurrent(i * visibleCount);
                    setTimeout(() => {
                      userInteractedRef.current = false;
                    }, 8000);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    i === Math.floor(current / visibleCount)
                      ? "w-6 bg-secondary"
                      : "w-2.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* ARROWS */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-dark transition hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-dark transition hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}