
import React, { useEffect, useState, useRef } from 'react';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { teamData } from '@/data/teamData';

const Index = () => {
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLDivElement>(null);

  // Parallax effect for background elements
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" });
    
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
      {/* Animated background elements */}
      <div 
        className="fixed inset-0 opacity-50 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mix-blend-multiply blur-3xl"
          style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)` }}
        ></div>
        <div 
          className="absolute top-[50%] -right-[5%] w-[25%] h-[25%] rounded-full bg-gradient-to-br from-green-100 to-teal-100 mix-blend-multiply blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)` }}
        ></div>
        <div 
          className="absolute bottom-[5%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 mix-blend-multiply blur-3xl"
          style={{ transform: `translate(${scrollY * 0.04}px, ${-scrollY * 0.03}px)` }}
        ></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block">
              <span className="relative z-10">Our Amazing Teams</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet the talented individuals who bring creativity, passion, and expertise 
              to our different domains and make our GFG Student Chapter shine
            </p>
          </div>
          
          {/* Enhanced floating navigation pills with active indicators */}
          <div 
            ref={navRef}
            className="sticky top-4 z-50 flex justify-center mb-16 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg flex gap-2 sm:gap-4 overflow-x-auto max-w-full no-scrollbar border border-gray-100 transition-all duration-300 hover:shadow-xl">
              {Object.keys(teamData).map((domain, index) => {
                const domainId = domain.toLowerCase().replace(' ', '-');
                const isActive = domainId === activeSection;
                return (
                  <a 
                    key={domain}
                    href={`#${domainId}`}
                    className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 relative group
                      ${isActive ? 'text-white' : 'text-gray-700 hover:text-gray-900'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10 transition-colors duration-500">
                      {domain.charAt(0).toUpperCase() + domain.slice(1)}
                    </span>
                    <span 
                      className={`absolute inset-0 rounded-full transition-all duration-500
                        ${isActive 
                          ? 'opacity-100 scale-100 bg-gradient-to-r from-blue-500 to-purple-600' 
                          : 'opacity-0 scale-90 group-hover:scale-95 group-hover:opacity-10 bg-gradient-to-r from-blue-400 to-purple-500'
                        }`}
                    ></span>
                  </a>
                );
              })}
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
    </div>
  );
};

export default Index;
