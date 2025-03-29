
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-green-50 overflow-hidden">
      {/* Dynamic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-green-300/40 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-blue-300/40 blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-60 h-60 rounded-full bg-yellow-200/40 blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* Animated floating shapes */}
        <div className="absolute top-[20%] left-[15%] w-12 h-12 bg-green-400/30 rounded-lg rotate-12 animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-[30%] right-[25%] w-16 h-16 bg-blue-400/30 rounded-full animate-bounce" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-[20%] left-[60%] w-10 h-10 bg-purple-400/30 rounded-lg rotate-45 animate-bounce" style={{animationDuration: '5s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMTgxRjYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptLTEwIDBoMXY0aC0xdi00em0yIDE4aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptLTEwIDBoMXY0aC0xdi00em0tMTIgMThoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXY0aC0xdi00em0yLTJoMXY0aC0xdi00em0yLTJoMXY0aC0xdi00em0yLTJoMXY0aC0xdi00em0tMTAgMGgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 relative animate-fade-in">
            <span className="relative inline-block px-4 py-1 text-lg font-semibold text-green-600 bg-green-50 rounded-full shadow-sm mb-4 animate-scale-in">
              Welcome to
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-green-600 mb-2 tracking-tight">
              GFG Student Chapter
            </h1>
            
            <div className="relative inline-block">
              <span className="block text-2xl md:text-3xl font-bold text-gray-700">Team Members</span>
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transform origin-left animate-scale-in animation-delay-300"></span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 mb-10 animate-fade-in animation-delay-300 max-w-xl mx-auto">
            Meet our passionate team driving innovation and excellence across different domains
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 animate-fade-in animation-delay-500">
            <a href="#technical" className="relative overflow-hidden group bg-gradient-to-br from-blue-500 to-green-400 text-white font-medium py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10">Meet The Team</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#contact" className="relative overflow-hidden group bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-300 font-medium py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#technical" className="rounded-full bg-white p-3 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">
          <ChevronDown className="h-6 w-6 text-blue-500" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
