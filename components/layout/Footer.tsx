"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";
import { FiInstagram, FiFacebook, FiDribbble } from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section"
      style={{
        background: "var(--section-bg)",
        color: "var(--section-text)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">

          {/* LEFT */}
          <div>
            <h2 className="text-[46px] font-bold leading-none tracking-[-0.03em]">
              Abdej
            </h2>

            <p
              className="mt-4 text-[15px]"
              style={{ color: "var(--section-muted)" }}
            >
              Your trusted partner for quality power solutions.
            </p>

            <h3 className="mt-8 mb-5 text-[20px] font-semibold">
              Company&apos;s Info
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <InfoItem icon={<Mail size={18} />} text="info@gmail.com" />
              <InfoItem icon={<MapPin size={18} />} text="125, Ajakaye Street, Ikeja, Lagos, Nigeria." />
              <InfoItem icon={<Phone size={18} />} text="+234 803 781 5523" />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-5 text-[20px] font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[15px] transition"
                    style={{ color: "var(--section-muted)" }}
                  >
                    <ChevronRight
                      size={16}
                      style={{ color: "var(--icon-color)" }}
                    />
                    <span className="hover:underline">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <SocialIcon href="#" icon={<FiInstagram size={16} />} />
              <SocialIcon href="#" icon={<FiFacebook size={16} />} />
              <SocialIcon href="#" icon={<FiDribbble size={16} />} />
            </div>

            <h3 className="mb-5 text-[20px] font-semibold">Newsletter</h3>

            <form className="flex max-w-[280px] flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="h-14 rounded-md px-4 text-sm outline-none"
                style={{
                  background: "var(--input-bg)",
                  border: "2px solid var(--input-border)",
                  color: "var(--input-text)",
                }}
              />

              <button
                type="submit"
                className="h-11 w-fit rounded-md px-7 text-sm font-medium transition"
                style={{
                  background: "var(--button-bg)",
                  color: "var(--button-text)",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div
          className="mt-20 h-px w-full"
          style={{ background: "var(--border-color)" }}
        />

        <div
          className="mt-8 flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between"
          style={{ color: "var(--section-muted)" }}
        >
          <p>©{currentYear} Abdej. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENTS ================= */

function InfoItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="flex items-start gap-3 text-[15px]"
      style={{ color: "var(--section-muted)" }}
    >
      <span
        className="mt-0.5 flex h-6 w-6 items-center justify-center"
        style={{ color: "var(--icon-color)" }}
      >
        {icon}
      </span>
      <span className="leading-5">{text}</span>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full transition"
      style={{
        border: "1px solid var(--social-border)",
        color: "var(--social-text)",
      }}
    >
      {icon}
    </Link>
  );
}