import { useState, useEffect, useRef } from "react";
import "./styles/landing.css";
import HunterLicenseCard from "./components/HunterLicenseCard";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import emailIcon from "../assets/email-icon.jpg";


function Landing() {
  const [positions, setPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const landingRef = useRef(null);

  // Detect when Landing component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (landingRef.current) {
      observer.observe(landingRef.current);
    }

    return () => {
      if (landingRef.current) {
        observer.unobserve(landingRef.current);
      }
    };
  }, []);

  // Generate random positions within the right 1/3 of the screen
  useEffect(() => {
    if (!isVisible) return; // Stop updating positions when off-screen

    const generatePositions = () => {
      const newPositions = [];
      for (let i = 0; i < 3; i++) {
        const x = 70 + Math.random() * 20;
        const y = 20 + Math.random() * 60;
        newPositions.push({ x, y });
      }
      setPositions(newPositions);
    };

    generatePositions();
    const interval = setInterval(generatePositions, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={landingRef} className="flex items-center justify-center relative min-h-screen">
      {/* Left Side Content */}
      <div className="hidden md:block m-8 w-1/3">
        <h2 className="text-2xl font-bold">Welcome To My Portfolio</h2>
        <p className="mt-2 text-xs text-gray-600">
          Explore my work, skills, and projects that highlight my passion for technology and design. Feel free to browse and discover how I can help bring your ideas to life!
        </p>
      </div>

      {/* Hunter License Card */}
      <div className="relative">
        <HunterLicenseCard />
      </div>

      {/* Floating Icons Container */}
      <div className="w-1/3 hidden md:block overflow-hidden">
        <div className="inset-0">
          <a
            href="https://github.com/p4ntomath"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              left: `${positions[0]?.x || 70}%`,
              top: `${positions[0]?.y || 50}%`,
              transition: "left 5s, top 5s",
            }}
            className="w-8 h-8 hover:opacity-75"
          >
            <img src={githubIcon} alt="GitHub" className="w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahlatse-rabothata-14641a287/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              left: `${positions[1]?.x || 75}%`,
              top: `${positions[1]?.y || 55}%`,
              transition: "left 5s, top 5s",
            }}
            className="w-8 h-8 hover:opacity-75"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
          </a>
          <a
            href="mailto:morwawarabothata5@gmail.com"
            style={{
              position: "absolute",
              left: `${positions[2]?.x || 80}%`,
              top: `${positions[2]?.y || 60}%`,
              transition: "left 5s, top 5s",
            }}
            className="w-8 h-8 hover:opacity-75"
          >
            <img src={emailIcon} alt="Email" className="w-full h-full" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
