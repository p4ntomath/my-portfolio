import { useState, useEffect } from "react";
import './styles/Nav.css';
import myLogo from '../assets/logo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <img src={myLogo} className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" alt="P4ntomath" />
            <span className="text-xl font-bold bg-gradient-to-r from-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent">
              P4ntomath
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" isActive={activeSection === "home"}>Home</NavLink>
            <NavLink href="#about" isActive={activeSection === "about"}>About</NavLink>
            <NavLink href="#projects" isActive={activeSection === "projects"}>Projects</NavLink>
            <NavLink href="#experience" isActive={activeSection === "experience"}>Experience</NavLink>
            <NavLink href="#contact" isActive={activeSection === "contact"}>Contact</NavLink>
            <button className="px-4 py-2 text-sm font-medium text-white bg-[var(--secondary)] rounded-lg hover:bg-[var(--tertiary)] transition-colors duration-300">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--secondary)] hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white/90 backdrop-blur-sm divide-y divide-gray-200">
            <div className="px-2 py-3 space-y-1">
              <MobileNavLink href="#home" isActive={activeSection === "home"} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" isActive={activeSection === "about"} onClick={() => setIsOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#projects" isActive={activeSection === "projects"} onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#experience" isActive={activeSection === "experience"} onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
              <MobileNavLink href="#contact" isActive={activeSection === "contact"} onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            </div>
            <div className="px-4 py-3">
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-[var(--secondary)] rounded-lg hover:bg-[var(--tertiary)] transition-colors duration-300">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--secondary)] ${
      isActive ? 'text-[var(--secondary)]' : 'text-gray-700'
    }`}
  >
    {children}
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--secondary)] transform origin-left transition-transform duration-200 ${
      isActive ? 'scale-x-100' : 'scale-x-0'
    }`} />
  </a>
);

const MobileNavLink = ({ href, children, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-[var(--secondary)] bg-gray-50' 
        : 'text-gray-700 hover:text-[var(--secondary)] hover:bg-gray-50'
    }`}
  >
    {children}
  </a>
);

export default Nav;
