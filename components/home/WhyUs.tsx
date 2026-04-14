// 'use client';

import { PrimaryButton } from "../Button";
import Container from "../container";
import SectionHeader from "../SectionHeader";

// import AnimatedSection from '../Animations';

// const whyUs = [
//   { title: 'Expertise', desc: 'Years of engineering excellence.' },
//   { title: 'Reliability', desc: 'Always on-time delivery.' },
//   { title: 'Affordable', desc: 'Cost-effective solutions.' },
// ];

// export default function WhyUs() {
//   return (
//     <section className="bg-dark py-20">
//       <div className="container">
//         <AnimatedSection>
//           <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
//         </AnimatedSection>

//         <div className="grid md:grid-cols-2 gap-6">
//           {whyUs.map((w, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <div className="bg-dark-card p-6 rounded-xl border-t-4 border-secondary">
//                 <h3 className="font-bold mb-2">{w.title}</h3>
//                 <p className="text-muted text-sm">{w.desc}</p>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




const features = [
  {
    title: "Proven Technical Expertise",
    desc: "We bring hands-on experience and solid technical knowledge to every project, ensuring efficient and reliable engineering solutions.",
    icon: "🟡",
    wide: false,
  },
  {
    title: "Reliable & Timely Delivery",
    desc: "Our team is committed to completing every project on schedule while maintaining consistent performance and attention to detail.",
    icon: "⚙️",
    wide: false,
  },
  {
    title: "Cost-Effective Quality Solutions",
    desc: "We deliver high-quality results at competitive prices, helping you get durable and efficient solutions without unnecessary costs.",
    icon: "🟡",
    wide: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1A1D20] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* 🔥 Yellow divider line */}
        <div className="flex justify-center mb-10">
          <div className="h-[2px] w-[711px] bg-secondary" />
        </div>

        {/* Centered Header */}
        <div className="flex justify-center text-center">
        <SectionHeader
          title="Why Choose Us ?"
          subtitle="We combine technical expertise, reliable service delivery, and cost-effective solutions to meet your power and engineering needs."
        />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className={`rounded-[24px] border border-white/10 bg-[#171717] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ${
                item.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-5 flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <span className="text-xl">{item.icon}</span>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                {item.desc}
              </p>

              <button className="bg-secondary mt-6 w-[139px] h-[48px] rounded-[9999]">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}