"use client";

import { useState, useEffect, useRef } from "react";

export default function InfiniteGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cleanup: ensure body scroll is restored if component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const galleryItems = [
    {
      image: "/beard-trimming.png",
      title: "Beard Styling",
      description: "Expert beard trimming and shaping with precision tools and techniques for the perfect look."
    },
    {
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Classic Barbering",
      description: "Traditional barbering methods combined with modern styling for timeless results."
    },
    {
      image: "https://images.unsplash.com/photo-1567128405941-bd4c47b5e3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Hair Styling",
      description: "Professional hair styling and finishing touches using premium products and techniques."
    },
    {
      image: "https://images.unsplash.com/photo-1615289985518-c3ca5e0a93b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Grooming Service",
      description: "Complete grooming packages tailored to your personal style and preferences."
    },
    {
      image: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Professional Cut",
      description: "Precision cuts with attention to detail and personalized consultation for every client."
    },
    {
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Traditional Shave",
      description: "Authentic straight razor shaves with hot towel treatment for the ultimate experience."
    }
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...galleryItems, ...galleryItems];

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedIndex(null);
    setIsPaused(false);
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
    // Restore page scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  const openModal = (item: any, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsPaused(true);
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
    // Prevent page scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedItem]);

  const handleMouseEnter = () => {
    // Only pause on hover if modal is not open and not dragging
    if (!selectedItem && !isDragging) {
      setIsPaused(true);
      if (scrollRef.current) {
        scrollRef.current.style.animationPlayState = 'paused';
      }
    }
  };

  const handleMouseLeave = () => {
    // Only resume on mouse leave if modal is not open and not dragging
    if (!selectedItem && !isDragging) {
      setIsPaused(false);
      if (scrollRef.current) {
        scrollRef.current.style.animationPlayState = 'running';
      }
    }
  };

  // Drag functionality
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Reset transform and resume animation
    if (scrollRef.current) {
      scrollRef.current.style.transform = '';
      scrollRef.current.style.animationPlayState = 'running';
    }
    
    setDragOffset(0);
    setIsPaused(false);
  };

  // Navigation arrows functionality
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
      scrollRef.current.style.transform = 'translateX(100px)';
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.style.transform = '';
          scrollRef.current.style.animationPlayState = 'running';
        }
      }, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
      scrollRef.current.style.transform = 'translateX(-100px)';
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.style.transform = '';
          scrollRef.current.style.animationPlayState = 'running';
        }
      }, 300);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-4">
            Our <span className="text-[#d4af37]">Work</span> Speaks
          </h2>
          <p className="text-xl text-[#ccc] max-w-2xl mx-auto">
            Experience the artistry and precision that sets North Country Cuts apart
          </p>
        </div>
        
        {/* Infinite Scrolling Gallery */}
        <div className="relative">
          {/* Small navigation arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#d4af37] text-[#1a1a1a] p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#d4af37] text-[#1a1a1a] p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex overflow-hidden mask-gradient">
            <div 
              ref={scrollRef}
              className={`flex gap-6 ${isVisible ? 'animate-infinite-scroll' : ''} transition-transform duration-300 cursor-grab active:cursor-grabbing`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              style={{ userSelect: 'none' }}
            >
              {duplicatedItems.map((item, index) => {
                const isSelected = selectedIndex !== null && (
                  index === selectedIndex || 
                  index === selectedIndex + galleryItems.length ||
                  (selectedIndex >= galleryItems.length && index === selectedIndex - galleryItems.length)
                );
                
                return (
                  <div
                    key={index}
                    onClick={() => openModal(item, index)}
                    className={`flex-shrink-0 w-80 bg-[#2a2a2a] rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer ${
                      isSelected 
                        ? 'border-[#d4af37] shadow-2xl shadow-[#d4af37]/40 scale-105' 
                        : 'border-[#444] hover:border-[#d4af37]'
                    }`}
                  >
                    <div className="relative overflow-hidden" style={{ height: 'auto', minHeight: '200px', maxHeight: '300px' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto min-h-[200px] max-h-[300px] object-contain bg-[#1a1a1a] transition-transform duration-300 group-hover:scale-110"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent opacity-40" />
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        isSelected ? 'bg-[#d4af37] opacity-30' : 'bg-[#d4af37] opacity-0 group-hover:opacity-20'
                      }`} />
                      
                      {/* Click indicator */}
                      <div className={`absolute top-4 right-4 bg-[#d4af37] text-[#1a1a1a] p-2 rounded-full transition-all duration-300 ${
                        isSelected ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100'
                      }`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        isSelected ? 'text-[#d4af37]' : 'text-[#fff] group-hover:text-[#d4af37]'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-[#ccc] text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#2a2a2a] to-transparent pointer-events-none z-10" />
        </div>

        {/* Floating elements for extra flair */}
        <div className="relative mt-16">
          <div className="flex justify-center items-center gap-8 max-sm:gap-4">
            <div className="text-center opacity-75 hover:opacity-100 transition-opacity duration-300">
              <div className="text-3xl max-sm:text-2xl font-bold text-[#d4af37] mb-2">
                500+
              </div>
              <div className="text-sm text-[#888]">Styles Perfected</div>
            </div>
            <div className="text-center opacity-75 hover:opacity-100 transition-opacity duration-300">
              <div className="text-3xl max-sm:text-2xl font-bold text-[#d4af37] mb-2">
                100%
              </div>
              <div className="text-sm text-[#888]">Satisfaction Rate</div>
            </div>
            <div className="text-center opacity-75 hover:opacity-100 transition-opacity duration-300">
              <div className="text-3xl max-sm:text-2xl font-bold text-[#d4af37] mb-2">
                8+
              </div>
              <div className="text-sm text-[#888]">Years Mastery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for focused image view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-[#000] bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-[#1a1a1a] rounded-2xl border border-[#d4af37] overflow-hidden max-w-4xl w-full transform scale-0 animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full max-h-[70vh] object-contain bg-[#0a0a0a]"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-[#d4af37] text-[#1a1a1a] p-2 rounded-full hover:bg-[#b8941f] transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-[#d4af37] mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-[#ccc] text-lg leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 