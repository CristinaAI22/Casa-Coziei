import React, { useState } from "react";
import responses from "../data/responses"; // Import your data from responses.js

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendPredefinedResponse = (key) => {
    const response = responses.find((item) => item.key === key);
    if (response) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: response.answer.en, // Change to 'ro' for Romanian if needed
          sender: "bot",
        },
      ]);
    } else {
      console.log("Response not found for key:", key);
    }
  };

  return (
    <div className="chatbot-container w-[350px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="button-container mb-4">
        {/* List of buttons at the top */}
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-600"
          onClick={() => sendPredefinedResponse("roxana_info")}
        >
          Who is Roxana?
        </button>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-600"
          onClick={() => sendPredefinedResponse("tibi_info")}
        >
          Who is Tibi?
        </button>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-600"
          onClick={() => sendPredefinedResponse("menu_today")}
        >
          What's on the menu today?
        </button>
        {/* Add more buttons as needed */}
      </div>

      <div className="chat-box h-[300px] overflow-y-auto mb-4 p-2 bg-gray-100 rounded-lg">
        {/* Display messages (answers) below */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message p-2 mb-2 rounded-lg ${message.sender === "bot" ? "bg-green-200 text-left" : "bg-blue-200 text-right"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
