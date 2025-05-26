import {React, useState} from "react";
import { Phone } from "./components/Phone.jsx";
import { ContentDisplay } from "./components/ContentDisplay.jsx";

function About() {
  const [selectedOption, setSelectedOption] = useState('Who I Am');

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[var(--fourth)] to-white relative overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-12 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] gap-8 lg:gap-24">
          {/* Left side - Phone */}
          <div className="w-full lg:w-auto lg:flex-1 flex justify-center">
            <div className="transform scale-90 sm:scale-100 transition-transform duration-300">
              <Phone setSelectedOption={setSelectedOption} />
            </div>
          </div>

          {/* Right side - Content Display */}
          <div className="w-full lg:w-1/2 lg:flex-1">
            <ContentDisplay selectedOption={selectedOption} />
          </div>
        </div>

        {/* Interactive hint - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-600">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <p className="text-sm">Use the directional pad to navigate</p>
            <p className="text-xs mt-1">↑↓ to move between options</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
