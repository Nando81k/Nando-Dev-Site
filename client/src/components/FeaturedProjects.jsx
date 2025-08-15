import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for now - replace with actual API call
  const mockProjects = [
    {
      id: 1,
      title: "FYLA - Find Your Local Artist",
      description: "A full-stack social media and booking platform for beauticians (barbers, nail techs) featuring business management tools, appointment scheduling, and client interaction features. My culminating project at The Marcy Lab School.",
      tech_stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Cloudinary"],
      github_url: "https://github.com/nando81k/fyla",
      live_url: "https://fyla-app.netlify.app",
      status: "in-progress"
    },
    {
      id: 2,
      title: "PATCH - Civic Tech Platform",
      description: "A health tracking application that allows users to monitor symptoms, log blood sugar levels, and keep track of medications. Served as Project Manager and Scrum Master, leading cross-functional team coordination and sprint planning.",
      tech_stack: ["React", "Node.js", "PostgreSQL", "Agile", "Scrum"],
      github_url: "https://github.com/nando81k/patch",
      live_url: null,
      status: "completed"
    },
    {
      id: 3,
      title: "Portfolio Website v2",
      description: "This very website! Built with PERN stack and designed to showcase personality alongside technical skills.",
      tech_stack: ["React", "Express", "PostgreSQL", "Tailwind"],
      github_url: "https://github.com/nando81k/portfolio-v2",
      live_url: null,
      status: "in-progress"
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-dark-600 rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-gray-300 dark:bg-dark-600 rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my journey from ideas to deployed applications. 
            Each one taught me something new.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group hover:scale-105"
            >
              {/* Project Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : project.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
                
                <div className="flex space-x-2">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                      title="View source code"
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                      title="View live site"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects" className="btn-secondary group inline-flex items-center">
            View All Projects
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
