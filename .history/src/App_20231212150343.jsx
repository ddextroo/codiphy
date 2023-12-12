// Importing modules
import "./App.css";
import Nav from "./pages/landing/Nav";
import Hero from "./pages/landing/hero";
import Objective from "./pages/landing/objective";
import Languages from "./pages/landing/languages";
import Features from "./pages/landing/features";
import Footer from "./pages/landing/footer";

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import confParticle from "./assets/particles.json";

function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [init, setInit] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App font-montserrat">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={confParticle}
          className="absolute w-full h-full z-[-1]"
        />
      )}
      <header className="App-header h-40 top-0 sticky md:h-16">
        <Nav />
      </header>
      <Hero />
      <Objective />
      <Languages />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
