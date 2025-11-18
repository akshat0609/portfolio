import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App font-sans text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
