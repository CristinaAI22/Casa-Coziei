import React, { useState, useEffect, useRef } from "react";
import responses from "../data/responses";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [language, setLanguage] = useState("ro");
  const chatEndRef = useRef(null);
  const hasInteracted = useRef(false); // Track if the user has interacted with the chatbot

  const sendPredefinedResponse = (key) => {
    const found = responses.find((r) => r.key === key);
    if (found) {
      setMessages((prev) => [
        ...prev,
        { text: found.question[language], sender: "user" },
        { text: found.answer[language], sender: "bot" },
      ]);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ro" ? "en" : "ro"));
  };

  // Scroll to the bottom after new message is added, but only after user interaction
  useEffect(() => {
    if (hasInteracted.current) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleButtonClick = (key) => {
    sendPredefinedResponse(key);
    hasInteracted.current = true; // Mark that the user has interacted
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white border border-gray-300 rounded-2xl shadow-lg">
      {/* Language Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-sm font-semibold bg-indigo-100 text-indigo-700 rounded-full shadow hover:bg-indigo-200 transition"
        >
          {language === "ro" ? "EN 🇬🇧" : "RO 🇷🇴"}
        </button>
      </div>

      {/* Question Buttons - full width one per row */}
      <div className="flex flex-col gap-3 mb-6">
        {responses.map((r) => (
          <button
            key={r.key}
            onClick={() => handleButtonClick(r.key)}
            className="w-full text-left px-5 py-3 rounded-xl bg-blue-100 hover:bg-blue-200 transition text-gray-800 text-sm font-medium shadow"
          >
            {r.question[language]}
          </button>
        ))}
      </div>

      {/* Chat area */}
      <div className="h-[500px] overflow-y-auto p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-inner space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-full px-4 py-3 rounded-xl text-sm leading-relaxed ${
              msg.sender === "bot"
                ? "bg-green-100 text-left self-start"
                : "bg-blue-200 text-right self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {/* Ref for scrolling to the bottom */}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}
