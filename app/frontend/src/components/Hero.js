import React from 'react';
import { ChevronDown, Award, Users, Building, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, label: '17+ Years', description: 'Experience' },
    { icon: Users, label: 'Global Teams', description: 'Leadership' },
    { icon: Building, label: 'Enterprise', description: 'Architecture' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            {/* Badge */}
            <div className="chip mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Sr Solutions Architect
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 leading-tight">
              Sachin Kumar
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <h2 className="text-xl md:text-2xl text-blue-600 font-medium">
              Senior Solution Architect & Technology Leader
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Architecting scalable, cloud-native systems that drive enterprise transformation. 
              17+ years of building distributed platforms across e-commerce, ed-tech, and publishing domains.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass p-4 rounded-xl text-center group">
                <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-base font-semibold text-slate-800">{stat.label}</div>
                <div className="text-xs text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-6 h-6 text-slate-400 hover:text-blue-600 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;