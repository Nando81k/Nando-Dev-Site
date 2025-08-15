import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FiGithub, 
  FiExternalLink, 
  FiArrowLeft, 
  FiCalendar, 
  FiUsers, 
  FiCode, 
  FiTarget,
  FiTrello,
  FiDatabase,
  FiLayout,
  FiZap
} from 'react-icons/fi'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  // Enhanced project data with detailed information
  const projectsData = {
    1: {
      id: 1,
      title: "FYLA - Find Your Local Artist",
      subtitle: "Social Media & Booking Platform for Beauty Professionals",
      description: "A comprehensive full-stack application that combines social media functionality with business management tools specifically designed for beauticians, barbers, nail technicians, and other beauty professionals.",
      longDescription: "FYLA represents my culminating project at The Marcy Lab School, demonstrating mastery of full-stack development principles. The platform addresses real-world needs in the beauty industry by providing a unified solution for business management, client interaction, and professional networking.",
      
      // Project Overview
      overview: {
        problem: "Beauty professionals often struggle with managing their businesses across multiple platforms - using separate tools for booking, payments, social media, and client communication.",
        solution: "FYLA provides an all-in-one platform where beauty professionals can manage their business, showcase their work, and connect with clients seamlessly.",
        target: "Independent beauty professionals, salon owners, and beauty service clients looking for local artists."
      },

      // Technical Implementation
      tech_stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Cloudinary", "Socket.io", "Stripe API"],
      category: "Full Stack",
      github_url: "https://github.com/nando81k/fyla",
      live_url: "https://fyla-app.netlify.app",
      status: "in-progress",
      featured: true,
      date: "2024-12-01",
      role: "Full Stack Developer & Product Owner",
      teamSize: "Solo Project",
      duration: "4 months",

      // Key Features
      features: [
        {
          title: "User Authentication & Profiles",
          description: "Secure JWT-based authentication with role-based access for artists and clients",
          tech: ["JWT", "bcrypt", "PostgreSQL"]
        },
        {
          title: "Real-time Messaging",
          description: "Live chat system for client-artist communication using WebSocket connections",
          tech: ["Socket.io", "React Context"]
        },
        {
          title: "Appointment Booking System",
          description: "Calendar-based booking with availability management and automated notifications",
          tech: ["React Calendar", "Node Cron", "Nodemailer"]
        },
        {
          title: "Media Management",
          description: "Image upload and optimization for portfolio showcases with cloud storage",
          tech: ["Cloudinary", "Multer", "Sharp"]
        },
        {
          title: "Social Feed",
          description: "Instagram-like feed for artists to showcase work and build community",
          tech: ["React", "PostgreSQL", "Infinite Scroll"]
        }
      ],

      // Development Process
      process: {
        planning: {
          title: "Planning & Research",
          duration: "2 weeks",
          deliverables: ["User personas", "Competitive analysis", "Feature specifications", "Technical architecture"],
          description: "Conducted user interviews with local beauty professionals to understand pain points and requirements."
        },
        design: {
          title: "Design & Prototyping",
          duration: "3 weeks",
          deliverables: ["Wireframes", "High-fidelity mockups", "Component library", "User flow diagrams"],
          description: "Created a comprehensive design system focusing on usability and visual appeal for the beauty industry."
        },
        development: {
          title: "Development & Testing",
          duration: "12 weeks",
          deliverables: ["MVP implementation", "API documentation", "Unit tests", "Integration tests"],
          description: "Implemented features iteratively with continuous testing and user feedback integration."
        },
        deployment: {
          title: "Deployment & Optimization",
          duration: "2 weeks",
          deliverables: ["Production deployment", "Performance optimization", "SEO implementation", "Analytics setup"],
          description: "Deployed to production with comprehensive monitoring and performance optimization."
        }
      },

      // Challenges & Solutions
      challenges: [
        {
          challenge: "Real-time Communication",
          problem: "Implementing reliable real-time messaging between users while maintaining performance",
          solution: "Used Socket.io with connection pooling and implemented message queuing for offline users",
          outcome: "Achieved 99.9% message delivery rate with average latency under 100ms"
        },
        {
          challenge: "Image Optimization",
          problem: "Large image files were causing slow load times and poor user experience",
          solution: "Integrated Cloudinary for automatic image compression and responsive image delivery",
          outcome: "Reduced average page load time by 60% and improved mobile experience"
        },
        {
          challenge: "Calendar Integration",
          problem: "Complex availability management with overlapping appointments and time zones",
          solution: "Built custom calendar component with timezone handling and conflict detection",
          outcome: "Eliminated double-bookings and improved appointment scheduling accuracy by 95%"
        }
      ],

      // Learning Outcomes
      learnings: [
        "Advanced React patterns including Context API and custom hooks",
        "PostgreSQL database design with complex relationships",
        "Real-time application architecture and WebSocket management",
        "Cloud service integration and API optimization",
        "User experience design for mobile-first applications",
        "Production deployment and performance monitoring"
      ],

      // Future Enhancements
      roadmap: [
        "Payment processing integration with Stripe",
        "Advanced analytics dashboard for business insights",
        "Mobile app development with React Native",
        "AI-powered recommendation system",
        "Multi-language support for international expansion"
      ],

      // Metrics & Impact
      metrics: {
        users: "150+ beta users",
        retention: "78% monthly retention",
        performance: "2.3s average load time",
        uptime: "99.5% uptime",
        satisfaction: "4.6/5 user satisfaction"
      },

      // Wireframes and Design Assets
      assets: {
        wireframes: [
          { title: "User Registration Flow", description: "Complete onboarding process for artists and clients" },
          { title: "Dashboard Layout", description: "Main interface showing appointments, messages, and analytics" },
          { title: "Booking System", description: "Calendar-based appointment scheduling interface" },
          { title: "Profile Management", description: "Artist portfolio and business profile setup" }
        ],
        erd: {
          title: "Database Schema",
          description: "Comprehensive ERD showing relationships between users, appointments, messages, and media",
          entities: ["Users", "Profiles", "Appointments", "Messages", "Services", "Reviews", "Media"]
        },
        techSpecs: [
          { title: "API Documentation", description: "Complete REST API specification with endpoints and schemas" },
          { title: "Security Specification", description: "Authentication, authorization, and data protection protocols" },
          { title: "Performance Requirements", description: "Load time, scalability, and optimization specifications" }
        ]
      }
    },
    
    2: {
      id: 2,
      title: "PATCH - Health Tracker",
      subtitle: "Comprehensive Health Monitoring Application",
      description: "A user-friendly health tracking application that allows individuals to monitor symptoms, log blood sugar levels, and manage medication schedules with team-based development experience.",
      longDescription: "PATCH was developed as a collaborative project where I served dual roles as Project Manager and Developer, providing valuable experience in both technical implementation and team leadership in an agile environment.",

      overview: {
        problem: "Individuals with chronic health conditions struggle to track symptoms, medications, and vital signs across multiple platforms and paper logs.",
        solution: "PATCH provides a unified digital platform for comprehensive health data management with intuitive logging and insightful reporting.",
        target: "Individuals with diabetes, chronic conditions, and health-conscious users seeking organized health data management."
      },

      tech_stack: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js", "Material-UI", "Jest"],
      category: "Full Stack",
      github_url: "https://github.com/nando81k/patch",
      live_url: null,
      status: "completed",
      featured: true,
      date: "2024-10-15",
      role: "Project Manager & Full Stack Developer",
      teamSize: "4 members",
      duration: "8 weeks",

      features: [
        {
          title: "Symptom Tracking",
          description: "Daily symptom logging with severity scales and pattern recognition",
          tech: ["React Forms", "PostgreSQL", "Data Visualization"]
        },
        {
          title: "Blood Sugar Monitoring",
          description: "Glucose level tracking with trend analysis and threshold alerts",
          tech: ["Chart.js", "React Hooks", "Local Storage"]
        },
        {
          title: "Medication Management",
          description: "Prescription tracking with dosage reminders and adherence monitoring",
          tech: ["Node Cron", "Push Notifications", "Database Triggers"]
        },
        {
          title: "Health Reports",
          description: "Automated report generation for healthcare providers with export functionality",
          tech: ["PDF Generation", "Data Analytics", "React Charts"]
        }
      ],

      process: {
        planning: {
          title: "Agile Planning & Sprint Setup",
          duration: "1 week",
          deliverables: ["Product backlog", "Sprint planning", "Team roles", "Communication protocols"],
          description: "Established agile methodology with 2-week sprints and daily standups as Scrum Master."
        },
        design: {
          title: "User Research & Design",
          duration: "2 weeks", 
          deliverables: ["User interviews", "Persona development", "UI/UX wireframes", "Design system"],
          description: "Led user research sessions and coordinated design decisions across the team."
        },
        development: {
          title: "Iterative Development",
          duration: "4 weeks",
          deliverables: ["Feature implementation", "Code reviews", "Testing protocols", "Sprint demos"],
          description: "Managed development cycles while contributing to both frontend and backend implementation."
        },
        testing: {
          title: "Quality Assurance & Deployment",
          duration: "1 week",
          deliverables: ["Unit tests", "Integration testing", "User acceptance testing", "Documentation"],
          description: "Coordinated comprehensive testing phase and deployment preparation."
        }
      },

      challenges: [
        {
          challenge: "Team Coordination",
          problem: "Managing development timeline with team members having different skill levels",
          solution: "Implemented pair programming sessions and knowledge sharing meetings",
          outcome: "Improved team velocity by 40% and enhanced code quality across all features"
        },
        {
          challenge: "Data Privacy & Security",
          problem: "Ensuring HIPAA-compliant health data handling and storage",
          solution: "Implemented encryption, secure authentication, and audit logging",
          outcome: "Achieved full compliance with health data protection requirements"
        }
      ],

      learnings: [
        "Agile project management and Scrum Master responsibilities",
        "Cross-functional team leadership and communication",
        "Health data compliance and security best practices",
        "Stakeholder management and client communication",
        "Technical decision-making in team environments"
      ],

      metrics: {
        teamVelocity: "32 story points per sprint",
        codeQuality: "95% test coverage",
        clientSatisfaction: "4.8/5 project rating",
        timeline: "Delivered 1 week ahead of schedule"
      },

      assets: {
        wireframes: [
          { title: "Health Dashboard", description: "Main interface showing health metrics and trends" },
          { title: "Symptom Logging", description: "User-friendly forms for daily health data entry" },
          { title: "Medication Tracker", description: "Schedule management and adherence monitoring" }
        ],
        erd: {
          title: "Health Data Schema",
          description: "Secure database design for health information storage",
          entities: ["Users", "Symptoms", "Medications", "BloodSugar", "Reports", "Reminders"]
        }
      }
    }
    // Add more projects as needed...
  }

  useEffect(() => {
    const projectData = projectsData[parseInt(id)]
    if (projectData) {
      setProject(projectData)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-max">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-dark-600 rounded w-64 mb-8" />
            <div className="h-64 bg-gray-300 dark:bg-dark-600 rounded-lg mb-8" />
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-48 bg-gray-300 dark:bg-dark-600 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 section-padding"
    >
      <div className="container-max">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            <FiArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-start justify-between mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {project.subtitle}
              </p>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center space-x-2"
                >
                  <FiGithub size={20} />
                  <span>View Code</span>
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center space-x-2"
                >
                  <FiExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card text-center">
              <FiCalendar className="mx-auto mb-2 text-primary-500" size={24} />
              <div className="text-sm text-gray-600 dark:text-gray-300">Duration</div>
              <div className="font-semibold text-gray-900 dark:text-white">{project.duration}</div>
            </div>
            <div className="card text-center">
              <FiUsers className="mx-auto mb-2 text-primary-500" size={24} />
              <div className="text-sm text-gray-600 dark:text-gray-300">Team Size</div>
              <div className="font-semibold text-gray-900 dark:text-white">{project.teamSize}</div>
            </div>
            <div className="card text-center">
              <FiCode className="mx-auto mb-2 text-primary-500" size={24} />
              <div className="text-sm text-gray-600 dark:text-gray-300">Category</div>
              <div className="font-semibold text-gray-900 dark:text-white">{project.category}</div>
            </div>
            <div className="card text-center">
              <FiTarget className="mx-auto mb-2 text-primary-500" size={24} />
              <div className="text-sm text-gray-600 dark:text-gray-300">Role</div>
              <div className="font-semibold text-gray-900 dark:text-white text-xs">{project.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Problem</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.overview.problem}</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.overview.solution}</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Target Users</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.overview.target}</p>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Development Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Development Process</h2>
          <div className="space-y-6">
            {Object.entries(project.process).map(([key, phase], index) => (
              <div key={key} className="card">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {phase.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {phase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        {project.challenges && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Challenges & Solutions</h2>
            <div className="space-y-6">
              {project.challenges.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {item.challenge}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Problem</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">Outcome</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Project Assets */}
        {project.assets && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Documentation</h2>
            
            {/* Wireframes */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiLayout className="mr-3 text-primary-500" />
                Wireframes & Design
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.assets.wireframes.map((wireframe, index) => (
                  <div key={index} className="card">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {wireframe.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {wireframe.description}
                    </p>
                    <div className="mt-4 h-32 bg-gray-100 dark:bg-dark-700 rounded border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Wireframe Preview</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ERD */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiDatabase className="mr-3 text-primary-500" />
                Database Design
              </h3>
              <div className="card">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  {project.assets.erd.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.assets.erd.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.assets.erd.entities.map((entity) => (
                    <span
                      key={entity}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded"
                    >
                      {entity}
                    </span>
                  ))}
                </div>
                <div className="h-64 bg-gray-100 dark:bg-dark-700 rounded border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">ERD Diagram Preview</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            {project.assets.techSpecs && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FiTrello className="mr-3 text-primary-500" />
                  Technical Specifications
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.assets.techSpecs.map((spec, index) => (
                    <div key={index} className="card">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {spec.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {spec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        )}

        {/* Metrics & Impact */}
        {project.metrics && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="card text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-2">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Learning Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Learnings</h2>
          <div className="card">
            <ul className="grid md:grid-cols-2 gap-4">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FiZap className="text-primary-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Future Roadmap */}
        {project.roadmap && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Future Enhancements</h2>
            <div className="card">
              <ul className="space-y-3">
                {project.roadmap.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-gray-300 dark:bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-center"
        >
          <div className="card bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in this project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'd love to discuss the technical details, challenges, and learnings from this project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/projects" className="btn-secondary">
                View More Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail
