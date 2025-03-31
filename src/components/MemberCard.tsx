
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Linkedin, Instagram } from 'lucide-react';
import { TeamMember } from '@/types/teamTypes';

interface MemberCardProps {
  member: TeamMember;
  animationDelay?: number;
  colorClass?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, animationDelay = 0, colorClass = "bg-blue-500" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="perspective-1000 my-4 px-2"
      style={{
        animationDelay: `${animationDelay}s`,
        animationDuration: `${3 + Math.random()}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={`overflow-hidden group bg-white rounded-2xl transition-all duration-700 shadow-lg ${isHovered ? 'shadow-2xl scale-105' : 'hover:shadow-xl'}`}
        style={{
          transform: isHovered ? 'rotateY(10deg)' : 'rotateY(0)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative overflow-hidden">
          {/* 3D tilt effect container */}
          <div className={`transition-transform duration-700 transform-gpu perspective-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={member.image} 
                alt={member.name} 
                className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 blur-[1px]' : 'scale-100'}`}
              />
              
              {/* Animated overlay with gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="h-full flex flex-col justify-end p-6 transform translate-y-0">
                  {/* Social icons with staggered animation */}
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    {member.socialLinks?.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                        className={`bg-white/90 rounded-full p-3 transition-all duration-500 shadow-lg transform 
                          ${isHovered ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.1s' }}
                      >
                        <Linkedin size={18} className="text-blue-600" />
                      </a>
                    )}
                    {member.socialLinks?.instagram && (
                      <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                        className={`bg-white/90 rounded-full p-3 transition-all duration-500 shadow-lg transform
                          ${isHovered ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: '0.4s' }}
                      >
                        <Instagram size={18} className="text-pink-600" />
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dynamic glowing status indicator */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${colorClass} animate-pulse shadow-glow`}></span>
            <span className={`text-xs font-bold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-500
              ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
            >Active</span>
          </div>
        </div>
        
        <div className="relative bg-white">
          {/* Decorative elements */}
          <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rotate-45 bg-white
            transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}></div>
          
          {/* Card content with glass effect on hover */}
          <div className={`p-6 text-center ${isHovered ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'} 
            transition-all duration-500 relative z-10`}>
            
            <h3 className={`font-bold text-xl transition-all duration-500
              ${isHovered ? 'text-blue-600 scale-110' : 'text-gray-800'} mb-2`}>
              {member.name}
            </h3>
            
            <p className="text-sm font-medium text-gray-500 mb-3">{member.role}</p>
            
            {/* Animated underline that expands on hover */}
            <div className="relative h-1 w-16 mx-auto overflow-hidden rounded-full">
              <div className={`absolute inset-0 transition-colors duration-500
                ${isHovered ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-gray-300 to-gray-200'}`}>
              </div>
              <div className={`absolute inset-0 w-1/2 bg-gradient-to-r from-blue-400 to-green-400 
                transform transition-transform duration-1000
                ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}>
              </div>
            </div>
          </div>
          
          {/* Bottom shine effect */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent 
            via-blue-400 to-transparent transform transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MemberCard;
