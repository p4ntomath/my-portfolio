import {React, useState} from "react";
import { Phone } from "./components/Phone.jsx";
import { ContentDisplay } from "./components/ContentDisplay.jsx";

function About() {
  const [selectedOption, setSelectedOption] = useState('Who I Am');

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12 h-full">
        <div className="grid lg:grid-cols-2 items-center min-h-[calc(100vh-6rem)] gap-8 lg:gap-12">
          {/* Left side - Phone - Moved to left */}
          <div className="flex justify-center lg:justify-start lg:ml-24">
            <div className="transform scale-90 sm:scale-100 transition-transform duration-300 max-w-sm">
              <Phone setSelectedOption={setSelectedOption} />
            </div>
          </div>

          {/* Right side - Content Display - Fixed width container */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl">
              <ContentDisplay selectedOption={selectedOption} />
            </div>
          </div>
        </div>

        {/* Interactive hint - Hidden on mobile */}
        <div className="hidden sm:block absolute top-8 left-1/2 transform -translate-x-1/2 text-center text-gray-600">
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
