import Nav from './pages/Nav';
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <Nav />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section id="home" className="h-screen flex items-center justify-center bg-[var(--fourth)] snap-start">
         <Landing/>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-gray-200 snap-start">
          <h1 className="text-4xl font-bold">About Me</h1>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-gray-300 snap-start">
          <h1 className="text-4xl font-bold">Projects</h1>
        </section>

        <section id="experience" className="h-screen flex items-center justify-center bg-gray-400 snap-start">
          <h1 className="text-4xl font-bold">Experience</h1>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-gray-500 snap-start">
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;
