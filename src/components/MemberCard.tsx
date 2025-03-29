
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
    <Card 
      className="overflow-hidden group bg-white rounded-2xl transform hover:-translate-y-4 transition-all duration-500 shadow-lg hover:shadow-2xl animate-float"
      style={{
        animationDelay: `${animationDelay}s`,
        animationDuration: `${3 + Math.random()}s`,
      }}
    >
      <div className="relative overflow-hidden">
        {/* 3D tilt effect container */}
        <div className="group-hover:scale-105 transition-transform duration-700 transform-gpu perspective-1000">
          <div className="relative overflow-hidden aspect-square">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center space-x-4 mb-3">
                {member.socialLinks?.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                    className="bg-white/90 rounded-full p-3 hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-110 hover:rotate-6">
                    <Linkedin size={18} className="text-blue-600" />
                  </a>
                )}
                {member.socialLinks?.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" 
                    className="bg-white/90 rounded-full p-3 hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-110 hover:-rotate-6">
                    <Twitter size={18} className="text-blue-400" />
                  </a>
                )}
                {member.socialLinks?.github && (
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" 
                    className="bg-white/90 rounded-full p-3 hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-110 hover:rotate-6">
                    <Github size={18} className="text-gray-800" />
                  </a>
                )}
                {member.socialLinks?.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                    className="bg-white/90 rounded-full p-3 hover:bg-pink-100 transition-all duration-300 shadow-lg transform hover:scale-110 hover:-rotate-6">
                    <Instagram size={18} className="text-pink-600" />
                  </a>
                )}
                {member.socialLinks?.portfolio && (
                  <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" 
                    className="bg-white/90 rounded-full p-3 hover:bg-green-100 transition-all duration-300 shadow-lg transform hover:scale-110 hover:rotate-6">
                    <ExternalLink size={18} className="text-green-600" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Colorful status indicator with pulse animation */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${colorClass} animate-pulse shadow-glow`}></span>
          <span className="text-xs font-bold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">Active</span>
        </div>
      </div>
      
      <div className="p-6 text-center bg-white relative z-10">
        {/* Decorative elements */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rotate-45 bg-white"></div>
        
        <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
          {member.name}
        </h3>
        
        <p className="text-sm font-medium text-gray-500 mb-3">{member.role}</p>
        
        {/* Animated underline */}
        <div className="relative h-1 w-16 mx-auto overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-blue-500 transition-colors"></div>
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-blue-400 to-green-400 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    </Card>
  );
};

export default MemberCard;
