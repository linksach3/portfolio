import React from 'react';
import { MapPin, Linkedin, Mail, ExternalLink, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../mockData/mock';

const Contact = () => {
  const { toast } = useToast();

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedIn, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      toast({
        title: "Email Copied!",
        description: "Email address has been copied to your clipboard.",
        variant: "default",
      });
    } catch (err) {
      console.error('Failed to copy email:', err);
      toast({
        title: "Copy Failed",
        description: "Please copy the email manually: " + contactInfo.email,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next enterprise architecture challenge or explore collaboration opportunities
          </p>
        </div>

        {/* Contact Methods - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Get In Touch
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              I'm always interested in discussing complex architecture challenges, 
              sharing insights about enterprise systems, or exploring opportunities 
              to drive technology innovation. Whether you're looking for strategic 
              guidance or hands-on architecture leadership, let's connect.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* LinkedIn */}
            <div 
              className="glass p-8 rounded-xl card-hover cursor-pointer group"
              onClick={handleLinkedInClick}
            >
              <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition-colors duration-300 inline-block mb-6">
                <Linkedin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                LinkedIn Profile
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Connect professionally and view my complete background, endorsements, and recommendations.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span>View Profile</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Email */}
            <div className="glass p-8 rounded-xl card-hover">
              <div className="bg-purple-100 p-4 rounded-xl inline-block mb-6">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                Email
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Direct communication for project discussions and collaboration opportunities.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={handleEmailClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                >
                  Send Email
                </Button>
                <Button 
                  onClick={handleCopyEmail}
                  variant="outline"
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Email
                </Button>
              </div>
            </div>

            {/* Location */}
            <div className="glass p-8 rounded-xl card-hover">
              <div className="bg-green-100 p-4 rounded-xl inline-block mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                Location
              </h4>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Based in India's technology hub, available for remote collaboration worldwide.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">📍 {contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Availability & CTA */}
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 text-center">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              Current Availability
            </h4>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              {contactInfo.availability}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleLinkedInClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
              <Button 
                onClick={handleEmailClick}
                variant="outline"
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Professional Note */}
          <div className="text-center mt-12">
            <div className="bg-slate-50 p-6 rounded-xl max-w-2xl mx-auto">
              <h5 className="font-semibold text-slate-800 mb-2">Response Time</h5>
              <p className="text-slate-600 text-sm leading-relaxed">
                I typically respond to professional inquiries within 24-48 hours. 
                For urgent matters, LinkedIn messages tend to get faster responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;