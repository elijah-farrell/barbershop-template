"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Mike Johnson",
      text: "Best haircut I've had in years! Professional service and great atmosphere.",
      rating: 5,
    },
    {
      name: "David Smith",
      text: "Tony knows his craft. Always leave looking sharp and feeling confident.",
      rating: 5,
    },
    {
      name: "Robert Wilson",
      text: "Been coming here for 3 years. Consistent quality every time.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(
      testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonialIndex]);

  return (
    <section className="py-20 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#ccc]">Don't just take our word for it</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#444] text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#d4af37]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xl text-[#fff] mb-6 italic">
              "{testimonials[testimonialIndex].text}"
            </p>
            <p className="text-lg font-semibold text-[#d4af37]">
              {testimonials[testimonialIndex].name}
            </p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-4 max-sm:left-0 top-1/2 transform -translate-y-1/2 bg-[#d4af37] text-[#1a1a1a] p-3 rounded-full transition-all duration-200 hover:bg-[#b8941f]"
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
            onClick={nextTestimonial}
            className="absolute right-4 max-sm:right-0 top-1/2 transform -translate-y-1/2 bg-[#d4af37] text-[#1a1a1a] p-3 rounded-full transition-all duration-200 hover:bg-[#b8941f]"
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
        </div>
      </div>
    </section>
  );
}
