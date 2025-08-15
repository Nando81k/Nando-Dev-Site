import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AnimatedResumeButton = ({ 
  className = '', 
  children = 'Resume', 
  size = 'normal',
  to = '/resume',
  onClick = null 
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    normal: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  }

  return (
    <div className="inline-block">
      <Link 
        to={to}
        onClick={onClick}
        className={`btn-resume-animated text-white relative overflow-hidden font-semibold ${sizeClasses[size]} ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    </div>
  )
}

export default AnimatedResumeButton
