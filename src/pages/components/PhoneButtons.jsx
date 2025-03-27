import React, { useState } from "react";

export function PhoneButtons({onButtonClick }) {
  const buttons = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "*", className: "text-xl" },
    { label: "0", className: "text-xl" },
    { label: "#", className: "text-xl" },
  ];

  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handlePress = (direction) => {
    switch (direction) {
      case "up":
        setTranslateY(-3);
        break;
      case "down":
        setTranslateY(3);
        break;
      case "left":
        setTranslateX(-3);
        break;
      case "right":
        setTranslateX(3);
        break;
      default:
        setTranslateX(0);
        setTranslateY(0);
    }

    // Reset back to center after a short delay
    setTimeout(() => {
      setTranslateX(0);
      setTranslateY(0);
    }, 150);
  };

  return (
    <div className="relative top-[140px] left-[2px] flex flex-col items-center">
      {/* Circular Navigation Buttons */}
      <div className="relative flex items-center justify-center mb-3">
        {/* Left and Right Buttons (Outside Circle) */}
        <button
          className="absolute left-[-45px] w-10 h-7 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold border-[3px] border-yellow-700 shadow-md active:shadow-none active:translate-y-1"
         
        ></button>
        <button
          className="absolute right-[-45px] w-10 h-7 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold border-[3px] border-yellow-700 shadow-md active:shadow-none active:translate-y-1"
          
        ></button>

        {/* Main Circle (Navigation Pad) */}
        <div
          className="relative w-16 top-[8px] h-16 bg-yellow-500 border-[3px] border-yellow-700 rounded-full flex items-center justify-center shadow-md transition-transform duration-150"
          style={{
            transform: `translate(${translateX}px, ${translateY}px)`,
          }}
        >
          {/* Top Button */}
          <button
            className="absolute top-[-2px] w-7 h-4 flex items-center justify-center rounded-full active:shadow-none active:translate-y-1"
            onClick={() => {
              handlePress("up")
              onButtonClick("up");
            }
            }
          ></button>
          {/* Bottom Button */}
          <button
            className="absolute bottom-[-2px] w-7 h-4 flex items-center justify-center rounded-full active:shadow-none active:translate-y-1"
            onClick={() => {
              handlePress("down")
              onButtonClick("down");
            }
            }
          ></button>
          {/* Left Button */}
          <button
            className="absolute left-[-2px] w-4 h-7 flex items-center justify-center rounded-full active:shadow-none active:translate-y-1"
            onClick={() => 
              {
                handlePress("left")
                onButtonClick("left");
              }}
          ></button>
          {/* Right Button */}
          <button
            className="absolute right-[-2px] w-4 h-7 flex items-center justify-center rounded-full active:shadow-none active:translate-y-1"
            onClick={() => 
              {
                handlePress("right")
                onButtonClick("right");
              }}
          ></button>
          {/* Center OK Button */}
          <button className="w-5 h-5 flex items-center justify-center rounded-full active:shadow-none active:translate-y-1">
            <p className="text-xs font-bold">OK</p>
          </button>
        </div>
      </div>

      {/* Number Pad */}
      <div className="relative top-[-8px] grid grid-cols-3 gap-3 p-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`w-10 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-black text-lg font-bold border-[3px] border-yellow-700 shadow-md active:shadow-none active:translate-y-1 ${btn.className}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
