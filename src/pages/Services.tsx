import React from 'react';
import { Users, PhoneCall, Building2, ShoppingBag, Share2, UserCog, Bot, MessageSquareMore, Palette, FileSpreadsheet, Calculator, PenTool, Code, Database, Globe, Cpu, BrainCircuit } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  category: 'human' | 'ai';
  backgroundImage: string;
}

const services: Service[] = [
  // Human Services
  {
    icon: PhoneCall,
    title: 'Live Calls',
    description: 'Professional call handling and customer support services available 24/7.',
    category: 'human',
    backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80'
  },
  {
    icon: Building2,
    title: 'BackOffice Work',
    description: 'Comprehensive back-office support and administration for your business needs.',
    category: 'human',
    backgroundImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80'
  },
  {
    icon: ShoppingBag,
    title: 'Sales',
    description: 'Dedicated sales professionals to drive your business growth and revenue.',
    category: 'human',
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Expert social media management and engagement strategies.',
    category: 'human',
    backgroundImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80'
  },
  {
    icon: UserCog,
    title: 'Virtual Assistant',
    description: 'Reliable virtual assistance for your daily operations and tasks.',
    category: 'human',
    backgroundImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Professional content writing and creation services.',
    category: 'human',
    backgroundImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80'
  },

  // AI Services
  {
    icon: Bot,
    title: 'AI Agent',
    description: 'Intelligent automated agents for various business tasks and processes.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
  },
  {
    icon: MessageSquareMore,
    title: '24/7 AI Messaging',
    description: 'Round-the-clock AI-powered communication and support.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1675467169559-3a4d2f4581d7?auto=format&fit=crop&q=80'
  },
  {
    icon: Palette,
    title: 'Website Customization',
    description: 'AI-driven website personalization and optimization.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80'
  },
  {
    icon: FileSpreadsheet,
    title: 'AI Backoffice',
    description: 'Automated back-office operations and data processing.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80'
  },
  {
    icon: Calculator,
    title: 'AI Accountant',
    description: 'Intelligent financial management and reporting systems.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
  },
  {
    icon: Code,
    title: 'AI Development',
    description: 'Custom AI solution development and integration.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Advanced data analysis and insights powered by AI.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    icon: Globe,
    title: 'AI Translation',
    description: 'Multi-language support and translation services.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    icon: Cpu,
    title: 'Process Automation',
    description: 'Intelligent automation of business processes.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80'
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    description: 'Custom machine learning solutions for your business.',
    category: 'ai',
    backgroundImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80'
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'human' | 'ai'>('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive solutions for your business needs
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setSelectedCategory('human')}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === 'human'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Human Workforce
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === 'ai'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              AI Solutions
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                </div>
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-lg shadow-lg mb-4">
                      <service.icon className={`h-6 w-6 ${
                        service.category === 'human' ? 'text-green-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                  <button className={`mt-6 px-6 py-2 rounded-lg ${
                    service.category === 'human'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white transition-colors duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}