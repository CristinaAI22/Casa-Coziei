import React from "react";
import food10 from "../assets/food10.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">Despre noi</h2>
        
        {/* Paragraph */}
        <p className="mt-4 text-lg text-gray-600">
          Suntem o familie tânără care locuiește în Brezoi, micul orășel de munte de pe valea Lotrului. Casa noastră se află în satul Văratica, așezat chiar sub masivul Cozia. Povestea a început când Roxana, gazda harnică și îndemânatică, s-a apucat să coacă pâine, să facă cele mai delicioase ciorbe, să combine rețete locale cu ingrediente noi, să împletească cozonaci, să facă muraturi, vișinată, liomanadă. Așa își hrănește ea familia și prietenii, cu iubire pusă în mâncare. Pasiunea pentru gastronomia locală și plăcerea de a experimenta mereu vechi rețete, a făcut să încolțească ideea că la ei acasă s-ar putea servi mâncare de te lingi pe degete pentru turiștii care vin în zonă.
        </p>
      </div>

      <div className="flex justify-center mt-8">
        {/* Image - Smaller size and centered */}
        <img
          src={food10}
          alt="About Casa Coziei"
          className="w-72 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
