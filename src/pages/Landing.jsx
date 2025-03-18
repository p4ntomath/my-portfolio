import { useState, useEffect } from "react";
import "./styles/landing.css";
import HunterLicenseCard from "./components/HunterLicenseCard";

function Landing() {
  const [positions, setPositions] = useState([]);

  // Generate random positions within the right 1/3 of the screen
  useEffect(() => {
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
  }, []);

  return (
    <div className="flex items-center justify-center relative min-h-screen">
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
      <div className="w-1/3 hidden md:block  overflow-hidden">
        <div className=" inset-0">
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
            <img src="src/assets/github-icon.png" alt="GitHub" className="w-full h-full" />
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
            <img src="src/assets/linkedin-icon.png" alt="LinkedIn" className="w-full h-full" />
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
            <img src="src/assets/email-icon.jpg" alt="Email" className="w-full h-full" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;