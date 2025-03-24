import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="mt-16">
        {/* Sections with ids for smooth scrolling */}
        <section id="hero">
          <HeroSection />
        </section>
        <section id="main">
          <MainPage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="location">
          <Location />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </Router>
  );
};

export default App;
