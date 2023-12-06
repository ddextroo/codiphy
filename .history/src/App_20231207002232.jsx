// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from './pages/landing/nav';
import Hero from './pages/landing/hero';
import Objective from './pages/landing/objective';
import Languages from './pages/landing/languages';
import Features from './pages/landing/features';

function App() {

  return (
    <div className="App font-sans">
      <header className="App-header">
        <Nav/>
      </header>
      <Hero/>
      <Objective/>
      <Languages/>
      <Features/>
    </div>
  );
}

export default App;