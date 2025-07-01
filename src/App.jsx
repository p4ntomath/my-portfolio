import Nav from './pages/Nav';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Exprience from './pages/Exprience';
import Contact from './pages/Contact';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main className="h-screen overflow-y-scroll scroll-smooth">
        <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-[var(--fourth)]/80 via-[var(--fourth)]/60 to-[var(--fourth)]/40 transition-all duration-1000 ease-in-out">
          <Landing />
        </section>

        <section id="about" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-[var(--fourth)]/40 via-[var(--fourth)]/50 to-[var(--fourth)]/30 transition-all duration-1000 ease-in-out">
          <About />
        </section>

        <section id="projects" className=" min-h-fit flex items-center justify-center bg-gradient-to-b from-[var(--fourth)]/30 via-[var(--fourth)]/40 to-[var(--fourth)]/20 transition-all duration-1000 ease-in-out relative py-8">
          <Projects />
        </section>

        <section id="experience" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-[var(--fourth)]/20 via-[var(--fourth)]/35 to-[var(--fourth)]/25 transition-all duration-1000 ease-in-out">
          <Exprience />
        </section>

        <section id="contact" className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-[var(--fourth)]/25 via-[var(--fourth)]/30 to-white/95 transition-all duration-1000 ease-in-out">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
