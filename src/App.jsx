import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./sections/About";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import ScrollToTopButton from "./components/ScrollToTopBtn";
import Chatbot from "../src/components/Chatbot";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

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

      {/* Floating Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-105"
      >
        Chat
      </button>

      {/* Chatbot Pop-up */}
      {showChatbot && (
        <div className="fixed bottom-16 right-5 w-80 max-w-sm bg-white shadow-xl rounded-lg border border-gray-300 flex flex-col">
          {/* Header */}
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Chat with Us</span>
            <button
              onClick={toggleChatbot}
              className="text-white text-lg font-bold hover:text-gray-200"
            >
              ✖
            </button>
          </div>

          {/* Chatbot Container */}
          <div className="p-4 h-96 overflow-y-auto">
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
