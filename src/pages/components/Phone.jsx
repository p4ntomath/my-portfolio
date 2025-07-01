import React, { useEffect, useState } from "react";
import { PhoneButtons } from './PhoneButtons.jsx';
import { PhoneScreen } from './PhoneScreen.jsx';
import phoneEyeLeft from '../../assets/phoneeye_left.png';
import phoneEyeRight from '../../assets/phoneeye_right.png';
import phoneWingRight from '../../assets/phonewing_right.png';
import phoneWingLeft from '../../assets/phonewing_left.png';

export function Phone({ setSelectedOption }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuOptions = [
    "Who I Am",
    "Education",
    "Achievements",
    "Skills",
    "Interests",
  ];
  const noOfOptions = menuOptions.length;
  
  useEffect(() => {
    setSelectedOption(menuOptions[selectedIndex]);
  }, [selectedIndex]);

  const onButtonClick = (direction) => {
    if (direction === "up") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (direction === "down") {
      setSelectedIndex((prev) => Math.min(prev + 1, noOfOptions - 1));
    }
  };

  return (
    <div className='relative transform translate-y-12 pt-4'>
      {/* Wing decorations */}
      <img className='absolute top-[30px] left-[180px] w-32 object-contain z-10' src={phoneWingRight} alt="" />
      <img className='absolute top-[30px] left-[-100px] w-32 object-contain z-10' src={phoneWingLeft} alt="" />
      
      <div className='w-50 flex flex-col items-center justify-center'>
        {/* Top Decorations */}
        <div className='flex justify-end w-full items-center'>
          <div className='relative right-1'>
            <svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49 0L97.4974 75H0.502579L49 0Z" fill="#B8244B"/>
            </svg>
          </div>
          <div className='relative left-1'>
            <svg width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49 0L97.4974 75H0.502579L49 0Z" fill="#B8244B"/>
            </svg>
          </div>
        </div>

        {/* Rounded Section with Eyes */}
        <div className="relative bottom-7 left-[2px] w-56 h-32 bg-[var(--secondary)] rounded-full shadow-xl">
          <div className="absolute left-17 top-7 transform -translate-x-1/2 w-18 h-14">
            <img className='w-full filter drop-shadow-lg' src={phoneEyeLeft} alt="phone eye" />
          </div>
          <div className="absolute top-7 right-[-3px] transform -translate-x-1/2 w-18 h-14">
            <img className='w-full filter drop-shadow-lg' src={phoneEyeRight} alt="phone eye" />
          </div>
        </div>

        {/* Phone Body */}
        <div className="relative bottom-16 left-0.5 w-48 h-[420px] shadow-xl rounded-b-md
          before:absolute before:inset-0 before:bg-black/10 before:rounded-b-md bg-[#c72d56]">
          {/* Phone Screen */}
          <PhoneScreen 
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          {/* Phone Buttons */}
          <PhoneButtons onButtonClick={onButtonClick}/>
        </div>
      </div>
    </div>
  );
}
