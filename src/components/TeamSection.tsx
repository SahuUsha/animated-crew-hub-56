
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
      className={`py-20 mb-20 rounded-3xl bg-gradient-to-br ${domainGradients[domain]} opacity-0 transform translate-y-10 transition-all duration-700 ease-out`}
      style={{animationDelay: `${animationDelay}s`}}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-16">
          <div className={`relative group`}>
            <div className={`w-16 h-16 rounded-2xl ${domainColors[domain]} text-white flex items-center justify-center text-3xl mr-5 shadow-lg transform transition-transform duration-500 group-hover:rotate-12`}>
              {domainIcons[domain]}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r animate-pulse opacity-70" style={{animationDuration: '3s'}}></div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-800 mb-1">{formattedDomain} Team</h2>
            <div className={`h-1.5 w-1/2 rounded-full bg-gradient-to-r ${domainBorderGradients[domain]}`}></div>
            <div className="text-gray-500 mt-2 text-lg">Creative minds behind our success</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
    </section>
  );
};

export default TeamSection;
