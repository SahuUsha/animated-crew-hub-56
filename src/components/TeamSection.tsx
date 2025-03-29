
import React from 'react';
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
  technical: "from-blue-100 to-blue-50",
  'graphic design': "from-purple-100 to-purple-50",
  social: "from-green-100 to-green-50",
  'video edition': "from-red-100 to-red-50",
  publicity: "from-yellow-100 to-yellow-50",
};

const TeamSection: React.FC<TeamSectionProps> = ({ domain, members, animationDelay = 0 }) => {
  const formattedDomain = domain.charAt(0).toUpperCase() + domain.slice(1);
  const domainId = domain.toLowerCase().replace(' ', '-');
  
  return (
    <section 
      id={domainId}
      className={`py-16 mb-20 rounded-3xl bg-gradient-to-br ${domainGradients[domain]} animate-fade-in`}
      style={{animationDelay: `${animationDelay}s`}}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className={`w-12 h-12 rounded-lg ${domainColors[domain]} text-white flex items-center justify-center text-2xl mr-4 shadow-lg`}>
            {domainIcons[domain]}
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{formattedDomain} Team</h2>
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
