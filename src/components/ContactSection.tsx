"use client";

interface ContactSectionProps {
  onBookingOpen: () => void;
}

export default function ContactSection({ onBookingOpen }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-[#ccc]">
            Located in downtown Watertown for your convenience
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-12">
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-[#444] text-center">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#1a1a1a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#fff] mb-4">Location</h3>
            <p className="text-[#ccc] text-lg">
              123 Public Square
              <br />
              Watertown, NY 13601
            </p>
          </div>
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-[#444] text-center">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#1a1a1a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#fff] mb-4">Phone</h3>
            <p className="text-[#ccc] text-lg">
              (315) 555-CUTS
              <br />
              (315) 555-2887
            </p>
          </div>
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-[#444] text-center">
            <div className="bg-[#d4af37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#1a1a1a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#fff] mb-4">Hours</h3>
            <p className="text-[#ccc] text-lg">
              Mon-Fri: 9AM-7PM
              <br />
              Sat: 8AM-6PM
              <br />
              Sun: 10AM-4PM
            </p>
          </div>
        </div>
        <div className="mt-16 bg-[#2a2a2a] rounded-2xl p-8 border border-[#444]">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#fff] mb-4">
                Ready for a Fresh Look?
              </h3>
              <p className="text-lg text-[#ccc] mb-6">
                Book your appointment today and experience the North Country
                Cuts difference. Walk-ins welcome, but appointments are
                recommended to guarantee your preferred time.
              </p>
              <button
                onClick={onBookingOpen}
                className="bg-[#d4af37] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-[#b8941f]"
              >
                Schedule Appointment
              </button>
            </div>
            <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#444]">
              <h4 className="text-xl font-bold text-[#d4af37] mb-4">
                Why Choose Us?
              </h4>
              <ul className="text-[#ccc] gap-3 flex flex-col">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Expert craftsmanship with 8+ years experience
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Premium products and sterilized tools
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Comfortable, relaxing atmosphere
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Competitive pricing and great value
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
