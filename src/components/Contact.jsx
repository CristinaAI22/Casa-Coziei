export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1100px] mx-auto px-1 sm:px-2 md:px-4 py-16 text-center bg-gray-100"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        Contactează-ne
      </h2>

      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Dacă ai întrebări sau vrei să faci o rezervare, poți să ne scrii pe
        WhatsApp sau să folosești chatbotul nostru pentru răspunsuri rapide!
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/40770515281"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mb-6"
      >
        Scrie-ne pe WhatsApp
      </a>

      {/* Chatbot Embed (optional: replace with your widget script if needed) */}
      <div className="mt-8">
        <p className="text-gray-600 text-sm">
          Chat disponibil în colțul din dreapta jos 👇
        </p>
      </div>

      {/* Example for chatbot integration (e.g., Tidio, Crisp) - insert script in public/index.html */}
    </section>
  );
}
