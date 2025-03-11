import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/YmALt4z.png" 
                alt="OnGoing Workforce" 
                className="h-8 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-base">
              Empowering businesses with intelligent workforce solutions for the digital age.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Human Workforce</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">AI Solutions</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Automation</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Consulting</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 OnGoing Workforce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}