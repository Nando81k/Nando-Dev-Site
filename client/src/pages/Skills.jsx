import { motion } from 'framer-motion'
import InteractiveSkillsShowcase from '../components/InteractiveSkillsShowcase'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24">
      <div className="container-max">
        {/* Page Header */}
        <section className="section-padding pb-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Interactive <span className="gradient-text">Skills Showcase</span></h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">Dive into practical demonstrations of my frontend, backend, and full-stack capabilities through curated live demos, algorithmic thinking mini-samples, and technical writing artifacts.</p>
            <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 px-6 py-4 rounded-2xl shadow-sm">
              <span className="text-sm text-gray-600 dark:text-gray-300">Looking for full algorithm deep-dives?</span>
              <Link to="/algorithms" className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors">Go to Algorithms & Data Structures</Link>
            </div>
          </div>
        </section>

        {/* Interactive Skills Showcase Component */}
        <section className="section-padding pt-0">
          <InteractiveSkillsShowcase />
        </section>
      </div>
    </motion.div>
  )
}

export default Skills
