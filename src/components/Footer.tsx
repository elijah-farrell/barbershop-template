"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-[#444]">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4">
              North Country Cuts
            </h3>
            <p className="text-[#ccc] mb-4">
              Watertown's premier barbershop, serving the North Country with
              traditional craftsmanship and modern style.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#2a2a2a] p-3 rounded-full text-[#d4af37] transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-[#2a2a2a] p-3 rounded-full text-[#d4af37] transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-[#2a2a2a] p-3 rounded-full text-[#d4af37] transition-all duration-200 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#d4af37] mb-6">
              Business Hours
            </h4>
            <div className="space-y-3 text-[#ccc]">
              <div className="flex justify-between items-center py-2 border-b border-[#444]/50">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-[#d4af37] font-semibold">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#444]/50">
                <span className="font-medium">Saturday</span>
                <span className="text-[#d4af37] font-semibold">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Sunday</span>
                <span className="text-[#d4af37] font-semibold">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#d4af37] mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-[#ccc]">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>123 Main Street, Watertown, NY 13601</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>(315) 555-CUTS</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@northcountrycuts.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#444] pt-8 text-center">
          <p className="text-[#888]">
            © 2025 North Country Cuts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
