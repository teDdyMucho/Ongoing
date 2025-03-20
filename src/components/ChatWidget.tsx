import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Phone } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const WEBHOOK_URL = 'https://primary-production-166e.up.railway.app/webhook/4ad384fc-ff50-46a4-bf31-947c66531d2c/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post(WEBHOOK_URL, {
        message: newMessage.text,
        timestamp: newMessage.timestamp.toISOString(),
        userId: 'user-' + Math.random().toString(36).substr(2, 9),
      });

      const adminResponse: Message = {
        id: Date.now().toString(),
        text: response.data,
        sender: 'admin',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, adminResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: 'Sorry, there was an error sending your message. Our team has been notified and we will fix this issue soon.',
        sender: 'admin',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatStart = () => {
    setShowOptions(false);
    setIsOpen(true);
  };

  const handleCallStart = () => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: 'We apologize, but phone calls are currently unavailable. Please use our chat service instead.',
      sender: 'admin',
      timestamp: new Date(),
    }]);
    setShowOptions(false);
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setShowOptions(true)}
        data-chat-widget-button
        className={`${
          isOpen || showOptions ? 'hidden' : 'flex'
        } items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors duration-200`}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Options Dialog */}
      {showOptions && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Choose an option</h3>
            <button
              onClick={() => setShowOptions(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <button
              onClick={handleChatStart}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat
            </button>
            <button
              onClick={handleCallStart}
              className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Start Call
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-full sm:w-96 h-[80vh] sm:h-[500px] bg-white rounded-t-lg sm:rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Chat with Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}