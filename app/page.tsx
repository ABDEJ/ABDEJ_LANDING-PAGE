"use client";

import AboutUs from "@/components/home/AboutUs";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import PitchDeckCTA from "@/components/home/PitchDeck";
import Projects from "@/components/home/Projects";
import RequestQuote from "@/components/home/RequestQuote";
import Services from "@/components/home/Services";
import StatsStrip from "@/components/home/StatsStrip";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";






export default function LandingPage() {
  return (
    <main className="bg-dark text-white">
      <Navbar />
      <Hero />
       <Services />
       {/* <Partners /> */}
      <Projects />
       <WhyUs />
       <AboutUs />
         <Testimonials />
      <RequestQuote/>
       <StatsStrip />
      <FAQ />
      <PitchDeckCTA/>
      <Footer />   
    </main> 
  );
}

// 'use client'

// import { motion } from "framer-motion";
// import { ReactNode, useState } from "react";

// interface AnimatedSectionProps {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
// }

// function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// const Y = "#F5C200";
// const DARK = "#111111";
// const DARK2 = "#1a1a1a";
// const DARK3 = "#0d0d0d";

// const s = {
//   section: { padding: "80px 6%" },
//   label: { color: Y, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 },
//   h2: { fontFamily: "'Barlow Condensed',sans-serif", fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 12 },
//   sub: { color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 48 },
//   yellowBtn: { display: "inline-block", background: Y, color: "#111", padding: "12px 26px", borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none", cursor: "pointer" },
//   outlineBtn: { display: "inline-block", border: "1.5px solid #444", color: "#fff", padding: "12px 26px", borderRadius: 4, fontWeight: 600, fontSize: 14, textDecoration: "none", cursor: "pointer" },
// };

// export default function LandingPage() {
//   const [activeTab, setActiveTab] = useState("All Projects");
//  const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const navLinks = ["Get Started", "Projects", "About Us", "Contact"];
//   const tabs = ["All Projects", "Custom Financing", "Heavy Duty", "More By", "Other Equipment"];
//   const partners = ["VOLVO", "DAEWOO", "HITACHI", "JCB", "SAMSUNG"];

//   const services = [
//     { title: "Generator Overhauling, Maintenance & Repairs", desc: "We provide expert generator overhauling, scheduled maintenance, and comprehensive repair services to maximize uptime and guarantee performance." },
//     { title: "Power System Design & Optimization", desc: "We deliver custom power system designs and optimization strategies for industrial and commercial applications to maximize energy efficiency." },
//     { title: "Components Repairs & Sourcing", desc: "Expert component-level diagnostics, repairs, and global sourcing of genuine OEM parts for all major generator and power equipment brands." },
//     { title: "Custom Fabrication", desc: "Bespoke fabrication services engineered to your specific industrial power requirements, custom frames, enclosures, control panels and more." },
//   ];

//   const projects = [
//     { title: "Industrial Generator Installation", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop" },
//     { title: "Power System Overhaul", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop" },
//     { title: "Custom Generator Build", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&h=300&fit=crop" },
//   ];

//   const whyUs = [
//     { title: "Proven Technical Expertise", desc: "We bring years of specialized engineering knowledge and on-site experience to deliver outstanding power solutions across all industries." },
//     { title: "Reliable & Timely Delivery", desc: "Count on us to meet every project deadline without compromising quality, safety, or precision in every engagement we undertake." },
//     { title: "Cost-Effective Quality Solutions", desc: "We offer high-quality results at competitive prices, giving you the best value without compromising on performance, durability, or reliability." },
//   ];

//   const testimonials = [
//     { name: "Emmanuel Michael", role: "Plant Director, Kano", text: "Remarkable service from start to finish. The team delivered our generator overhaul exactly on time and the workmanship is outstanding. Highly recommended." },
//     { name: "Amara Daniels", role: "Operations Manager, Lagos", text: "Professional team with deep technical knowledge. They sourced the parts quickly and restored our full power system more efficiently than any vendor we'd used before." },
//   ];

