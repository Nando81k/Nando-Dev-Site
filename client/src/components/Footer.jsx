import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/nando81k',
      tooltip: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/nando',
      tooltip: 'Let\'s connect professionally'
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: 'https://twitter.com/nando81k',
      tooltip: 'Follow my dev journey'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:nando@example.com',
      tooltip: 'Send me a message'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Quote */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              &lt;Nando /&gt;
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              "I got tired of being skill-less. So I leveled up."
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full-Stack Developer building software that matters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                About
              </a>
              <a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                Projects
              </a>
              <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                Contact
              </a>
              <a href="/resume" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Let's Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.tooltip}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Always open to new opportunities and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <FiHeart className="text-accent-red-500" size={16} />
              <span>and lots of coffee</span>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Nando. All rights reserved.
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Built with PERN + Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
