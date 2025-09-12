import React from 'react';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';
import { experiences } from '../mockData/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            17+ years of progressive leadership in enterprise architecture and technology innovation
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="group relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-blue-200 hidden md:block"></div>
              )}
              
              {/* Experience Card */}
              <div className="glass rounded-xl p-8 card-hover text-left">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-blue-600 font-medium mb-3">
                          {exp.company}
                        </h4>
                      </div>
                      
                      {exp.type === 'current' && (
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium self-start lg:self-center">
                          Current Position
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-slate-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 text-left">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 leading-7 flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Education</h3>
          <div className="bg-slate-50 p-8 rounded-xl text-center max-w-2xl mx-auto">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">
              Bachelor of Engineering, Computer Science
            </h4>
            <p className="text-slate-600">
              CITM, Faridabad – 2005
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;