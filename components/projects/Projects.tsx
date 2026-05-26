'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const projects = [
  {
    id: 1,
    title: 'Project: 500kVA Industrial Grid Integration',
    work:
      'Engineered and optimized a synchronized multi-generator power system for a manufacturing facility, integrating automated changeover switches to eliminate operational downtime.',
    result:
      'Achieved a 22% reduction in fuel consumption and seamless power transition during grid failures.',
    images: [
      '/projects/p1/p1_1.svg',
      '/projects/p1/p1_2.svg',
      '/projects/p1/p1_3.svg',
    ],
  },
  {
    id: 2,
    title: 'Project: High-Capacity Alternator Core Restoration',
    work:
      "Stripped, re-insulated, and precision-rewound the heavy-gauge copper coils of a shorted main armature for a major commercial facility's backup generator.",
    result:
      'Restored optimal magnetic field generation and thermal resistance, bringing the alternator back to 100% power output capacity.',
    images: [
      '/projects/p2/p2_1.svg',
      '/projects/p2/p2_2.svg',
      '/projects/p2/p2_3.svg',
    ],
  },
  {
    id: 3,
    title: 'Project: Emergency AVR & Alternator Restoration',
    work:
      "Diagnosed a sudden voltage instability in a corporate office's backup power system. Sourced an OEM AVR and rebuilt alternator components.",
    result:
      'Restored stable power delivery, preventing sensitive server damage.',
    images: [
      '/projects/p3/p3_1.svg',
      '/projects/p3/p3_2.svg',
      '/projects/p3/p3_3.svg',
    ],
  },
  {
    id: 4,
    title: 'Project: Fabrication Of Industrial Iron Tank',
    work:
      'Engineered, welded, and pressure-tested a custom industrial storage tank with corrosion resistance.',
    result:
      'Delivered a fully compliant high-capacity industrial storage solution.',
    images: [
      '/projects/p4/p4_1.svg',
      '/projects/p4/p4_2.svg',
      '/projects/p4/p4_3.svg',
    ],
  },
  {
    id: 5,
    title: 'Project: Corporate Engineering Team Upskilling',
    work:
      'Delivered a 2-week engineering training on predictive maintenance and diagnostics.',
    result:
      'Reduced external technician dependency by 40%.',
    images: [
      '/projects/p5/p5_1.svg',
      '/projects/p5/p5_2.svg',
      '/projects/p5/p5_3.svg',
    ],
  },
];

function Scene({ project }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((p) => (p + 1) % project.images.length);
  const prev = () =>
    setIndex((p) => (p - 1 + project.images.length) % project.images.length);

  // AUTO SLIDE (cinematic feel)
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  // GSAP entrance
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
   <section
  ref={ref}
  className="
    portfolio-section 
    relative 
    min-h-screen 
    flex 
    flex-col 
    items-center 
    justify-center 
    text-center 
    px-4 sm:px-6 
    pt-28 sm:pt-24 
    pb-24
  "
>
      {/* SECTION NUMBER */}
     <div className="
  absolute 
  top-5 sm:top-10
  left-3 sm:left-10
  text-[80px] sm:text-[120px] 
  font-bold 
  text-[var(--section-text)]
  select-none 
  z-0
  pointer-events-none
">
  {String(project.id).padStart(2, '0')}
</div>
      

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-10 max-w-4xl leading-tight">
        {project.title}
      </h2>

      {/* MAIN CINEMATIC SLIDESHOW */}
      <div className="relative w-full max-w-[1000px] h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={project.images[index]}
            src={project.images[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* CONTROLS */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white"
        >
          ›
        </button>
      </div>

      {/* THUMBNAILS (CLICKABLE SLIDES) */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {project.images.map((img: string, i: number) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-[320px] h-[200px] rounded-xl overflow-hidden cursor-pointer transition-all border ${
              i === index
                ? 'scale-105 border-[var(--accent)] opacity-100'
                : 'opacity-50 border-transparent'
            }`}
          >
            <img
              src={img}
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* TEXT */}
      <div className="max-w-3xl space-y-6">
        <p className="text-xl leading-loose text-[var(--section-muted)]">
          <span className="text-[var(--section-text)] font-bold">
            The Work:
          </span>{' '}
          {project.work}
        </p>

        <p className="text-xl leading-loose text-[var(--section-muted)]">
          <span className="text-[var(--section-text)] font-bold">
            Result:
          </span>{' '}
          {project.result}
        </p>
      </div>
    </section>
  );
}

export default function PortfolioSection() {
  return (
    <div className="portfolio-section bg-[var(--section-bg)] text-[var(--section-text)] transition-colors duration-500">
      {/* HEADER */}
      <div className="text-center py-24">
        <h1 className="text-6xl font-bold">Our Portfolio</h1>
        <p className="text-[var(--section-muted)] font-bold text-xl mt-4">
          Check Out Some Of Our Projects
        </p>
      </div>

      {/* SCENES */}
      {projects.map((project) => (
        <Scene key={project.id} project={project} />
      ))}
    </div>
  );
}