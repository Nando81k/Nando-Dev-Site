import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiGitBranch, FiStar, FiUsers, FiTrendingUp } from 'react-icons/fi'

const GitHubActivity = () => {
  const [stats, setStats] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock GitHub data - replace with actual API calls
  const mockStats = {
    totalRepos: 24,
    totalStars: 47,
    totalCommits: 892,
    contributionsThisYear: 445,
    longestStreak: 23,
    currentStreak: 12
  }

  const mockRepos = [
    {
      name: "FYLA-Frontend",
      description: "Social media and booking platform for beauticians - React frontend",
      language: "JavaScript",
      stars: 12,
      forks: 3,
      updated: "2024-12-10"
    },
    {
      name: "PATCH-HealthTracker",
      description: "Symptom tracking app for health management",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      updated: "2024-11-28"
    },
    {
      name: "Portfolio-v2",
      description: "Personal portfolio website built with PERN stack",
      language: "JavaScript",
      stars: 15,
      forks: 1,
      updated: "2024-12-14"
    },
    {
      name: "Leetcode-Solutions",
      description: "My solutions to various LeetCode problems",
      language: "Python",
      stars: 12,
      forks: 4,
      updated: "2024-12-12"
    }
  ]

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setStats(mockStats)
      setRepos(mockRepos)
      setLoading(false)
    }, 1200)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1c40f',
      TypeScript: '#3498db',
      Python: '#2ecc71',
      Java: '#e74c3c',
      HTML: '#e67e22',
      CSS: '#9b59b6'
    }
    return colors[language] || '#95a5a6'
  }

  if (loading) {
    return (
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-dark-600 rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-gray-300 dark:bg-dark-600 rounded w-96 mx-auto" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-24 bg-gray-300 dark:bg-dark-600 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into my coding journey and contribution patterns.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Repositories', value: stats.totalRepos, icon: FiGithub },
            { label: 'Total Stars', value: stats.totalStars, icon: FiStar },
            { label: 'Contributions', value: stats.contributionsThisYear, icon: FiTrendingUp },
            { label: 'Current Streak', value: `${stats.currentStreak} days`, icon: FiGitBranch }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group hover:scale-105"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="text-primary-500 group-hover:text-primary-600 transition-colors" size={28} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Recent Repositories
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:scale-105"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {repo.name}
                  </h4>
                  <FiGithub className="text-gray-400 dark:text-gray-500" size={18} />
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {repo.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiStar size={12} />
                      <span>{repo.stars}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Updated {formatDate(repo.updated)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/nando81k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group inline-flex items-center"
          >
            <FiGithub className="mr-2 group-hover:scale-110 transition-transform" />
            View Full Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubActivity
