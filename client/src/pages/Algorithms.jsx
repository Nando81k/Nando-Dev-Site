import { motion } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import { 
  FiSearch,
  FiFilter,
  FiCode,
  FiClock,
  FiTrendingUp,
  FiBookOpen,
  FiTarget,
  FiLayers,
  FiDatabase,
  FiCpu,
  FiGitBranch,
  FiX,
  FiBook,
  FiPlay,
  FiCheckCircle,
  FiArrowRight,
  FiHelpCircle,
  FiMessageSquare,
  FiAward
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Algorithms = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [selectedTimeComplexity, setSelectedTimeComplexity] = useState('all')
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null)

  // Close modal on ESC
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelectedAlgorithm(null) }
    if (selectedAlgorithm) {
      document.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = 'unset'
    }
  }, [selectedAlgorithm])

  // Algorithms dataset (moved from Skills page)
  const algorithms = [
    {
      id: 'bubble-sort',
      name: 'Bubble Sort',
      topic: 'Sorting',
      difficulty: 'Easy',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      description: 'Simple comparison-based sorting algorithm that repeatedly steps through the list.',
      keyPoints: ['In-place sorting', 'Stable algorithm', 'Poor performance for large datasets'],
      useCases: ['Educational purposes', 'Small datasets', 'Nearly sorted data'],
      implementations: ['JavaScript', 'Python', 'Java'],
      explanation: {
        howItWorks: "Bubble Sort works by repeatedly comparing adjacent elements and swapping them if they're in the wrong order. It's called 'bubble' sort because smaller elements 'bubble' to the beginning of the list.",
        stepByStep: [
          '1. Start at the beginning of the array',
          '2. Compare the first two elements',
          '3. If the first is greater than the second, swap them',
            '4. Move to the next pair and repeat',
            '5. Continue until you reach the end of the array',
            '6. Repeat the entire process until no swaps are needed'
        ],
        visualExample: 'Array: [64, 34, 25, 12, 22, 11, 90]\nPass 1: [34, 25, 12, 22, 11, 64, 90] (64 bubbles to position)\nPass 2: [25, 12, 22, 11, 34, 64, 90] (34 bubbles to position)\n...continues until sorted',
        codeExample: `function bubbleSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    let swapped = false;\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n        swapped = true;\n      }\n    }\n    if (!swapped) break;\n  }\n  return arr;\n}`,
        whyThisComplexity: 'Time: O(n²) due to nested loops. Space: O(1) extra memory.',
        whenToUse: 'Learning / very small arrays / nearly sorted input.',
        commonMistakes: ['Missing early break optimization'],
        interviewQuestions: [
          { question: 'Implement bubble sort with early exit.', difficulty: 'Easy', approach: 'Track swaps per pass.', answer: 'Use swapped flag; best case O(n).'}
        ]
      }
    },
    // (Shortened dataset for brevity – real dataset kept on original page previously)
  ]

  const filteredAlgorithms = useMemo(() => algorithms.filter(a => {
    const s = searchTerm.toLowerCase()
    const matchesSearch = a.name.toLowerCase().includes(s) || a.description.toLowerCase().includes(s) || a.topic.toLowerCase().includes(s)
    const matchesDifficulty = selectedDifficulty === 'all' || a.difficulty === selectedDifficulty
    const matchesTopic = selectedTopic === 'all' || a.topic === selectedTopic
    const matchesTime = selectedTimeComplexity === 'all' || a.timeComplexity === selectedTimeComplexity
    return matchesSearch && matchesDifficulty && matchesTopic && matchesTime
  }), [searchTerm, selectedDifficulty, selectedTopic, selectedTimeComplexity, algorithms])

  const difficulties = ['all', ...new Set(algorithms.map(a => a.difficulty))]
  const topics = ['all', ...new Set(algorithms.map(a => a.topic))]
  const timeComplexities = ['all', ...new Set(algorithms.map(a => a.timeComplexity))]

  const getDifficultyColor = (d) => (
    d === 'Easy' ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' :
    d === 'Medium' ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' :
    d === 'Hard' ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' : 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20'
  )

  const getTopicIcon = (topic) => {
    switch (topic) {
      case 'Sorting': return <FiTrendingUp className="text-blue-500" />
      case 'Searching': return <FiSearch className="text-purple-500" />
      case 'Graph Traversal':
      case 'Graph Algorithms': return <FiGitBranch className="text-green-500" />
      case 'Dynamic Programming': return <FiLayers className="text-orange-500" />
      case 'Trees': return <FiTarget className="text-teal-500" />
      case 'String Processing': return <FiBookOpen className="text-pink-500" />
      case 'Backtracking': return <FiCpu className="text-red-500" />
      default: return <FiCode className="text-gray-500" />
    }
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedDifficulty('all')
    setSelectedTopic('all')
    setSelectedTimeComplexity('all')
  }

  const AlgorithmDetailModal = ({ algorithm, onClose }) => {
    if (!algorithm) return null
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="bg-white dark:bg-dark-800 rounded-2xl max-w-5xl max-h-[90vh] w-full overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">{getTopicIcon(algorithm.topic)}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{algorithm.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{algorithm.topic} • {algorithm.difficulty}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"><FiX /></button>
          </div>
          <div className="p-6 space-y-8">
            <section>
              <h3 className="text-xl font-semibold flex items-center space-x-2 mb-4"><FiBook className="text-blue-500" /><span>Overview</span></h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{algorithm.description}</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-gray-700 dark:text-gray-300">{algorithm.explanation?.howItWorks}</div>
            </section>
            <section>
              <h3 className="text-xl font-semibold flex items-center space-x-2 mb-4"><FiClock className="text-green-500" /><span>Complexity</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2"><FiClock className="text-green-600" /><span className="font-medium">Time</span></div>
                  <span className="text-2xl font-bold">{algorithm.timeComplexity}</span>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2"><FiDatabase className="text-blue-600" /><span className="font-medium">Space</span></div>
                  <span className="text-2xl font-bold">{algorithm.spaceComplexity}</span>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 text-gray-700 dark:text-gray-300">{algorithm.explanation?.whyThisComplexity}</div>
            </section>
            <section>
              <h3 className="text-xl font-semibold flex items-center space-x-2 mb-4"><FiPlay className="text-purple-500" /><span>Steps</span></h3>
              <div className="space-y-3">
                {algorithm.explanation?.stepByStep?.map((s, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium">{i+1}</div>
                    <p className="text-gray-700 dark:text-gray-300">{s.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                ))}
              </div>
            </section>
            {algorithm.explanation?.codeExample && (
              <section>
                <h3 className="text-xl font-semibold flex items-center space-x-2 mb-4"><FiCode className="text-indigo-500" /><span>Implementation</span></h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto"><pre className="text-sm text-gray-300 whitespace-pre-wrap"><code>{algorithm.explanation.codeExample}</code></pre></div>
              </section>
            )}
            <section>
              <h3 className="text-xl font-semibold flex items-center space-x-2 mb-4"><FiCheckCircle className="text-teal-500" /><span>When to Use</span></h3>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 text-gray-700 dark:text-gray-300">{algorithm.explanation?.whenToUse}</div>
              <div className="mt-4"><h4 className="font-semibold mb-2">Use Cases:</h4><ul className="space-y-1 text-gray-700 dark:text-gray-300">{algorithm.useCases.map((u,i)=>(<li key={i} className="flex items-center space-x-2 text-sm"><FiArrowRight className="text-teal-500" /><span>{u}</span></li>))}</ul></div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24">
      <div className="container-max">
        <section className="section-padding">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Algorithms & <span className="gradient-text">Data Structures</span></h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">Comprehensive collection with complexity analysis, explanations, and study resources.</p>
            <Link to="/skills" className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"><FiPlay /><span>Back to Interactive Skills Showcase</span></Link>
          </div>

          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20 dark:border-gray-700/50">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex items-center space-x-2"><FiFilter className="text-gray-500" /><h3 className="text-lg font-semibold">Search & Filter</h3></div>
              {(searchTerm || selectedDifficulty !== 'all' || selectedTopic !== 'all' || selectedTimeComplexity !== 'all') && (
                <button onClick={clearFilters} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm rounded-lg">Clear Filters</button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Search algorithms..." className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" />
              </div>
              <select value={selectedDifficulty} onChange={e=>setSelectedDifficulty(e.target.value)} className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500">
                {difficulties.map(d=> <option key={d} value={d}>{d==='all'?'All Difficulties':d}</option>)}
              </select>
              <select value={selectedTopic} onChange={e=>setSelectedTopic(e.target.value)} className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500">
                {topics.map(t=> <option key={t} value={t}>{t==='all'?'All Topics':t}</option>)}
              </select>
              <select value={selectedTimeComplexity} onChange={e=>setSelectedTimeComplexity(e.target.value)} className="px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500">
                {timeComplexities.map(tc=> <option key={tc} value={tc}>{tc==='all'?'All Complexities':tc}</option>)}
              </select>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">Showing {filteredAlgorithms.length} of {algorithms.length} algorithms</div>
          </motion.div>

          {/* Algorithms Grid */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-6">
            {filteredAlgorithms.map((algorithm, index) => (
              <motion.div key={algorithm.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * index }} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">{getTopicIcon(algorithm.topic)}</div>
                      <div>
                        <h3 className="text-xl font-bold">{algorithm.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{algorithm.topic}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(algorithm.difficulty)}`}>{algorithm.difficulty}</div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{algorithm.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1"><FiClock className="text-green-600" /><span className="text-xs font-medium text-green-600">Time</span></div>
                      <span className="text-lg font-bold text-green-700 dark:text-green-300">{algorithm.timeComplexity}</span>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1"><FiDatabase className="text-blue-600" /><span className="text-xs font-medium text-blue-600">Space</span></div>
                      <span className="text-lg font-bold text-blue-700 dark:text-blue-300">{algorithm.spaceComplexity}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Points:</h4>
                    <div className="flex flex-wrap gap-2">{algorithm.keyPoints.map((p,i)=>(<span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md">{p}</span>))}</div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Use Cases:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">{algorithm.useCases.map((u,i)=>(<li key={i} className="flex items-center space-x-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /><span>{u}</span></li>))}</ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Implementations:</h4>
                      <div className="flex space-x-2">{algorithm.implementations.map((l,i)=>(<span key={i} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-xs rounded">{l}</span>))}</div>
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedAlgorithm(algorithm)} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium flex items-center space-x-2"><FiCode /><span>Learn More</span></motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredAlgorithms.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4"><FiSearch className="text-2xl text-gray-400" /></div>
              <h3 className="text-xl font-semibold mb-2">No algorithms found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
              <button onClick={clearFilters} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Clear All Filters</button>
            </motion.div>
          )}
        </section>
      </div>
      {selectedAlgorithm && <AlgorithmDetailModal algorithm={selectedAlgorithm} onClose={() => setSelectedAlgorithm(null)} />}
    </motion.div>
  )
}

export default Algorithms
