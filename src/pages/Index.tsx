
import React from 'react';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { teamData } from '@/data/teamData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block animate-fade-in">Our</span>{" "}
          <span className="relative inline-block text-blue-600 animate-fade-in animation-delay-200">
            Teams
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 transform origin-left scale-x-100"></span>
          </span>
        </h2>
        
        {Object.keys(teamData).map((domain, index) => (
          <TeamSection 
            key={domain}
            domain={domain}
            members={teamData[domain]}
            animationDelay={index * 0.15}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
