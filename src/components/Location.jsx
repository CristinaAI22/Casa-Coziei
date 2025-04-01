export default function Location() {
  return (
    <section
      id="location"
      className="w-full max-w-[1100px] mx-auto px-1 sm:px-2 md:px-4 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
        Unde ne găsiți?
      </h2>

      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-8">
        Ascuns la poalele masivului Cozia, satul Văratica oferă peisaje
        încântătoare, creând un refugiu perfect pentru cei care caută liniște și
        relaxare. Satul este înconjurat de păduri dese și dealuri blânde,
        oferind oportunități ideale pentru plimbări în aer liber și reconectare
        cu natura.
      </p>

      <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
        <iframe
          title="Casa Coziei Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359003.70019782544!2d23.7688584021982!3d45.334348844474334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d1b40b228c52b%3A0xbf6fd020b187d13d!2sCasaCoziei!5e0!3m2!1sen!2sro!4v1743503637618!5m2!1sen!2sro"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Casa+Coziei,+Brezoi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Află cum ajungi la noi
        </a>
      </div>
    </section>
  );
}
