"use client";

import React, { useState } from "react";

interface NavigationProps {
  onBookingOpen: () => void;
}

export default function Navigation({ onBookingOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#2a2a2a] backdrop-blur-md bg-opacity-95 z-50 border-b border-[#444]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#d4af37] max-sm:text-xl">
              North Country Cuts
            </div>
            <div className="ml-2 text-sm text-[#888] max-sm:hidden">
              Watertown, NY
            </div>
          </div>
          <div className="hidden max-lg:flex items-center gap-8">
            <a
              href="#home"
              className="text-[#fff] transition-colors duration-200 hover:text-[#d4af37]"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-[#fff] transition-colors duration-200 hover:text-[#d4af37]"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-[#fff] transition-colors duration-200 hover:text-[#d4af37]"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#fff] transition-colors duration-200 hover:text-[#d4af37]"
            >
              Contact
            </a>
            <button
              onClick={onBookingOpen}
              className="bg-[#d4af37] text-[#1a1a1a] px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-[#b8941f]"
            >
              Book Now
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="max-lg:hidden text-[#fff] p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="max-lg:hidden bg-[#2a2a2a] border-t border-[#444]">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#fff] py-2 transition-colors duration-200 hover:text-[#d4af37]"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#fff] py-2 transition-colors duration-200 hover:text-[#d4af37]"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#fff] py-2 transition-colors duration-200 hover:text-[#d4af37]"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#fff] py-2 transition-colors duration-200 hover:text-[#d4af37]"
            >
              Contact
            </a>
            <button
              onClick={() => {
                onBookingOpen();
                setMobileMenuOpen(false);
              }}
              className="bg-[#d4af37] text-[#1a1a1a] px-4 py-3 rounded-lg font-semibold text-left"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
