import React from 'react';
import GreedIslandCard from './components/GreedIslandCard';
import telecardimage from '../assets/telecardimage.jpg';
import studycardimage from '../assets/studycardimage.jpg';


export default function Experience() {
  return (
    <div className="w-full flex justify-center items-center py-8 relative">
      {/* Top instruction - positioned to be visible above the cards */}
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-gray-200">
          <p className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">💼 My Experience</p>
          <p className="text-xs text-gray-600 text-center mt-1">Discover my professional journey and expertise</p>
        </div>
      </div>

      {/* Responsive container with horizontal scroll and overflow visible */}
      <div className="w-full mt-16 px-4 overflow-visible">
        <div className="flex py-12 overflow-x-auto md:justify-center overflow-y-visible" 
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
              desc="Freelance developer providing end-to-end solutions for startups and clients,technical consulting on software architecture and design and building scalable web/mobile applications"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
