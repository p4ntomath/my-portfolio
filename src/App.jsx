import Nav from './pages/Nav';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <>
      <Nav />
      <main className="h-screen overflow-y-scroll scroll-smooth">
        <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-[var(--fourth)]">
          <Landing />
        </section>

        <section id="about" className="min-h-[100dvh] flex items-center justify-center bg-[var(--fourth)]">
          <About />
        </section>

        <section id="projects" className="min-h-[100dvh] flex items-center justify-center bg-gray-300">
          <h1 className="text-4xl font-bold">Projects</h1>
        </section>

        <section id="experience" className="min-h-[100dvh] flex items-center justify-center bg-gray-400">
          <h1 className="text-4xl font-bold">Experience</h1>
        </section>

        <section id="contact" className="min-h-[100dvh] flex items-center justify-center bg-gray-500">
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;
