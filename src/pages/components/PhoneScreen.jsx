import React, { useRef ,useEffect} from "react";
import '../styles/Phone.css';

export function PhoneScreen({ selectedIndex, setSelectedIndex }) {
  const menuOptions = [
    "📞 Contacts",
    "📩 Messages",
    "🌐 Internet",
    "⚙️ Settings",
    "🎵 Music",
    "📁 Files",
    "📷 Camera",
    "📅 Calendar",
  ];

  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div data-svg-wrapper className="absolute left-[20px] top-[30px]">
      <svg
        width="153"
        height="117"
        viewBox="0 0 153 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1H152V116H1V1Z" fill="#94AAC7" stroke="black" />
      </svg>

      {/* Screen Content with Scrollable Navigation */}
      <div className="absolute bottom-[2px] left-[3px] w-37 h-30 flex flex-col p-2">
        {/* Scrollable Menu (Hidden Scrollbar) */}
        <div className="w-full overflow-y-auto space-y-1 text-black text-sm no-scrollbar">
        <div className="h-4" />
          {menuOptions.map((option, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`px-2 py-1 rounded-l text-left cursor-pointer ${
                selectedIndex === index
                  ? "bg-yellow-300 border-l-4 border-black"
                  : "bg-yellow-200"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      {/* Screen Teeth */}
      <div data-svg-wrapper className="absolute bottom-[108px] z">
        <svg
          width="153"
          height="23"
          viewBox="0 0 153 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11.5C0 5.14873 5.14873 0 11.5 0H141.5C147.851 0 153 5.14873 153 11.5V11.5C153 17.8513 147.851 23 141.5 23H11.5C5.14873 23 0 17.8513 0 11.5V11.5Z"
            fill="#B8244B"
          />
        </svg>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-[81px] left-[10px] flex flex-row justify-center items-center">
        <div data-svg-wrapper>
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 27L25.9904 0H0.00961876L13 27Z" fill="#D9D9D9" />
          </svg>
        </div>

        {[...Array(4)].map((_, i) => (
          <div key={i} data-svg-wrapper>
            <svg
              className="relative bottom-[5px]"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.52628 17.25L19.0526 0H0L9.52628 17.25Z" fill="#D9D9D9" />
            </svg>
          </div>
        ))}

        <div data-svg-wrapper>
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 27L25.9904 0H0.00961876L13 27Z" fill="#D9D9D9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
