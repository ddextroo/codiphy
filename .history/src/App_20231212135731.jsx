// Importing modules
import "./App.css";
import Nav from './pages/landing/Nav';
import Hero from './pages/landing/hero';
import Objective from './pages/landing/objective';
import Languages from './pages/landing/languages';
import Features from './pages/landing/features';
import Footer from './pages/landing/footer';

import { loadFull } from "tsparticles";
import configParticle from './assets/particles.json'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";

function App() {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadFull(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
};
  return (
    <div className="App font-montserrat">
      <header className="App-header h-40 top-0 sticky md:h-16">
        <Nav/>
      </header>
      { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={configParticle}
        />
}
      <Hero/>
      <Objective/>
      <Languages/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;