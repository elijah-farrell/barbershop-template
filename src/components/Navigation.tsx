"use client";

import { useState, useEffect } from "react";

interface NavigationProps {
  onBookingOpen: () => void;
}

export default function Navigation({ onBookingOpen }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-[#2a2a2a] backdrop-blur-md bg-opacity-95 z-50 border-b border-[#444] shadow-lg transition-transform duration-300 ${
      isScrolled ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="flex justify-between items-center h-28 max-sm:h-24">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img 
                src="./north_country_cuts_logo.svg" 
                alt="North Country Cuts Logo" 
                className="h-20 w-20 max-sm:h-14 max-sm:w-14 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 filter drop-shadow-lg group-hover:drop-shadow-2xl group-hover:drop-shadow-[#d4af37]/50"
              />
              {/* Subtle glow ring on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-[#b8941f]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse group-hover:scale-125 blur-sm -z-10" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-[#d4af37] max-sm:text-xl leading-tight">
                North Country Cuts
              </div>
              <div className="text-xs text-[#888] max-sm:hidden leading-tight">
                Watertown, NY
              </div>
            </div>
          </div>
          <div className="lg:flex hidden items-center gap-8">
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
              className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:from-[#b8941f] hover:to-[#d4af37] hover:shadow-lg hover:scale-105"
            >
              Book Now
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#fff] p-2"
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
        <div className="lg:hidden bg-[#2a2a2a] border-t border-[#444]">
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
              className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] px-4 py-3 rounded-lg font-semibold text-left transition-all duration-300 hover:from-[#b8941f] hover:to-[#d4af37]"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
