import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./sections/About";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import ScrollToTopButton from "./components/ScrollToTopBtn";

const App = () => {
  return (
    <>
      <main className="pt-0">
        <Header />
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
      <ScrollToTopButton />
    </>
  );
};

export default App;
