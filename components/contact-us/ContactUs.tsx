// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock3,
//   MessageCircle,
// } from "lucide-react";
// import AnimatedSection from "../Animations";

// export default function ContactUs() {
//   return (
//     <section
//       id="contact"
//       className="contact-section py-16 md:py-24 px-4 sm:px-6 lg:px-8"
//       style={{ background: "var(--section-bg)", color: "var(--section-text)" }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <AnimatedSection>
//           <div className="text-center mb-12">
//             <div className="flex items-center justify-center gap-2 mb-3">
//               <Image
//                 src="/AboutUsIcons/Gear.svg"
//                 alt="Gear Icon"
//                 width={65}
//                 height={65}
//                 style={{ filter: "var(--map-filter)" }}
//               />
//               <h2 className="text-3xl md:text-4xl font-extrabold">
//                 Contact Us
//               </h2>
//             </div>

//             <p
//               className="text-sm md:text-base max-w-xl mx-auto"
//               style={{ color: "var(--section-muted)" }}
//             >
//               Kindly reach out for inquiries or solutions
//             </p>
//           </div>
//         </AnimatedSection>

//         <AnimatedSection>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

//             {/* FORM */}
//             <div
//               className="rounded-2xl p-5 md:p-6 shadow-lg"
//               style={{
//                 background: "var(--card-bg)",
//                 border: "1px solid var(--card-border)",
//               }}
//             >
//               <form className="space-y-4">

//                 {["Full Name", "Email", "Subject", "Company's Name"].map((placeholder, i) => (
//                   <input
//                     key={i}
//                     type="text"
//                     placeholder={placeholder}
//                     className="w-full h-12 rounded-lg px-4 text-sm outline-none"
//                     style={{
//                       background: "var(--input-bg)",
//                       border: "1px solid var(--input-border)",
//                       color: "var(--input-text)",
//                     }}
//                   />
//                 ))}

//                 <textarea
//                   placeholder="Message"
//                   rows={6}
//                   className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
//                   style={{
//                     background: "var(--input-bg)",
//                     border: "1px solid var(--input-border)",
//                     color: "var(--input-text)",
//                   }}
//                 />

//                 <div className="flex flex-col sm:flex-row gap-4 pt-2">
//                   <button
//                     type="submit"
//                     className="rounded-tl-full rounded-br-full px-6 py-3 text-sm font-semibold"
//                     style={{
//                       background: "var(--button-bg)",
//                       color: "var(--button-text)",
//                     }}
//                   >
//                     Send Message
//                   </button>

//                   <Link
//                     href="https://wa.me/2348037815523"
//                     target="_blank"
//                     className="flex items-center justify-center gap-2 rounded-tl-full rounded-br-full bg-green-500 px-6 py-3 text-sm font-semibold text-white"
//                   >
//                     <MessageCircle size={18} />
//                     Chat via Whatsapp
//                   </Link>
//                 </div>
//               </form>
//             </div>

//             {/* INFO */}
//             <div className="flex flex-col gap-6">
//               <div
//                 className="rounded-2xl p-5 md:p-6 shadow-lg"
//                 style={{
//                   background: "var(--card-bg)",
//                   border: "1px solid var(--card-border)",
//                 }}
//               >
//                 <div className="relative w-full h-[260px] md:h-[320px]">
//                   <Image
//                     src="/map.svg"
//                     alt="World map"
//                     width={783}
//                     height={500}
//                     className="object-contain"
//                     style={{ filter: "var(--map-filter)" }}
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <h3 className="text-lg font-semibold mb-4">
//                     Company’s Info
//                   </h3>

//                   <div
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
//                     style={{ color: "var(--section-muted)" }}
//                   >
//                     <div className="flex items-center gap-2">
//                       <Mail size={16} style={{ color: "var(--icon-color)" }} />
//                       <span>info@company.com</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <MapPin size={16} style={{ color: "var(--icon-color)" }} />
//                       <span>125, Ajakaye Street, Ikeja, Lagos, Nigeria.</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Phone size={16} style={{ color: "var(--icon-color)" }} />
//                       <span>+234 803 781 5523</span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Clock3 size={16} style={{ color: "var(--icon-color)" }} />
//                       <span>9:00 AM</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";
import AnimatedSection from "../Animations";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setForm({
          fullName: "",
          email: "",
          subject: "",
          company: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--section-bg)", color: "var(--section-text)" }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src="/AboutUsIcons/Gear.svg"
                alt="Gear Icon"
                width={65}
                height={65}
                style={{ filter: "var(--map-filter)" }}
              />
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Contact Us
              </h2>
            </div>

            <p
              className="text-sm md:text-base max-w-xl mx-auto"
              style={{ color: "var(--section-muted)" }}
            >
              Kindly reach out for inquiries or solutions
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* FORM */}
            <div
              className="rounded-2xl p-5 md:p-6 shadow-lg"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* STATUS MESSAGE */}
                {status.message && (
                  <div
                    className={`rounded-lg px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full h-12 rounded-lg px-4 text-sm outline-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--input-text)",
                  }}
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full h-12 rounded-lg px-4 text-sm outline-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--input-text)",
                  }}
                />

                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full h-12 rounded-lg px-4 text-sm outline-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--input-text)",
                  }}
                />

                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company's Name"
                  className="w-full h-12 rounded-lg px-4 text-sm outline-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--input-text)",
                  }}
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
                  style={{
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--input-text)",
                  }}
                />

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-tl-full rounded-br-full px-6 py-3 text-sm font-semibold"
                    style={{
                      background: "var(--button-bg)",
                      color: "var(--button-text)",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <Link
                    href="https://wa.me/2348037815523"
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-tl-full rounded-br-full bg-green-500 px-6 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle size={18} />
                    Chat via Whatsapp
                  </Link>
                </div>
              </form>
            </div>

            {/* INFO (UNCHANGED) */}
            <div className="flex flex-col gap-6">
              <div
                className="rounded-2xl p-5 md:p-6 shadow-lg"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="relative w-full h-[260px] md:h-[320px]">
                  <Image
                    src="/map.svg"
                    alt="World map"
                    width={783}
                    height={500}
                    className="object-contain"
                    style={{ filter: "var(--map-filter)" }}
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Company’s Info
                  </h3>

                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
                    style={{ color: "var(--section-muted)" }}
                  >
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>info@company.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>125, Ajakaye Street, Lagos</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>+234 803 781 5523</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      <span>9:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}