// Importing modules
import { useEffect, useState } from "react";
import "./App.css";
import Nav from './pages/landing/nav';
import Hero from './pages/landing/hero';
import Objective from './pages/landing/objective';
import Languages from './pages/landing/languages';
import Features from './pages/landing/features';
import Footer from './pages/landing/footer';

function App() {
  
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
        console.log(isSticky);
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  


  return (
    <div className="App font-montserrat">
      <header className="App-header h-40 top-0 sticky md:h-16">
        <Nav/>
      </header>
      <Hero/>
      <Objective/>
      <Languages/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;