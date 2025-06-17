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
      title: "Who Am I",
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
            <h3 className="font-bold">Bachelor of Science (BSc)</h3>
            <p className="text-sm text-gray-600">Major: Computer Science & Applied Mathematics</p>
            <p className="text-sm text-gray-600">University of the Witwatersrand (Wits) | Expected Graduation: 2026</p>
          </div>
          <div className="border-l-4 border-[var(--secondary)] pl-4">
            <h3 className="font-bold">Relevant Coursework</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Software Design</li>
              <li>Mobile Computing</li>
              <li>Scientific Computing</li>
              <li>Data Structures and Analysis of Algorithms</li>
              <li>Mechanics & Mathematical Modelling</li>
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
            <h3 className="font-bold text-[var(--secondary)]">🏆 Certificate Of Merit</h3>
            <p className="text-sm">Mobile Computing II</p>
          </div>
          <div className="achievement-card p-4 bg-white/80 rounded-lg shadow-md">
            <h3 className="font-bold text-[var(--secondary)]">🌟 Top Achiever 2023</h3>
            <p className="text-sm">Knockando Hall Of Residence</p>
          </div>
          <div className="achievement-card p-4 bg-white/80 rounded-lg shadow-md">
            <h3 className="font-bold text-[var(--secondary)]">🔑 Golden Key Honor</h3>
            <p className="text-sm">Academic Excellence Recognition</p>
          </div>
        </div>
      )
    },
    "Skills": {
      icon: <FontAwesomeIcon icon={faCode} className="text-[var(--secondary)]" />,
      title: "Skills",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Programming Languages */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                💻 Programming Languages
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">JavaScript / TypeScript</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Python</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">C++</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Java</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SQL</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                🌐 Web Development
              </h3>
              <div className="space-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React.js</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-1">Vite</span>
                <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded ml-1">Tailwind CSS</span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded ml-1">Bootstrap</span>
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded ml-1">Firebase</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-1">REST APIs</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-1">Node.js</span>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                🛠️ Tools & Platforms
              </h3>
              <div className="space-y-1">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Git & GitHub</span>
                <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded ml-1">Figma</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-1">VS Code</span>
              </div>
            </div>

            {/* Mathematics & Scientific Computing */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                🔬 Mathematics & Scientific Computing
              </h3>
              <div className="space-y-1">
                <div className="space-y-1">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MATLAB</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-1">SciPy</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-1">NumPy</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-1">SymPy</span>
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
            <h3 className="font-bold">💻 Programming</h3>
            <p className="text-sm">Software Development & Problem Solving</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">🔬 Computational Physics</h3>
            <p className="text-sm">Simulations & Mathematical Modeling</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">🌸 Anime</h3>
            <p className="text-sm">Japanese Animation & Culture</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold">🎵 Music Production</h3>
            <p className="text-sm">Beat Making & Audio Engineering</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className={`transition-all duration-300 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-xl w-[480px] flex-shrink-0">
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