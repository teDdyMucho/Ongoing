import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesProps {
  title: string;
  description: string;
  services: Service[];
  bgColor: string;
}

export default function Services({ title, description, services, bgColor }: ServicesProps) {
  const backgroundImages = {
    'Live Calls': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
    'BackOffice Work': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80',
    'Sales': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    'Social Media Manager': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    'Virtual Assistant': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    'AI Agent': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    'AI Assistant': 'https://images.unsplash.com/photo-1676320831368-60c6aa187db7?auto=format&fit=crop&q=80',
    '24/7 AI messaging': 'https://images.unsplash.com/photo-1675467169559-3a4d2f4581d7?auto=format&fit=crop&q=80',
    'Website Customization': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80',
    'AI Backoffice': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80',
    'AI Accountant': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
  };

  return (
    <div className={`py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{description}</p>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <div className="group relative h-[500px] overflow-hidden">
                  {/* Diagonal background with clip-path */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${backgroundImages[service.title]})`,
                      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 85%)',
                    }}
                  />
                  
                  {/* Full background image (hidden by default) */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"
                    style={{
                      backgroundImage: `url(${backgroundImages[service.title]})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    {/* Icon and Title */}
                    <div className="transform transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg mb-4">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    </div>

                    {/* Description and Button (hidden by default) */}
                    <div className="transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-white mb-4">
                        {service.description}
                      </p>
                      <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Diagonal overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-800/80 transition-opacity duration-700 group-hover:opacity-0"
                    style={{
                      clipPath: 'polygon(85% 100%, 100% 100%, 100% 0, 85% 0)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}