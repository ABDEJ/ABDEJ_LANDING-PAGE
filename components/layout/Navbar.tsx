"use client";

import Image from "next/image";
import { Search, Settings, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const links = ["Our Services", "Projects", "About Us", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ABDEJ Logo"
            width={80}
            height={54}
            className="h-auto w-[68px] sm:w-[80px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="relative group hover:text-white transition-colors duration-300"
            >
              {l}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition">
            <Search size={20} />
          </button>

          <button className="text-gray-400 hover:text-white transition">
            <Settings size={20} />
          </button>

          <button className="bg-secondary flex h-[48px] w-[176px] items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-black transition hover:opacity-90">
            Contact Us
            <Image
              src="/ArrowRight.svg"
              alt="Arrow Right"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
        </div>

        {/* Mobile Right Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="text-gray-400 hover:text-white transition">
            <Search size={19} />
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-400 hover:text-white transition"
            aria-label="Toggle menu"
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
              <a
                key={link}
                href="#"
                className="border-b border-white/10 pb-3 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition">
              <Settings size={20} />
            </button>
          </div>

          <button className="bg-secondary mt-5 flex h-[48px] w-full items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-black transition hover:opacity-90">
            Contact Us
            <Image
              src="/ArrowRight.svg"
              alt="Arrow Right"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}