// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <About />
//       <Portfolio />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="content">
          <h1>Akshat Mehta</h1>
          <p>Web Designer </p>
          <div className="scroll-down">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="content">
          <h2>About Me</h2>
          <p>
            I’m a web designer and content creator passionate about creating
            clean, elegant, and user-focused digital experiences.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio-section">
        <div className="content">
          <h2>Portfolio</h2>
          <p>My portfolio highlights projects where I’ve applied my skills in web design, UI/UX, and content creation. From minimalistic layouts to interactive experiences, each design is built with precision and purpose.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="content">
          <h2>Contact</h2>
          <p>
            Let’s collaborate! Feel free to reach out for projects or
            collaborations.
          </p>
          <a href="mailto:akshatmehta220214@acropolis.in" className="contact-link">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
