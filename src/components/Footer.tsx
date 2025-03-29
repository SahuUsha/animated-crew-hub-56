
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="bg-green-500 w-8 h-8 rounded-lg mr-2 flex items-center justify-center text-white">G</span>
              GFG Student Chapter
            </h3>
            <p className="text-gray-600 max-w-sm">
              GeeksforGeeks Student Chapter is a community of students passionate about computer science and programming.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors">
                <Facebook size={20} className="text-blue-600" />
              </a>
              <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors">
                <Twitter size={20} className="text-blue-400" />
              </a>
              <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors">
                <Instagram size={20} className="text-pink-600" />
              </a>
              <a href="#" className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors">
                <Linkedin size={20} className="text-blue-700" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in animation-delay-200">
            <h3 className="text-xl font-bold text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About GFG</a></li>
              <li><a href="#technical" className="text-gray-600 hover:text-blue-600 transition-colors">Technical Team</a></li>
              <li><a href="#graphic-design" className="text-gray-600 hover:text-blue-600 transition-colors">Design Team</a></li>
              <li><a href="#social" className="text-gray-600 hover:text-blue-600 transition-colors">Social Team</a></li>
              <li><a href="#video-edition" className="text-gray-600 hover:text-blue-600 transition-colors">Video Team</a></li>
              <li><a href="#publicity" className="text-gray-600 hover:text-blue-600 transition-colors">Publicity Team</a></li>
            </ul>
          </div>
          
          <div className="space-y-4 animate-fade-in animation-delay-300">
            <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">GFG Student Chapter, University Campus, Tech City, State - 123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-green-500 mr-2 flex-shrink-0" />
                <a href="mailto:gfgstudentchapter@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">gfgstudentchapter@example.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-green-500 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">+123 456 7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600 text-sm animate-fade-in animation-delay-400">
            © {new Date().getFullYear()} GFG Student Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
