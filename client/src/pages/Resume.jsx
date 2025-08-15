import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReactToPrint } from 'react-to-print'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import PDFResume from '../components/PDFResume'
import GitHubStats from '../components/GitHubStats'
import SEOHead from '../components/SEOHead'
import { trackDownload } from '../hooks/useAnalytics'
import { 
  FiDownload, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub,
  FiExternalLink,
  FiCalendar,
  FiUsers,
  FiTrendingUp,
  FiCode,
  FiAward,
  FiBookOpen,
  FiPrinter,
  FiFileText
} from 'react-icons/fi'

const Resume = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const pdfRef = useRef()

  // For print functionality
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: 'Fernando_Martinez_Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
      }
    `
  })

  // For PDF download
  const handleDownloadPDF = async () => {
    if (!pdfRef.current) return
    
    setIsGeneratingPDF(true)
    try {
      // Track download start
      trackDownload('resume_pdf_start', 'pdf')
      
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        height: pdfRef.current.scrollHeight,
        width: pdfRef.current.scrollWidth
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 0

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('Fernando_Martinez_Resume.pdf')
      
      // Track successful download
      trackDownload('Fernando_Martinez_Resume.pdf', 'pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  // Professional Information
  const personalInfo = {
    name: "Fernando Martinez",
    title: "Full Stack Developer",
    email: "fernando@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    linkedin: "linkedin.com/in/fernando-martinez",
    github: "github.com/nando81k",
    website: "fernandomartinez.dev"
  }

  // Technical Skills with proficiency levels
  const technicalSkills = {
    frontend: [
      { name: "React", level: 90, color: "bg-blue-500" },
      { name: "JavaScript (ES6+)", level: 88, color: "bg-yellow-500" },
      { name: "HTML5 & CSS3", level: 92, color: "bg-orange-500" },
      { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
      { name: "Responsive Design", level: 87, color: "bg-green-500" }
    ],
    backend: [
      { name: "Node.js", level: 82, color: "bg-green-600" },
      { name: "Express.js", level: 80, color: "bg-gray-600" },
      { name: "PostgreSQL", level: 78, color: "bg-blue-600" },
      { name: "RESTful APIs", level: 85, color: "bg-purple-500" },
      { name: "JWT Authentication", level: 75, color: "bg-red-500" }
    ],
    tools: [
      { name: "Git & GitHub", level: 88, color: "bg-gray-800" },
      { name: "VS Code", level: 95, color: "bg-blue-400" },
      { name: "Agile/Scrum", level: 82, color: "bg-indigo-500" },
      { name: "Figma", level: 70, color: "bg-pink-500" },
      { name: "Postman", level: 78, color: "bg-orange-400" }
    ]
  }

  // Professional Experience
  const experience = [
    {
      title: "Project Manager & Full Stack Developer",
      company: "PATCH Health Tracker",
      period: "Oct 2024 - Dec 2024",
      type: "Project",
      location: "Remote",
      achievements: [
        "Led cross-functional team of 4 developers using Agile methodology",
        "Delivered health tracking application 1 week ahead of schedule",
        "Implemented real-time symptom tracking and medication management features",
        "Achieved 95% test coverage and maintained high code quality standards",
        "Facilitated daily standups, sprint planning, and retrospectives as Scrum Master"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Agile", "Scrum"]
    },
    {
      title: "Full Stack Developer",
      company: "FYLA - Find Your Local Artist",
      period: "Aug 2024 - Present",
      type: "Personal Project",
      location: "Remote",
      achievements: [
        "Developed social media and booking platform for beauty professionals",
        "Implemented real-time messaging system using Socket.io",
        "Integrated Cloudinary for optimized image management and storage",
        "Built comprehensive appointment booking system with conflict detection",
        "Designed responsive UI/UX serving 150+ beta users with 78% retention rate"
      ],
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Cloudinary"]
    }
  ]

  // Education & Certifications
  const education = [
    {
      institution: "The Marcy Lab School",
      degree: "Software Engineering Fellowship",
      period: "2024",
      location: "New York, NY",
      details: [
        "Intensive full-stack development program focused on JavaScript, React, and Node.js",
        "Completed capstone project (FYLA) demonstrating end-to-end development skills",
        "Collaborative learning environment with pair programming and code reviews",
        "Business and professional development curriculum"
      ],
      gpa: "3.9/4.0"
    }
  ]

  // Projects Summary
  const projectsHighlight = [
    {
      name: "FYLA - Find Your Local Artist",
      description: "Social media & booking platform for beauty professionals",
      impact: "150+ users, 78% retention rate",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"]
    },
    {
      name: "PATCH Health Tracker",
      description: "Symptom tracking app with medication management",
      impact: "Led team of 4, delivered ahead of schedule",
      tech: ["React", "Express", "PostgreSQL", "Agile"]
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio with blog and project showcase",
      impact: "Modern responsive design with dark mode",
      tech: ["React", "Tailwind", "Framer Motion"]
    }
  ]

  const sections = [
    { id: 'overview', label: 'Overview', icon: FiUsers },
    { id: 'experience', label: 'Experience', icon: FiTrendingUp },
    { id: 'skills', label: 'Skills', icon: FiCode },
    { id: 'education', label: 'Education', icon: FiBookOpen },
    { id: 'projects', label: 'Projects', icon: FiAward },
    { id: 'github', label: 'GitHub Stats', icon: FiGithub }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 section-padding"
    >
      <div className="container-max max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Full Stack Developer with expertise in React, Node.js, and team leadership. 
            Passionate about building user-centered applications and collaborative development.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="btn-primary inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGeneratingPDF ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <FiDownload size={18} />
                  <span>Download PDF Resume</span>
                </>
              )}
            </button>
            
            <button
              onClick={handlePrint}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <FiPrinter size={18} />
              <span>Print Resume</span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 space-y-6">
              {/* Personal Info Card */}
              <div className="card">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    FM
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {personalInfo.title}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiMail size={16} className="flex-shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiPhone size={16} className="flex-shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiMapPin size={16} className="flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiLinkedin size={16} className="flex-shrink-0" />
                    <span className="truncate">{personalInfo.linkedin}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiGithub size={16} className="flex-shrink-0" />
                    <span className="truncate">{personalInfo.github}</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    <section.icon size={18} />
                    <span>{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Professional Summary
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Full Stack Developer with hands-on experience in React, Node.js, and PostgreSQL. 
                    Proven track record in project management and team leadership through successful 
                    delivery of PATCH health tracking application. Strong foundation from The Marcy Lab 
                    School with focus on collaborative development and best practices.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-2">2+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-2">150+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Users Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-2">4</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Team Members Led</div>
                    </div>
                  </div>
                </div>

                {/* Key Competencies */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Competencies
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Full Stack Development",
                      "Project Management",
                      "Agile/Scrum Methodology",
                      "Team Leadership",
                      "RESTful API Design",
                      "Database Design",
                      "Responsive Web Design",
                      "Real-time Applications"
                    ].map((competency, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{competency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Professional Experience
                </h2>
                
                {experience.map((job, index) => (
                  <div key={index} className="card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {job.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {job.location} • {job.type}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <FiCalendar size={14} />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical Skills
                </h2>

                {/* Frontend Skills */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Frontend Development
                  </h3>
                  <div className="space-y-4">
                    {technicalSkills.frontend.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className={`h-2 rounded-full ${skill.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Backend Development
                  </h3>
                  <div className="space-y-4">
                    {technicalSkills.backend.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className={`h-2 rounded-full ${skill.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Tools & Technologies
                  </h3>
                  <div className="space-y-4">
                    {technicalSkills.tools.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className={`h-2 rounded-full ${skill.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Education & Certifications
                </h2>

                {education.map((edu, index) => (
                  <div key={index} className="card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {edu.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <FiCalendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Additional Certifications */}
                <div className="card">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Additional Learning
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "JavaScript Algorithms and Data Structures",
                      "React - The Complete Guide",
                      "Node.js Backend Development",
                      "Database Design Fundamentals",
                      "Agile Project Management",
                      "Git Version Control"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <FiAward className="text-primary-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Featured Projects
                </h2>

                {projectsHighlight.map((project, index) => (
                  <div key={index} className="card group hover:scale-105 transition-transform">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {project.description}
                        </p>
                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {project.impact}
                        </p>
                      </div>
                      <FiExternalLink 
                        className="text-gray-400 group-hover:text-primary-500 transition-colors" 
                        size={20} 
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="text-center">
                  <a href="/projects" className="btn-secondary inline-flex items-center space-x-2">
                    <span>View All Projects</span>
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            )}

            {/* GitHub Stats Section */}
            {activeSection === 'github' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  GitHub Statistics & Activity
                </h2>
                
                <GitHubStats username="nando81k" showDetailedStats={true} />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Hidden PDF Component for printing/download */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <PDFResume ref={pdfRef} />
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
