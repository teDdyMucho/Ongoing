import React from 'react';
import { Users, Bot, Target, Shield, BarChart, Award, Star } from 'lucide-react';

export default function LearnMore() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50" id="learn-more">
      {/* Value Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            The Best of Both Worlds
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Trusted People & Intelligent Automation
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Human Workforce */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8">
            <div className="absolute -top-4 -left-4 bg-green-600 rounded-full p-3">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Trusted Human Workforce</h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="ml-4 text-gray-600">Quality customer interactions with emotional intelligence</p>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="ml-4 text-gray-600">Tailored solutions for complex challenges</p>
              </div>
              <img
                className="w-full h-48 object-cover rounded-lg mt-6"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>

          {/* AI Workforce */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8">
            <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full p-3">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">AI Workforce & Automation</h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <BarChart className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <p className="ml-4 text-gray-600">24/7 operation with consistent performance</p>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <p className="ml-4 text-gray-600">Scalable solutions with reduced operational costs</p>
              </div>
              <img
                className="w-full h-48 object-cover rounded-lg mt-6"
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="AI Technology"
              />
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Flexible Service Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-semibold mb-4">Human-Focused</h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Dedicated support team</li>
                <li>• Personal account manager</li>
                <li>• Custom solution design</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500 transform md:scale-105">
              <h4 className="text-xl font-semibold mb-4">Hybrid Solution</h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Best of both worlds</li>
                <li>• Flexible scaling</li>
                <li>• 24/7 availability</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h4 className="text-xl font-semibold mb-4">AI-Powered</h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Automated workflows</li>
                <li>• Real-time analytics</li>
                <li>• Instant scaling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Client Feedback */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Client Feedback
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Michael Brown"
                />
              </div>
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The combination of human expertise and AI automation has revolutionized our customer service."
              </p>
              <p className="font-semibold text-gray-900">Michael Brown</p>
              <p className="text-sm text-gray-500">Director of Operations, CloudTech</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                  alt="Amanda Martinez"
                />
              </div>
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Outstanding results! Our efficiency has improved by 300% since implementing their solutions."
              </p>
              <p className="font-semibold text-gray-900">Amanda Martinez</p>
              <p className="text-sm text-gray-500">CEO, Digital Solutions Inc.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                  alt="Robert Wilson"
                />
              </div>
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Their dedicated team consistently delivers exceptional results. Highly recommended!"
              </p>
              <p className="font-semibold text-gray-900">Robert Wilson</p>
              <p className="text-sm text-gray-500">Founder, InnovateX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}