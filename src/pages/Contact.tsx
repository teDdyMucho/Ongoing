import React, { useState } from 'react';
import { Globe, Cpu, Bot, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 inline-block mr-1" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ViberIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 inline-block mr-1" fill="#7360F2">
    <path d="M21.176 5.438C19.392 3.664 16.776 3 14.048 3c-5.52 0-10 4.48-10 10 0 2.728.664 5.344 2.438 7.128L5 24l3.872-1.486c1.784 1.774 4.4 2.438 7.128 2.438 5.52 0 10-4.48 10-10 0-2.728-.664-5.344-2.438-7.128l-2.386-2.386zM14.048 21.952c-2.136 0-4.248-.576-6.096-1.664l-.432-.288-4.512 1.184 1.184-4.512-.288-.432C2.672 14.392 2.096 12.28 2.096 10.144c0-4.96 4.032-8.992 8.992-8.992 2.4 0 4.656.936 6.352 2.632s2.632 3.952 2.632 6.352c0 4.96-4.032 8.992-8.992 8.992zm4.896-6.384c-.272-.136-1.6-.792-1.848-.88-.248-.088-.432-.136-.608.136-.176.272-.696.88-.856 1.056-.16.176-.32.2-.592.064-.272-.136-1.144-.424-2.176-1.352-.8-.712-1.344-1.592-1.504-1.864-.16-.272-.016-.416.12-.552.128-.12.272-.312.408-.472.136-.16.176-.272.272-.456.096-.184.048-.344-.024-.472-.072-.128-.608-1.464-.832-2.008-.216-.544-.44-.472-.608-.472-.16 0-.344 0-.52 0-.176 0-.472.064-.72.344-.248.272-.944.92-.944 2.24 0 1.328.968 2.608 1.104 2.784.136.176 1.912 2.92 4.624 4.096.648.28 1.152.448 1.544.568.648.208 1.24.176 1.704.104.52-.072 1.6-.656 1.824-1.288.224-.632.224-1.176.16-1.288-.064-.112-.248-.176-.52-.312z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 inline-block mr-1" fill="#0088cc">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.72 4.94-4.46c.215-.19-.047-.298-.332-.11l-6.106 3.85-2.633-.82c-.57-.18-.582-.57.12-.84l10.29-3.96c.474-.176.89.11.74.84z"/>
  </svg>
);

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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Department</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Mark Carvajal</p>
                      <p className="text-gray-600">Head of Marketing Department</p>
                      <a href="mailto:admin@ongoing.solutions" className="text-green-600 hover:text-green-700">
                        admin@ongoing.solutions
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <div className="text-gray-600">
                        <span className="font-medium text-[#7360F2]"><ViberIcon />Viber:</span>
                        <p className="text-gray-600"> +63 905 371 5191</p>
                      </div>
                      <div className="text-gray-600">
                        <span className="font-medium text-[#0088cc]"><TelegramIcon />Telegram:</span>
                        <p className="text-gray-600"> +63 905 371 5191</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Manila, Philippines</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Development Branch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Angelo Tapang</p>
                      <p className="text-gray-600">Founder</p>
                      <a href="mailto:support@ongoing.solutions" className="text-blue-600 hover:text-blue-700">
                        tapangjoseangelo@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <div className="text-gray-600">
                        <span className="font-medium text-green-600"><WhatsAppIcon />Phone:</span>
                        <p className="text-gray-600"> +63 993 287 5201</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Bataan, Philippines</p>
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