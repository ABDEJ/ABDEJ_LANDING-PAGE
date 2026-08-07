"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Moon, SunMedium, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const currentTheme = savedTheme || "dark";

    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const logoSrc =
    theme === "dark"
      ? "/brand/abdej-logo-dark.png"
      : "/brand/abdej-logo-light.png";

  return (
<nav className="navbar-section sticky top-0 z-50 bg-[var(--section-bg)] text-[var(--section-text)] backdrop-blur-md transition-colors duration-500">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
<Link
  href="/"
  aria-label="ABDEJ Nigeria Limited home"
  className="flex h-16 w-[158px] shrink-0 items-center sm:w-[184px] md:h-20 md:w-[218px]"
>
  <Image
    src={logoSrc}
    alt="ABDEJ Nigeria Limited"
    width={520}
    height={148}
    priority
    className="h-auto max-h-12 w-full object-contain md:max-h-14"
  />
</Link>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-400/50"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SunMedium className="h-5 w-5 text-yellow-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="h-5 w-5 text-slate-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* <button className="text-gray-400 hover:text-white transition">
            <Search size={20} />
          </button>

          <button className="text-gray-400 hover:text-white transition">
            <Settings size={20} />
          </button> */}

        <motion.div
  whileHover={{ y: -3, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <Link
    href="/contact-us"
    className="group flex h-[48px] w-[176px] items-center justify-center rounded-full bg-[var(--button-bg)] px-4 py-2 text-sm font-bold text-[var(--button-text)] shadow-sm transition"
  >
    Contact Us

    <ArrowRight
      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="text-gray-400 hover:text-white transition">
            {theme === "dark" ? <SunMedium size={20} /> : <Moon size={20} />}
          </button>

          {/* <button className="text-gray-400 hover:text-white transition">
            <Search size={19} />
          </button> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#1A1D20] transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6">
          <div className="flex flex-col gap-4 text-sm text-gray-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 pb-3 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

         {/* <motion.div
  whileHover={{ y: -3, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <Link
    href="/contact-us"
    className="group flex h-[48px] w-[176px] items-center justify-center rounded-full bg-[var(--button-bg)] px-4 py-2 text-sm font-bold text-[var(--button-text)] shadow-sm transition"
  >
    Contact Us

    <ArrowRight
      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</motion.div> */}
        </div>
      </div>
    </nav>
  );
}
