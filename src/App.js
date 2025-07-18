import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectCarousel from "./components/ProjectCarousel";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
      <>
        <Header />
        <main style={{ padding: '2rem' }}>
          <section id="projects">
            <ProjectCarousel />
          </section>

          <section id="about">
            <AboutMe />
          </section>


          <section id="contact">
            <Contact></Contact>
          </section>
        </main>
          <Footer />
      </>
  );
}

export default App;
