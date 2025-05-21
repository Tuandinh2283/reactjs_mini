import React, { useState } from "react";
import "./ChatBox.css";
import ChatBoxIcon from "./ChatBoxIcon";

const faqList = [
  {
    question: "quán mở cửa lúc mấy giờ",
    answer: "⏰ Quán mở cửa từ 7h sáng đến 10h tối mỗi ngày bạn nhé!",
  },
  {
    question: "có giao hàng không",
    answer: "🚚 Quán có giao hàng qua các ứng dụng như Grab, Now, Baemin...",
  },
  {
    question: "chào bạn",
    answer: "👋 Xin chào bạn! Mình có thể giúp gì cho bạn hôm nay?",
  },
  {
    question: "hello",
    answer: "🌟 Hello! Rất vui được gặp bạn!",
  },
  {
    question: "xin chào",
    answer: "😊 Chào bạn! Chúc bạn một ngày tuyệt vời!",
  },
  {
    question: "hi",
    answer: "🙌 Hi bạn! Cần mình hỗ trợ gì không?",
  },
  {
    question: "alo",
    answer: "📞 Alo alo! Mình nghe rõ nè!",
  },
  {
    question: "có ai ở đó không",
    answer: "👀 Mình luôn sẵn sàng ở đây để hỗ trợ bạn!",
  },
  {
    question: "bạn là ai",
    answer: "🤖 Mình là trợ lý ảo của hệ thống, luôn sẵn sàng giúp bạn!",
  },
  {
    question: "bạn làm được gì",
    answer:
      "📋 Mình có thể trả lời các câu hỏi thường gặp và hỗ trợ bạn về thông tin của quán nhé!",
  },
];

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Xin chào! Mình là chatbot của Aroma Beans Coffee ☕️ Bạn muốn biết gì nè?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [canSend, setCanSend] = useState(true);

  const findAnswer = (msg) => {
    msg = msg.toLowerCase().trim();
    for (let i = 0; i < faqList.length; i++) {
      const question = faqList[i].question.toLowerCase().trim();
      if (msg.includes(question) || question.includes(msg)) {
        return faqList[i].answer;
      }
    }
    return null;
  };

  const callGeminiAPI = async (userInput) => {
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userInput }],
            },
          ],
        }),
      });

      const data = await response.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "🤖 Mình chưa hiểu rõ câu hỏi, bạn có thể nói lại rõ hơn không?";
      return reply;
    } catch (error) {
      console.error("Lỗi gọi Gemini API:", error);
      return "❌ Có lỗi xảy ra khi kết nối AI. Vui lòng thử lại sau.";
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading || !canSend) return;

    setCanSend(false);
    setTimeout(() => setCanSend(true), 3000); // ngăn spam

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const question = input;
    setInput("");
    setLoading(true);

    const localAnswer = findAnswer(question);
    if (localAnswer) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: localAnswer }]);
        setLoading(false);
      }, 1000);
    } else {
      const aiAnswer = await callGeminiAPI(question);
      setMessages((prev) => [...prev, { from: "bot", text: aiAnswer }]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbox-container">
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            Aroma Chat
            <button className="exit" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbox-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chatbox-message bot">Đang trả lời...</div>
            )}
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn..."
              disabled={loading || !canSend}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim() || !canSend}
            >
              Gửi
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chatbox-toggle" onClick={() => setIsOpen(true)}>
          <ChatBoxIcon />
        </button>
      )}
    </div>
  );
};

export default ChatBox;
