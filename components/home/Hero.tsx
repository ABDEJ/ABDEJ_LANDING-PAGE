// "use client";

// import Image from "next/image";
// import { useEffect, useMemo, useState } from "react";
// import AnimatedSection from "../Animations";
// import Container from "../container";
// import TypewriterText from "../TypeWriter";
// import { motion } from "framer-motion";
// import { ArrowRight, Link } from "lucide-react";
// import { useRouter } from "next/navigation";



// const images = [
//   "/heroImage1.jpg",
//   "/heroImage2.jpg",
//   "/heroImage3.jpg",
//   "/heroImage4.jpg",
//   "/heroImage5.jpg",
//   "/heroImage6.jpg",
//   "/heroImage7.jpg",
//   "/heroImage8.jpg",
//   "/heroImage9.jpg",
  
  

// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(1);
//   const [isResetting, setIsResetting] = useState(false);
//   const router = useRouter();

//   const extendedImages = useMemo(
//     () => [images[images.length - 1], ...images, images[0]],
//     []
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => prev + 1);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (index === extendedImages.length - 1) {
//       const timeout = setTimeout(() => {
//         setIsResetting(true);
//         setIndex(1);

//         requestAnimationFrame(() => {
//           setIsResetting(false);
//         });
//       }, 650);

//       return () => clearTimeout(timeout);
//     }
//   }, [index, extendedImages.length]);

//   return (
//     <section className="hero-section bg-[var(--section-bg)] pt-20 pb-12 text-[var(--section-text)]">
//       <Container>
//         <div className="flex flex-col items-center text-center">
//           <AnimatedSection>
//             <p className="text-xs font-bold uppercase tracking-[3px]">
//               YOUR TRUSTED PARTNER FOR POWER SOLUTIONS
//             </p>
//           </AnimatedSection>

//           <AnimatedSection delay={0.5}>
//             <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
//               <TypewriterText
//                 text="Engineering Power. Delivering Reliability."
//                 speed={35}
//                 pauseAfterComplete={5000}
//                 className="block"
//               />
//             </h1>
//           </AnimatedSection>

//           <AnimatedSection delay={0.2}>
//             <p className="mt-6 max-w-xl font-medium">
//               We provide expert power system solutions, generator services,
//               custom fabrication, and technical consultancy for industrial and
//               commercial operations.
//             </p>
//           </AnimatedSection>

//           <AnimatedSection delay={0.3}>
//             <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
//        <motion.button
//   onClick={() => {
//     const el = document.getElementById("request-quote");
//    if (!el) return;

//   const yOffset = -90; // adjust based on navbar height
//   const y =
//     el.getBoundingClientRect().top + window.pageYOffset + yOffset;

//   window.scrollTo({
//     top: y,
//     behavior: "smooth",
//   });
// }}
//   whileHover={{ y: -4, scale: 1.03 }}
//   whileTap={{ scale: 0.97 }}
//   transition={{ type: "spring", stiffness: 300, damping: 18 }}
//   className="group flex h-[60px] w-full items-center justify-center rounded-[30px] bg-[var(--primary-btn-bg)] px-6 text-center font-bold text-[var(--primary-btn-text)] sm:w-[233px]"
// >
//   Request a Quote

//   <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
// </motion.button>

//  <motion.button
//   onClick={() => router.push("/projects")}
//   whileHover={{ y: -3, scale: 1.02 }}
//   whileTap={{ scale: 0.98 }}
//   transition={{ type: "spring", stiffness: 280, damping: 20 }}
//   className="flex h-[60px] w-full items-center justify-center rounded-[30px] bg-[var(--secondary-btn-bg)] px-6 font-bold text-[var(--secondary-btn-text)] sm:w-[181px]"
// >
//   Browse Projects
// </motion.button>
//               <a
//                 href="https://wa.me/2348037815523"
//                 className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500 transition hover:bg-green-600 sm:mx-0"
//               >
//                 <Image
//                   src="/whatsapp logo.svg"
//                   alt="whatsapp"
//                   width={100}
//                   height={80}
//                   placeholder="empty"
//                 />
//               </a>
//             </div>
//           </AnimatedSection>
//         </div>

//         <AnimatedSection delay={0.4}>
//           <div className="mt-12 flex justify-center">
//             <div className="relative h-[420px] w-full overflow-hidden">
//               <div className="pointer-events-none absolute inset-0 z-20" />

//               <motion.div
//                 className="flex h-full items-center"
//                 animate={{
//                   x: `calc(50% - ${index * 75}% - 37.5%)`,
//                 }}
//                 transition={
//                   isResetting
//                     ? { duration: 0 }
//                     : {
//                         type: "spring",
//                         stiffness: 90,
//                         damping: 18,
//                       }
//                 }
//               >
//                 {/* {extendedImages.map((img, i) => {
//                   const distance = Math.abs(i - index);

//                   return (
//                     <motion.div
//                       key={`${img}-${i}`}
//                      className="
// relative
// mx-2
// aspect-[16/9]
// min-w-[75%]
// overflow-hidden
// rounded-3xl
// "

//                       animate={{
//                         scale: distance === 0 ? 1 : 0.85,
//                         opacity: distance > 2 ? 0.3 : 1,
//                       }}
//                       transition={{ duration: isResetting ? 0 : 0.6 }}
//                     >
//                       <Image
//                         src={img}
//                         alt="carousel"
//                         fill
//                         placeholder="empty"
//                         sizes="75vw"
//                         priority={i === 1}
//                         className="object-cover"
//                       />

//                       <div className="absolute inset-0 bg-black/10" />
//                     </motion.div>
//                   );
//                 })} */}

//                 {extendedImages.map((img, i) => {
//                   const distance = Math.abs(i - index);

//                   return (
//                     <motion.div
//                       key={`${img}-${i}`}
//                       className="
//                         relative
//                         mx-2
//                         aspect-[16/9]
//                         min-w-[75%]
//                         overflow-hidden
//                         rounded-[32px] md:rounded-[48px] /* Updated for a larger, modern radius */
//                       "
//                       animate={{
//                         scale: distance === 0 ? 1 : 0.85,
//                         opacity: distance > 2 ? 0.3 : 1,
//                       }}
//                       transition={{ duration: isResetting ? 0 : 0.6 }}
//                     >
//                       <Image
//                         src={img}
//                         alt="carousel"
//                         fill
//                         placeholder="empty"
//                         sizes="75vw"
//                         priority={i === 1}
//                         // Added rounding directly to image to prevent Safari corner-bleed
//                         className="object-cover rounded-[32px] md:rounded-[48px]" 
//                       />

//                       {/* Added rounding to the overlay as well */}
//                       <div className="absolute inset-0 bg-black/10 rounded-[32px] md:rounded-[48px]" />
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </div>
//           </div>
//         </AnimatedSection>
//       </Container>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import AnimatedSection from "../Animations";
import Container from "../container";
import TypewriterText from "../TypeWriter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  "/heroImage1.jpg",
  "/heroImage2.jpg",
  "/heroImage3.jpg",
  "/heroImage4.jpg",
  "/heroImage5.jpg",
  "/heroImage6.jpg",
  "/heroImage7.jpg",
  "/heroImage8.jpg",
  "/heroImage9.jpg",
];

