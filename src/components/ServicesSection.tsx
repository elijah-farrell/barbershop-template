"use client";

interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface AdditionalService {
  name: string;
  price: string;
}

interface ServicesSectionProps {
  services: Service[];
  additionalServices: AdditionalService[];
  onServiceSelect: (service: Service) => void;
}

export default function ServicesSection({
  services,
  additionalServices,
  onServiceSelect,
}: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#ccc] max-w-3xl mx-auto leading-relaxed">
            From quick trims to full grooming experiences, we offer packages for every gentleman and occasion.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Main Services Grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 border border-[#444] transition-all duration-300 hover:border-[#d4af37] hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/20 group cursor-pointer relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Animated background accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#fff] group-hover:text-[#d4af37] transition-colors duration-300 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm text-[#888]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                      {service.price}
                    </div>
                  </div>
                </div>
                <p className="text-[#ccc] mb-6 leading-relaxed group-hover:text-[#fff] transition-colors duration-300 text-sm">
                  {service.description}
                </p>
                <button
                  onClick={() => onServiceSelect(service)}
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] py-3 rounded-xl font-semibold transition-all duration-300 hover:from-[#b8941f] hover:to-[#d4af37] hover:shadow-lg transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-[#444] max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#fff] mb-3">
              <span className="text-[#d4af37]">Add-On</span> Services
            </h3>
            <p className="text-[#ccc]">Enhance your experience with these premium additions</p>
          </div>
          
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {additionalServices.map((addon, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] rounded-xl p-4 border border-[#333] hover:border-[#d4af37] transition-all duration-300 group"
                style={{
                  animation: `fadeInUp 0.4s ease-out ${index * 0.05 + 0.8}s both`
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#fff] font-medium group-hover:text-[#d4af37] transition-colors duration-300">
                    {addon.name}
                  </span>
                  <span className="text-[#d4af37] font-bold">
                    {addon.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-[#888]">
              Ask about our add-on services when booking your appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
