
import React from 'react';
import { Card } from '@/components/ui/card';
import { Linkedin, Twitter, Github, ExternalLink, Instagram } from 'lucide-react';
import { TeamMember } from '@/types/teamTypes';

interface MemberCardProps {
  member: TeamMember;
  animationDelay?: number;
  colorClass?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, animationDelay = 0, colorClass = "bg-blue-500" }) => {
  return (
    <Card className="overflow-hidden group bg-white hover:shadow-xl transition-all duration-500 animate-fade-in transform hover:-translate-y-3"
      style={{animationDelay: `${animationDelay}s`}}
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Stylish image overlay with reveal effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center space-x-3 mb-3">
            {member.socialLinks?.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-full p-2.5 hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-110">
                <Linkedin size={18} className="text-blue-600" />
              </a>
            )}
            {member.socialLinks?.twitter && (
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-full p-2.5 hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-110">
                <Twitter size={18} className="text-blue-400" />
              </a>
            )}
            {member.socialLinks?.github && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-full p-2.5 hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-110">
                <Github size={18} className="text-gray-800" />
              </a>
            )}
            {member.socialLinks?.instagram && (
              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-full p-2.5 hover:bg-pink-50 transition-all duration-300 shadow-lg transform hover:scale-110">
                <Instagram size={18} className="text-pink-600" />
              </a>
            )}
            {member.socialLinks?.portfolio && (
              <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" 
                className="bg-white rounded-full p-2.5 hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:scale-110">
                <ExternalLink size={18} className="text-gray-600" />
              </a>
            )}
          </div>
        </div>
        
        {/* Status indicator with animation */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${colorClass} animate-pulse`}></span>
          <span className="text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">Active</span>
        </div>
      </div>
      
      <div className="p-5 text-center bg-white border-t border-gray-50">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-gray-500 mt-1 mb-1">{member.role}</p>
        
        {/* Decorative underline that animates on hover */}
        <div className="w-12 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:from-blue-300 group-hover:via-blue-500 group-hover:to-green-400 transition-colors duration-300"></div>
      </div>
    </Card>
  );
};

export default MemberCard;
