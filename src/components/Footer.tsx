
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-white to-blue-50">
      {/* Decorative wave shape */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-blue-50"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and about */}
          <div className="md:col-span-5 space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-tr from-green-500 to-green-400 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">G</div>
              <h3 className="text-2xl font-bold text-gray-800">GFG Student Chapter</h3>
            </div>
            
            <p className="text-gray-600 max-w-md leading-relaxed">
              Our GeeksforGeeks Student Chapter brings together passionate students to build skills, solve problems, and create innovative solutions through collaborative learning and community engagement.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 transform scale-75 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                <div className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full transition-colors relative z-10">
                  <Facebook size={20} className="text-blue-600" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 transform scale-75 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                <div className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full transition-colors relative z-10">
                  <Twitter size={20} className="text-blue-400" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-pink-500 rounded-full opacity-0 transform scale-75 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                <div className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full transition-colors relative z-10">
                  <Instagram size={20} className="text-pink-600" />
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-blue-700 rounded-full opacity-0 transform scale-75 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                <div className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full transition-colors relative z-10">
                  <Linkedin size={20} className="text-blue-700" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6 animate-fade-in animation-delay-200">
            <h3 className="text-xl font-bold text-gray-800 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-400"></span>
            </h3>
            <ul className="space-y-3">
              {['About GFG', 'Technical Team', 'Design Team', 'Social Team', 'Video Team', 'Publicity Team'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="md:col-span-4 space-y-6 animate-fade-in animation-delay-300">
            <h3 className="text-xl font-bold text-gray-800 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-400"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="mt-1 mr-3 p-2.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                  <MapPin size={18} className="text-green-500" />
                </div>
                <span className="text-gray-600">GFG Student Chapter, University Campus, Tech City, State - 123456</span>
              </li>
              <li className="flex items-center group">
                <div className="mr-3 p-2.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                  <Mail size={18} className="text-green-500" />
                </div>
                <a href="mailto:gfgstudentchapter@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  gfgstudentchapter@example.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="mr-3 p-2.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                  <Phone size={18} className="text-green-500" />
                </div>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm animate-fade-in animation-delay-400">
            © {new Date().getFullYear()} GFG Student Chapter. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-500 mr-2">Made with</span>
            <Heart size={16} className="text-red-500 mr-2 animate-pulse" style={{animationDuration: '2s'}} />
            <span className="text-sm text-gray-500">by GFG Team</span>
          </div>
          
          {/* Back to top button */}
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors animate-fade-in z-50"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
