'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project: Successfully implemented and commissioned a PLC-based ATS with load-share synchronizing panel for four 500kVA generators',
    work: 
      "Developed and configured industrial power control logic for multi-generator operation, integrating PLC-based automation for seamless switching between grid and generator supply. Implemented load balancing parameters, safety interlocks, and real-time monitoring for stable power distribution under varying load conditions.",
   result: [
      "1. Achieved less than 10s automatic changeover and 85% reduction in plant downtime during grid failures",
      "2. Configured parallel operation at 2MW capacity with ±3% load balance across all units, eliminating overload trips and improving power reliability to 99.5% availability",
      "3. Delivered project 1 week ahead of schedule, 7% under budget, with zero safety incidents and 100% acceptance on full load testing",
    ],
    images: [
      '/projects/p1/p1_1.svg',
      '/projects/p1/p1_2.svg',
      '/projects/p1/p1_3.svg',
    ],
  },
  {
    id: 2,
    title: 'Project: The CAT 3516 Engine Overhaul project completed successfully and within scope',
work:
  "Disassembled and inspected major engine components to identify mechanical and electrical faults. Executed precision reconditioning of internal parts including alternator windings, fuel system components, and cooling systems to restore operational integrity of heavy-duty power equipment.",
    result:[
      "1. Downtime reduced by 55% vs projected timeline. Engine was returned to service in 6 days instead of 14 days, minimizing operational disruption.",
      "2. Saved operational cost by 45% compared to procuring a new 3516 engine.",
      "3. Restored engine Efficiency to 100%, Fuel consumption and exhaust emissions normalized.",
      "4. Expected engine life extended by 15,000+ running hours.",
      "5. Overall Achievement: Project delivered on budget, zero safety incidents, and the unit is now operating at peak reliability. This extends asset life and defers CAPEX on a new set."
    ],
    images: [
      '/projects/p2/p2_1.svg',
      '/projects/p2/p2_2.svg',
      '/projects/p2/p2_3.jpg',
    ],
  },
  {
    id: 3,
    title: 'Project: Reconditioned a fire-damaged 2750kVA; 11kv (medium voltage) main alternator.',
    work:
      "Performed electrical fault diagnostics on high-voltage alternator systems, including insulation testing, AVR system evaluation, and thermal performance analysis. Recalibrated voltage regulation systems to ensure stable output under industrial load conditions.",
    result:[
      "1. Post-rewind full load testing at 100% capacity confirmed insulation resistance greater than 1000MΩ and voltage regulation within ±1%.", 
      "2. Restored unit to full rated output in 12 days vs 8-10 weeks lead time for new alternator, saving 65% in CAPEX.", 
      "3. Extended alternator lifespan by 15+ years and eliminated vibration issues."
    ],
    images: [
      '/projects/p3/p3_1.svg',
      '/projects/p3/p3_2.svg',
      '/projects/p3/p3_3.svg',
    ],
  },
  {
    id: 4,
    title: 'Project: Custom fabricated high-pressure fuel/coolant hoses and 1000L steel day tanks for 4x500kVA generator plant to replace leaking OEM components and meet site-specific layout constraints',
    work:
       "Engineered custom industrial fabrication solutions based on site-specific requirements, including material selection, structural welding, pressure validation, and integration of fuel and coolant delivery systems for generator infrastructure.",
    result:[
      "1. Eliminated chronic fuel leaks and spillage, improving site safety and environmental compliance to zero incidents.", 
      "2. Reduced refueling downtime by 70% through increased tank capacity and faster fill connections.", 
      "3. Completed fabrication and installation in 9 days, achieving 100% leak-free operation on first pressure test and improving overall genset reliability."
    ],
    images: [
      '/projects/p4/p4_1.svg',
      '/projects/p4/p4_2.svg',
      '/projects/p4/p4_3.svg',
    ],
  },
  {
    id: 5,
    title: 'Project: Provided technical consultancy and hands-on training for operations/maintenance teams on 4x500kVA synchronized genset plant, ATS controls, and load-sharing logic',
    work:
      "Delivered structured technical training on industrial power system operations and maintenance for 18 field technicians, focusing on generator maintenance procedures, fault diagnosis, ATS operation, load-sharing systems, and operational safety standards for synchronized power plants.",
    result:[
      "1. Reduced operator error incidents by 90% and cut average fault diagnosis time from 2 hours to 25 minutes.",
      "2. Improved plant availability from 92% to 99.2% through correct load-sharing practices and scheduled PM adherence.",
      "3. Empowered in-house team to handle 85% of routine faults without OEM support, saving ₦12M/year in service calls.",
      "4. Training feedback scored 4.8/5 and all 18 technicians passed post-training competency assessment on first attempt."
    ],
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
<h2 className="w-full max-w-5xl mx-auto text-4xl md:text-5xl font-bold text-[var(--accent)] mb-10 leading-tight break-words text-left">
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
       <p className="mt-6 max-w-3xl text-left text-xl leading-relaxed text-[var(--section-muted)]">
  <span className="text-[var(--section-text)] font-bold">The Work:</span>{" "}
  {project.work}
</p>

        {/* <p className="text-xl leading-loose text-[var(--section-muted)]">
          <span className="text-[var(--section-text)] font-bold">
            Key Achievements:
          </span>{' '}
          {project.result}
        </p> */}
<div className="mt-6 max-w-3xl text-left text-xl leading-relaxed text-[var(--section-muted)]">
  <span className="text-[var(--section-text)] font-bold">
    Key Achievements:
  </span>

  <div className="mt-2 space-y-2">
    {Array.isArray(project.result) &&
      project.result.map((item: string, i: number) => (
        <p key={i} className="block">
          {item}
        </p>
      ))}
  </div>
</div>
      </div>
    </section>
  );
}

export default function PortfolioSection() {
  return (
    <div className="portfolio-section bg-[var(--section-bg)] text-[var(--section-text)] transition-colors duration-500">
      {/* HEADER */}
{/* HEADER */}
<div
  className="flex justify-center pt-16 pb-8 text-center sm:pt-20"
  style={{ color: "var(--section-text)" }}
>
 
  <SectionHeader
    title="Our Portfolio"
    subtitle="Check Out Some Of Our Projects"
  />
</div>



      {/* SCENES */}
      {projects.map((project) => (
        <Scene key={project.id} project={project} />
      ))}
    </div>
  );
}