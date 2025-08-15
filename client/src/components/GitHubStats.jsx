import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiGithub, 
  FiStar, 
  FiGitBranch, 
  FiUsers, 
  FiCode,
  FiCalendar,
  FiTrendingUp,
  FiExternalLink
} from 'react-icons/fi'

const GitHubStats = ({ username = "nando81k", showDetailedStats = false }) => {
  const [githubData, setGithubData] = useState({
    user: null,
    repos: [],
    stats: {
      totalStars: 0,
      totalForks: 0,
      totalRepos: 0,
      languages: {}
    },
    recentActivity: [],
    loading: true,
    error: null
  })

  useEffect(() => {
    fetchGitHubData()
  }, [username])

  const fetchGitHubData = async () => {
    try {
      setGithubData(prev => ({ ...prev, loading: true, error: null }))

      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      if (!userResponse.ok) throw new Error('Failed to fetch user data')
      const userData = await userResponse.json()

      // Fetch repositories
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`)
      if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
      const reposData = await reposResponse.json()

      // Calculate stats
      const stats = reposData.reduce((acc, repo) => {
        acc.totalStars += repo.stargazers_count || 0
        acc.totalForks += repo.forks_count || 0
        
        // Count languages
        if (repo.language) {
          acc.languages[repo.language] = (acc.languages[repo.language] || 0) + 1
        }
        
        return acc
      }, {
        totalStars: 0,
        totalForks: 0,
        totalRepos: userData.public_repos || 0,
        languages: {}
      })

      // Get top languages
      const sortedLanguages = Object.entries(stats.languages)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)

      // Fetch recent activity (commits from recent repos)
      const recentActivity = await Promise.all(
        reposData.slice(0, 5).map(async (repo) => {
          try {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
            )
            if (commitsResponse.ok) {
              const commits = await commitsResponse.json()
              return {
                repo: repo.name,
                message: commits[0]?.commit?.message || 'No recent commits',
                date: commits[0]?.commit?.author?.date || repo.updated_at,
                url: repo.html_url
              }
            }
          } catch (error) {
            console.warn(`Failed to fetch commits for ${repo.name}:`, error)
          }
          return null
        })
      )

      setGithubData({
        user: userData,
        repos: reposData.slice(0, 6), // Top 6 repos
        stats: {
          ...stats,
          languages: sortedLanguages
        },
        recentActivity: recentActivity.filter(Boolean).slice(0, 5),
        loading: false,
        error: null
      })

    } catch (error) {
      console.error('GitHub API Error:', error)
      setGithubData(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }))
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      React: '#61dafb',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Java: '#b07219',
      'C++': '#f34b7d',
      Go: '#00ADD8',
      Rust: '#dea584',
      PHP: '#4F5D95'
    }
    return colors[language] || '#8b949e'
  }

  if (githubData.loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">Loading GitHub data...</span>
      </div>
    )
  }

  if (githubData.error) {
    return (
      <div className="text-center py-8">
        <FiGithub className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="text-gray-500 dark:text-gray-400">
          Unable to load GitHub data at the moment
        </p>
        <button 
          onClick={fetchGitHubData}
          className="mt-4 text-primary-500 hover:text-primary-600 transition-colors"
        >
          Try again
        </button>
      </div>
    )
  }

  const { user, repos, stats, recentActivity } = githubData

  if (showDetailedStats) {
    return (
      <div className="space-y-6">
        {/* GitHub Profile Header */}
        <div className="card">
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src={user.avatar_url} 
              alt={user.name || user.login}
              className="w-16 h-16 rounded-full border-2 border-primary-500"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {user.name || user.login}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">@{user.login}</p>
              <a 
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-primary-500 hover:text-primary-600 transition-colors"
              >
                <FiExternalLink size={14} />
                <span>View Profile</span>
              </a>
            </div>
          </div>

          {user.bio && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">{user.bio}</p>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">{stats.totalRepos}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">{user.followers}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">{stats.totalStars}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">{stats.totalForks}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Forks</div>
            </div>
          </div>
        </div>

        {/* Top Languages */}
        <div className="card">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Most Used Languages
          </h4>
          <div className="space-y-3">
            {stats.languages.map(([language, count], index) => (
              <div key={language} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getLanguageColor(language) }}
                  ></div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {language}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {count} {count === 1 ? 'repo' : 'repos'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Repositories */}
        <div className="card">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Repositories
          </h4>
          <div className="space-y-4">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-primary-500 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <a 
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors"
                  >
                    {repo.name}
                  </a>
                  <FiExternalLink 
                    className="text-gray-400 group-hover:text-primary-500 transition-colors" 
                    size={16} 
                  />
                </div>
                
                {repo.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {repo.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <div className="flex items-center space-x-1">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></div>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <FiStar size={12} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiGitBranch size={12} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        {recentActivity.length > 0 && (
          <div className="card">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h4>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 py-2">
                  <FiCode className="text-primary-500 mt-1 flex-shrink-0" size={16} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Commit to{' '}
                      <a 
                        href={activity.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        {activity.repo}
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(activity.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Compact version for home page
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          GitHub Activity
        </h3>
        <a 
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:text-primary-600 transition-colors"
        >
          <FiGithub size={20} />
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-xl font-bold text-primary-500">{stats.totalRepos}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Repos</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-primary-500">{stats.totalStars}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Stars</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-primary-500">{user.followers}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Followers</div>
        </div>
      </div>

      {/* Top Languages Compact */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Top Languages</h4>
        {stats.languages.slice(0, 3).map(([language, count]) => (
          <div key={language} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getLanguageColor(language) }}
              ></div>
              <span className="text-gray-900 dark:text-white">{language}</span>
            </div>
            <span className="text-gray-600 dark:text-gray-300">{count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GitHubStats
