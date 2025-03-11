import React, { useState } from 'react';
import { Globe, Cpu, Bot, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

export default function ContactPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Choose the best way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global Branch */}
            <div 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedOption === 'global' ? 'ring-2 ring-green-500 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedOption('global')}
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Branch Client</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Ma. Teresa C. Fincher</p>
                      <p className="text-gray-600">Head of Marketing Department</p>
                      <a href="mailto:teresita.flincher@ongoingworkforce.com" className="text-green-600 hover:text-green-700">
                        teresita.flincher@ongoingworkforce.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">New York, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asia Branch */}
            <div 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedOption === 'asia' ? 'ring-2 ring-blue-500 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedOption('asia')}
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Asia Branch Manager</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Angelo Tapang</p>
                      <p className="text-gray-600">Head of Technology Department</p>
                      <a href="mailto:tech.asia@ongoingworkforce.com" className="text-blue-600 hover:text-blue-700">
                        tech.asia@ongoingworkforce.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">+65 6789 0123</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedOption === 'ai' ? 'ring-2 ring-purple-500 transform scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedOption('ai')}
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <Bot className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Assistant</h3>
                <p className="text-gray-600 mb-6">
                  Get immediate assistance 24/7 with our AI-powered chat support. Our intelligent assistant can help you with:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Quick inquiries
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Service information
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Scheduling assistance
                  </li>
                </ul>
                <button 
                  className="mt-8 w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={() => {
                    // This will trigger the chat widget to open
                    const chatButton = document.querySelector('[data-chat-widget-button]');
                    if (chatButton instanceof HTMLElement) {
                      chatButton.click();
                    }
                  }}
                >
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ChatWidget />
    </>
  );
}