import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMenu, 
  FiX, 
  FiSun, 
  FiMoon, 
  FiChevronRight,
  FiHome,
  FiUser,
  FiFolder,
  FiZap,
  FiEdit3,
  FiMessageCircle,
  FiFileText
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useDeviceDetection } from '../hooks/useResponsive'
import { trackNavigation } from '../hooks/useAnalytics'
import AnimatedResumeButton from './AnimatedResumeButton'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()
  const { isMobile } = useDeviceDetection()
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Projects', path: '/projects', icon: FiFolder },
    { name: 'Skills', path: '/skills', icon: FiZap },
    { name: 'Blog', path: '/blog', icon: FiEdit3 },
    { name: 'Contact', path: '/contact', icon: FiMessageCircle },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isMobile])

  const isActive = (path) => location.pathname === path

  const handleNavClick = (item) => {
    trackNavigation(item.name)
    setIsOpen(false)
  }

  // Mobile menu backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }

  // Mobile menu panel
  const panelVariants = {
    hidden: { 
      x: '100%',
      transition: { 
        type: 'tween',
        duration: 0.3
      }
    },
    visible: { 
      x: 0,
      transition: { 
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  // Mobile menu items
  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-effect shadow-lg backdrop-blur-xl' 
            : 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-max section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/" 
                className="text-2xl font-bold gradient-text"
                onClick={() => handleNavClick({ name: 'Logo' })}
              >
                &lt;NANDO /&gt;
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`relative py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-700'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeDesktop"
                        className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Resume Button */}
              <AnimatedResumeButton />
              
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Theme Toggle Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>
              
              {/* Hamburger Menu */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-dark-900 shadow-2xl z-50 lg:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
                <div className="text-xl font-bold gradient-text">&lt;NANDO /&gt;</div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300"
                >
                  <FiX size={20} />
                </motion.button>
              </div>

              {/* Mobile Menu Content */}
              <div className="p-6 space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item)}
                      className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                          : 'hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`p-2 rounded-lg ${
                          isActive(item.path) 
                            ? 'bg-white/20' 
                            : 'bg-gray-100 dark:bg-dark-600'
                        }`}>
                          <item.icon size={20} className={
                            isActive(item.path) 
                              ? 'text-white' 
                              : 'text-gray-600 dark:text-gray-300'
                          } />
                        </span>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className={`text-sm ${
                            isActive(item.path) 
                              ? 'text-white/70' 
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {item.path === '/' ? 'Welcome page' : 
                             item.path === '/about' ? 'Learn about me' :
                             item.path === '/projects' ? 'View my work' :
                             item.path === '/skills' ? 'Interactive demos' :
                             item.path === '/blog' ? 'Read my thoughts' :
                             item.path === '/contact' ? 'Get in touch' : ''}
                          </div>
                        </div>
                      </div>
                      <FiChevronRight 
                        className={`transform transition-transform group-hover:translate-x-1 ${
                          isActive(item.path) ? 'text-white' : 'text-gray-400'
                        }`} 
                        size={18} 
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Resume Button */}
                <motion.div
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="pt-6 border-t border-gray-200 dark:border-dark-700"
                >
                  <Link
                    to="/resume"
                    onClick={() => handleNavClick({ name: 'Resume' })}
                    className="flex items-center justify-center space-x-2 w-full p-4 bg-gradient-to-r from-teal-500 to-primary-500 text-white text-center font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <FiFileText size={18} />
                    <span>Download Resume</span>
                  </Link>
                </motion.div>

                {/* Mobile Menu Footer */}
                <motion.div
                  custom={navItems.length + 1}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="pt-6 text-center"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Full Stack Developer
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    React • Node.js • PostgreSQL
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
