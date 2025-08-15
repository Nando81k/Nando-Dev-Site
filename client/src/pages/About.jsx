import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FiCode, FiHeart, FiTarget, FiZap, 
  FiDatabase, FiServer, FiGitBranch, FiTool,
  FiLayers, FiMonitor, FiSmartphone, FiCloud,
  FiPhone, FiBookOpen, FiBriefcase, FiAward,
  FiSearch, FiFilter, FiCheckCircle, FiClock,
  FiTrendingUp, FiUser, FiBarChart
} from 'react-icons/fi'
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiGit, SiGithub,
  SiVisualstudiocode, SiPostman, SiTypescript, SiNextdotjs,
  SiDocker, SiAmazonaws, SiPython
} from 'react-icons/si'
// Import profile image - replace with your actual image file
import profileImage from '../assets/images/profile.jpg'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="py-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-1000"></div>
        
        <div className="container-max relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Professional Avatar */}
            <motion.div 
              className="mb-8 pt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative inline-block">
                <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-teal-100 to-purple-200 dark:from-teal-800 dark:to-purple-700 shadow-xl relative group">
                  <img 
                    src={profileImage} 
                    alt="Nando - Full Stack Developer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-transparent"></div>
                </div>
                
                {/* Status Indicator */}
                <motion.div
                  className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1 shadow-lg border-2 border-white dark:border-dark-800"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-2.5 h-2.5 bg-teal-400 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Clean Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 dark:text-white mb-3 tracking-tight leading-tight">
                  Hello, I'm{' '}
                  <span className="font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                    Nando
                  </span>
                </h1>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-teal-300 dark:to-teal-600"></div>
                  <p className="mx-4 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                    Full Stack Developer
                  </p>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-teal-300 dark:to-teal-600"></div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                Crafting digital experiences with{' '}
                <span className="font-medium text-teal-600 dark:text-teal-400">precision</span>,{' '}
                <span className="font-medium text-purple-600 dark:text-purple-400">creativity</span>, and{' '}
                <span className="font-medium text-red-600 dark:text-red-400">passion</span>.
              </p>
            </motion.div>
            
            {/* Refined Feature Cards */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FiCode className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Problem Solver</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Complex challenges, elegant solutions</p>
                </div>
              </motion.div>

              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FiHeart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">User-Focused</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Experiences users genuinely love</p>
                </div>
              </motion.div>

              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FiTarget className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Goal-Oriented</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Always improving, always shipping</p>
                </div>
              </motion.div>

              <motion.div 
                className="group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FiZap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Fast Learner</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Adaptable, exploring new tech</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Clean CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a 
                href="/contact" 
                className="group px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  Get in Touch
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              
              <motion.a 
                href="/projects" 
                className="group px-6 py-3 bg-transparent border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-900 dark:hover:text-purple-100 font-medium rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  View Work
                  <span className="ml-2 group-hover:rotate-12 transition-transform duration-300">↗</span>
                </span>
              </motion.a>
            </motion.div>
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12"
            >
              <div className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3 py-1.5 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-teal-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  My <span className="gradient-text">Story</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  From customer service to software engineering—a journey of transformation, learning, and continuous growth
                </p>
              </motion.div>
            </div>

            {/* Story Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              
              {/* The Transition Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Card Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FiZap className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Transition</h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">2021 • Career Pivot</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      In 2021, I made a strategic decision to transition from customer service to software engineering. 
                      This wasn't just a career change—it was a complete transformation requiring discipline, dedication, and a 
                      systematic approach to learning.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I dedicated 8+ hours daily to intensive self-directed learning, building projects, and mastering core technologies. 
                      Through freeCodeCamp, online tutorials, and countless hours of debugging, I built the foundation for my engineering career.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                      <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">600+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Hours Coded</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Projects Built</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Languages</div>
                    </div>
                  </div>

                  {/* Key Breakthrough */}
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 rounded-xl border-l-4 border-teal-500">
                    <p className="text-sm text-teal-800 dark:text-teal-200 font-medium flex items-center">
                      <FiZap className="text-teal-500 mr-2" size={16} />
                      <span>First successful API integration—the moment everything clicked!</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Professional Growth Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Card Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <FiBriefcase className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Growth</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">2022 - Present • Engineering Career</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      My foundation helped me secure a junior developer position at <strong className="text-purple-600 dark:text-purple-400">Clover</strong>, 
                      where I contributed to production applications serving thousands of merchants while learning industry best practices.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      To accelerate my growth, I was accepted into <strong className="text-purple-600 dark:text-purple-400">The Marcy Lab School</strong>—a 
                      highly selective fellowship (3% acceptance rate) focused on advanced engineering fundamentals and leadership development.
                    </p>
                  </div>

                  {/* Growth Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">At Clover</div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 25% performance improvements</li>
                        <li>• 50+ bug fixes deployed</li>
                        <li>• 200+ code reviews</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl">
                      <div className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-1">Marcy Lab</div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• System design training</li>
                        <li>• Leadership development</li>
                        <li>• Mentoring others</li>
                      </ul>
                    </div>
                  </div>

                  {/* Current Focus */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border-l-4 border-purple-500">
                    <p className="text-sm text-purple-800 dark:text-purple-200 font-medium flex items-center">
                      <FiTarget className="text-purple-500 mr-2" size={16} />
                      <span>Building full-stack e-commerce platform with microservices architecture</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative group mb-16"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/20 dark:to-gray-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/50">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Development <span className="gradient-text">Philosophy</span>
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    My approach to software engineering centers on continuous learning, user-focused solutions, and meaningful collaboration
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group/item">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover/item:scale-110 transition-transform duration-300">
                      <FiTarget className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Learning-Focused</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Every project is an opportunity to grow. I focus on understanding the 'why' behind solutions 
                      and learning from experienced developers through mentorship and code reviews.
                    </p>
                  </div>

                  <div className="text-center group/item">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover/item:scale-110 transition-transform duration-300">
                      <FiZap className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Continuous Growth</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Technology evolves rapidly, and I'm committed to keeping pace. I regularly work on side projects, 
                      follow technical blogs, and seek feedback to strengthen my fundamentals.
                    </p>
                  </div>

                  <div className="text-center group/item">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover/item:scale-110 transition-transform duration-300">
                      <FiHeart className="text-2xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">User-Centered</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Great software starts with understanding users. I approach every feature from the user's perspective, 
                      focusing on clear interfaces and smooth experiences in every detail.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl">
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white italic mb-4">
                    "Every bug I fix, every feature I build, and every code review I receive 
                    is a step forward in becoming the developer I want to be."
                  </blockquote>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Tech <span className="gradient-text">Arsenal</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Building digital experiences with cutting-edge tools and technologies. 
                  Always learning, always evolving, always shipping.
                </p>
              </motion.div>
            </div>
            
            {/* Current Tech Stack */}
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-accent-purple-500/10 border border-primary-200 dark:border-primary-700 rounded-full mb-4">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Current Stack</h3>
                  <div className="w-2 h-2 bg-primary-500 rounded-full ml-3 animate-pulse"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Tools I use daily to build amazing things</p>
              </motion.div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mr-4">
                        <FiMonitor className="text-2xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">User Experience</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiReact className="text-3xl text-blue-500 mr-4 group-hover/item:rotate-180 transition-transform duration-500" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">React</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Component-based UI</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiJavascript className="text-3xl text-yellow-500 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">JavaScript</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">ES6+ & Modern JS</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiTailwindcss className="text-3xl text-cyan-500 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">Tailwind CSS</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Utility-first styling</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Backend */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-4">
                        <FiServer className="text-2xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Backend</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Server & Database</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiNodedotjs className="text-3xl text-green-500 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">Node.js</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">JavaScript runtime</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiExpress className="text-3xl text-gray-600 dark:text-gray-400 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">Express.js</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Web framework</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiPostgresql className="text-3xl text-blue-600 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">PostgreSQL</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Relational database</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Tools & Workflow */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                        <FiTool className="text-2xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">DevTools</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Workflow & Productivity</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiGit className="text-3xl text-orange-600 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">Git</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Version control</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/30 dark:to-gray-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiGithub className="text-3xl text-gray-700 dark:text-gray-300 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">GitHub</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Code collaboration</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl hover:scale-105 transition-all duration-200 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <SiVisualstudiocode className="text-3xl text-blue-500 mr-4" />
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 dark:text-white block">VS Code</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Code editor</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Learning Next */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-purple-500/10 to-accent-red-500/10 border border-accent-purple-200 dark:border-accent-purple-700 rounded-full mb-4">
                  <div className="w-2 h-2 bg-accent-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Next Level</h3>
                  <div className="w-2 h-2 bg-accent-purple-500 rounded-full ml-3 animate-pulse"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Technologies on my learning roadmap</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Priority Queue */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500/20 to-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-accent-purple-50/80 to-primary-50/80 dark:from-accent-purple-900/30 dark:to-primary-900/30 backdrop-blur-lg rounded-2xl p-8 border-2 border-accent-purple-200/50 dark:border-accent-purple-700/50 hover:border-accent-purple-400 dark:hover:border-accent-purple-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-accent-purple-500 to-primary-500 rounded-xl mr-4">
                        <FiLayers className="text-2xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-accent-purple-700 dark:text-accent-purple-300">Priority Learning</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Next skills to master</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center p-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
                        whileHover={{ x: 5 }}
                      >
                        <SiTypescript className="text-3xl text-blue-600 mr-4" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white block">TypeScript</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Type-safe JavaScript</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
                        whileHover={{ x: 5 }}
                      >
                        <SiNextdotjs className="text-3xl text-gray-800 dark:text-gray-200 mr-4" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white block">Next.js</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Full-stack React framework</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
                        whileHover={{ x: 5 }}
                      >
                        <SiPostman className="text-3xl text-orange-500 mr-4" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white block">GraphQL</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Modern API query language</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Exploration Mode */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-red-500/20 to-accent-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-accent-red-50/80 to-accent-purple-50/80 dark:from-accent-red-900/30 dark:to-accent-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border-2 border-accent-red-200/50 dark:border-accent-red-700/50 hover:border-accent-red-400 dark:hover:border-accent-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-accent-red-500 to-accent-purple-500 rounded-xl mr-4">
                        <FiCloud className="text-2xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-accent-red-700 dark:text-accent-red-300">Exploring</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Future tech interests</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-center p-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
                        whileHover={{ x: 5 }}
                      >
                        <SiDocker className="text-3xl text-blue-500 mr-4" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white block">Docker</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Containerization</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
                        whileHover={{ x: 5 }}
                      >
                        <SiAmazonaws className="text-3xl text-orange-500 mr-4" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white block">AWS</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Cloud services</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-200 shadow-lg"
                        whileHover={{ x: 5 }}
                      >
                        <SiPython className="text-3xl text-yellow-500 mr-4" />
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white block">Python</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Data & automation</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Algorithms & Data Structures Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-dark-900 dark:via-slate-800/50 dark:to-indigo-900/20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Algorithms & <span className="gradient-text">Problem Solving</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Mastering computational thinking through algorithmic challenges and data structure implementation
                </p>
              </motion.div>
            </div>

            {/* Algorithm Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50"
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiTrendingUp className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sorting Algorithms</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Quick Sort, Merge Sort, Heap Sort, and more</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiSearch className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Search & Graph</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Binary Search, DFS, BFS, Dijkstra's Algorithm</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiLayers className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dynamic Programming</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Fibonacci, Knapsack, LCS, and optimization problems</p>
                </div>
              </div>
              
              <div className="text-center">
                <motion.a
                  href="/skills"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  <span>Explore All Algorithms</span>
                  <FiZap className="text-lg" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-primary-50/30 dark:from-dark-900/50 dark:via-transparent dark:to-dark-800/30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6"
          >
            {/* Modern Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-accent-purple-500/10 border border-primary-200 dark:border-primary-700 rounded-full mb-8"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Career Journey</span>
                <div className="w-2 h-2 bg-primary-500 rounded-full ml-3 animate-pulse"></div>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                My <span className="bg-gradient-to-r from-primary-500 via-accent-purple-500 to-accent-red-500 bg-clip-text text-transparent">Journey</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="max-w-3xl mx-auto"
              >
                <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-purple-500 to-accent-red-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  From customer service to full-stack development — here's how I transformed my career 
                  through <span className="font-semibold text-primary-600 dark:text-primary-400">determination</span>, 
                  <span className="font-semibold text-accent-purple-600 dark:text-accent-purple-400"> continuous learning</span>, 
                  and <span className="font-semibold text-accent-red-600 dark:text-accent-red-400">relentless passion</span>.
                </p>
              </motion.div>
            </div>
            
            {/* Modern Sleek Timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Container */}
              <div className="relative">
                {/* Central Timeline Line - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-accent-purple-500 to-teal-500 opacity-30"></div>
                
                {/* Mobile Timeline Line - Left side on mobile */}
                <div className="lg:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-primary-500 via-accent-purple-500 to-teal-500 opacity-30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8 lg:space-y-20">
                  
                  {/* Pre-2021 - Spectrum */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between">
                      {/* Left Content */}
                      <div className="w-5/12">
                        <div className="group bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-3xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-dark-800/80">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-md">
                                <FiPhone className="text-white text-sm" />
                              </div>
                              <span className="bg-gray-600 text-white px-3 py-1 rounded-xl text-xs font-bold tracking-wide">Pre-2021</span>
                            </div>
                            <span className="px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-xl text-xs font-medium uppercase tracking-wider">Foundation</span>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Customer Service Representative</h3>
                              <h4 className="text-gray-600 dark:text-gray-400 font-semibold">Spectrum • Cable & Internet Services</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Developed essential professional skills managing high-volume customer interactions, resolving technical issues, and maintaining service quality standards. This role taught me patience, clear communication, and systematic problem-solving approaches that later became crucial in debugging code.
                            </p>

                            <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-xl p-3">
                              <h5 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h5>
                              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• Maintained 95% customer satisfaction rating</li>
                                <li>• Handled 80+ customer interactions daily</li>
                                <li>• Developed troubleshooting methodologies</li>
                                <li>• Built resilience under pressure</li>
                              </ul>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-medium">Communication</span>
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-medium">Problem Solving</span>
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-medium">Customer Focus</span>
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-medium">Multitasking</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white dark:border-dark-900 group-hover:scale-110 transition-transform duration-300">
                          <FiPhone className="text-white text-lg" />
                        </div>
                      </div>

                      {/* Right Space */}
                      <div className="w-5/12"></div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex items-start space-x-4">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0 mt-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-900">
                          <FiPhone className="text-white text-sm" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-2xl p-4 border border-gray-200/30 dark:border-gray-700/30 shadow-lg">
                          {/* Header */}
                          <div className="flex flex-col space-y-2 mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xs font-bold">Pre-2021</span>
                              <span className="px-2 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium uppercase tracking-wider">Foundation</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Customer Service Representative</h3>
                              <h4 className="text-gray-600 dark:text-gray-400 font-semibold text-sm">Spectrum • Cable & Internet Services</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Developed essential professional skills managing high-volume customer interactions, resolving technical issues, and maintaining service quality standards.
                            </p>

                            <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-lg p-3">
                              <h5 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h5>
                              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                <li>• 95% customer satisfaction rating</li>
                                <li>• 80+ daily customer interactions</li>
                                <li>• Built systematic problem-solving skills</li>
                              </ul>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">Communication</span>
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">Problem Solving</span>
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">Customer Focus</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 2021 - Self-Taught */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between">
                      {/* Left Space */}
                      <div className="w-5/12"></div>

                      {/* Center Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white dark:border-dark-900 animate-pulse">
                          <FiBookOpen className="text-white text-lg" />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="w-5/12">
                        <div className="group bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-3xl p-6 border border-red-200/30 dark:border-red-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-dark-800/80">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-md">
                                <FiBookOpen className="text-white text-sm" />
                              </div>
                              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-xl text-xs font-bold tracking-wide animate-pulse">Summer 2021</span>
                            </div>
                            <span className="px-3 py-1 bg-red-100/80 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-xl text-xs font-medium uppercase tracking-wider">Transformation</span>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Self-Taught Coding Intensive</h3>
                              <h4 className="text-red-600 dark:text-red-400 font-semibold">FreeCodeCamp, YouTube, MDN Documentation</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Embarked on an intensive self-directed learning journey, dedicating 8+ hours daily to mastering web development fundamentals. Started with basic HTML and progressed through CSS, JavaScript, and React. Built 20+ projects ranging from simple calculators to full-stack applications with API integrations.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-3">
                              <div className="bg-red-50/80 dark:bg-red-900/20 rounded-xl p-3">
                                <h5 className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">Learning Stats:</h5>
                                <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                                  <li>• 600+ hours of coding</li>
                                  <li>• 20+ completed projects</li>
                                  <li>• 5 programming languages</li>
                                  <li>• 15+ JavaScript frameworks explored</li>
                                </ul>
                              </div>
                              <div className="bg-red-50/80 dark:bg-red-900/20 rounded-xl p-3">
                                <h5 className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">Key Projects:</h5>
                                <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                                  <li>• Weather App (API integration)</li>
                                  <li>• Todo List (Local storage)</li>
                                  <li>• Calculator (Complex logic)</li>
                                  <li>• Portfolio site (Responsive)</li>
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-red-50/80 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-3">
                              <p className="text-red-700 dark:text-red-300 text-xs font-semibold flex items-center space-x-2">
                                <FiZap className="text-red-500" size={14} />
                                <span>Breakthrough Moment: Successfully consuming a REST API for the first time and seeing real data populate my weather application!</span>
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-xs font-medium">JavaScript ES6+</span>
                              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-xs font-medium">React</span>
                              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-xs font-medium">Self-Discipline</span>
                              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-xs font-medium">API Integration</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex items-start space-x-4">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0 mt-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-900 animate-pulse">
                          <FiBookOpen className="text-white text-sm" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-2xl p-4 border border-red-200/30 dark:border-red-700/30 shadow-lg">
                          {/* Header */}
                          <div className="flex flex-col space-y-2 mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold animate-pulse">Summer 2021</span>
                              <span className="px-2 py-1 bg-red-100/80 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-lg text-xs font-medium uppercase tracking-wider">Transformation</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Self-Taught Coding Intensive</h3>
                              <h4 className="text-red-600 dark:text-red-400 font-semibold text-sm">FreeCodeCamp, YouTube, MDN</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Embarked on an intensive self-directed learning journey, dedicating 8+ hours daily to mastering web development fundamentals. Built 20+ projects ranging from calculators to full-stack applications.
                            </p>

                            <div className="bg-red-50/80 dark:bg-red-900/20 rounded-lg p-3">
                              <h5 className="text-xs font-bold text-red-700 dark:text-red-300 mb-2">Learning Stats:</h5>
                              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                                <li>• 600+ hours of coding</li>
                                <li>• 20+ completed projects</li>
                                <li>• 5 programming languages</li>
                              </ul>
                            </div>
                            
                            <div className="bg-red-50/80 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-3">
                              <p className="text-red-700 dark:text-red-300 text-xs font-semibold flex items-center space-x-2">
                                <FiZap className="text-red-500" size={12} />
                                <span>First API integration breakthrough!</span>
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-xs font-medium">JavaScript</span>
                              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-xs font-medium">React</span>
                              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-xs font-medium">APIs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 2022 - Clover */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between">
                      {/* Left Content */}
                      <div className="w-5/12">
                        <div className="group bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-3xl p-6 border border-purple-200/30 dark:border-purple-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-dark-800/80">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md">
                                <FiBriefcase className="text-white text-sm" />
                              </div>
                              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-xl text-xs font-bold tracking-wide">2022</span>
                            </div>
                            <span className="px-3 py-1 bg-purple-100/80 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-xl text-xs font-medium uppercase tracking-wider">First Tech Role</span>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Junior Developer</h3>
                              <h4 className="text-purple-600 dark:text-purple-400 font-semibold">Clover • POS Software Solutions</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              First professional development role working alongside senior engineers on production applications serving thousands of merchants. Contributed to point-of-sale software improvements, learned industry best practices, and gained valuable experience with enterprise-level codebases and agile development processes.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-purple-50/80 dark:bg-purple-900/20 rounded-xl p-3">
                                <p className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-1">Development Impact:</p>
                                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                                  <li>• 3 major feature releases</li>
                                  <li>• 25% performance improvement</li>
                                  <li>• 50+ bug fixes deployed</li>
                                  <li>• 200+ code reviews completed</li>
                                </ul>
                              </div>
                              <div className="bg-purple-50/80 dark:bg-purple-900/20 rounded-xl p-3">
                                <p className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-1">Professional Growth:</p>
                                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                                  <li>• Git workflow mastery</li>
                                  <li>• Code review processes</li>
                                  <li>• Agile/Scrum methodology</li>
                                  <li>• Production deployment</li>
                                </ul>
                              </div>
                            </div>

                            <div className="bg-purple-50/80 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-xl p-3">
                              <h5 className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-1">Notable Achievement:</h5>
                              <p className="text-xs text-purple-600 dark:text-purple-400">
                                Optimized payment processing module reducing transaction load times by 25%, directly improving user experience for merchants processing thousands of daily transactions.
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium">React.js</span>
                              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium">Node.js</span>
                              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium">Team Work</span>
                              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium">Agile</span>
                              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-xs font-medium">Production</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white dark:border-dark-900">
                          <FiBriefcase className="text-white text-lg" />
                        </div>
                      </div>

                      {/* Right Space */}
                      <div className="w-5/12"></div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex items-start space-x-4">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0 mt-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-900">
                          <FiBriefcase className="text-white text-sm" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-2xl p-4 border border-purple-200/30 dark:border-purple-700/30 shadow-lg">
                          {/* Header */}
                          <div className="flex flex-col space-y-2 mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded-lg text-xs font-bold">2022</span>
                              <span className="px-2 py-1 bg-purple-100/80 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-lg text-xs font-medium uppercase tracking-wider">First Tech Role</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Junior Developer</h3>
                              <h4 className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Clover • POS Software Solutions</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              First professional development role working alongside senior engineers on production applications. Contributed to point-of-sale software improvements and learned industry best practices.
                            </p>
                            
                            <div className="bg-purple-50/80 dark:bg-purple-900/20 rounded-lg p-3">
                              <p className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-1">Development Impact:</p>
                              <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                                <li>• 3 major feature releases</li>
                                <li>• 25% performance improvement</li>
                                <li>• 50+ bug fixes deployed</li>
                              </ul>
                            </div>

                            <div className="bg-purple-50/80 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg p-3">
                              <h5 className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-1">Notable Achievement:</h5>
                              <p className="text-xs text-purple-600 dark:text-purple-400">
                                Optimized payment processing module reducing transaction load times by 25%.
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium">React.js</span>
                              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium">Node.js</span>
                              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-medium">Agile</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 2023 - Marcy Lab School */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between">
                      {/* Left Space */}
                      <div className="w-5/12"></div>

                      {/* Center Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white dark:border-dark-900">
                          <FiAward className="text-white text-lg" />
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="w-5/12">
                        <div className="group bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-3xl p-6 border border-teal-200/30 dark:border-teal-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-dark-800/80 relative overflow-hidden">
                          {/* Current Badge */}
                          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-green-500 text-white px-3 py-1 rounded-bl-2xl rounded-tr-3xl text-xs font-bold shadow-lg">
                            CURRENT
                          </div>
                          
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-md">
                                <FiAward className="text-white text-sm" />
                              </div>
                              <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 py-1 rounded-xl text-xs font-bold tracking-wide animate-pulse">2023 - Present</span>
                            </div>
                            <span className="px-3 py-1 bg-teal-100/80 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-xl text-xs font-medium uppercase tracking-wider">Elite Program</span>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Full-Stack Engineering Fellow</h3>
                              <h4 className="text-teal-600 dark:text-teal-400 font-semibold">The Marcy Lab School • Elite Software Engineering Program</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Accepted into highly selective fellowship (3% acceptance rate) focused on advanced technical training and leadership development. Intensive program covering full-stack development, system design, data structures & algorithms, and professional skills preparation for senior engineering roles at top tech companies.
                            </p>
                            
                            <div className="bg-gradient-to-r from-teal-50/80 to-green-50/80 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-4">
                              <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                  <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-2">Technical Mastery:</h5>
                                  <ul className="text-teal-600 dark:text-teal-400 space-y-1">
                                    <li>• PERN Stack (PostgreSQL, Express, React, Node)</li>
                                    <li>• System Design & Architecture</li>
                                    <li>• Data Structures & Algorithms</li>
                                    <li>• Database Design & Optimization</li>
                                    <li>• AWS Cloud Services & Deployment</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-2">Leadership & Collaboration:</h5>
                                  <ul className="text-teal-600 dark:text-teal-400 space-y-1">
                                    <li>• Mentoring junior developers</li>
                                    <li>• Leading cross-functional teams</li>
                                    <li>• Technical presentation skills</li>
                                    <li>• Code review & architecture decisions</li>
                                    <li>• Community building & networking</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="bg-teal-50/80 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-r-xl p-3">
                              <h5 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1">Current Focus:</h5>
                              <p className="text-xs text-teal-600 dark:text-teal-400">
                                Building a full-stack e-commerce platform with microservices architecture, implementing real-time features, and preparing for technical interviews at FAANG companies.
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-xl text-xs font-medium">Full-Stack</span>
                              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-xl text-xs font-medium">System Design</span>
                              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-xl text-xs font-medium">Leadership</span>
                              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-xl text-xs font-medium">AWS</span>
                              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-xl text-xs font-medium">PostgreSQL</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex items-start space-x-4">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0 mt-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-900 relative">
                          <FiAward className="text-white text-sm" />
                          {/* Current Badge for mobile */}
                          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-green-500 text-white px-1 py-0.5 rounded text-xs font-bold shadow-lg text-[8px]">
                            NOW
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-2xl p-4 border border-teal-200/30 dark:border-teal-700/30 shadow-lg">
                          {/* Header */}
                          <div className="flex flex-col space-y-2 mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-2 py-1 rounded-lg text-xs font-bold animate-pulse">2023 - Present</span>
                              <span className="px-2 py-1 bg-teal-100/80 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-lg text-xs font-medium uppercase tracking-wider">Elite Program</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Full-Stack Engineering Fellow</h3>
                              <h4 className="text-teal-600 dark:text-teal-400 font-semibold text-sm">The Marcy Lab School</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Accepted into highly selective fellowship (3% acceptance rate) focused on advanced technical training and leadership development for senior engineering roles.
                            </p>
                            
                            <div className="bg-gradient-to-r from-teal-50/80 to-green-50/80 dark:from-teal-900/20 dark:to-green-900/20 rounded-lg p-3">
                              <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-2 text-xs">Technical Focus:</h5>
                              <ul className="text-teal-600 dark:text-teal-400 space-y-1 text-xs">
                                <li>• PERN Stack Development</li>
                                <li>• System Design & Architecture</li>
                                <li>• Data Structures & Algorithms</li>
                                <li>• AWS Cloud Services</li>
                              </ul>
                            </div>

                            <div className="bg-teal-50/80 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-r-lg p-3">
                              <h5 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1">Current Focus:</h5>
                              <p className="text-xs text-teal-600 dark:text-teal-400">
                                Building full-stack e-commerce platform with microservices architecture.
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-lg text-xs font-medium">Full-Stack</span>
                              <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-lg text-xs font-medium">System Design</span>
                              <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-lg text-xs font-medium">Leadership</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 2024 - Future Goals */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-between">
                      {/* Left Content */}
                      <div className="w-5/12">
                        <div className="group bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-3xl p-6 border border-blue-200/30 dark:border-blue-700/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-dark-800/80">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md">
                                <FiTarget className="text-white text-sm" />
                              </div>
                              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-xl text-xs font-bold tracking-wide">2024+</span>
                            </div>
                            <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-xl text-xs font-medium uppercase tracking-wider">Next Chapter</span>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Ready for Impact</h3>
                              <h4 className="text-blue-600 dark:text-blue-400 font-semibold">Seeking Full-Stack Engineering Opportunities</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Actively seeking full-stack engineering opportunities where I can contribute technical expertise, collaborative spirit, and fresh perspectives to innovative teams. Looking to join a company that values growth, mentorship, and building impactful products that make a difference.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-xl p-3">
                                <h5 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">What I Bring:</h5>
                                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                  <li>• Full-stack development expertise</li>
                                  <li>• Strong problem-solving skills</li>
                                  <li>• Collaborative team mindset</li>
                                  <li>• Continuous learning attitude</li>
                                </ul>
                              </div>
                              <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-xl p-3">
                                <h5 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">Ideal Role:</h5>
                                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                  <li>• Mentorship opportunities</li>
                                  <li>• Technical growth potential</li>
                                  <li>• Impactful product development</li>
                                  <li>• Inclusive team culture</li>
                                </ul>
                              </div>
                            </div>

                            <div className="bg-blue-50/80 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl p-3">
                              <h5 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">Currently:</h5>
                              <p className="text-xs text-blue-600 dark:text-blue-400">
                                Interviewing with several companies, building personal projects, contributing to open source, and preparing for the next chapter of my software engineering journey.
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-medium">Job Ready</span>
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-medium">Team Player</span>
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-medium">Growth Mindset</span>
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-medium">Open Source</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white dark:border-dark-900">
                          <FiTarget className="text-white text-lg" />
                        </div>
                      </div>

                      {/* Right Space */}
                      <div className="w-5/12"></div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex items-start space-x-4">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0 mt-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-900">
                          <FiTarget className="text-white text-sm" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-2xl rounded-2xl p-4 border border-blue-200/30 dark:border-blue-700/30 shadow-lg">
                          {/* Header */}
                          <div className="flex flex-col space-y-2 mb-3">
                            <div className="flex items-center space-x-2">
                              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-lg text-xs font-bold">2024+</span>
                              <span className="px-2 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-lg text-xs font-medium uppercase tracking-wider">Next Chapter</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Ready for Impact</h3>
                              <h4 className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Seeking Full-Stack Engineering Opportunities</h4>
                            </div>
                            
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Actively seeking full-stack engineering opportunities where I can contribute technical expertise and collaborative spirit to innovative teams.
                            </p>

                            <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-3">
                              <h5 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">What I Bring:</h5>
                              <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                <li>• Full-stack development expertise</li>
                                <li>• Strong problem-solving skills</li>
                                <li>• Collaborative team mindset</li>
                              </ul>
                            </div>

                            <div className="bg-blue-50/80 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg p-3">
                              <h5 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">Currently:</h5>
                              <p className="text-xs text-blue-600 dark:text-blue-400">
                                Interviewing with companies and building personal projects.
                              </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium">Job Ready</span>
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium">Team Player</span>
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium">Growth Mindset</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500 via-accent-purple-500 to-accent-red-500">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              I'm actively job hunting and comfortable working on any team or company in a tech role. 
              I value curiosity, grit, and just a bit of swagger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-hero bg-white text-primary-600 hover:bg-gray-100 border-0"
              >
                Let's Talk
              </a>
              <a 
                href="/projects" 
                className="btn-hero bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
