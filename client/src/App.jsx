import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Performance optimized imports
import { 
  withSuspense,
  HomePage,
  AboutPage,
  ProjectsPage,
  ProjectDetailPage,
  BlogPage,
  BlogPostPage,
  ContactPage,
  ResumePage,
  SkillsPage
} from './components/Performance'

// Hooks
import { useAnalytics } from './hooks/useAnalytics'

// Wrap pages with Suspense for better loading experience
const Home = withSuspense(HomePage, "Loading home page...")
const About = withSuspense(AboutPage, "Loading about page...")
const Projects = withSuspense(ProjectsPage, "Loading projects...")
const ProjectDetail = withSuspense(ProjectDetailPage, "Loading project details...")
const Blog = withSuspense(BlogPage, "Loading blog...")
const BlogPost = withSuspense(BlogPostPage, "Loading blog post...")
const Contact = withSuspense(ContactPage, "Loading contact page...")
const Resume = withSuspense(ResumePage, "Loading resume...")
const Skills = withSuspense(SkillsPage, "Loading skills showcase...")
const Algorithms = withSuspense(() => import('./pages/Algorithms'), "Loading algorithms...")

// Create a component that uses analytics inside Router context
const AppContent = () => {
  // Initialize analytics tracking (now inside Router context)
  useAnalytics()

  return (
    <>
      <Navigation />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/algorithms" element={<Algorithms />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
          <AppContent />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
