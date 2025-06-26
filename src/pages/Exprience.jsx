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
    <div className="w-full flex flex-col justify-center items-center py-8 relative">
      {/* Top instruction - positioned to be visible above the cards */}
      <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
          <p className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">💼 My Experience</p>
          <p className="text-xs text-gray-600 text-center mt-1">Discover my professional journey and expertise</p>
        </div>
      </div>

      {/* Responsive container with horizontal scroll and overflow visible */}
      <div className="w-full mt-16 px-4 overflow-visible">
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 py-12 overflow-x-auto md:justify-center overflow-y-visible" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex-shrink-0">
            <GreedIslandCard 
              jobTitle="Coding Tutor"
              rank="A-01"
              id="01"
              image={telecardimage}
              desc="Providing peer-to-peer technical guidance and mentorship across Python, C++, data structures, and web development.from beginner to advanced levels"
            />
          </div>
          <div className="flex-shrink-0">
            <GreedIslandCard 
              jobTitle="Academic Tutor"
              rank="S-02"
              id="02"
              image={studycardimage}
              desc="Tutoring Scientific Computing using Python to solve mathematical problems like optimization and root finding,integrating with libraries like NumPy and SciPy"
            />
          </div>
          <div className="flex-shrink-0">
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

      {/* Dot indicators - always visible */}
      <div className="flex justify-center mt-4 md:hidden">
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
                  const gap = 16;
                  container.scrollTo({
                    left: index * (cardWidth + gap),
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
