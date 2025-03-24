import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Casa Coziei Logo" className="h-10 w-auto" />
          </div>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-gray-600">
                Location
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 pb-4">
            <li>
              <a
                href="#about"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
