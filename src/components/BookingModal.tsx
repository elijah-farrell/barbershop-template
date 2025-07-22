"use client";

import React from "react";

interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface BookingData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
}

interface BookingModalProps {
  selectedService: Service | null;
  bookingStep: number;
  bookingData: BookingData;
  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export default function BookingModal({
  selectedService,
  bookingStep,
  bookingData,
  setBookingData,
  onClose,
  onNext,
  onPrev,
  onSubmit,
}: BookingModalProps) {
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
  ];

  const services = [
    { name: "Classic Haircut", price: "$25", duration: "30 min" },
    { name: "Beard Trim", price: "$15", duration: "20 min" },
    { name: "Hot Towel Shave", price: "$35", duration: "45 min" },
    { name: "Haircut + Beard", price: "$35", duration: "45 min" },
  ];

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2a2a2a] rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-[#444]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#fff]">Book Appointment</h2>
          <button
            onClick={onClose}
            className="text-[#888] hover:text-[#fff] transition-colors duration-200"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {bookingStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
              Select Service
            </h3>
            <div className="space-y-3 mb-6">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleInputChange("service", service.name)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                    bookingData.service === service.name
                      ? "border-[#d4af37] bg-[#d4af37] bg-opacity-10"
                      : "border-[#444] hover:border-[#d4af37]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#fff] font-semibold">
                        {service.name}
                      </div>
                      <div className="text-[#888] text-sm">
                        {service.duration}
                      </div>
                    </div>
                    <div className="text-[#d4af37] font-bold">
                      {service.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={onNext}
              disabled={!bookingData.service}
              className="w-full bg-[#d4af37] text-[#1a1a1a] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#b8941f] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {bookingStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
              Your Information
            </h3>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                value={bookingData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#444] text-[#fff] placeholder-[#888] focus:border-[#d4af37] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={bookingData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#444] text-[#fff] placeholder-[#888] focus:border-[#d4af37] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={bookingData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#444] text-[#fff] placeholder-[#888] focus:border-[#d4af37] focus:outline-none"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={onPrev}
                className="flex-1 border border-[#d4af37] text-[#d4af37] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
              >
                Back
              </button>
              <button
                onClick={onNext}
                disabled={
                  !bookingData.name || !bookingData.phone || !bookingData.email
                }
                className="flex-1 bg-[#d4af37] text-[#1a1a1a] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#b8941f] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {bookingStep === 3 && (
          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
              Select Date & Time
            </h3>
            <div className="space-y-4 mb-6">
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-[#444] text-[#fff] focus:border-[#d4af37] focus:outline-none"
              />
              <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleInputChange("time", time)}
                    className={`p-2 rounded-lg border text-sm transition-all duration-200 ${
                      bookingData.time === time
                        ? "border-[#d4af37] bg-[#d4af37] text-[#1a1a1a]"
                        : "border-[#444] text-[#fff] hover:border-[#d4af37]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onPrev}
                className="flex-1 border border-[#d4af37] text-[#d4af37] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
              >
                Back
              </button>
              <button
                onClick={onNext}
                disabled={!bookingData.date || !bookingData.time}
                className="flex-1 bg-[#d4af37] text-[#1a1a1a] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#b8941f] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Review
              </button>
            </div>
          </div>
        )}

        {bookingStep === 4 && (
          <div>
            <h3 className="text-xl font-semibold text-[#d4af37] mb-4">
              Confirm Booking
            </h3>
            <div className="bg-[#1a1a1a] rounded-lg p-4 mb-6 border border-[#444]">
              <div className="space-y-2 text-[#ccc]">
                <div>
                  <span className="text-[#d4af37]">Service:</span>{" "}
                  {bookingData.service}
                </div>
                <div>
                  <span className="text-[#d4af37]">Name:</span>{" "}
                  {bookingData.name}
                </div>
                <div>
                  <span className="text-[#d4af37]">Phone:</span>{" "}
                  {bookingData.phone}
                </div>
                <div>
                  <span className="text-[#d4af37]">Email:</span>{" "}
                  {bookingData.email}
                </div>
                <div>
                  <span className="text-[#d4af37]">Date:</span>{" "}
                  {bookingData.date}
                </div>
                <div>
                  <span className="text-[#d4af37]">Time:</span>{" "}
                  {bookingData.time}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onPrev}
                className="flex-1 border border-[#d4af37] text-[#d4af37] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
              >
                Back
              </button>
              <button
                onClick={onSubmit}
                className="flex-1 bg-[#d4af37] text-[#1a1a1a] py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-[#b8941f]"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
