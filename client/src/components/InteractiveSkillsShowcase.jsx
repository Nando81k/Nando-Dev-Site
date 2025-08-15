import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCode,
  FiPlay,
  FiExternalLink,
  FiGithub,
  FiCpu,
  FiLayers,
  FiCloud,
  FiDatabase,
  FiZap,
  FiTool,
  FiTerminal,
  FiStar,
  FiTrendingUp,
  FiBookmark,
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiCompass,
  FiTarget,
  FiZapOff,
  FiFeather
} from 'react-icons/fi'

// New structured skills data
const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    icon: FiCode,
    description: 'Modern, performant interface architecture and user experience engineering.',
    highlights: ['Accessibility (a11y) standards', 'Atomic design & component systems', 'Performance budgeting (Core Web Vitals)', 'State management strategy'],
    metrics: { experience: 4.5, depth: 4.2, impact: 4.7 },
    skills: [
      { name: 'React', level: 92, tier: 'Expert', tags: ['Hooks', 'Concurrent', 'Patterns'], impact: 'Reduced re-render cost by 38% through memoization and suspense boundaries.' },
      { name: 'TypeScript', level: 85, tier: 'Advanced', tags: ['Generics', 'Utility Types', 'API contracts'], impact: 'Cut runtime type errors to near-zero in critical paths.' },
      { name: 'Next.js', level: 70, tier: 'Intermediate', tags: ['SSR', 'Routing', 'Image Optim'], impact: 'Improved LCP by leveraging server components & edge caching.' },
      { name: 'Tailwind CSS', level: 88, tier: 'Advanced', tags: ['Design Systems', 'Responsive', 'Dark Mode'], impact: 'Accelerated UI delivery by ~30% via utility-first conventions.' },
      { name: 'Framer Motion', level: 75, tier: 'Intermediate', tags: ['UX polish', 'Micro-interactions'], impact: 'Increased retention by adding progressive motion hierarchies.' }
    ],
    roadmap: [
      { phase: 'Refinement', focus: 'Deepen RSC + Streaming strategies', status: 'in-progress' },
      { phase: 'Expansion', focus: 'Animations performance budget tooling', status: 'planned' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend & API Design',
    icon: FiDatabase,
    description: 'Resilient, observable, and evolvable service architecture with strong API contracts.',
    highlights: ['RESTful resource modeling', 'Security & auth flows (JWT/OAuth)', 'CQRS & modular service boundaries', 'Instrumentation & logging'],
    metrics: { experience: 4.0, depth: 4.1, impact: 4.5 },
    skills: [
      { name: 'Node.js', level: 90, tier: 'Advanced', tags: ['Event Loop', 'Streams', 'Perf'], impact: 'Optimized async pipeline reducing latency spikes >25%.' },
      { name: 'Express', level: 88, tier: 'Advanced', tags: ['Middleware', 'Routing', 'Security'], impact: 'Hardened API layer with structured error & input validation.' },
      { name: 'PostgreSQL', level: 80, tier: 'Advanced', tags: ['Indexes', 'Query Plans', 'Migrations'], impact: 'Cut slow query count 40% with targeted indexing & plan analysis.' },
      { name: 'Redis', level: 65, tier: 'Intermediate', tags: ['Caching', 'Pub/Sub'], impact: 'Reduced read load by implementing layered caching strategy.' },
      { name: 'Prisma/ORM', level: 72, tier: 'Intermediate', tags: ['Schema mgmt', 'Type-safety'], impact: 'Improved schema evolution and dev velocity.' }
    ],
    roadmap: [
      { phase: 'Refinement', focus: 'gRPC + schema evolution strategies', status: 'planned' },
      { phase: 'Scaling', focus: 'Domain modeling for service partitioning', status: 'in-progress' }
    ]
  },
  {
    id: 'devops',
    label: 'DevOps & Platform',
    icon: FiCloud,
    description: 'Operational excellence through automation, continuous delivery, and reliability patterns.',
    highlights: ['CI/CD pipelines', 'Runtime observability', 'Deployment automation', 'Security baseline'],
    metrics: { experience: 3.4, depth: 3.2, impact: 4.0 },
    skills: [
      { name: 'Docker', level: 78, tier: 'Advanced', tags: ['Layering', 'Multi-stage', 'Caching'], impact: 'Reduced image size 55% improving deploy turnaround.' },
      { name: 'GitHub Actions', level: 82, tier: 'Advanced', tags: ['CI/CD', 'Caching', 'Matrix builds'], impact: 'Cut pipeline duration from 10m → 4m.' },
      { name: 'NGINX', level: 60, tier: 'Intermediate', tags: ['Reverse Proxy', 'TLS'], impact: 'Implemented compression & caching boosting TTFB stability.' },
      { name: 'Monitoring', level: 58, tier: 'Intermediate', tags: ['Metrics', 'Dashboards'], impact: 'Established SLO telemetry and alert thresholds.' }
    ],
    roadmap: [
      { phase: 'Expansion', focus: 'Infrastructure as Code (Pulumi/Terraform)', status: 'in-progress' },
      { phase: 'Refinement', focus: 'Blue/green + canary deployments', status: 'planned' }
    ]
  },
  {
    id: 'tooling',
    label: 'Tooling & Productivity',
    icon: FiTool,
    description: 'Build pipelines, linting standards, code quality automation, and developer experience.',
    highlights: ['Static analysis', 'DX optimization', 'Module bundling', 'Testing strategy'],
    metrics: { experience: 4.2, depth: 3.9, impact: 4.6 },
    skills: [
      { name: 'Vite', level: 83, tier: 'Advanced', tags: ['HMR', 'Build perf'], impact: 'Improved cold build time ~45% migrating from CRA.' },
      { name: 'ESLint', level: 88, tier: 'Advanced', tags: ['Custom Rules', 'Code Quality'], impact: 'Lowered style regressions and reduced review churn.' },
      { name: 'Jest', level: 70, tier: 'Intermediate', tags: ['Unit', 'Snapshots'], impact: 'Established coverage gates >80% on core modules.' },
      { name: 'Playwright', level: 55, tier: 'Developing', tags: ['E2E', 'Accessibility'], impact: 'Automated critical path flows reducing manual QA.' }
    ],
    roadmap: [
      { phase: 'Refinement', focus: 'Mutation testing & flake reduction', status: 'planned' }
    ]
  },
  {
    id: 'writing',
    label: 'Technical Writing & Knowledge',
    icon: FiBookOpen,
    description: 'Structured documentation, architectural decision records, and educational content.',
    highlights: ['Architecture narratives', 'Decision records', 'API specs', 'Teaching & mentorship'],
    metrics: { experience: 4.8, depth: 4.6, impact: 4.9 },
    skills: [
      { name: 'Architecture Docs', level: 90, tier: 'Expert', tags: ['ADR', 'Scalability'], impact: 'Accelerated onboarding cycle by system mapping & glossary.' },
      { name: 'API Documentation', level: 88, tier: 'Advanced', tags: ['Consistency', 'Guidelines'], impact: 'Reduced integration support requests ~30%.' },
      { name: 'Teaching Materials', level: 82, tier: 'Advanced', tags: ['Curriculum', 'Clarity'], impact: 'Improved junior developer autonomy timelines.' }
    ],
    roadmap: [
      { phase: 'Expansion', focus: 'Interactive system diagrams (C4 tooling)', status: 'in-progress' }
    ]
  }
]