//   const faqs = [
//     { q: "What services does Abdej Nigeria Limited offer?", a: "We offer generator overhauling, maintenance and repairs, power system design, component sourcing, and custom fabrication for industrial and commercial clients." },
//     { q: "Do you handle all types of generators?", a: "Yes. We work with all major brands including Perkins, Cummins, Volvo, Caterpillar, FG Wilson, and many more regardless of size or configuration." },
//     { q: "Can you fabricate custom equipment based on our needs?", a: "Absolutely. Our fabrication team designs and builds bespoke enclosures, control panels, frames, and power distribution systems to exact specifications." },
//     { q: "How long does a typical project take?", a: "Project timelines vary by scope. A standard maintenance job can be completed in 1–3 days, while larger system designs or installations may take 2–6 weeks." },
//     { q: "Do you offer on-site services?", a: "Yes. Our technicians travel to your facility across Nigeria to perform diagnostics, maintenance, repairs, and installations on-site." },
//     { q: "How can I request a quote or get started?", a: "Simply fill out our contact form or call us directly. Our team will respond within 24 hours with a tailored proposal for your project." },
//   ];

//   const footerCols = [
//     { title: "Company", links: ["About Us", "Projects", "Services", "Blog", "Careers"] },
//     { title: "Support", links: ["Contact Us", "FAQs", "Get a Quote", "Documentation", "Service Areas"] },
//     { title: "Account", links: ["Login", "Register", "Privacy Policy", "Terms of Use", "Sitemap"] },
//   ];

//   const CheckIcon = () => (
//     <div style={{ width: 18, height: 18, borderRadius: "50%", background: Y, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
//       <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg>
//     </div>
//   );

//   return (
//     <div style={{ fontFamily: "'Barlow',sans-serif", background: DARK, color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Barlow+Condensed:wght@600;700;800;900&display=swap');
//         *{box-sizing:border-box;margin:0;padding:0;}
//         a{transition:opacity .2s;}
//         a:hover{opacity:.75;}
//         button:hover{opacity:.85;}
//       `}</style>

//       {/* ── NAVBAR ─────────────────────────────────────────────── */}
//       <nav style={{ background: DARK, borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 200, padding: "0 6%" }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
//           <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
//             <div style={{ background: Y, width: 34, height: 34, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#111", fontSize: 16, fontFamily: "'Barlow Condensed',sans-serif" }}>A</div>
//             <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: 1, color: "#fff", fontFamily: "'Barlow Condensed',sans-serif" }}>ABDEJ</span>
//           </a>
//           <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
//             {navLinks.map((l) => (
//               <a key={l} href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{l}</a>
//             ))}
//           </div>
//           <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
//             <svg width="17" height="17" fill="none" stroke="#aaa" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
//             <a href="#" style={{ background: Y, color: "#111", padding: "9px 20px", borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Contact Us</a>
//           </div>
//         </div>
//       </nav>

//       {/* ── HERO ────────────────────────────────────────────────── */}
//       <section style={{ background: DARK, padding: "64px 6% 0", overflow: "hidden" }}>
//         <AnimatedSection>
//           <p style={s.label}>YOUR TRUSTED PARTNER FOR POWER SOLUTIONS</p>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
//           <div>
//             <AnimatedSection delay={0.1}>
//               <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 72, fontWeight: 900, lineHeight: 1.02, marginBottom: 22, letterSpacing: -1 }}>
//                 Engineering Power.<br />Delivering<br />Reliability.
//               </h1>
//             </AnimatedSection>
//             <AnimatedSection delay={0.2}>
//               <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.75, marginBottom: 34, maxWidth: 430 }}>
//                 We provide expert power system solutions, generator services, custom fabrication, and technical consultancy for industrial and commercial applications.
//               </p>
//             </AnimatedSection>
//             <AnimatedSection delay={0.3}>
//               <div style={{ display: "flex", gap: 14 }}>
//                 <a href="#" style={s.yellowBtn}>Request a Quote</a>
//                 <a href="#" style={s.outlineBtn}>Browse Projects</a>
//               </div>
//             </AnimatedSection>
//           </div>
//           <AnimatedSection delay={0.15}>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, height: 340 }}>
//               <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=340&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }} />
//               <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//                 <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=163&fit=crop" alt="" style={{ width: "100%", height: "calc(50% - 5px)", objectFit: "cover", borderRadius: 8 }} />
//                 <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=163&fit=crop" alt="" style={{ width: "100%", height: "calc(50% - 5px)", objectFit: "cover", borderRadius: 8 }} />
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>

