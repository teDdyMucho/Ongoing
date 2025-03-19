import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Users, Bot, Zap, PhoneCall } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';
// import TestModal from '../components/TestModal';

export default function PricingPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debug function to ensure state is changing
  const openModal = () => {
    console.log('Opening modal, current state:', isModalOpen);
    setIsModalOpen(true);
    console.log('State after setting:', true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Choose Your Workforce Solution
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Flexible pricing options to match your business needs
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-blue-800/95" />
          <div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between relative">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 text-sm font-semibold rounded-full mb-3">
                Limited Time Offer
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Set up your AI Agent now for as low as $99 per month!!
              </h3>
              <p className="text-blue-100">
                "Automate Today, Lead Tomorrow – Plus, Enjoy 1 Week Free!"
              </p>
            </div>
            <div className="flex-shrink-0">
              <button 
                onClick={openModal}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Human-Focused Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <Users className="h-8 w-8 text-white" />
                  <h3 className="mt-4 text-2xl font-bold text-white">Human-Focused</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-100">Starting from</p>
                  <p className="text-4xl font-bold text-white">$3<span className="text-lg">/hr</span></p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-700">3 Specified Tasks (Hot)</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-700">Sole Business Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="ml-3 text-gray-700">Dedicated Support Team</span>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium - $5/hr</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-700">10 Specified Tasks</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-700">Multiple Business Support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-700">Personal Assistant</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-700">Personal Account Manager</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-700">Custom Website</span>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={openModal}
                className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                Get Started
              </button>
            </div>
          </div>

          {/* AI-Powered Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-blue-600">
              <div className="flex items-center justify-between">
                <div>
                  <Bot className="h-8 w-8 text-white" />
                  <h3 className="mt-4 text-2xl font-bold text-white">AI-Powered</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-blue-100">Starting from</p>
                  <p className="text-4xl font-bold text-white">$299<span className="text-lg">/mo</span></p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-3 text-gray-700">Daily Report</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-3 text-gray-700">Chat Assistant</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-3 text-gray-700">5-10 AI Tasks</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-3 text-gray-700">Email Integration</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-3 text-gray-700">Automation and Integration</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span className="ml-3 text-gray-700">Personal AI Website Support</span>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium - $499/mo</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="ml-3 text-gray-700">Premium Analytics Dashboard</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="ml-3 text-gray-700">Voice/Chat Assistant</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="ml-3 text-gray-700">Up to 50 AI Tasks</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="ml-3 text-gray-700">Full API Integration</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="ml-3 text-gray-700">Voice/Chat AI Website Support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="ml-3 text-gray-700">Human Account Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={openModal}
                className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                Get Started
              </button>
            </div>
          </div>

          {/* Hybrid Solution Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-purple-600">
              <div className="flex items-center justify-between">
                <div>
                  <Zap className="h-8 w-8 text-white" />
                  <h3 className="mt-4 text-2xl font-bold text-white">Hybrid Solution</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-purple-100">Custom Pricing</p>
                  <p className="text-2xl font-bold text-white">Contact Us</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Get the best of both worlds with our custom hybrid solutions. Combine human expertise with AI capabilities for maximum efficiency.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-700">Custom Team Structure</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-700">Flexible Scaling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-700">Dedicated Solutions Architect</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-700">Custom AI Integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-700">24/7 Priority Support</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Use the original GetStartedModal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Test modal - temporarily commented out */}
      {/* <TestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
}