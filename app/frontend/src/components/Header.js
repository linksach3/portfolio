import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    // { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b' 
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent cursor-pointer hover:from-blue-800 hover:to-indigo-800 transition-all duration-300"
            onClick={() => scrollToSection('hero')}
          >
            Sachin Kumar
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-blue-700 transition-colors duration-200 font-normal relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-4/5"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-blue-700 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t bg-white/95 backdrop-blur-md rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mx-4 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Get In Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;