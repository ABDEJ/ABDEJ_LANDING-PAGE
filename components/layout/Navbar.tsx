"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Settings, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Our Services", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-auto md:py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ABDEJ Logo"
            width={80}
            height={54}
            priority
            className="h-auto w-[68px] sm:w-[80px] md:w-[100px] lg:w-[120px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group hover:text-white transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition">
            <Search size={20} />
          </button>

          <button className="text-gray-400 hover:text-white transition">
            <Settings size={20} />
          </button>

          <Link
            href="/contact"
            className="bg-secondary flex h-[48px] w-[176px] items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-black transition hover:opacity-90"
          >
            Contact Us
            <Image
              src="/ArrowRight.svg"
              alt="Arrow Right"
              width={24}
              height={24}
              className="ml-2"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="text-gray-400 hover:text-white transition">
            <Search size={19} />
          </button>

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

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-secondary mt-5 flex h-[48px] w-full items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-black transition hover:opacity-90"
          >
            Contact Us
            <Image
              src="/ArrowRight.svg"
              alt="Arrow Right"
              width={24}
              height={24}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}