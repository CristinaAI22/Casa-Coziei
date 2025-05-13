import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function MainPage() {
  return (
    <section
      id="main"
      className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-yellow-500 to-orange-500"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Bine ați venit la Virgiloaia-n tindă!
      </h2>
      {/* short description */}
      <p className="mt-4 text-lg text-white">
        Descoperiți savoarea autentică a bucătăriei tradiționale românești,
        gătită cu pasiune la poalele munților Cozia.
      </p>

      {/* social media */}
      <div className="mt-6 flex space-x-6">
        <a
          href="https://www.facebook.com/profile.php?id=61560212213023&locale=ro_RO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-300 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com/casa.coziei/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-300 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
