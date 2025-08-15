import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiCalendar, 
  FiClock, 
  FiTag, 
  FiUser, 
  FiSearch, 
  FiArrowRight,
  FiBookOpen,
  FiTrendingUp
} from 'react-icons/fi'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [featuredPost, setFeaturedPost] = useState(null)

  // Mock blog posts data - replace with actual CMS/API
  const mockPosts = [
    {
      id: 1,
      title: "From Bootcamp to Production: My First Full-Stack App",
      excerpt: "Building FYLA taught me more about real-world development than any tutorial ever could. Here's what I learned about user authentication, database design, and deployment challenges.",
      content: "Full blog content here...",
      slug: "bootcamp-to-production",
      category: "Development",
      tags: ["React", "Node.js", "PostgreSQL", "Full Stack", "Learning"],
      author: "Fernando Martinez",
      date: "2024-12-15",
      readTime: "8 min read",
      featured: true,
      published: true,
      views: 1247,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Leading My First Tech Team: Lessons from Project Managing PATCH",
      excerpt: "Transitioning from developer to project manager taught me valuable lessons about communication, sprint planning, and keeping a team motivated through challenges.",
      content: "Full blog content here...",
      slug: "leading-first-tech-team",
      category: "Leadership",
      tags: ["Project Management", "Scrum", "Leadership", "Team Building"],
      author: "Fernando Martinez",
      date: "2024-11-28",
      readTime: "6 min read",
      featured: false,
      published: true,
      views: 892,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Why I Chose The Marcy Lab School Over Traditional Computer Science",
      excerpt: "My journey from curious beginner to confident developer. Why I chose a non-traditional path and how it shaped my problem-solving approach.",
      content: "Full blog content here...",
      slug: "why-marcy-lab-school",
      category: "Journey",
      tags: ["Education", "Career Change", "Bootcamp", "Personal Growth"],
      author: "Fernando Martinez",
      date: "2024-10-10",
      readTime: "5 min read",
      featured: false,
      published: true,
      views: 634,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Building Accessible React Components: A Practical Guide",
      excerpt: "Web accessibility isn't just a nice-to-have—it's essential. Here's how I learned to build inclusive React components that work for everyone.",
      content: "Full blog content here...",
      slug: "building-accessible-react-components",
      category: "Development",
      tags: ["React", "Accessibility", "UI/UX", "Web Standards"],
      author: "Fernando Martinez",
      date: "2024-09-22",
      readTime: "7 min read",
      featured: false,
      published: true,
      views: 445,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Database Design Patterns I Wish I Knew Earlier",
      excerpt: "Common database design mistakes and the patterns that could have saved me hours of debugging. Lessons learned from building FYLA and PATCH.",
      content: "Full blog content here...",
      slug: "database-design-patterns",
      category: "Development",
      tags: ["PostgreSQL", "Database Design", "Backend", "Best Practices"],
      author: "Fernando Martinez",
      date: "2024-08-15",
      readTime: "9 min read",
      featured: false,
      published: true,
      views: 721,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "The Real Cost of Technical Debt: A Junior Developer's Perspective",
      excerpt: "What I learned about technical debt when refactoring my first major project. Sometimes the 'quick fix' costs more than doing it right the first time.",
      content: "Full blog content here...",
      slug: "real-cost-technical-debt",
      category: "Development",
      tags: ["Technical Debt", "Refactoring", "Code Quality", "Learning"],
      author: "Fernando Martinez",
      date: "2024-07-30",
      readTime: "4 min read",
      featured: false,
      published: true,
      views: 567,
      image: "/api/placeholder/600/300"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts', count: mockPosts.filter(p => p.published).length },
    { id: 'Development', label: 'Development', count: mockPosts.filter(p => p.category === 'Development' && p.published).length },
    { id: 'Leadership', label: 'Leadership', count: mockPosts.filter(p => p.category === 'Leadership' && p.published).length },
    { id: 'Journey', label: 'Journey', count: mockPosts.filter(p => p.category === 'Journey' && p.published).length }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const publishedPosts = mockPosts.filter(post => post.published)
      setPosts(publishedPosts)
      setFilteredPosts(publishedPosts)
      setFeaturedPost(publishedPosts.find(post => post.featured))
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm, posts])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      Development: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      Leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      Journey: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 section-padding"
      >
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 dark:bg-dark-600 rounded w-64 mx-auto mb-6" />
              <div className="h-6 bg-gray-300 dark:bg-dark-600 rounded w-96 mx-auto" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-gray-300 dark:bg-dark-600 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 section-padding"
    >
      <div className="container-max">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Thoughts, learnings, and insights from my journey as a developer. 
            From technical deep-dives to career reflections, I share what I've learned along the way.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <FiTrendingUp className="text-primary-500 mr-2" size={24} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Post</h2>
            </div>
            
            <Link to={`/blog/${featuredPost.slug}`} className="block group">
              <div className="card p-0 overflow-hidden hover:scale-105 transition-transform">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 flex items-center justify-center">
                      <FiBookOpen size={64} className="text-primary-500 opacity-50" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </span>
                      <span className="text-yellow-500 text-sm font-medium">★ Featured</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FiCalendar size={14} />
                          <span>{formatDate(featuredPost.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiClock size={14} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.section>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <FiTag size={16} />
                  <span>{category.label}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {filteredPosts
              .filter(post => !post.featured) // Exclude featured post from grid
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:scale-105"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Post Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-lg mb-6 flex items-center justify-center">
                      <FiBookOpen size={32} className="text-primary-500 opacity-50" />
                    </div>

                    {/* Post Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <FiUser size={12} />
                        <span>{post.views} views</span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Post Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FiCalendar size={12} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiClock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.article>
              ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FiSearch size={48} className="text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Subscription CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="card bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get notified when I publish new articles about development, leadership, and my learning journey.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Blog
