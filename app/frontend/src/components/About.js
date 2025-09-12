import React from 'react';
import { Cloud, Cpu, Users2, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS multi-region deployments and cloud-native design patterns',
      color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
    },
    {
      icon: Cpu,
      title: 'System Design',
      description: 'Distributed systems, microservices, and enterprise-scale solutions',
      color: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200'
    },
    {
      icon: Users2,
      title: 'Team Leadership',
      description: 'Leading cross-functional global teams and mentoring engineers',
      color: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-200'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'AI/ML integration and cutting-edge technology adoption',
      color: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate technology leader solving complex business problems through innovative system design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Building Tomorrow's <span className="text-blue-600">Systems</span> Today
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 17 years of experience, I specialize in architecting large-scale, distributed systems 
              that power modern enterprises. My journey spans from modernizing legacy monoliths to designing 
              cloud-native platforms that scale globally.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently serving as <span className="text-blue-600 font-semibold">Sr Solutions Architect</span> at 
              <span className="text-indigo-600 font-semibold"> Bigbasket (A Tata Company)</span>, I architect 
              product-aligned solutions and lead cross-organizational teams in delivering enterprise-grade 
              platforms that improve time-to-market by 40%.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My expertise spans from hands-on technical architecture to strategic technology leadership, 
              with a proven track record of delivering scalable SaaS platforms, API integrations, and 
              cloud transformation initiatives across e-commerce, ed-tech, and publishing domains.
            </p>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500 mt-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Impact</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>40% improvement in enterprise client time-to-market</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span>Multi-region AWS deployments for global scale</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  <span>Successfully mentored 50+ engineers across organizations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl card-hover group"
              >
                <div className={`p-4 rounded-xl ${highlight.color} transition-colors duration-300 inline-block mb-4`}>
                  <highlight.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-10 rounded-3xl border border-blue-100 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200 rounded-full -ml-12 -mb-12 opacity-20"></div>
            <blockquote className="text-2xl md:text-3xl text-slate-700 font-light italic leading-relaxed relative z-10">
              "I believe in building systems that don't just solve today's problems, 
              but create <span className="text-blue-600 font-semibold">platforms for tomorrow's innovations</span>."
            </blockquote>
            <div className="mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;