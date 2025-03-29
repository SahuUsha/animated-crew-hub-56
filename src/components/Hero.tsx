
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-300 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-yellow-200 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in mb-6">
            <span className="block text-lg font-semibold text-green-600 mb-2">Welcome to</span>
            <span className="block text-5xl md:text-7xl font-bold text-gray-800 mb-2">GFG Student Chapter</span>
            <span className="block text-2xl md:text-3xl text-blue-600">Team Members</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-in animation-delay-300">
            Meet our passionate team driving innovation and excellence across different domains
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-500">
            <a href="#technical" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-1">
              Meet The Team
            </a>
            <a href="#contact" className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-200 hover:-translate-y-1">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#technical" className="rounded-full bg-white p-2 shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-1">
          <ChevronDown className="h-6 w-6 text-blue-500" />
        </a>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