//         {/* Filter Tabs */}
//         <AnimatedSection delay={0.15}>
//           <div style={{ display: "flex", gap: 8, marginTop: 44, flexWrap: "wrap", paddingBottom: 0 }}>
//             {tabs.map((t) => (
//               <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? Y : "#1e1e1e", color: activeTab === t ? "#111" : "#aaa", border: "none", padding: "9px 18px", borderRadius: 4, fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .2s", fontFamily: "'Barlow',sans-serif" }}>
//                 {t}
//               </button>
//             ))}
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* ── CORE SERVICES ───────────────────────────────────────── */}
//       <section style={{ ...s.section, background: "#fff", color: "#111" }}>
//         <AnimatedSection>
//           <p style={{ ...s.label }}>SERVICES</p>
//           <h2 style={{ ...s.h2, color: "#111" }}>Our Core Services</h2>
//           <p style={{ ...s.sub, color: "#666", maxWidth: 500 }}>
//             We combine the best equipment, skilled technicians, and strategic planning — all services on one dashboard!
//           </p>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 48px", marginBottom: 44 }}>
//           {services.map((sv, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <div style={{ display: "flex", gap: 14 }}>
//                 <CheckIcon />
//                 <div>
//                   <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 7, lineHeight: 1.3 }}>{sv.title}</h3>
//                   <p style={{ color: "#666", fontSize: 13.5, lineHeight: 1.65 }}>{sv.desc}</p>
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//         <AnimatedSection delay={0.3}>
//           <a href="#" style={{ ...s.yellowBtn }}>View Projects</a>
//         </AnimatedSection>
//       </section>

