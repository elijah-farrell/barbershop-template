"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location: string;
}

export default function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Mike Johnson",
      text: "Exceptional service and attention to detail. Tony took the time to understand exactly what I wanted and delivered beyond my expectations. The hot towel treatment was the perfect finishing touch.",
      rating: 5,
      location: "Watertown, NY"
    },
    {
      name: "David Smith",
      text: "I've been a client for over two years now. Tony's expertise in both classic and modern styles is unmatched. Always professional, always delivers consistent quality results.",
      rating: 5,
      location: "Fort Drum, NY"
    },
    {
      name: "Robert Wilson",
      text: "From the moment you walk in, you know you're in a professional establishment. Clean, comfortable environment and Tony's skill with both scissors and straight razor is impressive.",
      rating: 5,
      location: "Clayton, NY"
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
        <div className="relative max-w-4xl mx-auto px-16 max-sm:px-12">
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
            <p className="text-sm text-[#888] mt-1">
              {testimonials[testimonialIndex].location}
            </p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 max-sm:left-0 top-1/2 transform -translate-y-1/2 bg-[#d4af37] text-[#1a1a1a] p-3 rounded-full transition-all duration-200 hover:bg-[#b8941f] z-10"
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
            className="absolute right-0 max-sm:right-0 top-1/2 transform -translate-y-1/2 bg-[#d4af37] text-[#1a1a1a] p-3 rounded-full transition-all duration-200 hover:bg-[#b8941f] z-10"
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
