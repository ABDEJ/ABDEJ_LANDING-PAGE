'use client';

import Image from "next/image";
import AnimatedSection from "../Animations";

const projects = [
  {
    title: "Custom Tank Fabrication",
    desc: "Built durable custom tanks with strict engineering standards for industrial strength.",
    image: "/tower.svg",
  },
  {
    title: "Generator and Engine Overhaul ",
    desc: "Full rebuild and restoration service for diesel generators and engines. Restore power, cut fuel use, eliminate downtime.",
    image: "/genOverhaul.svg",
  },
  {
    title: "Generator and Engine components repair and replacement",
    desc: "Fast repair + OEM replacement for all generator and engine parts. Tested components, expert fitting, restored reliability",
    image: "/engineRepairs.svg",
  },
  {
    title: "Pipeline & Hose Fabrication",
    desc: "Custom fabrication and installation of high-quality hoses and industrial flow materials.",
    image: "/PipelineFabrication.svg",
  },
  {
    title: "Power System Optimization",
    desc: "Generator and backup power optimization across different deployment needs.",
    image: "/PowerOptimization.svg",
  },
  {
    title: "Technical Training Consultancy",
    desc: "Hands-on workforce technical training and engineering support.",
    image: "/TechnicalTraining.svg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="projects-section bg-[var(--section-bg)] text-[var(--section-text)] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1}>
          <h3 className="mb-8 text-3xl font-bold text-[var(--header-text)]">Our Projects</h3>
        </AnimatedSection>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.1}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D20]">
                <div className="relative h-[280px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h4 className="text-xl font-semibold leading-tight text-white transition duration-500 group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm font-bold leading-5 text-secondary/75">
                    {project.desc}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}