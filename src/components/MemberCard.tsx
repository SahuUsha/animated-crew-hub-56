
import React from 'react';
import { Card } from '@/components/ui/card';
import { Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';
import { TeamMember } from '@/types/teamTypes';

interface MemberCardProps {
  member: TeamMember;
  animationDelay?: number;
  colorClass?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, animationDelay = 0, colorClass = "bg-blue-500" }) => {
  return (
    <Card className="overflow-hidden group bg-white hover:shadow-xl transition-all duration-300 animate-fade-in transform hover:-translate-y-2"
      style={{animationDelay: `${animationDelay}s`}}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex justify-center space-x-3 mb-3">
            {member.socialLinks?.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-blue-100 transition-colors">
                <Linkedin size={16} className="text-blue-600" />
              </a>
            )}
            {member.socialLinks?.twitter && (
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-blue-100 transition-colors">
                <Twitter size={16} className="text-blue-400" />
              </a>
            )}
            {member.socialLinks?.github && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-blue-100 transition-colors">
                <Github size={16} className="text-gray-800" />
              </a>
            )}
            {member.socialLinks?.portfolio && (
              <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 hover:bg-blue-100 transition-colors">
                <ExternalLink size={16} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>
        <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${colorClass} animate-pulse`}></div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </Card>
  );
};

export default MemberCard;
