"use client";

import { useState, useEffect, useRef } from "react";

export default function InfiniteGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cleanup: ensure body scroll is restored if component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const galleryItems = [
    {
      image: "./beard-trimming.jpg",
      title: "Beard Styling",
      description: "Expert beard trimming and shaping with precision tools and techniques for the perfect look."
    },
    {
      image: "./classic-barbering.jpg",
      title: "Classic Barbering",
      description: "Traditional barbering methods combined with modern styling for timeless results."
    },
    {
      image: "./hair-styling.jpg",
      title: "Hair Styling",
      description: "Professional hair styling and finishing touches using premium products and techniques."
    },
    {
      image: "./grooming-service.jpg",
      title: "Grooming Service",
      description: "Complete grooming packages tailored to your personal style and preferences."
    },
    {
      image: "./professional-cut.jpg",
      title: "Professional Cut",
      description: "Precision cuts with attention to detail and personalized consultation for every client."
    }
  ];

  // Triple the items for seamless infinite scroll
  const infiniteItems = [...galleryItems, ...galleryItems, ...galleryItems];

  // Initialize scroll position to middle for infinite scroll
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = 320 + 24; // 320px card + 24px gap
    const singleSetWidth = galleryItems.length * cardWidth;
    
    // Set initial position to the middle set to allow scrolling in both directions
    container.scrollLeft = singleSetWidth;
  }, [galleryItems.length]);

  // Auto-scroll effect for infinite scroll (slower speed)
  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const container = containerRef.current;
    const cardWidth = 320 + 24; // 320px card + 24px gap
    const singleSetWidth = galleryItems.length * cardWidth;
    
    let animationId: number;
    let lastTime = 0;
    const speed = 0.15; // Much slower speed - was 0.5, now 0.15

    const animate = (currentTime: number) => {
      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      container.scrollLeft += speed * deltaTime;

      // Reset scroll position when we've scrolled past one full set
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, galleryItems.length]);

  // Handle infinite scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = 320 + 24; // 320px card + 24px gap
    const singleSetWidth = galleryItems.length * cardWidth;

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      } else if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [galleryItems.length]);

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedIndex(null);
    setIsPaused(false);
    // Restore page scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  const openModal = (item: any, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsPaused(true);
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

  const handleGalleryClick = () => {
    if (!selectedItem) {
      setIsPaused(!isPaused);
    }
  };



  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 max-sm:px-2">
                 <div className="text-center mb-16">
           <h2 className="text-4xl max-sm:text-3xl font-bold text-[#fff] mb-4">
             Our Work Speaks
           </h2>
           <p className="text-xl text-[#ccc] max-w-2xl mx-auto mb-4">
             Experience the artistry and precision that sets North Country Cuts apart
           </p>
                       <div 
              className="flex items-center justify-center gap-2 text-sm text-[#888] cursor-pointer hover:text-[#d4af37] transition-colors duration-300"
              onClick={handleGalleryClick}
            >
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isPaused ? 'bg-[#d4af37]' : 'bg-[#444]'}`} />
              <span>{isPaused ? 'Paused - Click to resume' : 'Click to pause'}</span>
            </div>
         </div>
        
                 {/* Infinite Scrollable Gallery */}
         <div className="relative max-w-6xl mx-auto">

          {/* Gallery container with gradient masks */}
          <div className="relative overflow-hidden rounded-xl">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#2a2a2a] to-transparent pointer-events-none z-10" />
            
                         {/* Infinite scroll container */}
                                                       <div 
                 ref={containerRef}
                 className="flex gap-6 overflow-x-auto scrollbar-hide px-32 py-4"
                 style={{ 
                   userSelect: 'none',
                   scrollbarWidth: 'none',
                   msOverflowStyle: 'none'
                 }}
               >
              {infiniteItems.map((item, index) => {
                const actualIndex = index % galleryItems.length;
                const isSelected = selectedIndex !== null && actualIndex === (selectedIndex % galleryItems.length);
                
                return (
                  <div
                    key={index}
                    onClick={() => openModal(item, actualIndex)}
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
                       <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                         isSelected ? 'text-[#d4af37]' : 'text-[#fff] group-hover:text-[#d4af37]'
                       }`}>
                         {item.title}
                       </h3>
                       <p className="text-[#ccc] text-sm leading-relaxed">
                         {item.description}
                       </p>
                     </div>
                  </div>
                );
              })}
            </div>
          </div>

          
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