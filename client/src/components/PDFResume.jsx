import React from 'react'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub,
  FiGlobe
} from 'react-icons/fi'

// PDF-optimized Resume component for printing
const PDFResume = React.forwardRef((props, ref) => {
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

  const experience = [
    {
      title: "Project Manager & Full Stack Developer",
      company: "PATCH Health Tracker",
      period: "Oct 2024 - Dec 2024",
      type: "Project",
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

  const skills = {
    frontend: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"],
    backend: ["Node.js", "Express.js", "PostgreSQL", "RESTful APIs", "JWT Authentication"],
    tools: ["Git & GitHub", "VS Code", "Agile/Scrum", "Figma", "Postman"]
  }

  const education = {
    institution: "The Marcy Lab School",
    degree: "Software Engineering Fellowship",
    period: "2024",
    location: "New York, NY",
    gpa: "3.9/4.0",
    details: [
      "Intensive full-stack development program focused on JavaScript, React, and Node.js",
      "Completed capstone project (FYLA) demonstrating end-to-end development skills",
      "Collaborative learning environment with pair programming and code reviews"
    ]
  }

  const projects = [
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
    }
  ]

  return (
    <div ref={ref} className="pdf-resume bg-white text-gray-900 p-8 max-w-4xl mx-auto" style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '14px',
      lineHeight: '1.4',
      color: '#1f2937'
    }}>
      {/* Header */}
      <header className="text-center mb-8 border-b-2 border-gray-300 pb-6">
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '8px',
          color: '#1f2937'
        }}>
          {personalInfo.name}
        </h1>
        <h2 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          marginBottom: '16px',
          color: '#059669'
        }}>
          {personalInfo.title}
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '20px',
          fontSize: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiMail size={12} />
            <span>{personalInfo.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiPhone size={12} />
            <span>{personalInfo.phone}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiMapPin size={12} />
            <span>{personalInfo.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiLinkedin size={12} />
            <span>{personalInfo.linkedin}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiGithub size={12} />
            <span>{personalInfo.github}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiGlobe size={12} />
            <span>{personalInfo.website}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          marginBottom: '12px',
          color: '#059669',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '4px'
        }}>
          PROFESSIONAL SUMMARY
        </h3>
        <p style={{ marginBottom: '12px' }}>
          Full Stack Developer with hands-on experience in React, Node.js, and PostgreSQL. 
          Proven track record in project management and team leadership through successful 
          delivery of PATCH health tracking application. Strong foundation from The Marcy Lab 
          School with focus on collaborative development and best practices.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          marginBottom: '12px',
          color: '#059669',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '4px'
        }}>
          PROFESSIONAL EXPERIENCE
        </h3>
        
        {experience.map((job, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '8px'
            }}>
              <div>
                <h4 style={{ fontWeight: 'bold', fontSize: '14px' }}>
                  {job.title}
                </h4>
                <p style={{ fontWeight: '600', color: '#059669', fontSize: '13px' }}>
                  {job.company} | {job.type}
                </p>
              </div>
              <span style={{ fontSize: '12px', color: '#6b7280', fontStyle: 'italic' }}>
                {job.period}
              </span>
            </div>

            <ul style={{ 
              marginLeft: '16px', 
              marginBottom: '8px',
              listStyleType: 'disc'
            }}>
              {job.achievements.map((achievement, i) => (
                <li key={i} style={{ marginBottom: '4px', fontSize: '13px' }}>
                  {achievement}
                </li>
              ))}
            </ul>

            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <strong>Technologies:</strong> {job.technologies.join(', ')}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          marginBottom: '12px',
          color: '#059669',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '4px'
        }}>
          TECHNICAL SKILLS
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }}>
              Frontend
            </h4>
            <ul style={{ fontSize: '12px', lineHeight: '1.6' }}>
              {skills.frontend.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }}>
              Backend
            </h4>
            <ul style={{ fontSize: '12px', lineHeight: '1.6' }}>
              {skills.backend.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }}>
              Tools & Technologies
            </h4>
            <ul style={{ fontSize: '12px', lineHeight: '1.6' }}>
              {skills.tools.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          marginBottom: '12px',
          color: '#059669',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '4px'
        }}>
          EDUCATION
        </h3>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '8px'
        }}>
          <div>
            <h4 style={{ fontWeight: 'bold', fontSize: '14px' }}>
              {education.degree}
            </h4>
            <p style={{ fontWeight: '600', color: '#059669', fontSize: '13px' }}>
              {education.institution} | {education.location}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '12px', color: '#6b7280', fontStyle: 'italic' }}>
              {education.period}
            </span>
            <br />
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
              GPA: {education.gpa}
            </span>
          </div>
        </div>

        <ul style={{ 
          marginLeft: '16px', 
          listStyleType: 'disc',
          fontSize: '13px'
        }}>
          {education.details.map((detail, i) => (
            <li key={i} style={{ marginBottom: '4px' }}>
              {detail}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          marginBottom: '12px',
          color: '#059669',
          borderBottom: '1px solid #e5e7eb',
          paddingBottom: '4px'
        }}>
          FEATURED PROJECTS
        </h3>
        
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '16px' }}>
            <h4 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
              {project.name}
            </h4>
            <p style={{ fontSize: '13px', marginBottom: '4px' }}>
              {project.description}
            </p>
            <p style={{ fontSize: '12px', color: '#059669', fontWeight: '600', marginBottom: '4px' }}>
              Impact: {project.impact}
            </p>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              <strong>Technologies:</strong> {project.tech.join(', ')}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
})

PDFResume.displayName = 'PDFResume'

export default PDFResume