//       {/* ── PARTNERS ────────────────────────────────────────────── */}
//       <section style={{ background: DARK, padding: "52px 6%" }}>
//         <AnimatedSection>
//           <h2 style={{ textAlign: "center", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 40 }}>Our Partners</h2>
//         </AnimatedSection>
//         <AnimatedSection delay={0.1}>
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 56, flexWrap: "wrap" }}>
//             {partners.map((p, i) => (
//               <motion.span key={i} whileHover={{ color: Y, scale: 1.05 }} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 800, color: "#3a3a3a", letterSpacing: 2, cursor: "default", transition: "color .2s" }}>
//                 {p}
//               </motion.span>
//             ))}
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* ── OUR PROJECTS ────────────────────────────────────────── */}
//       <section style={{ ...s.section, background: DARK3 }}>
//         <AnimatedSection>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36 }}>
//             <h2 style={{ ...s.h2, marginBottom: 0 }}>Our Projects</h2>
//             <a href="#" style={{ color: Y, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: 1 }}>VIEW ALL →</a>
//           </div>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
//           {projects.map((p, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <motion.div whileHover={{ scale: 1.02 }} style={{ borderRadius: 8, overflow: "hidden", position: "relative", cursor: "pointer" }}>
//                 <img src={p.img} alt={p.title} style={{ width: "100%", height: 210, objectFit: "cover", display: "block" }} />
//                 <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,.88))", padding: "40px 16px 16px" }}>
//                   <p style={{ fontWeight: 700, fontSize: 14 }}>{p.title}</p>
//                 </div>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
//       <section style={{ ...s.section, background: DARK }}>
//         <AnimatedSection>
//           <p style={s.label}>OUR EDGE</p>
//           <h2 style={s.h2}>Why Choose Us ?</h2>
//           <p style={s.sub}>We combine technical excellence, speed, and cost-effective solutions to meet your every power and energy need.</p>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
//           {whyUs.slice(0, 2).map((w, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <div style={{ background: DARK2, padding: "28px 26px", borderRadius: 8, borderTop: `3px solid ${Y}`, height: "100%" }}>
//                 <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{w.title}</h3>
//                 <p style={{ color: "#888", fontSize: 13.5, lineHeight: 1.7, marginBottom: 22 }}>{w.desc}</p>
//                 <a href="#" style={{ color: Y, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Learn More →</a>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//         <AnimatedSection delay={0.2}>
//           <div style={{ background: DARK2, padding: "28px 26px", borderRadius: 8, borderTop: `3px solid ${Y}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
//             <div>
//               <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{whyUs[2].title}</h3>
//               <p style={{ color: "#888", fontSize: 13.5, lineHeight: 1.7, maxWidth: 640 }}>{whyUs[2].desc}</p>
//             </div>
//             <a href="#" style={{ color: Y, fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>Learn More →</a>
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* ── ABOUT US ────────────────────────────────────────────── */}
//       <section style={{ ...s.section, background: DARK3 }}>
//         <AnimatedSection>
//           <p style={s.label}>WHO WE ARE</p>
//           <h2 style={s.h2}>About Us</h2>
//           <p style={{ ...s.sub, marginBottom: 48 }}>Engineering Reliable Power Solutions</p>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
//           <AnimatedSection delay={0.1}>
//             <div style={{ position: "relative" }}>
//               <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=560&h=420&fit=crop" alt="About Abdej" style={{ width: "100%", borderRadius: 8, objectFit: "cover", height: 420, display: "block" }} />
//               <div style={{ position: "absolute", bottom: -22, right: -22, background: Y, color: "#111", padding: "20px 22px", borderRadius: 8, textAlign: "center", boxShadow: "0 8px 32px rgba(0,0,0,.5)" }}>
//                 <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 52, fontWeight: 900, lineHeight: 1 }}>15</div>
//                 <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.5, lineHeight: 1.4 }}>YEARS OF<br />EXCELLENCE</div>
//               </div>
//             </div>
//           </AnimatedSection>
//           <AnimatedSection delay={0.2}>
//             <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
//               Abdej Nigeria Limited (Abdej) is an indigenous company incorporated in 2010. We are driven by the need to fill the growing inadequacy in the Nigerian power sector. Our focus is on closing the massive gap in power supply and increasing demand to effect clean, efficient and sustainable energy in Nigeria. Our work cuts across small, medium and large-scale businesses.
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 34 }}>
//               {["Custom Solutions", "Qualified Team", "High quality and flexible solutions", "Cost-effective services", "Friendly Support"].map((item, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                   <CheckIcon />
//                   <span style={{ fontSize: 13.5, color: "#ccc" }}>{item}</span>
//                 </div>
//               ))}
//             </div>
//             <div style={{ display: "flex", gap: 14 }}>
//               <a href="#" style={s.yellowBtn}>Learn More</a>
//               <a href="#" style={s.outlineBtn}>Download Profile</a>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ────────────────────────────────────────── */}
//       <section style={{ ...s.section, background: DARK }}>
//         <AnimatedSection>
//           <p style={s.label}>FEEDBACK</p>
//           <h2 style={s.h2}>Testimonials</h2>
//           <p style={s.sub}>See what our partners and clients say about their experience working with us.</p>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
//           {testimonials.map((t, i) => (
//             <AnimatedSection key={i} delay={i * 0.15}>
//               <div style={{ background: DARK2, padding: "28px 26px", borderRadius: 8, borderLeft: `3px solid ${Y}` }}>
//                 <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
//                   {[...Array(5)].map((_, j) => <span key={j} style={{ color: Y, fontSize: 16 }}>★</span>)}
//                 </div>
//                 <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#2a2a2a", border: `2px solid ${Y}`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: Y }}>
//                     {t.name.split(" ").map(n => n[0]).join("")}
//                   </div>
//                   <div>
//                     <p style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</p>
//                     <p style={{ color: "#666", fontSize: 12 }}>{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>

//       {/* ── REQUEST A QUOTE ─────────────────────────────────────── */}
//       <section style={{ background: Y, padding: "60px 6%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
//         <AnimatedSection delay={0.1}>
//           <img src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=560&h=320&fit=crop" alt="Quote" style={{ width: "100%", borderRadius: 8, objectFit: "cover", height: 300, display: "block" }} />
//         </AnimatedSection>
//         <AnimatedSection delay={0.2}>
//           <p style={{ ...s.label, color: "#333" }}>GET IN TOUCH</p>
//           <h2 style={{ ...s.h2, color: "#111", fontSize: 48 }}>Request a Quote</h2>
//           <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7, marginBottom: 30, maxWidth: 380 }}>
//             Have a project in mind? Contact us today to get the right power solution for your specific business needs.
//           </p>
//           <a href="#" style={{ display: "inline-block", background: "#111", color: "#fff", padding: "13px 28px", borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Contact Us</a>
//         </AnimatedSection>
//       </section>

