import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy, faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

export function ContentDisplay({ selectedOption }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, [selectedOption]);

  const content = {
    "Who I Am": {
      icon: "👋",
      title: "Who I Am",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Hello! I'm Mahlatse Rabothata, a passionate developer from Ga-Modjadji, Limpopo.
            My journey in tech started with a fascination for physics and quantum computing,
            which eventually led me to discover my love for software development.
          </p>
          <p className="text-base">
            I believe in creating meaningful solutions that make a difference,
            combining my background in physics with modern software engineering practices.
          </p>
        </div>
      )
    },
    "Education": {
      icon: <FontAwesomeIcon icon={faGraduationCap} className="text-[var(--secondary)]" />,
      title: "Education",
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-[var(--secondary)] pl-4">
            <h3 className="font-bold">BSc Physics and Computer Science</h3>
            <p className="text-sm text-gray-600">University of Limpopo | 2020 - 2023</p>
          </div>
          <div className="border-l-4 border-[var(--secondary)] pl-4">
            <h3 className="font-bold">Relevant Coursework</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Data Structures & Algorithms</li>
              <li>Quantum Computing</li>
              <li>Software Engineering</li>
              <li>Advanced Physics</li>
            </ul>
          </div>
        </div>
      )
    },
    "Achievements": {
      icon: <FontAwesomeIcon icon={faTrophy} className="text-[var(--secondary)]" />,
      title: "Achievements",
      content: (
        <div className="space-y-4">
          <div className="achievement-card p-4 bg-white/80 rounded-lg shadow-md">
            <h3 className="font-bold text-[var(--secondary)]">🏆 Academic Excellence</h3>
            <p className="text-sm">Dean's List | 2021-2023</p>
          </div>
          <div className="achievement-card p-4 bg-white/80 rounded-lg shadow-md">
            <h3 className="font-bold text-[var(--secondary)]">💻 Hackathon Winner</h3>
            <p className="text-sm">First Place | University Tech Challenge 2023</p>
          </div>
        </div>
      )
    },
    "Skills": {
      icon: <FontAwesomeIcon icon={faCode} className="text-[var(--secondary)]" />,
      title: "Skills",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-bold">Frontend</h3>
            <div className="space-y-1">
              <div className="skill-bar">
                <span className="text-sm">React</span>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="text-sm">TypeScript</span>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Backend</h3>
            <div className="space-y-1">
              <div className="skill-bar">
                <span className="text-sm">Node.js</span>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="text-sm">Python</span>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    "Interests": {
      icon: <FontAwesomeIcon icon={faHeart} className="text-[var(--secondary)]" />,
      title: "Interests",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">🔭 Physics</h3>
            <p className="text-sm">Quantum Computing & Theory</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">🎮 Gaming</h3>
            <p className="text-sm">Strategy & RPGs</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">📚 Reading</h3>
            <p className="text-sm">Sci-Fi & Technical</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">🎨 Design</h3>
            <p className="text-sm">UI/UX & Graphics</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className={`transition-all duration-300 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-4 sm:mb-8">
          <span className="text-2xl sm:text-3xl">{typeof content[selectedOption].icon === 'string' ? content[selectedOption].icon : content[selectedOption].icon}</span>
          <h2 className="text-xl sm:text-3xl font-bold text-[var(--secondary)]">{content[selectedOption].title}</h2>
        </div>
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          {content[selectedOption].content}
        </div>

        {/* Mobile Instructions */}
        <div className="mt-6 text-center sm:hidden">
          <p className="text-sm text-gray-600">Use ↑↓ arrows to explore more</p>
        </div>
      </div>
    </div>
  );
}