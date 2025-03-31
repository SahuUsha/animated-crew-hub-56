
import React, { useEffect, useRef, useState } from 'react';
import MemberCard from './MemberCard';
import { TeamMember } from '@/types/teamTypes';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  domain: string;
  members: TeamMember[];
  animationDelay?: number;
}

const domainIcons: Record<string, string> = {
  technical: "💻",
  'graphics': "🎨",
  socials: "🌐",
  'videography': "🎬",
  'pr & outreach': "✍️",
   events: "🎉",
};

const domainColors: Record<string, string> = {
  technical: "bg-blue-500",
  'graphics': "bg-purple-500",
  socials: "bg-green-500",
  'videography': "bg-red-500",
  'pr & outreach': "bg-yellow-500",
   events: "bg-pink-500",
};

const domainGradients: Record<string, string> = {
  technical: "from-blue-50 via-blue-100 to-transparent",
  'graphics': "from-purple-50 via-purple-100 to-transparent",
  socials: "from-green-50 via-green-100 to-transparent",
  'videography': "from-red-50 via-red-100 to-transparent",
  'pr & outreach': "from-yellow-50 via-yellow-100 to-transparent",
   events: "from-pink-50 via-pink-100 to-transparent",
};

const domainBorderGradients: Record<string, string> = {
  technical: "from-blue-200 via-blue-400 to-blue-600",
  'graphics': "from-purple-200 via-purple-400 to-purple-600",
  socials: "from-green-200 via-green-400 to-green-600",
  'videography': "from-red-200 via-red-400 to-red-600",
  'pr & outreach': "from-yellow-200 via-yellow-400 to-yellow-600",
   events: "from-pink-200 via-pink-400 to-pink-600",
};

const domainBackgrounds: Record<string, string> = {
  technical: "bg-gradient-to-br from-blue-50 via-blue-100 to-white",
  'graphics': "bg-gradient-to-br from-purple-50 via-purple-100 to-white",
  socials: "bg-gradient-to-br from-green-50 via-green-100 to-white",
  'videography': "bg-gradient-to-br from-red-50 via-red-100 to-white",
  'pr & outreach': "bg-gradient-to-br from-yellow-50 via-yellow-100 to-white",
   events: "bg-gradient-to-br from-pink-50 via-pink-100 to-white",
};

const TeamSection: React.FC<TeamSectionProps> = ({ domain, members, animationDelay = 0 }) => {
  const formattedDomain = domain.charAt(0).toUpperCase() + domain.slice(1);
  const domainId = domain.toLowerCase().replace(' ', '-');
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      // Calculate mouse position relative to section center
      const x = (e.clientX - rect.left - rect.width / 2) / 50;
      const y = (e.clientY - rect.top - rect.height / 2) / 50;
      setMousePosition({ x, y });
    }
  };
  
  return (
    <section 
      id={domainId}
      ref={sectionRef}
      className={`py-24 mb-28 rounded-3xl ${domainBackgrounds[domain]} opacity-0 transform translate-y-10 transition-all duration-700 ease-out overflow-hidden relative`}
      style={{animationDelay: `${animationDelay}s`}}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${domainColors[domain]} opacity-10 blur-3xl animate-float`} 
          style={{
            animationDuration: '15s', 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
        <div 
          className={`absolute top-40 -right-20 w-80 h-80 rounded-full ${domainColors[domain]} opacity-10 blur-3xl animate-float`} 
          style={{
            animationDuration: '20s', 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y * -0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className={`absolute -bottom-40 left-1/4 w-96 h-96 rounded-full ${domainColors[domain]} opacity-10 blur-3xl animate-float`} 
          style={{
            animationDuration: '25s', 
            animationDelay: '0s',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y}px)`,
            transition: 'transform 0.4s ease-out'
          }}
        ></div>
      </div>
      
      {/* Animated particle dots */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full ${domainColors[domain]} opacity-20`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-20 gap-8">
          <div className={`relative group`}>
            <div className={`w-20 h-20 rounded-2xl ${domainColors[domain]} text-white flex items-center justify-center text-4xl mr-6 shadow-xl transform transition-all duration-700
              ${isInView ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}
              group-hover:rotate-12 group-hover:scale-110`}
              style={{ transitionDelay: '0.2s' }}
            >
              {domainIcons[domain]}
            </div>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${domainBorderGradients[domain]} animate-pulse opacity-70`} style={{animationDuration: '3s'}}></div>
          </div>
          
          <div className="relative">
            <h2 className={`text-5xl font-bold text-gray-800 mb-2 relative transition-all duration-700
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              {formattedDomain} Team
              <span className={`absolute -bottom-1 left-0 h-1.5 w-0 bg-gradient-to-r ${domainBorderGradients[domain]} rounded-full animate-scale-in`} style={{animationDuration: '1.5s', animationDelay: '0.7s', animationFillMode: 'forwards'}}></span>
            </h2>
            <div className={`text-gray-500 mt-3 text-xl font-light max-w-md transition-all duration-700
              ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              Creative minds behind our success
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <div 
              key={member.id}
              className={`transition-all duration-700 transform
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <MemberCard 
                member={member} 
                animationDelay={index * 0.1 + animationDelay}
                colorClass={domainColors[domain]}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated corner decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 transform -translate-y-1/2 translate-x-1/2 rotate-45 opacity-30 bg-gradient-to-r ${domainBorderGradients[domain]} blur-lg animate-pulse`}></div>
      <div className={`absolute bottom-0 left-0 w-32 h-32 transform translate-y-1/2 -translate-x-1/2 rotate-45 opacity-30 bg-gradient-to-r ${domainBorderGradients[domain]} blur-lg animate-pulse`} style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default TeamSection;
