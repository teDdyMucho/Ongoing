import React from 'react';
import { Users, Bot, Target, Shield, BarChart, Award, Globe, BarChart as ChartBar, Clock, Heart, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/50" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About OnGoing Workforce</h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Redefining the future of work by seamlessly blending trusted human expertise with innovative AI-driven automation.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower businesses worldwide with innovative workforce solutions that combine human intelligence with AI capabilities, enabling sustainable growth and operational excellence in the digital age.
              </p>
              <div className="mt-8">
                <img
                  className="rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80"
                  alt="Team collaboration"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the global leader in integrated workforce solutions, setting new standards in how businesses leverage both human talent and artificial intelligence to achieve unprecedented success.
              </p>
              <div className="mt-8">
                <img
                  className="rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1470&q=80"
                  alt="Future of work"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Why Choose OnGoing Workforce?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Operating across multiple time zones with diverse talent pools',
                },
                {
                  icon: ChartBar,
                  title: 'Scalable Solutions',
                  description: 'Flexible workforce solutions that grow with your business',
                },
                {
                  icon: Clock,
                  title: '24/7 Operations',
                  description: 'Round-the-clock service availability and support',
                },
                {
                  icon: Heart,
                  title: 'Client-Centric',
                  description: 'Tailored solutions focused on your success',
                },
              ].map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl shadow-lg p-8">
                  <feature.icon className="h-12 w-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-green-600 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Clients Worldwide' },
                { number: '50+', label: 'Countries Served' },
                { number: '1000+', label: 'Team Members' },
                { number: '99.9%', label: 'Client Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-lg text-green-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Feedback Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Client Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Sarah Johnson"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "OnGoing Workforce transformed our customer service operations. The blend of AI and human support has been game-changing for our business."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="David Chen"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">David Chen</h3>
                  <p className="text-sm text-gray-600">CTO, Global Solutions</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "The AI integration capabilities have significantly improved our efficiency. Their team's expertise is unmatched in the industry."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
                  alt="Emily Rodriguez"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-600">Operations Director, Retail Plus</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "The dedicated support team has been instrumental in scaling our operations. They truly understand our business needs."
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}