import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import FeaturedBlog from '../components/FeaturedBlog'
import GitHubStats from '../components/GitHubStats'
import ContactCTA from '../components/ContactCTA'
import SEOHead from '../components/SEOHead'

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <>
      <SEOHead 
        title="Fernando Martinez - Full Stack Developer Portfolio"
        description="Welcome to Fernando Martinez's portfolio. Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and technical blog."
        keywords="Fernando Martinez, Full Stack Developer, React Developer, Node.js, JavaScript, Portfolio, Web Developer, Software Engineer"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <motion.div
        id="featured-projects"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FeaturedProjects />
      </motion.div>

      {/* Featured Blog Posts */}
      <FeaturedBlog />

      {/* GitHub Activity */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Live statistics and recent activity from my GitHub profile
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <GitHubStats username="nando81k" showDetailedStats={false} />
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
      </motion.div>
    </>
  )
}

export default Home
