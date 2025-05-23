import React, { useState, useEffect } from "react";

export function PhoneButtons({ onButtonClick }) {
  const buttons = [
    { label: "1", sound: "key1" },
    { label: "2", sound: "key2" },
    { label: "3", sound: "key3" },
    { label: "4", sound: "key4" },
    { label: "5", sound: "key5" },
    { label: "6", sound: "key6" },
    { label: "7", sound: "key7" },
    { label: "8", sound: "key8" },
    { label: "9", sound: "key9" },
    { label: "*", sound: "keystar", className: "text-xl" },
    { label: "0", sound: "key0", className: "text-xl" },
    { label: "#", sound: "keyhash", className: "text-xl" },
  ];

  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  // Create audio context on first interaction
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    return () => {
      if (context) {
        context.close();
      }
    };
  }, []);

  const playTone = (frequency = 440, duration = 0.1) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  };

  const handlePress = (direction) => {
    setActiveButton(direction);

    // Different tones for different directions
    const tones = {
      up: 880,
      down: 660,
      left: 440,
      right: 550,
    };

    playTone(tones[direction]);

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

    // Reset position and active state after animation
    setTimeout(() => {
      setTranslateX(0);
      setTranslateY(0);
      setActiveButton(null);
    }, 150);
  };

  const handleNumpadPress = (button) => {
    playTone(440 + (parseInt(button.label) || 0) * 50);
  };

  return (
    <div className="relative top-[140px] left-[2px] flex flex-col items-center">
      {/* Circular Navigation Buttons */}
      <div className="relative flex items-center justify-center mb-3">
        {/* Left and Right Buttons */}
        <button
          className={`absolute left-[-45px] w-10 h-7 flex items-center justify-center rounded-full 
          bg-yellow-500 text-black font-bold border-[3px] border-yellow-700 
          shadow-md transition-all duration-150
          ${
            activeButton === "left"
              ? "transform scale-95 shadow-inner bg-yellow-600"
              : "hover:bg-yellow-400"
          }`}
          onClick={() => {
            handlePress("left");
            onButtonClick("left");
          }}
        >
          <span className="transform -translate-x-1"></span>
        </button>
        <button
          className={`absolute right-[-45px] w-10 h-7 flex items-center justify-center rounded-full 
          bg-yellow-500 text-black font-bold border-[3px] border-yellow-700 
          shadow-md transition-all duration-150
          ${
            activeButton === "right"
              ? "transform scale-95 shadow-inner bg-yellow-600"
              : "hover:bg-yellow-400"
          }`}
          onClick={() => {
            handlePress("right");
            onButtonClick("right");
          }}
        >
          <span className="transform translate-x-1"></span>
        </button>

        {/* Main Circle (Navigation Pad) */}
        <div
          className="relative w-16 top-[8px] h-16 bg-yellow-500 border-[3px] border-yellow-700 rounded-full flex items-center justify-center shadow-md transition-all duration-150"
          style={{
            transform: `translate(${translateX}px, ${translateY}px)`,
          }}
        >
          {/* Top Button */}
          <button
            className="absolute top-[-2px] w-7 h-4 flex items
            center justify-center rounded-full transition-all duration-150 transform scale-95 shadow-inner "
            
            onClick={() => {
              handlePress("up");
              onButtonClick("up");
            }}
          >
            <span className="transform -translate-y-1">▲</span>
          </button>
          {/* Bottom Button */}
          <button
            className="absolute bottom-[-2px] w-7 h-4 flex items-center justify-center rounded-full transition-all duration-150
             transform scale-95 shadow-inner"
            onClick={() => {
              handlePress("down");
              onButtonClick("down");
            }}
          >
            <span className="transform top-translate-y-1">▼</span>
          </button>
          {/* Center OK Button */}
          <button
            className="w-5 h-5 flex items-center justify-center rounded-full  
            hover:bg-yellow-700 active:transform active:scale-95 transition-all duration-150"
            onClick={() => playTone(660, 0.2)}
          >
            <p className="text-xs font-bold text-yellow-100">OK</p>
          </button>
        </div>
      </div>

      {/* Number Pad */}
      <div className="relative top-[-8px] grid grid-cols-3 gap-3 p-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleNumpadPress(btn)}
            className={`w-10 h-8 flex items-center justify-center rounded-full 
            bg-yellow-500 text-black text-lg font-bold border-[3px] border-yellow-700 
            shadow-md hover:bg-yellow-400 active:transform active:scale-95 
            active:shadow-inner active:bg-yellow-600 transition-all duration-150 ${btn.className}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
