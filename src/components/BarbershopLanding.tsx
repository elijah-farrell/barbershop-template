"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

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

export default function BarbershopLanding() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const services: Service[] = [
    {
      name: "Classic Haircut",
      price: "$25",
      duration: "30 min",
      description: "Traditional scissor cut with styling",
    },
    {
      name: "Beard Trim",
      price: "$15",
      duration: "20 min",
      description: "Professional beard shaping and trim",
    },
    {
      name: "Hot Towel Shave",
      price: "$35",
      duration: "45 min",
      description: "Traditional straight razor shave with hot towel",
    },
    {
      name: "Haircut + Beard",
      price: "$35",
      duration: "45 min",
      description: "Complete grooming package",
    },
  ];

  const openBooking = (service: Service | null) => {
    setSelectedService(service);
    setBookingData((prev) => ({ ...prev, service: service?.name || "" }));
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const closeBooking = () => {
    setShowBookingModal(false);
    setBookingStep(1);
    setBookingData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
    });
  };

  const nextBookingStep = () => {
    setBookingStep((prev) => prev + 1);
  };

  const prevBookingStep = () => {
    setBookingStep((prev) => prev - 1);
  };

  const submitBooking = () => {
    alert(
      "Booking request submitted! We'll call you to confirm your appointment.",
    );
    closeBooking();
  };

  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] font-[Inter]">
      <Navigation onBookingOpen={() => openBooking(null)} />
      <HeroSection onBookingOpen={() => openBooking(null)} />
      <ServicesSection services={services} onServiceSelect={openBooking} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection onBookingOpen={() => openBooking(null)} />
      <Footer />

      {showBookingModal && (
        <BookingModal
          selectedService={selectedService}
          bookingStep={bookingStep}
          bookingData={bookingData}
          setBookingData={setBookingData}
          onClose={closeBooking}
          onNext={nextBookingStep}
          onPrev={prevBookingStep}
          onSubmit={submitBooking}
        />
      )}
    </div>
  );
}
