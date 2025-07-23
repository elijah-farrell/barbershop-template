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
import InfiniteGallery from "./InfiniteGallery";

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
      name: "Classic Gentleman's Cut",
      price: "$28",
      duration: "45 min",
      description: "Traditional scissor cut with hot towel finish, beard trim, and styling consultation",
    },
    {
      name: "Father & Son Package",
      price: "$45",
      duration: "60 min",
      description: "Two complete haircuts - perfect bonding time while both get the full gentleman's treatment",
    },
    {
      name: "The Executive",
      price: "$55",
      duration: "75 min",
      description: "Premium cut, hot towel shave, beard sculpting, eyebrow trim, and luxury styling products",
    },
    {
      name: "Quick Trim & Go",
      price: "$20",
      duration: "25 min",
      description: "Fast, professional cut for the busy professional - clean lines, no fuss",
    },
    {
      name: "Wedding Party Special",
      price: "$40",
      duration: "50 min",
      description: "Complete grooming for your big day - precision cut, hot shave, and premium styling",
    },
    {
      name: "Vintage Barber Experience",
      price: "$65",
      duration: "90 min",
      description: "The full old-school treatment - cut, straight razor shave, hot towels, scalp massage, and beard oil",
    },
  ];

  const additionalServices = [
    { name: "Beard Oil Treatment", price: "$8" },
    { name: "Hot Towel Add-on", price: "$5" },
    { name: "Eyebrow Trim", price: "$6" },
    { name: "Scalp Massage", price: "$10" },
    { name: "Premium Product Styling", price: "$7" },
    { name: "Mustache Wax", price: "$4" },
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
      <ServicesSection services={services} additionalServices={additionalServices} onServiceSelect={openBooking} />
      <InfiniteGallery />
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
