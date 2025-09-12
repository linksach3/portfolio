import React from 'react';
import { 
  Cloud, 
  Code, 
  Database, 
  Settings, 
  Users, 
  Brain,
  Server,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Enterprise Architecture',
      icon: Settings,
      color: 'bg-blue-100 text-blue-600',
      skills: [
        'Cloud-native design',
        'Distributed computing',
        'API integration',
        'Microservices architecture',
        'Event-driven architecture',
        'System scalability'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'bg-green-100 text-green-600',
      skills: [
        'AWS (EC2, Lambda, S3, DynamoDB)',
        'Kubernetes & Docker',
        'CI/CD pipelines',
        'Jenkins & Git',
        'Multi-region deployments'
      ]
    },
    {
      title: 'Technologies',
      icon: Code,
      color: 'bg-purple-100 text-purple-600',
      skills: [
        'Java & Spring Boot',
        'Node.js & TypeScript',
        'Python',
        'REST APIs',
        'Apache Kafka',
        'Redis & Elasticsearch'
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'bg-orange-100 text-orange-600',
      skills: [
        'MySQL & MongoDB',
        'AWS Neptune (GraphDB)',
        'ETL pipelines',
        'Apache Airflow',
        'Data lake architecture',
        'Real-time analytics'
      ]
    },
    {
      title: 'Leadership',
      icon: Users,
      color: 'bg-red-100 text-red-600',
      skills: [
        'Cross-functional team leadership',
        'Architectural governance',
        'Stakeholder engagement',
        'Agile (SCRUM/Kanban)',
        'Technical mentoring',
        'Strategic planning'
      ]
    },
    {
      title: 'AI/ML & Innovation',
      icon: Brain,
      color: 'bg-indigo-100 text-indigo-600',
      skills: [
        'ML lifecycle architecture',
        'LLM integration',
        'Server-Driven UI (SDUI)',
        'AI-powered workflows',
        'Model deployment patterns',
        'Innovation strategy'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Core <span className="text-blue-600">Competencies</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive technology toolkit refined through 17+ years of enterprise solution delivery
          </p>
        </div>

        <div className="panel p-6 md:p-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 ml-4">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">Certifications</h3>
          <div className="glass p-6 rounded-xl inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Server className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">AWS Certified Solutions Architect</div>
                <div className="text-slate-600 text-sm">Professional Level (Renewal in Progress)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;