import React, { useState } from 'react';
import { ExternalLink, Code, Calendar, Building2, ChevronRight } from 'lucide-react';
import { projects } from '../mockData/mock';
import { Button } from './ui/button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Key <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-scale solutions that drive business transformation and technical innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="panel p-4 md:p-6 flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category 
                  ? '' 
                  : 'border-blue-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="panel p-6 md:p-8 grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass rounded-xl card-hover group overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="chip">
                        {project.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-slate-600 mb-4">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="font-medium">{project.company}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start text-slate-600"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-slate-800 mb-2">Impact</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Interested in My Work?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm always excited to discuss architecture challenges and explore opportunities 
              to build scalable, innovative solutions together.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;