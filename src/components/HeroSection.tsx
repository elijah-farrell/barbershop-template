"use client";

import { useState, useEffect } from "react";

interface HeroSectionProps {
  onBookingOpen: () => void;
}

export default function HeroSection({ onBookingOpen }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./a-lite-up-barbers-pole.jpg",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section
      id="home"
      className="pt-28 min-h-screen flex items-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2 grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-lg:gap-8 items-center">
        <div className="max-lg:order-2">
          <h1 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-bold text-[#fff] mb-6 leading-tight">
            Premium Barbershop in{" "}
            <span className="text-[#d4af37]">Watertown, New York</span>
          </h1>
          <p className="text-xl max-sm:text-lg text-[#ccc] mb-8 leading-relaxed">
            Experience the finest in traditional barbering with modern style.
            Our master barber combines time-honored techniques with contemporary trends,
            delivering exceptional grooming services in the heart of Northern New York.
          </p>
          <div className="flex gap-4 max-sm:flex-col">
            <button
              onClick={onBookingOpen}
              className="bg-[#d4af37] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-[#b8941f] hover:transform hover:scale-105"
            >
              Book Appointment
            </button>
            <a
              href="#services"
              className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a] text-center"
            >
              View Services
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 max-sm:gap-4">
            <div className="text-center">
              <div className="text-3xl max-sm:text-2xl font-bold text-[#d4af37]">
                8+
              </div>
              <div className="text-sm text-[#888]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl max-sm:text-2xl font-bold text-[#d4af37]">
                2000+
              </div>
              <div className="text-sm text-[#888]">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl max-sm:text-2xl font-bold text-[#d4af37]">
                5★
              </div>
              <div className="text-sm text-[#888]">Average Rating</div>
            </div>
          </div>
        </div>
        <div className="max-lg:order-1 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-700">
            <img
              src={images[currentImageIndex]}
              className="w-full h-[600px] max-lg:h-[400px] object-cover transition-all duration-1000 transform hover:scale-110"
              alt="Barbershop showcase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-30" />
            
            {/* Animated overlay for extra visual flair */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-transparent opacity-0 hover:opacity-10 transition-opacity duration-500" />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#000] bg-opacity-50 text-[#fff] p-3 rounded-full transition-all duration-300 hover:bg-opacity-75 hover:scale-110 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#000] bg-opacity-50 text-[#fff] p-3 rounded-full transition-all duration-300 hover:bg-opacity-75 hover:scale-110 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentImageIndex
                    ? "bg-[#d4af37] shadow-lg shadow-[#d4af37]/50"
                    : "bg-[#fff] bg-opacity-50 hover:bg-opacity-75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
