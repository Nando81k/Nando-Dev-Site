import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMail, 
  FiCalendar, 
  FiLinkedin, 
  FiTwitter,
  FiGithub,
  FiMessageSquare,
  FiClock,
  FiUser,
  FiPhone,
  FiBriefcase,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiExternalLink,
  FiUsers,
  FiTrendingUp
} from 'react-icons/fi'

const ProfessionalNetworking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    meetingType: 'coffee-chat',
    preferredTime: '',
    newsletter: false
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null)

  // Available meeting types
  const meetingTypes = [
    {
      id: 'coffee-chat',
      title: 'Virtual Coffee Chat',
      duration: '30 minutes',
      description: 'Casual conversation about tech, career, or collaboration',
      icon: FiMessageSquare,
      color: 'bg-blue-500'
    },
    {
      id: 'technical-discussion',
      title: 'Technical Discussion',
      duration: '45 minutes',
      description: 'Deep dive into specific technologies or project architecture',
      icon: FiBriefcase,
      color: 'bg-purple-500'
    },
    {
      id: 'mentorship',
      title: 'Mentorship Session',
      duration: '60 minutes',
      description: 'Career guidance and development discussion',
      icon: FiUsers,
      color: 'bg-green-500'
    },
    {
      id: 'collaboration',
      title: 'Project Collaboration',
      duration: '45 minutes',
      description: 'Discuss potential project partnerships or contributions',
      icon: FiTrendingUp,
      color: 'bg-orange-500'
    }
  ]

  // Mock available time slots (in real app, this would come from calendar API)
  const availableSlots = [
    { id: 1, date: '2024-12-20', time: '10:00 AM', available: true },
    { id: 2, date: '2024-12-20', time: '2:00 PM', available: true },
    { id: 3, date: '2024-12-20', time: '4:00 PM', available: false },
    { id: 4, date: '2024-12-21', time: '9:00 AM', available: true },
    { id: 5, date: '2024-12-21', time: '11:00 AM', available: true },
    { id: 6, date: '2024-12-21', time: '3:00 PM', available: true },
  ]

  // LinkedIn recommendations (mock data)
  const linkedinRecommendations = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Software Engineer at Google',
      relationship: 'Worked together at Marcy Lab',
      recommendation: 'Fernando is an exceptional developer with strong problem-solving skills and a collaborative mindset. His work on our team project was outstanding.',
      date: 'November 2024',
      avatar: 'SC'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Tech Lead at Stripe',
      relationship: 'Peer at Marcy Lab School',
      recommendation: 'Fernando consistently delivered high-quality code and was always willing to help teammates. His technical skills and communication make him a valuable team member.',
      date: 'October 2024',
      avatar: 'MJ'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      title: 'Project Manager at Meta',
      relationship: 'Collaborated on PATCH project',
      recommendation: 'Working with Fernando was a pleasure. He took initiative as project manager and delivered results ahead of schedule while maintaining excellent code quality.',
      date: 'December 2024',
      avatar: 'LR'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In real implementation, you would:
      // 1. Send email notification
      // 2. Add to CRM system
      // 3. Create calendar event if meeting requested
      // 4. Send auto-responder email

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        meetingType: 'coffee-chat',
        preferredTime: '',
        newsletter: false
      })
      setSelectedTimeSlot(null)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Professional <span className="gradient-text">Networking</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Let's connect! Schedule a meeting, send a message, or explore collaboration opportunities
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Meeting Type Selection */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              What would you like to discuss?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {meetingTypes.map((type) => (
                <div
                  key={type.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.meetingType === type.id
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-dark-700 hover:border-gray-300 dark:hover:border-dark-600'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, meetingType: type.id }))}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${type.color} text-white`}>
                      <type.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {type.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {type.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Available Time Slots */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Choose a Time Slot
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {availableSlots.map((slot) => (
                <button
                  key={slot.id}
                  disabled={!slot.available}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    selectedTimeSlot?.id === slot.id
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : slot.available
                      ? 'border-gray-200 dark:border-dark-700 hover:border-gray-300 dark:hover:border-dark-600'
                      : 'border-gray-200 dark:border-dark-700 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <FiCalendar size={16} className={slot.available ? 'text-primary-500' : 'text-gray-400'} />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {formatDate(slot.date)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {slot.time}
                    </span>
                    {!slot.available && (
                      <span className="text-xs text-red-500">Unavailable</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
                <FiCalendar size={16} />
                <span className="text-sm">
                  All times are in EST. Meeting links will be sent via email after booking.
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your role/title"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Tell me about yourself and what you'd like to discuss..."
              />
            </div>

            <div className="mt-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-500 border-gray-300 dark:border-dark-600 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Subscribe to my newsletter for tech insights and career tips
                </span>
              </label>
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                  <FiCheck size={16} />
                  <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center space-x-2 text-red-700 dark:text-red-300">
                  <FiAlertCircle size={16} />
                  <span>Error sending message. Please try again or email me directly.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="mt-6 w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <FiSend size={16} />
                  <span>Send Message</span>
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Contact
            </h3>
            
            <div className="space-y-4">
              <a
                href="mailto:fernando@example.com"
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
              >
                <FiMail className="text-primary-500" size={18} />
                <span className="text-gray-700 dark:text-gray-300">fernando@example.com</span>
              </a>

              <a
                href="https://linkedin.com/in/fernando-martinez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
              >
                <FiLinkedin className="text-primary-500" size={18} />
                <span className="text-gray-700 dark:text-gray-300">LinkedIn Profile</span>
                <FiExternalLink className="text-gray-400" size={14} />
              </a>

              <a
                href="https://github.com/nando81k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
              >
                <FiGithub className="text-primary-500" size={18} />
                <span className="text-gray-700 dark:text-gray-300">GitHub Profile</span>
                <FiExternalLink className="text-gray-400" size={14} />
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Response Time
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Usually responds within 24 hours
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="text-gray-400" size={16} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Timezone: EST (UTC-5)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-gray-400" size={16} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available for meetings: Mon-Fri, 9 AM - 6 PM
                </span>
              </div>
            </div>
          </div>

          {/* LinkedIn Recommendations */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              LinkedIn Recommendations
            </h3>
            
            <div className="space-y-4">
              {linkedinRecommendations.slice(0, 2).map((rec) => (
                <div key={rec.id} className="border-l-4 border-primary-500 pl-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {rec.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {rec.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {rec.title}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "{rec.recommendation.substring(0, 120)}..."
                  </blockquote>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {rec.date}
                  </p>
                </div>
              ))}
              
              <a
                href="https://linkedin.com/in/fernando-martinez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors text-sm"
              >
                <span>View all recommendations</span>
                <FiExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalNetworking
