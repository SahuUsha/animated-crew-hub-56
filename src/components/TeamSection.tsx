
import React, { useEffect, useRef } from 'react';
import MemberCard from './MemberCard';
import { TeamMember } from '@/types/teamTypes';

interface TeamSectionProps {
  domain: string;
  members: TeamMember[];
  animationDelay?: number;
}

const domainIcons: Record<string, string> = {
  technical: "💻",
  'graphic design': "🎨",
  social: "🌐",
  'video edition': "🎬",
  publicity: "📣",
};

const domainColors: Record<string, string> = {
  technical: "bg-blue-500",
  'graphic design': "bg-purple-500",
  social: "bg-green-500",
  'video edition': "bg-red-500",
  publicity: "bg-yellow-500",
};

const domainGradients: Record<string, string> = {
  technical: "from-blue-50 via-blue-100 to-transparent",
  'graphic design': "from-purple-50 via-purple-100 to-transparent",
  social: "from-green-50 via-green-100 to-transparent",
  'video edition': "from-red-50 via-red-100 to-transparent",
  publicity: "from-yellow-50 via-yellow-100 to-transparent",
};

const domainBorderGradients: Record<string, string> = {
  technical: "from-blue-200 via-blue-400 to-blue-600",
  'graphic design': "from-purple-200 via-purple-400 to-purple-600",
  social: "from-green-200 via-green-400 to-green-600",
  'video edition': "from-red-200 via-red-400 to-red-600",
  publicity: "from-yellow-200 via-yellow-400 to-yellow-600",
};

const domainBackgrounds: Record<string, string> = {
  technical: "bg-gradient-to-br from-blue-50 via-blue-100 to-white",
  'graphic design': "bg-gradient-to-br from-purple-50 via-purple-100 to-white",
  social: "bg-gradient-to-br from-green-50 via-green-100 to-white",
  'video edition': "bg-gradient-to-br from-red-50 via-red-100 to-white",
  publicity: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-white",
};

const TeamSection: React.FC<TeamSectionProps> = ({ domain, members, animationDelay = 0 }) => {
  const formattedDomain = domain.charAt(0).toUpperCase() + domain.slice(1);
  const domainId = domain.toLowerCase().replace(' ', '-');
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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
  
  return (
    <section 
      id={domainId}
      ref={sectionRef}
      className={`py-24 mb-28 rounded-3xl ${domainBackgrounds[domain]} animated-bg opacity-0 transform translate-y-10 transition-all duration-700 ease-out overflow-hidden relative`}
      style={{animationDelay: `${animationDelay}s`}}
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${domainColors[domain]} opacity-10 blur-3xl animate-float`} style={{animationDuration: '15s', animationDelay: '1s'}}></div>
        <div className={`absolute top-40 -right-20 w-80 h-80 rounded-full ${domainColors[domain]} opacity-10 blur-3xl animate-float`} style={{animationDuration: '20s', animationDelay: '2s'}}></div>
        <div className={`absolute -bottom-40 left-1/4 w-96 h-96 rounded-full ${domainColors[domain]} opacity-10 blur-3xl animate-float`} style={{animationDuration: '25s', animationDelay: '0s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-20">
          <div className={`relative group`}>
            <div className={`w-20 h-20 rounded-2xl ${domainColors[domain]} text-white flex items-center justify-center text-4xl mr-6 shadow-xl transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
              {domainIcons[domain]}
            </div>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${domainBorderGradients[domain]} animate-pulse opacity-70`} style={{animationDuration: '3s'}}></div>
          </div>
          
          <div className="relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-2 relative">
              {formattedDomain} Team
              <span className={`absolute -bottom-1 left-0 h-1.5 w-0 bg-gradient-to-r ${domainBorderGradients[domain]} rounded-full animate-scale-in`} style={{animationDuration: '1.5s', animationDelay: '0.5s', animationFillMode: 'forwards'}}></span>
            </h2>
            <div className="text-gray-500 mt-3 text-xl font-light max-w-md">Creative minds behind our success</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {members.map((member, index) => (
            <MemberCard 
              key={member.id} 
              member={member} 
              animationDelay={index * 0.1 + animationDelay}
              colorClass={domainColors[domain]}
            />
          ))}
        </div>
      </div>
      
      {/* Wavy divider at the bottom */}
      <div className="wavy-divider absolute bottom-0 left-0 right-0"></div>
    </section>
  );
};

export default TeamSection;
