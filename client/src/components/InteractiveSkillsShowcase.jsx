import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiPlay, 
  FiExternalLink, 
  FiGithub,
  FiFileText,
  FiTrendingUp,
  FiCpu,
  FiLayers,
  FiTarget,
  FiBook
} from 'react-icons/fi'

const InteractiveSkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('demos')
  const [selectedDemo, setSelectedDemo] = useState(null)

  // Live Code Demos
  const codeDemos = [
    {
      id: 'react-todo',
      title: 'React Todo App with Hooks',
      description: 'Interactive todo application demonstrating React hooks, state management, and local storage',
      technologies: ['React', 'Hooks', 'JavaScript', 'CSS'],
      codepenId: 'YOUR_CODEPEN_ID',
      githubUrl: 'https://github.com/nando81k/react-todo-demo',
      liveDemo: 'https://codepen.io/nando81k/pen/react-todo',
      category: 'Frontend',
      complexity: 'Intermediate',
      features: [
        'Add/Remove/Edit todos',
        'Local storage persistence',
        'Filter by status',
        'Responsive design'
      ]
    },
    {
      id: 'api-integration',
      title: 'RESTful API Integration',
      description: 'Fetch and display data from multiple APIs with error handling and loading states',
      technologies: ['JavaScript', 'Fetch API', 'JSON', 'CSS'],
      codepenId: 'YOUR_CODEPEN_ID_2',
      githubUrl: 'https://github.com/nando81k/api-integration-demo',
      liveDemo: 'https://codepen.io/nando81k/pen/api-integration',
      category: 'API Integration',
      complexity: 'Intermediate',
      features: [
        'Multiple API endpoints',
        'Error boundary handling',
        'Loading states',
        'Data transformation'
      ]
    },
    {
      id: 'css-animations',
      title: 'CSS Animation Gallery',
      description: 'Collection of smooth CSS animations and transitions',
      technologies: ['CSS3', 'HTML', 'Keyframes', 'Transforms'],
      codepenId: 'YOUR_CODEPEN_ID_3',
      githubUrl: 'https://github.com/nando81k/css-animations',
      liveDemo: 'https://codepen.io/nando81k/pen/css-animations',
      category: 'CSS/UI',
      complexity: 'Beginner',
      features: [
        'Hover effects',
        'Loading animations',
        'Smooth transitions',
        'Performance optimized'
      ]
    }
  ]

  // Algorithm Challenges
  const algorithmChallenges = [
    {
      id: 'two-sum',
      title: 'Two Sum Problem',
      description: 'Find two numbers in an array that add up to a target sum',
      difficulty: 'Easy',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      approach: 'Hash Map',
      solution: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
      explanation: 'Use a hash map to store seen numbers and their indices. For each number, check if its complement exists in the map.',
      testCases: [
        { input: '[2,7,11,15], target: 9', output: '[0,1]' },
        { input: '[3,2,4], target: 6', output: '[1,2]' }
      ]
    },
    {
      id: 'reverse-linked-list',
      title: 'Reverse Linked List',
      description: 'Reverse a singly linked list iteratively and recursively',
      difficulty: 'Medium',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      approach: 'Three Pointers',
      solution: `function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}`,
      explanation: 'Use three pointers to reverse the links between nodes while traversing the list once.',
      testCases: [
        { input: '[1,2,3,4,5]', output: '[5,4,3,2,1]' },
        { input: '[1,2]', output: '[2,1]' }
      ]
    }
  ]

  // Technical Writing Samples
  const technicalWriting = [
    {
      id: 'react-patterns',
      title: 'React Design Patterns Guide',
      description: 'Comprehensive guide to common React patterns and best practices',
      category: 'Documentation',
      readTime: '8 min read',
      topics: ['Higher-Order Components', 'Render Props', 'Custom Hooks', 'Context API'],
      preview: `# React Design Patterns

## Higher-Order Components (HOC)

A Higher-Order Component is a function that takes a component and returns a new component with enhanced functionality.

\`\`\`jsx
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}
\`\`\`

This pattern is useful for:
- Adding loading states
- Authentication checks
- Data fetching logic
- Cross-cutting concerns`,
      githubUrl: 'https://github.com/nando81k/react-patterns-guide'
    },
    {
      id: 'api-documentation',
      title: 'RESTful API Documentation',
      description: 'Complete API documentation for FYLA booking system',
      category: 'API Docs',
      readTime: '12 min read',
      topics: ['Authentication', 'Endpoints', 'Error Handling', 'Rate Limiting'],
      preview: `# FYLA API Documentation

## Authentication

All API requests require authentication using JWT tokens.

### Login Endpoint
\`\`\`
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

### Response
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "role": "customer"
  }
}
\`\`\``,
      githubUrl: 'https://github.com/nando81k/fyla-api-docs'
    }
  ]

  const categories = [
    { id: 'demos', label: 'Live Demos', icon: FiPlay, count: codeDemos.length },
    { id: 'algorithms', label: 'Algorithms', icon: FiCpu, count: algorithmChallenges.length },
    { id: 'writing', label: 'Technical Writing', icon: FiFileText, count: technicalWriting.length }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-500 bg-green-100 dark:bg-green-900/30'
      case 'Medium': return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30'
      case 'Hard': return 'text-red-500 bg-red-100 dark:bg-red-900/30'
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30'
    }
  }

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'text-green-500 bg-green-100 dark:bg-green-900/30'
      case 'Intermediate': return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'
      case 'Advanced': return 'text-purple-500 bg-purple-100 dark:bg-purple-900/30'
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-900/30'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive <span className="gradient-text">Skills Showcase</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my technical skills through live code demos, algorithm solutions, and technical documentation
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
            }`}
          >
            <category.icon size={18} />
            <span>{category.label}</span>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Live Code Demos */}
      {activeCategory === 'demos' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {codeDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedDemo(demo)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {demo.title}
                  </h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(demo.complexity)}`}>
                    {demo.complexity}
                  </span>
                </div>
                <FiExternalLink className="text-gray-400 group-hover:text-primary-500 transition-colors" size={20} />
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {demo.description}
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {demo.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    {demo.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2 pt-2">
                  <a
                    href={demo.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-xs py-2 px-3 rounded flex items-center justify-center space-x-1 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiPlay size={12} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={demo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-dark-700 hover:bg-gray-300 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 text-xs py-2 px-3 rounded flex items-center justify-center transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Algorithm Challenges */}
      {activeCategory === 'algorithms' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {algorithmChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Problem Info */}
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {challenge.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {challenge.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <FiTrendingUp className="text-primary-500" size={16} />
                      <span className="font-medium">Time:</span>
                      <span className="text-gray-600 dark:text-gray-300">{challenge.timeComplexity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <FiLayers className="text-primary-500" size={16} />
                      <span className="font-medium">Space:</span>
                      <span className="text-gray-600 dark:text-gray-300">{challenge.spaceComplexity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <FiTarget className="text-primary-500" size={16} />
                      <span className="font-medium">Approach:</span>
                      <span className="text-gray-600 dark:text-gray-300">{challenge.approach}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Test Cases:</h4>
                    <div className="space-y-2">
                      {challenge.testCases.map((testCase, i) => (
                        <div key={i} className="text-xs bg-gray-50 dark:bg-dark-700 p-2 rounded">
                          <div className="text-gray-600 dark:text-gray-300">Input: {testCase.input}</div>
                          <div className="text-green-600 dark:text-green-400">Output: {testCase.output}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="lg:w-2/3">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Solution:</h4>
                  <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{challenge.solution}</code>
                    </pre>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Explanation:</h5>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      {challenge.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Technical Writing */}
      {activeCategory === 'writing' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {technicalWriting.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col lg:flex-row lg:space-x-8">
                {/* Article Info */}
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {article.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={article.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <FiGithub size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>

                {/* Preview */}
                <div className="lg:w-2/3">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Preview:</h4>
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {article.preview}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Demo Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedDemo.title}
                </h3>
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-video bg-gray-100 dark:bg-dark-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <FiCode size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Live demo would be embedded here
                  </p>
                  <div className="flex space-x-4 mt-4 justify-center">
                    <a
                      href={selectedDemo.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Open Live Demo
                    </a>
                    <a
                      href={selectedDemo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedDemo.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDemo.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {selectedDemo.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InteractiveSkillsShowcase
