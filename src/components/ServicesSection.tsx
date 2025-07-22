"use client";

import React from "react";

interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
  onServiceSelect: (service: Service) => void;
}

export default function ServicesSection({
  services,
  onServiceSelect,
}: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#ccc] max-w-2xl mx-auto">
            Professional grooming services tailored to the modern gentleman
          </p>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-8 border border-[#444] transition-all duration-200 hover:border-[#d4af37] hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[#fff]">
                  {service.name}
                </h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#d4af37]">
                    {service.price}
                  </div>
                  <div className="text-sm text-[#888]">{service.duration}</div>
                </div>
              </div>
              <p className="text-[#ccc] mb-6 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => onServiceSelect(service)}
                className="w-full bg-[#d4af37] text-[#1a1a1a] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#b8941f]"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
