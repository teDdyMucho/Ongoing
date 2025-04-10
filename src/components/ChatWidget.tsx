import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Phone } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
  isHtml?: boolean;
}

interface WebhookResponse {
  message?: string;
  output?: string;
  error?: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const WEBHOOK_URL = 'https://primary-production-166e.up.railway.app/webhook/4ad384fc-ff50-46a4-bf31-947c66531d2c/chat';
  
  // Generate a persistent user ID for the session
  const [userId] = useState(() => {
    const savedId = localStorage.getItem('chat_user_id');
    if (savedId) return savedId;
    
    const newId = 'user-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('chat_user_id', newId);
    return newId;
  });

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
      // Log the request payload for debugging
      const payload = {
        message: newMessage.text,
        timestamp: newMessage.timestamp.toISOString(),
        userId: userId,
        sessionId: userId + '-' + new Date().toISOString().split('T')[0],
      };
      console.log('Sending to webhook:', payload);
      
      // Send message to n8n webhook with increased timeout
      const response = await axios.post<WebhookResponse>(WEBHOOK_URL, payload, {
        timeout: 10000, // 10 seconds timeout
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      // Log the response for debugging
      console.log('Webhook response:', response.data);

      // Process the response from n8n
      let responseText = 'Thank you for your message. Our team will get back to you shortly.';
      let isHtml = false;
      
      if (response.data) {
        if (typeof response.data === 'string') {
          responseText = response.data;
        } else if (response.data.output) {
          // Handle the output field which may contain HTML
          responseText = response.data.output;
          isHtml = true;
        } else if (response.data.message) {
          responseText = response.data.message;
        } else {
          // If response exists but doesn't match expected format, log it
          console.log('Unexpected response format:', response.data);
          responseText = JSON.stringify(response.data);
        }
      }

      const adminResponse: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: 'admin',
        timestamp: new Date(),
        isHtml: isHtml
      };
      
      setMessages(prev => [...prev, adminResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // More detailed error logging
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response error data:', error.response.data);
          console.error('Response error status:', error.response.status);
          console.error('Response error headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Request setup error:', error.message);
        }
      }
      
      // Handle different types of errors
      let errorMessage = 'Sorry, there was an error sending your message. Our team has been notified and we will fix this issue soon.';
      
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 429) {
          errorMessage = 'You have sent too many messages. Please wait a moment before trying again.';
        } else if (error.response.status >= 500) {
          errorMessage = 'Our chat service is currently experiencing issues. Please try again later.';
        } else if (error.response.status === 404) {
          errorMessage = 'The chat service endpoint could not be found. Please check the webhook URL.';
        } else if (error.response.status === 400) {
          errorMessage = 'The chat service rejected your message. Please try a different message.';
        }
      } else if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
        errorMessage = 'The chat service took too long to respond. Please try again later.';
      } else if (axios.isAxiosError(error) && !error.response) {
        errorMessage = 'Could not connect to the chat service. Please check your internet connection.';
      }
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: errorMessage,
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
    
    // Send initial greeting if this is the first message
    if (messages.length === 0) {
      setMessages([{
        id: Date.now().toString(),
        text: 'Hello! How can we help you today?',
        sender: 'admin',
        timestamp: new Date(),
      }]);
    }
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
        <div className="fixed inset-0 sm:absolute sm:inset-auto sm:bottom-0 sm:right-0 w-full sm:w-96 h-full sm:h-[500px] bg-white sm:rounded-lg shadow-xl flex flex-col z-50">
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
                  {msg.isHtml ? (
                    <div 
                      className="break-words" 
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  ) : (
                    <p className="break-words">{msg.text}</p>
                  )}
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                  <span className="text-gray-500 text-sm">Typing...</span>
                </div>
              </div>
            )}
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
                disabled={isLoading || !message.trim()}
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