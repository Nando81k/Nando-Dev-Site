import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

// Loading component for lazy-loaded pages
const PageLoader = ({ message = "Loading..." }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen flex items-center justify-center"
  >
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-300">{message}</p>
    </div>
  </motion.div>
)

// Lazy load all pages for better performance
export const HomePage = lazy(() => import('../pages/Home'))
export const AboutPage = lazy(() => import('../pages/About'))
export const ProjectsPage = lazy(() => import('../pages/Projects'))
export const ProjectDetailPage = lazy(() => import('../pages/ProjectDetail'))
export const BlogPage = lazy(() => import('../pages/Blog'))
export const BlogPostPage = lazy(() => import('../pages/BlogPost'))
export const ContactPage = lazy(() => import('../pages/Contact'))
export const ResumePage = lazy(() => import('../pages/Resume'))
export const SkillsPage = lazy(() => import('../pages/Skills'))

// HOC to wrap pages with Suspense
export const withSuspense = (Component, loadingMessage) => {
  return (props) => (
    <Suspense fallback={<PageLoader message={loadingMessage} />}>
      <Component {...props} />
    </Suspense>
  )
}

// Image optimization component
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  placeholder = "blur"
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      style={{
        backgroundColor: placeholder === "blur" ? "#f3f4f6" : "transparent"
      }}
      onLoad={(e) => {
        e.target.style.backgroundColor = "transparent"
      }}
    />
  )
}

// Intersection Observer for animations
export const AnimateOnScroll = ({ 
  children, 
  animation = { y: 20, opacity: 0 },
  className = "" 
}) => {
  return (
    <motion.div
      initial={animation}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default PageLoader