const AUTOPLAY_MS = 3000;

// Memoized slide component to optimize performance across all screen sizes
const CarouselSlide = memo(function CarouselSlide({ img, isActive, isNear, isFirst }: { img: string; isActive: boolean; isNear: boolean; isFirst: boolean }) {
  return (
    // Outer div maintains strict 80% width for perfect math (10% left gap, 10% right gap)
    <div className="relative h-full w-[80%] shrink-0 px-2 sm:px-4">
      {/* Inner motion div handles the scaling and blurring without disrupting the layout */}
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-[24px] sm:rounded-[48px]"
        animate={{
          scale: isActive ? 1 : 0.85, // Shrinks the adjacent slides slightly
          opacity: isNear ? 1 : 0.3,
          filter: isActive ? "blur(0px)" : "blur(6px)", // Blurs the left and right peeking slides
        }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={img}
          alt="carousel"
          fill
          placeholder="empty"
          sizes="(max-width: 640px) 80vw, 80vw"
          priority={isFirst}
          loading={isFirst ? undefined : "lazy"}
          className="object-cover"
        />
        {/* Dark overlay to ensure text contrast, dynamic opacity based on focus */}
        <motion.div 
          className="absolute inset-0 bg-black" 
          animate={{ opacity: isActive ? 0.1 : 0.4 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
});

export default function HeroCarousel() {
  const [index, setIndex] = useState(1);
  const [isResetting, setIsResetting] = useState(false);
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const hiddenRef = useRef(false);
  const hoveredRef = useRef(false);
  const inViewRef = useRef(true);

  // Extend images array for infinite loop (clone last to start, first to end)
  const extendedImages = useMemo(
    () => [images[images.length - 1], ...images, images[0]],
    []
  );
  const lastIndex = extendedImages.length - 1;

  // Track page visibility
  useEffect(() => {
    const onVisibility = (): void => {
      hiddenRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Track if component is in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      if (hiddenRef.current || hoveredRef.current || !inViewRef.current) return;
      setIndex((prev) => prev + 1);
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="hero-section bg-[var(--section-bg)] py-8 md:py-16 text-[var(--section-text)]"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[3px]">
              YOUR TRUSTED PARTNER FOR POWER SOLUTIONS
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
              <TypewriterText
                text="Engineering Power. Delivering Reliability."
                speed={70}
                pauseAfterComplete={3500}
                loop
                className="block"
              />
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 max-w-xl font-medium text-sm sm:text-base">
              We provide expert power system solutions, generator services,
              custom fabrication, and technical consultancy for industrial and
              commercial operations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-4 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <motion.button
                onClick={() => {
                  const el = document.getElementById("request-quote");
                  if (!el) return;

                  const yOffset = -90;
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });
                }}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="group flex h-[50px] sm:h-[60px] w-full items-center justify-center rounded-[30px] bg-[var(--primary-btn-bg)] px-6 text-center font-bold text-[var(--primary-btn-text)] sm:w-[233px]"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                onClick={() => router.push("/projects")}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="flex h-[50px] sm:h-[60px] w-full items-center justify-center rounded-[30px] bg-[var(--secondary-btn-bg)] px-6 font-bold text-[var(--secondary-btn-text)] sm:w-[181px]"
              >
                Browse Projects
              </motion.button>

              <a
                href="https://wa.me/2348037815523"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-500 transition hover:bg-green-600 sm:mx-0"
              >
                <Image
                  src="/whatsapp logo.svg"
                  alt="whatsapp"
                  width={80}
                  height={60}
                  placeholder="empty"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Carousel Section */}
        <AnimatedSection delay={0.4}>
          <div className="mt-6 sm:mt-10 flex justify-center w-full">
            <div
              className="relative h-[380px] sm:h-[520px] w-full overflow-hidden"
              onMouseEnter={() => {
                hoveredRef.current = true;
              }}
              onMouseLeave={() => {
                hoveredRef.current = false;
              }}
            >
              <div className="pointer-events-none absolute inset-0 z-20" />

              <motion.div
                // w-full ensures track is 100% of container width so percentages align perfectly
                className="flex h-full items-center w-full will-change-transform"
                // 10% offset perfectly centers the 80% slide and exposes exactly 10% on the left & right
                animate={{ x: `calc(10% - ${index * 80}%)` }} 
                transition={
                  isResetting
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 90, damping: 18 }
                }
                onAnimationComplete={() => {
                  if (index === lastIndex) {
                    setIsResetting(true);
                    setIndex(1);
                    requestAnimationFrame(() => setIsResetting(false));
                  }
                }}
              >
                {extendedImages.map((img, i) => {
                  const distance = Math.abs(i - index);
                  return (
                    <CarouselSlide
                      key={i}
                      img={img}
                      isActive={distance === 0}
                      isNear={distance <= 2}
                      isFirst={i === 1}
                    />
                  );
                })}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
