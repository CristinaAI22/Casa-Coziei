import React, { useState, useRef, useEffect } from "react";
import food10 from "../assets/food10.jpg";
import platou from "../assets/platou.jpg";
import food4 from "../assets/food4.jpg";
import roxana from "../assets/roxana.jpg"; // Add an image of Roxana

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <section id="about" className="py-16 bg-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Despre noi</h2>

        <p className="mt-4 text-lg text-gray-600 text-justify">
          Suntem o familie tânără care locuiește în Brezoi, micul orășel de
          munte de pe valea Lotrului. Casa noastră se află în satul Văratica,
          așezat chiar sub masivul Cozia. Povestea a început când Roxana, gazda
          primitoare și îndemânatică, s-a apucat să coacă pâine, să facă cele
          mai delicioase ciorbe, să combine rețete locale cu ingrediente noi, să
          împletească cozonaci, să facă murături, vișinată, limonadă.
          <br />
          <button
            onClick={() => setIsOpen(true)}
            className="text-blue-600 font-semibold underline hover:text-blue-800 transition duration-300"
          >
            Citește mai mult despre Roxana
          </button>
        </p>
      </div>

      <div className="flex justify-center mt-8 gap-x-10">
        <img src={food10} alt="About Casa Coziei" className="w-72 h-auto object-cover rounded-lg shadow-lg" />
        <img src={platou} alt="Platou1" className="w-72 h-auto object-cover rounded-lg" />
        <img src={food4} alt="Terasa" className="w-72 h-auto object-cover rounded-lg" />
      </div>

      {/* Modal (Same Position as Your Version) */}
      {isOpen && (
        <div className="absolute left-1/2 top-20 transform -translate-x-1/2 w-[700px] bg-white p-6 rounded-lg shadow-xl border border-gray-300 z-20 animate-fade-in">
          <div ref={modalRef}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
            <img src={roxana} alt="Roxana" className="w-full h-80 object-contain rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Povestea Roxanei</h3>
            <p className="mt-4 text-gray-600 text-justify">
              Roxana este sufletul casei noastre. Atentă și grijulie, atât cu
              oamenii cât și cu ingredientele, ea dorește să își creeze o mică
              afacere bazată pe pasiunea ei pentru gătit. Își cultivă în grădină
              cea mai mare parte din legume, în micul ei solar, dar și într-un
              cottage înconjurat cu tufe de busuioc, cimbru, oregano și tufe de
              zmeuri. Alături crește păsări de ouă și de carne, iar lactatele și
              carnea de vită o cumpără de la producătorii locali de pe Valea
              Lotrului.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
