import React from 'react';
import { Users, Notebook as Robot, PhoneCall, Building2, ShoppingBag, Share2, UserCog, Bot, MessageSquareMore, Palette, FileSpreadsheet, Calculator } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LearnMore from '../components/LearnMore';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

function HomePage() {
  const humanServices = [
    { icon: PhoneCall, title: 'Live Calls', description: 'Professional call handling and customer support services' },
    { icon: Building2, title: 'BackOffice Work', description: 'Comprehensive back-office support and administration' },
    { icon: ShoppingBag, title: 'Sales', description: 'Dedicated sales professionals to drive your business growth' },
    { icon: Share2, title: 'Social Media Manager', description: 'Expert social media management and engagement' },
    { icon: UserCog, title: 'Virtual Assistant', description: 'Reliable virtual assistance for your daily operations' },
  ];

  const aiServices = [
    { icon: Bot, title: 'AI Agent', description: 'Intelligent automated agents for various business tasks' },
    { icon: Users, title: 'AI Assistant', description: 'Smart AI assistants to streamline your workflow' },
    { icon: MessageSquareMore, title: '24/7 AI messaging', description: 'Round-the-clock AI-powered communication' },
    { icon: Palette, title: 'Website Customization', description: 'AI-driven website personalization' },
    { icon: FileSpreadsheet, title: 'AI Backoffice', description: 'Automated back-office operations' },
    { icon: Calculator, title: 'AI Accountant', description: 'Intelligent financial management and reporting' },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <LearnMore />
      <Services title="Trusted Human Workforce" 
                description="Reliable professionals you can count on" 
                services={humanServices} 
                bgColor="bg-white" />
      <Services title="AI Workforce & Automation" 
                description="24/7 Intelligent Solutions" 
                services={aiServices} 
                bgColor="bg-gray-50" />
      <Footer />
      <ChatWidget />
    </>
  );
}

export default HomePage;