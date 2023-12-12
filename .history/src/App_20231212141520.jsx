// Importing modules
import "./App.css";
import Nav from "./pages/landing/Nav";
import Hero from "./pages/landing/hero";
import Objective from "./pages/landing/objective";
import Languages from "./pages/landing/languages";
import Features from "./pages/landing/features";
import Footer from "./pages/landing/footer";


function App() {
  
  return (
    <div className="App font-montserrat">
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
