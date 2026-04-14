'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";
import { MessageCircle } from "lucide-react";
import AnimatedSection from "../Animations";
import Container from "../container";
import TypewriterText from "../TypeWriter";

const images = [
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(1);

  // 🔥 cloned list for seamless loop
  const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  // 🔥 auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 silent reset (infinite loop illusion)
  useEffect(() => {
    if (index === extendedImages.length - 1) {
      setTimeout(() => {
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setIndex(images.length);
      }, 500);
    }
  }, [index, extendedImages.length]);


  return (
    <section className="bg-dark pt-20 pb-12">
      <Container>
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[3px] uppercase font-bold">
              YOUR TRUSTED PARTNER FOR POWER SOLUTIONS
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-4">
              {/* <TypewriterText
                text="Engineering Power. Delivering"
                speed={40}
                className="block"
              />
              <TypewriterText
                text="Reliability"
                speed={10}
                className="block"
              /> */}
  <TypewriterText
    text="Engineering Power. Delivering Reliability."
    speed={35}
    pauseAfterComplete={1500}
    className="block"
  />
</h1>
            
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted mt-6 max-w-xl text-sm">
              We provide expert power system solutions, generator services, custom fabrication,
              and technical consultancy for industrial and commercial operations.
            </p>
          </AnimatedSection>

          {/* BUTTONS */}
          <AnimatedSection delay={0.3}>
            <div className="flex items-center gap-4 mt-6 flex-wrap justify-center">
              <button className="bg-secondary flex items-center justify-center w-[233px] h-[60px] rounded-[30px] text-black font-bold hover:opacity-90 transition">
                Request a Quote
                <Image
                  src="/ArrowRight.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </button>

              <button className="bg-primary flex items-center justify-center w-[181px] h-[60px] rounded-[30px] text-black font-bold hover:opacity-90 transition">
                Browse Projects
              </button>

              <a
                href="https://wa.me/234XXXXXXXXXX"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition ml-2"
              >
                <MessageCircle className="text-white" size={22} />
              </a>
            </div>
          </AnimatedSection>
        </div>

{/* CAROUSEL */}
<AnimatedSection delay={0.4}>
  <div className="mt-12 flex justify-center">
    
    <div className="relative w-full h-[420px] overflow-hidden">

  {/* EDGE FADE OVERLAY (IMPORTANT 🔥) */}
  <div className="pointer-events-none absolute inset-0 z-20 
    bg-gradient-to-r from-dark via-transparent to-dark" />

  <motion.div
    className="flex items-center h-full"
    animate={{
     x: `calc(50% - ${index * 75}% - 37.5%)`,
    }}
    transition={{
      type: "spring",
      stiffness: 90,
      damping: 18,
    }}
  >
    {extendedImages.map((img, i) => {
      const distance = Math.abs(i - index);

      return (
        <motion.div
          key={i}
          className="relative min-w-[75%] md:min-w-[65%] h-[360px] flex-shrink-0 rounded-2xl overflow-hidden mx-2"
          animate={{
            scale: distance === 0 ? 1 : 0.85,
            opacity: distance > 2 ? 0.3 : 1,
            filter:
              distance === 0
                ? "blur(0px)"
                : "blur(0px)",
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={img}
            alt="carousel"
            fill
            className="object-cover"
          />

          {/* SIDE DARK FADE */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
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