//       {/* ── STATS ───────────────────────────────────────────────── */}
//       <section style={{ background: DARK3, padding: "64px 6%" }}>
//         <AnimatedSection>
//           <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
//             {[{ num: "15K+", label: "Happy Clients" }, { num: "4.9", label: "Industry Rating" }, { num: "99%", label: "On-Time Delivery" }].map((stat, i) => (
//               <div key={i} style={{ textAlign: "center" }}>
//                 <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 64, fontWeight: 900, color: Y, lineHeight: 1 }}>{stat.num}</div>
//                 <div style={{ color: "#888", fontSize: 14, marginTop: 8, fontWeight: 500 }}>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* ── FAQs ────────────────────────────────────────────────── */}
//       <section style={{ ...s.section, background: DARK }}>
//         <AnimatedSection>
//           <p style={s.label}>SUPPORT</p>
//           <h2 style={s.h2}>FAQs</h2>
//           <p style={{ ...s.sub, marginBottom: 40 }}>Have questions? Find answers to the most frequently asked questions about our services below.</p>
//         </AnimatedSection>
//         <div>
//           {faqs.map((faq, i) => (
//             <AnimatedSection key={i} delay={i * 0.05}>
//               <div style={{ borderBottom: "1px solid #222" }}>
//                 <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: "none", border: "none", color: "#fff", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontSize: 15, fontWeight: 600, textAlign: "left", fontFamily: "'Barlow',sans-serif", gap: 16 }}>
//                   <span>{faq.q}</span>
//                   <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.25 }} style={{ color: Y, fontSize: 24, fontWeight: 300, lineHeight: 1, flexShrink: 0 }}>+</motion.span>
//                 </button>
//                 <motion.div animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }} initial={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: "hidden" }}>
//                   <p style={{ color: "#888", fontSize: 14, lineHeight: 1.75, paddingBottom: 20 }}>{faq.a}</p>
//                 </motion.div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>

//       {/* ── PITCH DECK CTA ──────────────────────────────────────── */}
//       <section style={{ background: Y, padding: "72px 6%", textAlign: "center" }}>
//         <AnimatedSection>
//           <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 50, fontWeight: 900, color: "#111", marginBottom: 14 }}>Our Firm's Pitch-Deck</h2>
//           <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7, marginBottom: 30, maxWidth: 480, margin: "0 auto 30px" }}>
//             Discover our capabilities and engineering expertise. Download our complete company profile to learn more about what we do.
//           </p>
//           <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#111", color: "#fff", padding: "14px 28px", borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
//             DOWNLOAD PROFILE ↓
//           </a>
//         </AnimatedSection>
//       </section>

//       {/* ── FOOTER ──────────────────────────────────────────────── */}
//       <footer style={{ background: "#090909", padding: "64px 6% 32px", borderTop: "1px solid #1c1c1c" }}>
//         <AnimatedSection>
//           <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
//             {/* Brand */}
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
//                 <div style={{ background: Y, width: 34, height: 34, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#111", fontSize: 16, fontFamily: "'Barlow Condensed',sans-serif" }}>A</div>
//                 <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: 1, fontFamily: "'Barlow Condensed',sans-serif" }}>Abdej</span>
//               </div>
//               <p style={{ color: "#555", fontSize: 13, lineHeight: 1.75, maxWidth: 260, marginBottom: 22 }}>
//                 Engineering reliable power solutions for industrial and commercial clients across Nigeria since 2010.
//               </p>
//               <div style={{ display: "flex", gap: 10 }}>
//                 {[["f", "Facebook"], ["in", "LinkedIn"], ["tw", "Twitter"], ["ig", "Instagram"]].map(([abbr, label]) => (
//                   <a key={abbr} href="#" title={label} style={{ width: 34, height: 34, borderRadius: "50%", background: "#1a1a1a", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", fontSize: 11, fontWeight: 700, textDecoration: "none" }}>{abbr}</a>
//                 ))}
//               </div>
//             </div>
//             {/* Cols */}
//             {footerCols.map((col, i) => (
//               <div key={i}>
//                 <h4 style={{ fontWeight: 700, fontSize: 13, marginBottom: 18, letterSpacing: 0.5 }}>{col.title}</h4>
//                 <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
//                   {col.links.map((link) => (
//                     <a key={link} href="#" style={{ color: "#555", fontSize: 13, textDecoration: "none" }}>{link}</a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 26, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//             <p style={{ color: "#444", fontSize: 12 }}>© 2024 Abdej Nigeria Limited. All rights reserved.</p>
//             <p style={{ color: "#444", fontSize: 12 }}>Engineered with precision in Nigeria.</p>
//           </div>
//         </AnimatedSection>
//       </footer>
//     </div>
//   );
// }