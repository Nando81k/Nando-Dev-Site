import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'

const Hero = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "Full-Stack Developer | Nerd With a Purpose"

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    const featuredProjectsSection = document.getElementById('featured-projects')
    if (featuredProjectsSection) {
      featuredProjectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
        // Blink cursor a few times then hide
        setTimeout(() => {
          const blinkTimer = setInterval(() => {
            setShowCursor(prev => !prev)
          }, 500)
          setTimeout(() => {
            clearInterval(blinkTimer)
            setShowCursor(false)
          }, 3000)
        }, 1000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I build{' '}
              <span className="gradient-text">dope software</span>
              <br />
              <span className="text-3xl md:text-4xl">Period.</span>
            </motion.h1>
            
            {/* Typing Animation */}
            <div className="h-12 flex justify-center items-center">
              <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-mono">
                {text}
                {showCursor && <span className="animate-pulse text-primary-500">|</span>}
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hey, I'm <strong className="text-primary-500">Nando</strong>. 
            I went from customer service at Spectrum to building full-stack applications. 
            Currently sharpening my skills at <strong className="text-primary-500">The Marcy Lab School</strong>{' '}
            and building tools that make life easier for people around me.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects" className="btn-hero bg-primary-500 hover:bg-primary-600 text-white group">
              Explore Projects
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/resume" className="btn-hero bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">
              View Resume
            </Link>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/nando81k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                title="Check out my GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="mailto:nando@example.com"
                className="p-3 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                title="Send me an email"
              >
                <FiExternalLink size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">1+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bugs Fixed</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToNextSection}
              className="animate-bounce hover:animate-none focus:animate-none transition-all duration-200 hover:text-primary-500 focus:text-primary-500 focus:outline-none group cursor-pointer"
              aria-label="Scroll to next section"
            >
              <FiChevronDown 
                size={32} 
                className="text-gray-400 dark:text-gray-600 group-hover:text-primary-500 group-focus:text-primary-500 transition-colors duration-200" 
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
