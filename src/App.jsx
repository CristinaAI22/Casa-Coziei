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
    <>
      <Navbar />
      <main className="mt-16">
        {/* Sections with IDs for smooth scrolling */}
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
    </>
  );
};

export default App;
