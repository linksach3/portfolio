import React from 'react';
import { Linkedin, Mail, MapPin, Heart } from 'lucide-react';
import { contactInfo } from '../mockData/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedIn, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-200 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight mb-3 text-white">Sachin Kumar</h3>
            <p className="text-slate-400 leading-relaxed mb-5">
              Senior Solution Architect & Technology Leader specializing in enterprise-scale 
              distributed systems, cloud architecture, and team leadership. 17+ years of 
              driving innovation across e-commerce, ed-tech, and publishing domains.
            </p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleLinkedInClick}
                className="p-2 rounded-lg text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={handleEmailClick}
                className="p-2 rounded-lg text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Experience', id: 'experience' },
                { label: 'Projects', id: 'projects' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
              <div className="flex items-start text-slate-400">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                <button 
                  onClick={handleEmailClick}
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Professional Inquiries
                </button>
              </div>
              <div className="flex items-start text-slate-400">
                <Linkedin className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                <button 
                  onClick={handleLinkedInClick}
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  LinkedIn Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Summary */}
        <div className="mt-12 pt-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold mb-4 text-white">Core Expertise</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Enterprise Architecture',
                'Cloud-Native Design',
                'Microservices',
                'AWS Solutions',
                'Team Leadership',
                'System Integration',
                'DevOps & CI/CD',
                'Scalability Planning',
                'SaaS Architecture'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-slate-900/60 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-700 hover:bg-slate-900 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sachin Kumar. All rights reserved.
            </p>
            {/* <p className="text-slate-500 text-xs">
              Made with <span className="text-red-400"><Heart className="w-3 h-3 inline" /></span> and curiosity.
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;