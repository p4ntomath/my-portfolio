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

        {/* Screen Title Bar */}
        <div className="absolute top-1 left-1 right-1 h-6 flex items-center justify-between px-2 border-b border-[#2C3E50]/20">
          <h2 className="font-text text-xs font-bold text-[#2C3E50]">Menu</h2>
          <span className="text-xs">⚡</span>
        </div>

        {/* Screen Content with Scrollable Navigation */}
        <div className="absolute top-8 bottom-1 left-1 right-1 flex flex-col">
          {/* Scrollable Menu (Hidden Scrollbar) */}
          <div 
            ref={menuRef}
            className="flex-1 overflow-y-auto space-y-1 text-black text-sm no-scrollbar px-2"
          >
            {menuOptions.map((option, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`font-text font-bold py-1.5 px-2 text-left cursor-pointer rounded
                  transition-all duration-200 transform hover:scale-[1.02]
                  ${selectedIndex === index
                    ? "bg-[#2C3E50] text-white shadow-md"
                    : "hover:bg-[#86A0C3]/20"
                  }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-xs transition-opacity duration-200 ${
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
          <div className="h-6 mt-1 px-2 pt-1 border-t border-[#2C3E50]/20">
            <div className="font-text text-xs font-bold text-[#2C3E50] flex items-center justify-between">
              <span>{selectedIndex + 1}/{menuOptions.length}</span>
              <span className="text-[10px]">Use ↑↓ to navigate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
