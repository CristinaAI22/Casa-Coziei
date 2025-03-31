import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import images manually
import food9 from "../assets/food9.jpg";
import food6 from "../assets/food6.jpg";
import door from "../assets/door.jpg";
import food3 from "../assets/food3.jpg";
import light from "../assets/light.jpg";
import terass2 from "../assets/terass2.jpg";
import crispyPumpkin from "../assets/crispy&pumpkin.jpg";
import details from "../assets/details.jpg";
import turtite from "../assets/turtite.jpg";
import food7 from "../assets/food7.jpg";
import visinata from "../assets/visinata.jpg";
import food4 from "../assets/food4.jpg";
// Store image imports in an array
const images = [
  food9,
  food6,
  door,
  food3,
  light,
  terass2,
  crispyPumpkin,
  details,
  turtite,
  food7,
  visinata,
  food4,
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Galerie Foto</h2>
        <p className="text-gray-600 mt-2">Crâmpeie din experiența culinară</p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleClick(i)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={index}
      />
    </section>
  );
}