const levelColor = (v) => v >= 85 ? 'bg-gradient-to-r from-emerald-500 to-green-500' : v >= 70 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : v >= 55 ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'
const tierBadge = (tier) => (
  tier === 'Expert' ? 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30' :
  tier === 'Advanced' ? 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30' :
  tier === 'Intermediate' ? 'text-amber-600 bg-amber-100 dark:bg-amber-900/30' : 'text-gray-600 bg-gray-100 dark:bg-gray-800'
)

const InteractiveSkillsShowcase = () => {
  const [activeGroup, setActiveGroup] = useState('frontend')
  const [query, setQuery] = useState('')
  const [minLevel, setMinLevel] = useState(0)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const currentGroup = useMemo(() => skillGroups.find(g => g.id === activeGroup), [activeGroup])

  const filteredSkills = useMemo(() => currentGroup.skills.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) && s.level >= minLevel
  ), [currentGroup, query, minLevel])

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center">
        {skillGroups.map(g => (
          <button key={g.id} onClick={() => setActiveGroup(g.id)} className={`relative px-5 py-3 rounded-xl font-medium flex items-center space-x-2 transition-all group ${activeGroup===g.id? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg':'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'}`}> 
            <g.icon size={18} />
            <span>{g.label}</span>
            {activeGroup===g.id && <motion.div layoutId="activeSkillTab" className="absolute inset-0 rounded-xl ring-2 ring-white/20" />}
          </button>
        ))}
      </div>

      {/* Group Summary */}
      <motion.div key={currentGroup.id} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3"><currentGroup.icon className="text-primary-500" /><span>{currentGroup.label}</span></h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">{currentGroup.description}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {Object.entries(currentGroup.metrics).map(([k,v]) => (
                <div key={k} className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-dark-700 dark:to-dark-800 border border-gray-100 dark:border-dark-600">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium">{k}</span>
                    <FiBarChart2 className="text-primary-500" size={16} />
                  </div>
                  <div className="flex items-end space-x-1">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{v.toFixed(1)}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">/5</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {currentGroup.highlights.map(h => (
                  <span key={h} className="px-3 py-1 rounded-full text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 flex items-center space-x-1"><FiStar className="text-primary-500" size={12} /><span>{h}</span></span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Roadmap</h4>
              <div className="flex flex-col gap-2">
                {currentGroup.roadmap.map(r => (
                  <div key={r.phase} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-700 border border-gray-100 dark:border-dark-600">
                    <div className="flex items-center space-x-3">
                      <FiCompass className="text-primary-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{r.phase}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{r.focus}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${r.status==='in-progress'?'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300':'bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300'}`}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-80 space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Filter skills..." className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-dark-700 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="flex items-center justify-between text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Minimum Level <span className="text-primary-500 font-semibold">{minLevel}%</span></label>
                <input type="range" min="0" max="100" step="5" value={minLevel} onChange={e=>setMinLevel(Number(e.target.value))} className="w-full" />
              </div>
            </div>
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
              {filteredSkills.map(skill => (
                <motion.button key={skill.name} layout onClick={()=>setSelectedSkill(skill)} whileHover={{ scale: 1.01 }} className="w-full p-4 bg-white dark:bg-dark-700 rounded-xl border border-gray-100 dark:border-dark-600 text-left group hover:border-primary-400 dark:hover:border-primary-500 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${tierBadge(skill.tier)}`}>{skill.tier}</span>
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-500">{skill.name}</h5>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded bg-gray-200 dark:bg-dark-600 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: skill.level + '%' }} transition={{ duration: 0.8, ease: 'easeOut' }} className={`h-full rounded ${levelColor(skill.level)}`}></motion.div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {skill.tags.slice(0,3).map(t => <span key={t} className="px-2 py-0.5 bg-gray-100 dark:bg-dark-600 text-[10px] rounded text-gray-600 dark:text-gray-300">{t}</span>)}
                  </div>
                </motion.button>
              ))}
              {filteredSkills.length===0 && (
                <div className="p-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-dark-700 rounded-xl">No skills match current filters.</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Selected Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={()=>setSelectedSkill(null)}>
            <motion.div initial={{ opacity:0, scale:.95, y:20 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:.95, y:20 }} className="bg-white dark:bg-dark-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden" onClick={e=>e.stopPropagation()}>
              <div className="p-6 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3"><FiAward className="text-primary-500" /><span>{selectedSkill.name}</span></h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-md">Proficiency snapshot & applied impact summary.</p>
                  </div>
                  <button onClick={()=>setSelectedSkill(null)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-500">✕</button>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-dark-700 dark:to-dark-800 rounded-xl border border-gray-100 dark:border-dark-600">
                    <span className="text-xs uppercase tracking-wide text-gray-500">Level</span>
                    <div className="flex items-end space-x-1 mt-1"><span className="text-3xl font-bold text-gray-900 dark:text-white">{selectedSkill.level}</span><span className="text-xs font-medium text-gray-500">%</span></div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-dark-700 dark:to-dark-800 rounded-xl border border-gray-100 dark:border-dark-600">
                    <span className="text-xs uppercase tracking-wide text-gray-500">Tier</span>
                    <div className="mt-1 inline-flex items-center space-x-2"><span className={`px-2 py-1 rounded text-xs font-semibold ${tierBadge(selectedSkill.tier)}`}>{selectedSkill.tier}</span></div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-dark-700 dark:to-dark-800 rounded-xl border border-gray-100 dark:border-dark-600">
                    <span className="text-xs uppercase tracking-wide text-gray-500">Focus Areas</span>
                    <div className="mt-2 flex flex-wrap gap-1">{selectedSkill.tags.map(t => <span key={t} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-dark-600 text-[10px] text-gray-600 dark:text-gray-300">{t}</span>)}</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Applied Impact</h4>
                  <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 text-primary-800 dark:text-primary-200 text-sm leading-relaxed">
                    {selectedSkill.impact}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Growth Plan</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-start space-x-2"><FiTrendingUp className="text-primary-500 mt-0.5" /><span>Expand advanced scenario coverage with targeted practice modules.</span></li>
                    <li className="flex items-start space-x-2"><FiBookmark className="text-primary-500 mt-0.5" /><span>Capture knowledge artifacts (patterns, gotchas) for reuse.</span></li>
                    <li className="flex items-start space-x-2"><FiTarget className="text-primary-500 mt-0.5" /><span>Benchmark performance improvements with repeatable metrics.</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveSkillsShowcase
