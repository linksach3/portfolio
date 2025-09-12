// Mock data for the portfolio website
export const personalInfo = {
    name: "Sachin Kumar",
    title: "Sr Solutions Architect & Technology Leader",
    location: "Bangalore, India",
    linkedIn: "http://linkedin.com/in/linksach3",
    summary: "Results-driven Technology Leader with 17+ years of experience architecting and delivering large-scale, distributed systems across e-commerce, ed-tech, and publishing domains."
  };
  
  export const experiences = [
    {
      id: 1,
      company: "Bigbasket – A Tata Company",
      position: "Sr Solutions Architect",
      duration: "Apr 2024 – Present",
      location: "Bangalore, India",
      type: "current",
      achievements: [
        "Architecting product-aligned solutions through microservices, RESTful APIs, and event-driven workflows using Node.js, Java, Kafka, and AWS",
        "Leading cross-organizational initiatives to automate data onboarding workflows, improving time-to-market for enterprise clients by 40%",
        "Mentoring high-performing engineering teams and providing technical guidance across product, QA, and DevOps functions",
        "Driving adoption of best practices in system security, observability, and scalability across enterprise platforms"
      ]
    },
    {
      id: 2,
      company: "Bigbasket – A Tata Company",
      position: "Solution Architect",
      duration: "Mar 2022 – Mar 2024",
      location: "Bangalore, India",
      type: "previous",
      achievements: [
        "Architected Transport Management System (TMS) integrations for 3PL partners with emphasis on security, retry logic, asynchronous messaging, and SLA-driven APIs",
        "Owned design decisions, stakeholder reviews, and technical delivery for high-throughput integrations in a SaaS platform context",
        "Led adoption of reusable shared libraries, reducing duplicate effort and enabling faster service rollout"
      ]
    },
    {
      id: 3,
      company: "U-Next Learnings Pvt Ltd",
      position: "Senior Architect",
      duration: "Jun 2021 – Mar 2022",
      location: "India",
      type: "previous",
      achievements: [
        "Designed a scalable, cloud-native Learning Management System using the MEAN stack and AWS services",
        "Implemented GraphDB-based (AWS Neptune, Gremlin) user permission system, enabling fine-grained, graph-powered access control"
      ]
    },
    {
      id: 4,
      company: "Infosys Ltd",
      position: "Sr. Technology Architect → Technology Lead",
      duration: "2011 – 2021",
      location: "USA & India",
      type: "previous",
      achievements: [
        "Delivered enterprise-scale solutions across publishing and legal-tech clients, modernizing monolith systems into cloud-native platforms",
        "Architected active-active AWS multi-region deployments for highly available, global-scale publishing applications",
        "Led global teams through system modernization, POC evaluation, and framework selection for modernization roadmaps",
        "Built ETL and data lake pipelines (Apache Airflow → AWS S3 + Redshift/Spectrum) for a global publishing client",
        "Evangelized DevOps principles, CI/CD pipelines, and clean architecture patterns in cross-border delivery programs"
      ]
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Marketplace Integration Platform",
      year: "2024",
      company: "Bigbasket",
      description: "Comprehensive SCM onboarding framework enabling seamless marketplace integration with automated order and inventory management",
      technologies: ["Node.js", "Kafka", "MySQL", "Kubernetes", "REST APIs"],
      keyFeatures: [
        "Matrix SCM onboarding framework for multiple marketplace partners",
        "Automated order allocation via intelligent 3PL integration",
        "Large-scale catalog ingestion and transformation ETL pipeline",
        "Configurable template-based data setup automation"
      ],
      impact: "Simplified customer adoption workflows and reduced onboarding time by 60%",
      category: "Enterprise Integration"
    },
    {
      id: 2,
      title: "Transport Management System (TMS) Integration",
      year: "2022-2023",
      company: "Bigbasket",
      description: "Secure, event-driven logistics integration platform connecting multiple 3PL providers with enterprise-grade reliability",
      technologies: ["Java", "Spring Boot", "Kafka", "AWS", "Docker"],
      keyFeatures: [
        "Multi-provider 3PL integration with unified API layer",
        "Advanced retry logic and circuit breaker patterns",
        "Real-time SLA monitoring and alerting system",
        "Asynchronous messaging with guaranteed delivery"
      ],
      impact: "Improved logistics efficiency by 35% and reduced integration costs by 50%",
      category: "Logistics & Supply Chain"
    },
    {
      id: 3,
      title: "Cloud-Native Learning Management System",
      year: "2021",
      company: "U-Next Learnings",
      description: "Scalable microservices-based LMS with advanced access control powered by graph database technology",
      technologies: ["MEAN Stack", "AWS Neptune", "GraphDB", "Gremlin", "AWS"],
      keyFeatures: [
        "Microservices architecture with event-driven communication",
        "GraphDB-powered fine-grained permission system",
        "Dynamic content delivery and personalization",
        "Real-time learning analytics and progress tracking"
      ],
      impact: "Enhanced user experience and reduced content management overhead by 40%",
      category: "Education Technology"
    },
    {
      id: 4,
      title: "Multi-Region Enterprise Modernization",
      year: "2020-2021",
      company: "Infosys Ltd",
      description: "Complete modernization of legacy publishing systems to cloud-native, multi-region architecture",
      technologies: ["AWS", "Spring Batch", "Redis", "Kubernetes", "CI/CD"],
      keyFeatures: [
        "Active-active multi-region AWS deployment",
        "Legacy monolith to microservices transformation",
        "Redis-based distributed caching layer",
        "Automated CI/CD pipeline implementation"
      ],
      impact: "Achieved 99.9% uptime and 70% performance improvement globally",
      category: "Digital Transformation"
    },
    {
      id: 5,
      title: "Enterprise Data Lake & ETL Pipeline",
      year: "2020",
      company: "Infosys Ltd",
      description: "Comprehensive data lake architecture with orchestrated ETL pipelines for global publishing client",
      technologies: ["Apache Airflow", "AWS S3", "Redshift", "Spectrum", "Python"],
      keyFeatures: [
        "Scalable data lake architecture on AWS",
        "Apache Airflow pipeline orchestration",
        "Real-time and batch data processing",
        "Advanced analytics and reporting capabilities"
      ],
      impact: "Reduced data processing time by 80% and enabled real-time business insights",
      category: "Data Engineering"
    }
  ];
  
  export const contactInfo = {
    email: "linksach3@gmail.com",
    linkedIn: "http://linkedin.com/in/linksach3", 
    location: "Bangalore, India",
    availability: "Open to consulting and full-time opportunities"
  };

  export const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      title: "VP Engineering",
      company: "Bigbasket",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "Sachin's architectural vision and leadership have been instrumental in our platform transformation. His ability to design scalable solutions while mentoring teams is exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Nair",
      title: "Senior Engineering Manager",
      company: "U-Next Learnings",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: "Working with Sachin on the LMS project was remarkable. His GraphDB expertise and cloud-native approach delivered a system that exceeded all expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Director of Technology",
      company: "Infosys Ltd",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "Sachin led our multi-region AWS modernization with incredible expertise. His strategic thinking and hands-on approach made complex migrations seamless.",
      rating: 5
    },
    {
      id: 4,
      name: "Anita Gupta",
      title: "Product Director",
      company: "Bigbasket",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "Sachin's integration solutions have revolutionized our marketplace onboarding. His 40% improvement in time-to-market speaks volumes about his impact.",
      rating: 5
    }
  ];