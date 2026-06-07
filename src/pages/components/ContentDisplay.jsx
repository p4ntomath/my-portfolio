import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy, faCode, faHeart, faUser, faLaptopCode, faAtom, faMusic, faGamepad, faCloud } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export function ContentDisplay({ selectedOption }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, [selectedOption]);

  const content = {
    "Who I Am": {
      icon: <FontAwesomeIcon icon={faUser} className="text-[var(--secondary)]" />,
      title: "Who Am I",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Hello! I&apos;m Mahlatse Rabothata, a passionate Computer Science & Applied Mathematics Graduate from Alexandra, Johannesburg, South Africa.
            I completed my BSc degree at the University of the Witwatersrand in December 2025 (Jan 2023 - Dec 2025).
          </p>
          <p className="text-base">
            I specialize in software engineering, data analysis, and systems modeling. With experience in full-stack development and
            academic tutoring, I enjoy creating solutions that bridge technology and real-world problems.
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
            <p className="text-sm text-gray-600">University of the Witwatersrand (Wits) | Feb 2023 - Dec 2025</p>
          </div>
          <div className="border-l-4 border-[var(--secondary)] pl-4">
            <h3 className="font-bold">Relevant Coursework</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Software Design & Mobile Computing</li>
              <li>Data Structures and Analysis of Algorithms</li>
              <li>Scientific Computing & Mathematical Modelling</li>
              <li>Mechanics & Applied Mathematics</li>
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
            <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
              Certificate Of Merit
            </h3>
            <p className="text-sm">Mobile Computing II</p>
          </div>
          <div className="achievement-card p-4 bg-white/80 rounded-lg shadow-md">
            <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-400" />
              Top Achiever 2023
            </h3>
            <p className="text-sm">Knockando Hall Of Residence</p>
          </div>
          <div className="achievement-card p-4 bg-white/80 rounded-lg shadow-md">
            <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-600" />
              Golden Key Honor
            </h3>
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
                <FontAwesomeIcon icon={faLaptopCode} />
                Programming Languages
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Python</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">JavaScript</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Java</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">C++</span>
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

            {/* Web & Mobile Development */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                <FontAwesomeIcon icon={faCode} />
                Web & Mobile Development
              </h3>
              <div className="space-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React.js</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-1">Flutter</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-1">Django</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-1">Express.js</span>
                <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded ml-1">Tailwind CSS</span>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded ml-1">Android Studio</span>
              </div>
            </div>

            {/* Cloud & Database */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                <FontAwesomeIcon icon={faCloud} />
                Cloud & Database
              </h3>
              <div className="space-y-1">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Firebase</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWS</span>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Appwrite</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MySQL</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">NoSQL</span>
              </div>
            </div>

            {/* Scientific Computing & Tools */}
            <div className="space-y-3">
              <h3 className="font-bold text-[var(--secondary)] flex items-center gap-2">
                <FontAwesomeIcon icon={faAtom} />
                Scientific Computing & Tools
              </h3>
              <div className="space-y-1">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">NumPy</span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SciPy</span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">SymPy</span>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MATLAB</span>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Git & GitHub</span>
                <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Figma</span>
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
            <h3 className="font-bold flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faLaptopCode} className="text-[var(--secondary)]" />
              Programming
            </h3>
            <p className="text-sm">Software Development & Problem Solving</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faAtom} className="text-[var(--secondary)]" />
              Computational Physics
            </h3>
            <p className="text-sm">Simulations & Mathematical Modeling</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faGamepad} className="text-[var(--secondary)]" />
              Anime
            </h3>
            <p className="text-sm">Japanese Animation & Culture</p>
          </div>
          <div className="interest-card p-4 bg-white/80 rounded-lg shadow-md text-center">
            <h3 className="font-bold flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faMusic} className="text-[var(--secondary)]" />
              Music Production
            </h3>
            <p className="text-sm">Beat Making & Audio Engineering</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className={`transition-all duration-300 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-6 lg:p-8 shadow-xl w-full max-w-[320px] sm:max-w-[400px] lg:w-[480px] lg:max-w-[480px] flex-shrink-0 mx-auto">
        <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-6 lg:mb-8">
          <span className="text-lg sm:text-2xl lg:text-3xl">{typeof content[selectedOption].icon === 'string' ? content[selectedOption].icon : content[selectedOption].icon}</span>
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold text-[var(--secondary)]">{content[selectedOption].title}</h2>
        </div>
        <div className="prose prose-xs sm:prose-sm lg:prose-base max-w-none">
          {content[selectedOption].content}
        </div>

        {/* Mobile Instructions */}
        <div className="mt-4 sm:mt-6 text-center sm:hidden">
          <p className="text-xs sm:text-sm text-gray-600">Use ↑↓ arrows to explore more</p>
        </div>
      </div>
    </div>
  );
}

ContentDisplay.propTypes = {
  selectedOption: PropTypes.string.isRequired,
};