import React, { useRef, useEffect } from "react";
import '../styles/Phone.css';

export function PhoneScreen({ selectedIndex, setSelectedIndex }) {
  const menuOptions = [
    "Who I Am",
    "Education",
    "Achievements",
    "Skills",
    "Interests",
  ];

  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (selectedIndex === 0 && menuRef.current) {
      menuRef.current.scrollTop = 0;
    } else if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div className="absolute left-[20px] top-[30px] select-none">
      {/* Screen Background */}
      <div className="relative">
        <svg
          width="153"
          height="117"
          viewBox="0 0 153 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          <path 
            d="M1 1H152V116H1V1Z" 
            fill="#94AAC7" 
            stroke="#2C3E50"
            strokeWidth="2"
          />
          {/* Grid Pattern */}
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path 
              d="M 10 0 L 0 0 0 10" 
              fill="none" 
              stroke="#86A0C3" 
              strokeWidth="0.5" 
              opacity="0.3"
            />
          </pattern>
          <rect width="153" height="117" fill="url(#grid)" />
        </svg>

        {/* Screen Content with Scrollable Navigation */}
        <div className="absolute bottom-[-1px] left-[3px] w-37 h-26 flex flex-col p-2">
          {/* Scrollable Menu (Hidden Scrollbar) */}
          <div 
            ref={menuRef}
            className="min-w-full overflow-y-auto space-y-1 text-black text-sm no-scrollbar"
          >
            {menuOptions.map((option, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`min-w-full font-text font-bold px-2 py-1 text-left cursor-pointer
                  transition-all duration-200 transform hover:scale-105
                  ${selectedIndex === index
                    ? "bg-[#2C3E50] text-white shadow-md"
                    : "hover:bg-[#86A0C3]/20"
                  }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex items-center space-x-2">
                  <span className={`transition-opacity duration-200 ${
                    selectedIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    ▶
                  </span>
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Status Bar */}
          <div className="mt-auto pt-1 border-t border-[#2C3E50]/20">
            <h1 className="font-text text-xs font-bold py-0 flex items-center justify-between text-[#2C3E50]">
              <span>Options: {selectedIndex + 1}/{menuOptions.length}</span>
              <span className="animate-pulse">⚡</span>
            </h1>
          </div>
        </div>

        {/* Screen Decorative Elements */}
        {/* Navigation Indicators */}
        <div className="absolute bottom-[90px] left-[1px] flex flex-row justify-center items-center space-x-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-300 transform
                1'scale-100 brightness-90'`}
            >
              <svg
                className={`relative ${i > 0 && i < 5 ? 'bottom-[5px] w-5 h-4' : 'w-6 h-6'}`}
                viewBox={i > 0 && i < 5 ? '0 0 20 18' : '0 0 26 27'}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={i > 0 && i < 5
                    ? "M9.52628 17.25L19.0526 0H0L9.52628 17.25Z"
                    : "M13 27L25.9904 0H0.00961876L13 27Z"}
                  fill="#D9D9D9"
                  className="transition-colors duration-300"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
