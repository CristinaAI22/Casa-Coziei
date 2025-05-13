import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-nou-2.png";

const navLinks = [
  { label: "Despre", id: "about" },
  { label: "Galerie", id: "gallery" },
  { label: "Locație", id: "location" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-1 sm:px-2 md:px-4 py-4 bg-white z-50 w-full max-w-[1100px] mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Casa Coziei Logo" className="h-50 w-auto" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-base md:text-lg font-medium">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="hover:text-primary">
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Burger */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide-in Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-700 ease-in-out
  ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-lg font-medium text-gray-700 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
