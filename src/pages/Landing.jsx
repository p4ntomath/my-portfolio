import { useState, useEffect, useRef } from "react";
import "./styles/landing.css";
import HunterLicenseCard from "./components/HunterLicenseCard";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import emailIcon from "../assets/email-icon.jpg";
import whatsappIcon from "../assets/whatsapp-icon.png";
import phoneIcon from "../assets/phone-icon.png";


function Landing() {
  const [positions, setPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const landingRef = useRef(null);
  const animationRef = useRef(null);

  const socialLinks = [
    { href: "https://github.com/p4ntomath", icon: githubIcon, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/mahlatse-rabothata-14641a287/", icon: linkedinIcon, alt: "LinkedIn" },
    { href: "mailto:morwawarabothata5@gmail.com", icon: emailIcon, alt: "Email" },
    { href: "https://wa.me/0630311427", icon: whatsappIcon, alt: "WhatsApp" },
    { href: "tel:+27630311427", icon: phoneIcon, alt: "Phone" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (landingRef.current) {
      observer.observe(landingRef.current);
    }

    return () => {
      if (landingRef.current) observer.unobserve(landingRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const generatePositions = () => {
      const newPositions = socialLinks.map((_, index) => {
        // Base positions that look good visually - increased spread for desktop
        const baseX = window.innerWidth < 768 ? 50 : 50; // Center the base position
        const spreadX = window.innerWidth < 768 ? 40 : 60; // Increased spread from 20 to 60
        
        // Add some randomization but keep it contained
        const x = baseX + (Math.random() - 0.5) * spreadX;
        const y = 20 + Math.random() * 60;

        // Add smooth transitions
        return {
          x,
          y,
          transition: `all ${2 + Math.random()}s ease-in-out`
        };
      });

      setPositions(newPositions);
    };

    // Initial positions
    generatePositions();

    // Set up the interval for continuous movement
    const intervalId = setInterval(generatePositions, 3000);
    animationRef.current = intervalId;

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={landingRef} className="min-h-[100dvh] w-full flex items-center justify-center py-16 md:py-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        {/* Content Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent">
            Welcome To My Portfolio
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Explore my work, skills, and projects that highlight my passion for technology and design. 
            Feel free to browse and discover how I can help bring your ideas to life!
          </p>
        </div>

        {/* Card Section */}
        <div className="order-1 lg:order-2 w-full sm:w-auto flex justify-center items-center">
          <div className="transform scale-85 sm:scale-90 lg:scale-100 transition-transform duration-300 hover:scale-[1.02]">
            <HunterLicenseCard />
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="w-1/2 hidden lg:block relative h-[400px] order-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute transition-all duration-500 hover:scale-110"
              style={{
                left: `${positions[index]?.x || 50 + index * 5}%`,
                top: `${positions[index]?.y || 50}%`,
                transform: 'translate(-50%, -50%)',
                transition: positions[index]?.transition || 'all 2s ease-in-out'
              }}
            >
              <img 
                src={social.icon} 
                alt={social.alt} 
                className="w-10 h-10 filter hover:brightness-110 transition-all duration-300" 
              />
            </a>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex lg:hidden justify-center gap-4 mt-4 order-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 hover:opacity-75 transition-all duration-300 hover:scale-110"
            >
              <img src={social.icon} alt={social.alt} className="w-full h-full" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;