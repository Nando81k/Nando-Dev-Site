import { motion } from 'framer-motion'
import ProfessionalNetworking from '../components/ProfessionalNetworking'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 section-padding"
    >
      <div className="container-max">
        <ProfessionalNetworking />
      </div>
    </motion.div>
  )
}

export default Contact
