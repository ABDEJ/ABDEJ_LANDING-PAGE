// 'use client';

// import AnimatedSection from '../Animations';

// const projects = [
//   { title: 'Generator Installation', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500' },
//   { title: 'System Overhaul', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500' },
//   { title: 'Custom Build', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500' },
// ];

// export default function Projects() {
//   return (
//     <section className="bg-dark py-20">
//       <div className="container">
//         <AnimatedSection>
//           <h2 className="text-4xl font-bold mb-10">Our Projects</h2>
//         </AnimatedSection>

//         <div className="grid md:grid-cols-3 gap-4">
//           {projects.map((p, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <div className="relative rounded-xl overflow-hidden">
//                 <img src={p.img} className="h-52 w-full object-cover" />
//                 <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black">
//                   {p.title}
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

const projects = [
  {
    title: "Custom Tank Fabrication",
    desc: "Built durable custom tanks with strict engineering standards for industrial strength.",
    image: "/tower.svg",
  },
  {
    title: "Generator Overhaul Facility",
    desc: "Advanced maintenance and inspection solutions for industrial reliability.",
    image: "/genOverhaul.svg",
  },
  {
    title: "Engine Component Repair & Replacement",
    desc: "Engineered replacement options and precision repair service.",
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
    image: "TechnicalTraining.svg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-8 text-3xl font-bold text-white">Our Projects</h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D20]"
            >
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
                <h4 className="text-xl font-semibold leading-tight text-white">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm leading-5 text-white/75">
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}