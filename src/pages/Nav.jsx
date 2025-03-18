import { useState, useEffect } from "react"; // Added useEffect import
import './styles/Nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section when it's in view
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      // Cleanup observer
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="main-nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src\assets\logo.png" className="h-5" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">P4ntomath</span>
        </a>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          {screen.availWidth > 400?           <button
            type="button"
            className="resume-button"
          >
            My Resume
          </button>:null}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="menu-button"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
          <ul className="ul-list">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === "home" ? "selected" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === "about" ? "selected" : ""}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === "projects" ? "selected" : ""}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`nav-link ${activeSection === "experience" ? "selected" : ""}`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "selected" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
