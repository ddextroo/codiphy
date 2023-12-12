// Importing modules
import "./App.css";
import Nav from './pages/landing/Nav';
import Hero from './pages/landing/hero';
import Objective from './pages/landing/objective';
import Languages from './pages/landing/languages';
import Features from './pages/landing/features';
import Footer from './pages/landing/footer';

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import configParticle from './../../assets/particles.json'

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div className="App font-montserrat">
      <header className="App-header h-40 top-0 sticky md:h-16">
        <Nav/>
      </header>
      <Particles
      id="tsparticles"
      init={particlesInit}

      options={configParticle}
    />
      <Hero/>
      <Objective/>
      <Languages/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;