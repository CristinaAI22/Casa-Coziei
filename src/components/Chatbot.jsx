import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // function to handel sending message to the backend
  const sendMessage = async () => {
    if (message.trim() === "") return;

    setLoading(true);
    // update the chat history with the user's message

    setChatHistory([...chatHistory, { sender: "user", message }]);

    try {
      // Send message to your backend (we'll set up the backend later)
      const response = await axios.post("http://localhost:5000/api/query", {
        message,
      });

      //   update chat hostory with bot's response
      setChatHistory([
        ...chatHistory,
        { sender: "user", message },
        { sender: "bot", message: response.data.reply },
      ]);
    } catch (error) {
      console.log("Error sending message:", error);
    }
    setLoading(false);
    setMessage("");
  };

  return (
    <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col space-y-4 h-96 overflow-y-auto p-3 bg-gray-50 rounded-lg mb-4">
        {/* Chat History */}
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${chat.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}
          >
            <p className="text-sm text-gray-800">{chat.message}</p>
          </div>
        ))}
        {loading && <p className="text-center text-gray-600">Loading...</p>}
      </div>

      {/* Input Box */}
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me something..."
          className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;