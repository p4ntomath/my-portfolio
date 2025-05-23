import {React, useState} from "react";
import { Phone } from "./components/Phone.jsx";
import { ContentDisplay } from "./components/ContentDisplay.jsx";

function About() {
  const [selectedOption, setSelectedOption] = useState('Who I Am');

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[var(--fourth)] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
          {/* Left side - Phone */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Phone setSelectedOption={setSelectedOption} />
            </div>
          </div>

          {/* Right side - Content Display */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-start lg:pt-32">
            <ContentDisplay selectedOption={selectedOption} />
          </div>
        </div>

        {/* Interactive hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-600">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <p className="text-sm">Use the directional pad to navigate</p>
            <p className="text-xs mt-1">↑↓ to move between options</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[var(--secondary)]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[var(--tertiary)]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default About;
