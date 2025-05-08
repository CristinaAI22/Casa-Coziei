import { useState } from "react";

const presetResponses = {
  locatie: "Ne găsiți în satul Văratica, aproape de Brezoi.",
  meniu:
    "Avem preparate tradiționale românești: ciorbe, tocănițe, platouri, deserturi. Meniul variază în funcție de sezon.",
  rezervare: "Pentru rezervări rapide, ne poți scrie pe WhatsApp.",
  roxana:
    "Roxana este gazda noastră și gătește cu ingrediente locale, cultivate chiar de ea.",
  altceva: "Lasă-mi un mesaj și vom reveni cât mai curând!",
};

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bun venit la Casa Coziei! Cu ce te pot ajuta?" },
  ]);

  const handleClick = (type) => {
    const userMessage = { from: "user", text: typeToLabel(type) };
    const botMessage = { from: "bot", text: presetResponses[type] };
    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const typeToLabel = (key) => {
    const map = {
      program: "🕒 Program",
      locatie: "📍 Locație",
      meniu: "📖 Meniu",
      rezervare: "📞 Rezervare",
      roxana: "👩 Despre Roxana",
      altceva: "❓ Altceva",
    };
    return map[key];
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-4">
      <div className="h-80 overflow-y-auto flex flex-col gap-3 mb-4 px-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-3 text-sm max-w-[80%] ${
              msg.from === "bot"
                ? "bg-gray-100 self-start text-gray-800"
                : "bg-orange-500 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {Object.keys(presetResponses).map((key) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-full py-2 px-3 transition"
          >
            {typeToLabel(key)}
          </button>
        ))}
      </div>
    </div>
  );
}
