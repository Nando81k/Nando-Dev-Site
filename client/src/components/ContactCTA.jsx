import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const ContactCTA = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-500 to-accent-purple-500 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Got an idea? Need a developer? Just want to chat about tech? 
            I'm always down for good conversations and new opportunities.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
            Get In Touch
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
