import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiFilter, FiCode, FiUsers, FiCalendar, FiArrowRight } from 'react-icons/fi'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  // Mock projects data
  const mockProjects = [
    {
      id: 1,
      title: "FYLA - Find Your Local Artist",
      description: "A comprehensive social media and booking platform designed specifically for beauticians including barbers, nail technicians, and other beauty professionals. Features business management tools, appointment scheduling, client interaction capabilities, and a social feed for showcasing work.",
      longDescription: "FYLA represents my culminating project at The Marcy Lab School, combining social media functionality with practical business management tools. The platform allows beauty professionals to manage their businesses while building a community around their craft. Clients can discover local artists, book appointments, and engage with their favorite professionals' content.",
      tech_stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Cloudinary", "Socket.io"],
      category: "Full Stack",
      github_url: "https://github.com/nando81k/fyla",
      live_url: "https://fyla-app.netlify.app",
      status: "in-progress",
      featured: true,
      date: "2024-12-01",
      role: "Full Stack Developer",
      teamSize: "Solo Project",
      highlights: [
        "Real-time messaging system",
        "Image upload and management",
        "Appointment booking system",
        "User authentication & authorization",
        "Responsive design"
      ]
    },
    {
      id: 2,
      title: "PATCH - Health Tracker",
      description: "A health tracking application that allows users to monitor symptoms, log blood sugar levels, and keep track of medications. Led the project as Project Manager and Scrum Master while contributing to development.",
      longDescription: "PATCH was developed to help individuals manage their health data effectively. As both PM and Scrum Master, I coordinated a cross-functional team while also contributing to the codebase. The application focuses on user-friendly data entry and meaningful health insights.",
      tech_stack: ["React", "Node.js", "PostgreSQL", "Chart.js", "Express"],
      category: "Full Stack",
      github_url: "https://github.com/nando81k/patch",
      live_url: null,
      status: "completed",
      featured: true,
      date: "2024-10-15",
      role: "Project Manager & Developer",
      teamSize: "4 members",
      highlights: [
        "Led agile development process",
        "Data visualization with charts",
        "Secure health data storage",
        "Cross-functional team coordination",
        "User-centered design approach"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website v2",
      description: "This very website! A modern, responsive portfolio built with the PERN stack, featuring dark mode, smooth animations, and a blog system. Designed to showcase both technical skills and personality.",
      longDescription: "My personal portfolio represents my growth as a developer and designer. Built from scratch with modern web technologies, it features a comprehensive project showcase, blog functionality, and GitHub integration. The design emphasizes clean aesthetics while maintaining functionality.",
      tech_stack: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      github_url: "https://github.com/nando81k/portfolio-v2",
      live_url: null,
      status: "in-progress",
      featured: true,
      date: "2024-11-01",
      role: "Full Stack Developer & Designer",
      teamSize: "Solo Project",
      highlights: [
        "Custom design system",
        "Dark/light mode toggle",
        "Smooth animations",
        "Responsive design",
        "SEO optimization"
      ]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A clean, responsive weather application that provides current conditions and 5-day forecasts. Features location search, favorite cities, and weather alerts.",
      longDescription: "Built as a learning project to practice API integration and responsive design. The dashboard provides comprehensive weather information with an intuitive interface.",
      tech_stack: ["React", "OpenWeather API", "CSS3", "Local Storage"],
      category: "Frontend",
      github_url: "https://github.com/nando81k/weather-dashboard",
      live_url: "https://weather-dashboard-nando.netlify.app",
      status: "completed",
      featured: false,
      date: "2024-08-20",
      role: "Frontend Developer",
      teamSize: "Solo Project",
      highlights: [
        "API integration",
        "Local storage implementation",
        "Responsive grid layout",
        "Error handling",
        "Progressive enhancement"
      ]
    },
    {
      id: 5,
      title: "Task Manager API",
      description: "A RESTful API for task management with user authentication, CRUD operations, and team collaboration features. Built with Express.js and PostgreSQL.",
      longDescription: "A backend-focused project demonstrating API design principles, database relationships, and authentication systems. Includes comprehensive testing and documentation.",
      tech_stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Jest"],
      category: "Backend",
      github_url: "https://github.com/nando81k/task-manager-api",
      live_url: null,
      status: "completed",
      featured: false,
      date: "2024-07-10",
      role: "Backend Developer",
      teamSize: "Solo Project",
      highlights: [
        "RESTful API design",
        "User authentication",
        "Database relationships",
        "Unit testing",
        "API documentation"
      ]
    },
    {
      id: 6,
      title: "E-commerce Landing Page",
      description: "A modern, conversion-optimized landing page for an e-commerce brand. Features product showcases, testimonials, and responsive design.",
      longDescription: "Designed and developed as a freelance project, focusing on conversion optimization and user experience. The page features modern design trends and smooth interactions.",
      tech_stack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      category: "Frontend",
      github_url: "https://github.com/nando81k/ecommerce-landing",
      live_url: "https://ecommerce-landing-nando.netlify.app",
      status: "completed",
      featured: false,
      date: "2024-06-15",
      role: "Frontend Developer & Designer",
      teamSize: "Solo Project",
      highlights: [
        "Conversion optimization",
        "GSAP animations",
        "Mobile-first design",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: mockProjects.length },
    { id: 'Full Stack', label: 'Full Stack', count: mockProjects.filter(p => p.category === 'Full Stack').length },
    { id: 'Frontend', label: 'Frontend', count: mockProjects.filter(p => p.category === 'Frontend').length },
    { id: 'Backend', label: 'Backend', count: mockProjects.filter(p => p.category === 'Backend').length }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects)
      setFilteredProjects(mockProjects)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory, projects])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
    }
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 section-padding"
      >
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 dark:bg-dark-600 rounded w-96 mx-auto mb-6" />
              <div className="h-6 bg-gray-300 dark:bg-dark-600 rounded w-64 mx-auto" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-gray-300 dark:bg-dark-600 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
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
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of my work, from full-stack applications to frontend showcases. 
            Each project represents growth, learning, and problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              <span className="flex items-center space-x-2">
                <FiFilter size={16} />
                <span>{category.label}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:scale-105 relative"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                  
                  <div className="flex space-x-2">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors z-10"
                        title="View source code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors z-10"
                        title="View live site"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Clickable overlay for project details */}
                <Link 
                  to={`/projects/${project.id}`}
                  className="absolute inset-0 z-0"
                  aria-label={`View details for ${project.title}`}
                />

                {/* Project Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <FiCalendar size={12} />
                    <span>{formatDate(project.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiUsers size={12} />
                    <span>{project.teamSize}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech_stack.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
                      +{project.tech_stack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Category Badge and View Details */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium flex items-center space-x-1">
                    <FiCode size={12} />
                    <span>{project.category}</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.featured && (
                      <span className="text-yellow-500 text-xs font-medium">★ Featured</span>
                    )}
                    <div className="flex items-center text-primary-500 text-xs font-medium group-hover:text-primary-600 transition-colors">
                      <span className="mr-1">View Details</span>
                      <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Projects
