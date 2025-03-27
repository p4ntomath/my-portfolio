import React from 'react';
import { PhoneButtons } from './PhoneButtons.jsx';
import phoneEyeLeft from '../../assets/phoneeye_left.png';
import phoneEyeRight from '../../assets/phoneeye_right.png';
import phoneWingRight from '../../assets/phonewing_right.png';
import phoneWingLeft from '../../assets/phonewing_left.png';
export function Phone() {
  return (
    <div className='relative bottom-5'>
    <img className='relative top-[200px] left-[190px]' src={phoneWingRight} alt="" />
    <img className='relative top-[130px] left-[-70px]' src={phoneWingLeft} alt="" />
      <div className='w-50 flex flex-col items-center justify-center'>
        {/* Top Decorations */}
        <div className='flex justify-end w-full items-center '>
          <div data-svg-wrapper>
            <svg className='relative right-1' width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49 0L97.4974 75H0.502579L49 0Z" fill="#B8244B"/>
            </svg>
          </div>
          <div data-svg-wrapper>
            <svg className='relative left-1' width="98" height="75" viewBox="0 0 98 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49 0L97.4974 75H0.502579L49 0Z" fill="#B8244B"/>
            </svg>
          </div>
        </div>

        {/* Rounded Section with Yellow Circle on Top */}
        <div className="relative bottom-7 left-[2px] w-56 h-32 bg-[var(--secondary)] rounded-full shadow-xl shadow-gray-600">
          {/* Yellow Circle Stacked on Top */}
          <div className="absolute left-17 top-7  transform -translate-x-1/2 w-18 h-14">
          <img className='w-full' src={phoneEyeLeft} alt="phone eye" />
          </div>
          <div className="absolute top-7 right-[-3px] transform -translate-x-1/2 w-18 h-14">
          <img className='w-full' src={phoneEyeRight} alt="phone eye" />
          </div>
        </div>
        {/* Phone Body */}
        <div className="relative bottom-17 left-0.5 w-48 h-96 bg-[var(--secondary)] shadow-xl shadow-gray-600 rounded-b-md">
        <div data-svg-wrapper className='absolute left-[20px] top-[30px]'>
          <svg width="153" height="117" viewBox="0 0 153 117" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H152V116H1V1Z" fill="#94AAC7" stroke="black" stroke-width="2"/>
          </svg>
          <div data-svg-wrapper className='absolute bottom-[108px]'>
            <svg width="153" height="23" viewBox="0 0 153 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 11.5C0 5.14873 5.14873 0 11.5 0H141.5C147.851 0 153 5.14873 153 11.5V11.5C153 17.8513 147.851 23 141.5 23H11.5C5.14873 23 0 17.8513 0 11.5V11.5Z" fill="#B8244B"/>
            </svg>
          </div>
          <div className="absolute bottom-[81px] left-[10px] flex flex-row justify-center items-center">
            <div data-svg-wrapper>
              <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 27L25.9904 0H0.00961876L13 27Z" fill="#D9D9D9"/>
              </svg>
            </div>

            {[...Array(4)].map((_, i) => (
              <div key={i} data-svg-wrapper>
                <svg className='relative bottom-[5px]' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.52628 17.25L19.0526 0H0L9.52628 17.25Z" fill="#D9D9D9"/>
                </svg>
              </div>
            ))}

            <div data-svg-wrapper>
              <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 27L25.9904 0H0.00961876L13 27Z" fill="#D9D9D9"/>
              </svg>
            </div>
          </div>
          </div>
          <PhoneButtons/>
        </div>

      </div>
    </div>
  );
}
