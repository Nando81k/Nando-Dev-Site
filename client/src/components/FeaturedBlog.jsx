import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiArrowRight, FiBookOpen } from 'react-icons/fi'

const FeaturedBlog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock blog posts data
  const mockPosts = [
    {
      id: 1,
      title: "From Bootcamp to Production: My First Full-Stack App",
      excerpt: "Building FYLA taught me more about real-world development than any tutorial ever could. Here's what I learned about user authentication, database design, and deployment.",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "Development",
      slug: "bootcamp-to-production",
      featured: true
    },
    {
      id: 2,
      title: "Leading My First Tech Team: Lessons from Project Managing PATCH",
      excerpt: "Transitioning from developer to project manager taught me valuable lessons about communication, sprint planning, and keeping a team motivated.",
      date: "2024-11-28",
      readTime: "4 min read",
      category: "Leadership",
      slug: "leading-first-tech-team",
      featured: true
    },
    {
      id: 3,
      title: "Why I Chose The Marcy Lab School",
      excerpt: "My journey from curious beginner to confident developer. Why I chose a non-traditional path and how it shaped my approach to problem-solving.",
      date: "2024-10-10",
      readTime: "3 min read",
      category: "Journey",
      slug: "why-marcy-lab-school",
      featured: false
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts.filter(post => post.featured))
      setLoading(false)
    }, 800)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-dark-600 rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-gray-300 dark:bg-dark-600 rounded w-96 mx-auto" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-gray-300 dark:bg-dark-600 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="gradient-text">Thoughts</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing my journey, technical insights, and lessons learned as I grow as a developer.
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group hover:scale-105 cursor-pointer"
            >
              {/* Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium">
                  {post.category}
                </span>
                <FiBookOpen className="text-gray-400 dark:text-gray-500" size={20} />
              </div>

              {/* Post Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Post Meta */}
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
            </motion.article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/blog" className="btn-secondary group inline-flex items-center">
            View All Posts
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedBlog
