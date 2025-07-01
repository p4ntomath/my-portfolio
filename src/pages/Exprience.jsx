import React, { useState, useRef, useEffect } from 'react';
import GreedIslandCard from './components/GreedIslandCard';
import telecardimage from '../assets/telecardimage.jpg';
import studycardimage from '../assets/studycardimage.jpg';
import deliverycardimage from '../assets/deliverycardimage.jpg'; // Assuming you have a delivery card image


export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0].offsetWidth;
      const gap = 16; // gap-4 = 16px
      const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(Math.max(currentIndex, 0), 2)); // 0-2 for 3 cards
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center pb-3 relative min-h-screen">
      {/* Top instruction - positioned to be visible above the cards */}
      <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
          <p className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">💼 My Experience</p>
          <p className="text-xs text-gray-600 text-center mt-1">Discover my professional journey and expertise</p>
        </div>
      </div>

      {/* Responsive container with proper padding for different screen sizes */}
      <div className="w-full mt-1 overflow-visible">
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 lg:gap-8 py-8 md:py-12 overflow-x-auto lg:justify-center overflow-y-visible snap-x snap-mandatory pl-4 md:pl-8 lg:pl-16 pr-4 md:pr-8 lg:pr-16" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollPadding: '0 2rem',
          }}
        >
          <div className="flex-shrink-0 snap-center">
            <GreedIslandCard 
              jobTitle="Coding Tutor"
              rank="A-01"
              id="01"
              image={telecardimage}
              desc="Providing peer-to-peer technical guidance and mentorship across Python, C++, data structures, and web development.from beginner to advanced levels"
            />
          </div>
          <div className="flex-shrink-0 snap-center">
            <GreedIslandCard 
              jobTitle="Academic Tutor"
              rank="S-02"
              id="02"
              image={studycardimage}
              desc="Tutoring Scientific Computing using Python to solve mathematical problems like optimization and root finding,integrating with libraries like NumPy and SciPy"
            />
          </div>
          <div className="flex-shrink-0 snap-center">
            <GreedIslandCard 
              jobTitle="Full-Stack Developer"
              rank="SS-03"
              id="03"
              image={deliverycardimage}
              desc="Freelance developer providing end-to-end solutions for startups and clients,technical consulting on software architecture and design and building scalable web/mobile applications"
            />
          </div>
        </div>
      </div>

      {/* Dot indicators - visible on mobile and tablet */}
      <div className="flex justify-center lg:hidden">
        <div className="flex gap-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const cardWidth = container.children[0].offsetWidth;
                  const gap = window.innerWidth >= 768 ? 24 : 16; // Responsive gap
                  const padding = window.innerWidth >= 768 ? 32 : 16; // Account for left padding
                  container.scrollTo({
                    left: index * (cardWidth + gap) - (index === 0 ? 0 : padding),
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
