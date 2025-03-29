
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { teamData } from '@/data/teamData';

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block">
            <span className="relative z-10">Our Amazing Teams</span>
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the talented individuals who bring creativity, passion, and expertise 
            to our different domains and make our GFG Student Chapter shine
          </p>
        </div>
        
        {/* Floating navigation pills */}
        <div className="sticky top-4 z-50 flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg flex gap-2 sm:gap-4 overflow-x-auto max-w-full no-scrollbar">
            {Object.keys(teamData).map((domain) => (
              <a 
                key={domain}
                href={`#${domain.toLowerCase().replace(' ', '-')}`}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                {domain.charAt(0).toUpperCase() + domain.slice(1)}
              </a>
            ))}
          </div>
        </div>
        
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
