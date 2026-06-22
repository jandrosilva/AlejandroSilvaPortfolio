import { useScrollEffects } from "./hooks/useScrollEffects";
import { AmbientBackground } from "./components/AmbientBackground";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  const active = useScrollEffects();

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <AmbientBackground />
      <Nav active={active} />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
