// Central algorithms dataset (Phase 1 extraction)
// TODO: Expand with full collection. Each algorithm object keeps presentation-ready fields.

export const algorithms = [
  {
    id: 'bubble-sort',
    slug: 'bubble-sort',
    name: 'Bubble Sort',
    topic: 'Sorting',
    difficulty: 'Easy',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    description: 'Simple comparison-based sorting algorithm that repeatedly steps through the list.',
    keyPoints: ['In-place sorting', 'Stable algorithm', 'Poor performance for large datasets'],
    useCases: ['Educational purposes', 'Small datasets', 'Nearly sorted data'],
    implementations: ['JavaScript', 'Python', 'Java'],
    tags: ['array','sort','stable'],
    explanation: {
      howItWorks: "Bubble Sort works by repeatedly comparing adjacent elements and swapping them if they're in the wrong order. It's called 'bubble' sort because smaller elements 'bubble' to the beginning of the list.",
      stepByStep: [
        'Start at the beginning of the array',
        'Compare adjacent elements',
        'Swap if out of order',
        'Move to next pair',
        'Repeat passes until no swaps occur'
      ],
      visualExample: 'Array: [64,34,25,12,22,11,90] -> passes bubble largest to end',
      codeExample: `function bubbleSort(arr) {\n  const n = arr.length;\n  for (let i = 0; i < n - 1; i++) {\n    let swapped = false;\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n        swapped = true;\n      }\n    }\n    if (!swapped) break;\n  }\n  return arr;\n}`,
      whyThisComplexity: 'Time: O(n²) due to nested loops. Space: O(1) in-place.',
      whenToUse: 'Learning / very small arrays / nearly sorted input.',
      commonMistakes: ['Missing early break optimization'],
      interviewQuestions: [
        { question: 'Implement bubble sort with early exit.', difficulty: 'Easy', approach: 'Track swaps per pass.', answer: 'Use swapped flag; best case O(n).'}
      ],
      intuition: 'Imagine repeatedly walking a line of people and swapping any adjacent pair that is out of height order; each full pass places the tallest remaining person at the end.',
      complexityBreakdown: { best: 'O(n)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
      dryRun: [
        'Start: [5,3,2,4]',
        'Pass1 swaps: [3,2,4,5]',
        'Pass2 swaps: [2,3,4,5]',
        'Pass3 early exit (no swaps)' 
      ],
      edgeCases: ['Empty array','Single element','Already sorted (best case)','Reverse sorted (worst case)','Many duplicates'],
      whenNotToUse: ['Large datasets','Performance critical paths','Memory is ample and better algorithms available'],
      variations: ['Cocktail Shaker Sort (both directions)','Optimized with last swap index'],
      optimizationTips: ['Track last swap position to shorten next pass','Break early when no swap'],
      practiceProblems: ['Sort nearly sorted list quickly','Detect if list already sorted using bubble mechanism'],
      furtherReading: [
        { title: 'Stability in Sorting', url: 'https://en.wikipedia.org/wiki/Sorting_algorithm#Stability' }
      ],
      interviewTips: 'Emphasize educational purpose, stability, and early-exit optimization; contrast with more efficient algorithms.'
    }
  },
  // --- Sorting ---
  {
    id: 'quick-sort',
    slug: 'quick-sort',
    name: 'Quick Sort',
    topic: 'Sorting',
    difficulty: 'Medium',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(log n)',
    description: 'Divide-and-conquer sorting algorithm using partitioning around a pivot.',
    keyPoints: ['Average O(n log n)', 'In-place (depending on implementation)', 'Worst-case O(n²) if poor pivots'],
    useCases: ['General-purpose sorting', 'Large in-memory arrays'],
    implementations: ['JavaScript', 'C++', 'Python'],
    tags: ['array','sort','divide-and-conquer'],
    explanation: {
      howItWorks: 'Choose a pivot; partition array into elements < pivot and > pivot; recursively sort partitions.',
      stepByStep: [
        'Select pivot (e.g. median-of-three)',
        'Partition array around pivot',
        'Recursively apply to left partition',
        'Recursively apply to right partition',
        'Combine (implicit via in-place)'
      ],
      codeExample: `function quickSort(a,l=0,r=a.length-1){\n if(l>=r) return;\n const p=a[Math.floor((l+r)/2)];\n let i=l,j=r;\n while(i<=j){\n  while(a[i]<p) i++;\n  while(a[j]>p) j--;\n  if(i<=j){[a[i],a[j]]=[a[j],a[i]];i++;j--; }\n }\n quickSort(a,l,j);\n quickSort(a,i,r);\n return a;\n}`,
      whyThisComplexity: 'Average splits produce log n depth * n work per level = O(n log n); worst unbalanced splits O(n²).',
      whenToUse: 'Fast general sorting when good pivot strategy reduces worst cases.',
      commonMistakes: ['Not handling equal elements -> performance issues', 'Using first element as pivot on sorted input'],
      interviewQuestions: [
        { question: 'How to avoid worst-case?', difficulty: 'Medium', approach: 'Random pivot / median-of-three.', answer: 'Introduce randomness or choose median-of-three to balance partitions.' }
      ],
      intuition: 'Partition around a pivot so left side contains smaller values and right side larger; recursively repeat. Like organizing books by picking one as a reference point.',
      complexityBreakdown: { best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)', space: 'O(log n) stack' },
      dryRun: ['Array [9,3,7,1,6] pivot=7 -> partition => [3,1,6 | 7 | 9]','Left recurse [3,1,6] pivot=1 => [1 | 3,6]','Continue partitioning until size 1'],
      edgeCases: ['Already sorted with poor pivot choice','Many equal elements','All duplicates','Very small partitions'],
      whenNotToUse: ['Need stable sort AND cannot afford extra memory (basic in-place not stable)','Adversarial input causing worst-case without randomization'],
      variations: ['Lomuto vs Hoare partition','Median-of-three pivot','Randomized quick sort','Three-way partition (Dutch flag)'],
      optimizationTips: ['Switch to insertion sort for small subarrays','Randomize pivot to avoid patterns','Tail call elimination on larger partition'],
      practiceProblems: ['Implement three-way partition quicksort','Explain pivot strategy trade-offs'],
      furtherReading: [{ title: 'Quicksort Partition Schemes', url: 'https://en.wikipedia.org/wiki/Quicksort' }],
      interviewTips: 'Discuss average vs worst case, pivot selection, space (recursion depth), and when to prefer merge sort for stability.'
    }
  },
  {
    id: 'merge-sort',
    slug: 'merge-sort',
    name: 'Merge Sort',
    topic: 'Sorting',
    difficulty: 'Medium',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    description: 'Stable divide-and-conquer sorting using splitting and merging.',
    keyPoints: ['Stable', 'Predictable O(n log n)', 'Needs extra memory'],
    useCases: ['Linked lists', 'External sorting', 'Need for stability'],
    implementations: ['JavaScript', 'Java', 'Go'],
    tags: ['array','sort','stable','divide-and-conquer'],
    explanation: {
      howItWorks: 'Recursively split array into halves, sort each half, merge sorted halves.',
      stepByStep: ['Split until size 1','Merge pairs while sorting'],
      codeExample: `function mergeSort(a){ if(a.length<2) return a; const m=Math.floor(a.length/2); return merge(mergeSort(a.slice(0,m)), mergeSort(a.slice(m))); }\nfunction merge(l,r){ const res=[]; let i=0,j=0; while(i<l.length&&j<r.length){ res.push(l[i]<=r[j]?l[i++]:r[j++]); } return res.concat(l.slice(i)).concat(r.slice(j)); }`,
      whyThisComplexity: 'Log n levels * n merge cost per level.',
      whenToUse: 'Need stable O(n log n) guarantee; large datasets that fit memory or can stream.',
      commonMistakes: ['Inefficient concatenation in languages without optimization'],
      interviewQuestions: [{ question: 'Why is merge sort stable?', difficulty: 'Easy', approach: 'Order preservation in merge.', answer: 'Equal elements taken from left before right keeps original order.' }]
    }
  },
  // --- Searching ---
  {
    id: 'binary-search',
    slug: 'binary-search',
    name: 'Binary Search',
    topic: 'Searching',
    difficulty: 'Easy',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    description: 'Searches a sorted array by repeatedly dividing the search interval in half.',
    keyPoints: ['Requires sorted input', 'Logarithmic time', 'Iterative or recursive'],
    useCases: ['Search in sorted arrays', 'Finding boundaries', 'Answer checking (binary search on answer)'],
    implementations: ['JavaScript','Python','C++'],
    tags: ['array','search','logarithmic'],
    explanation: {
      howItWorks: 'Compare target with middle; discard half each step.',
      stepByStep: ['Compute mid','Compare target','Shift low/high','Repeat until found or low>high'],
      codeExample: `function binarySearch(a,t){let l=0,r=a.length-1;while(l<=r){const m=(l+r)>>1; if(a[m]===t) return m; if(a[m]<t) l=m+1; else r=m-1;} return -1;}`,
      whyThisComplexity: 'Each iteration halves range -> log2 n steps.',
      whenToUse: 'Sorted data or monotonic predicate.',
      commonMistakes: ['Overflow on (l+r)/2 in some languages'],
      interviewQuestions: [{ question: 'Modify to find first occurrence.', difficulty: 'Medium', approach: 'Bias search to left boundary.', answer: 'When match found, move right pointer left to continue search.' }],
      intuition: 'Repeatedly eliminate half the search space by comparing the middle element to the target—like guessing a number and being told higher or lower.',
      complexityBreakdown: { best: 'O(1)', average: 'O(log n)', worst: 'O(log n)', space: 'O(1)' },
      dryRun: ['Search 37 in [5,18,22,37,41,56] mid=22 -> higher','Range becomes right half','Mid=41 -> lower','Mid=37 -> found'],
      edgeCases: ['Empty array','Single element','Target smaller than min','Target larger than max','Duplicates (need first/last)'],
      whenNotToUse: ['Unsorted data','Data structure without random access (unless adapted)'],
      variations: ['First occurrence','Last occurrence','Lower bound','Upper bound','Binary search on answer (parametric search)'],
      optimizationTips: ['Use l + ((r - l) >> 1) to avoid overflow in some languages','Keep loop invariant clearly defined'],
      practiceProblems: ['Find peak in mountain array','Search rotated sorted array','Square root via binary search'],
      furtherReading: [{ title: 'Binary Search Variants', url: 'https://cp-algorithms.com/binary_search.html' }],
      interviewTips: 'Clarify loop invariant, handle duplicates, and show off-by-one safety; describe reasoning at each mid selection.'
    }
  },
  // --- Graph Algorithms ---
  {
    id: 'depth-first-search',
    slug: 'depth-first-search',
    name: 'Depth First Search (DFS)',
    topic: 'Graph Algorithms',
    difficulty: 'Medium',
    timeComplexity: 'O(V+E)',
    spaceComplexity: 'O(V)',
    description: 'Traverses as deep as possible along each branch before backtracking.',
    keyPoints: ['Stack/recursion', 'Good for path existence', 'Forms DFS tree'],
    useCases: ['Cycle detection','Topological sort','Connected components'],
    implementations: ['JavaScript','Python','Java'],
    tags: ['graph','traversal','recursive'],
    explanation: {
      howItWorks: 'Push node, explore an unvisited neighbor recursively until dead end, backtrack.',
      stepByStep: ['Visit start','Mark visited','Recurse neighbors','Backtrack'],
      codeExample: `function dfs(g,start,seen=new Set()){seen.add(start); for(const nb of g[start]||[]){ if(!seen.has(nb)) dfs(g,nb,seen);} return seen; }`,
      whyThisComplexity: 'Each vertex & edge processed at most once.',
      whenToUse: 'Need depth exploration / recursion suits problem.',
      commonMistakes: ['Missing visited check -> infinite recursion'],
      interviewQuestions: [{ question: 'Detect cycle in directed graph using DFS?', difficulty: 'Medium', approach: 'Track recursion stack.', answer: 'Maintain visiting set; cycle if edge to visiting node.' }]
    }
  },
  {
    id: 'breadth-first-search',
    slug: 'breadth-first-search',
    name: 'Breadth First Search (BFS)',
    topic: 'Graph Algorithms',
    difficulty: 'Medium',
    timeComplexity: 'O(V+E)',
    spaceComplexity: 'O(V)',
    description: 'Traverses graph level by level outward from the start node.',
    keyPoints: ['Queue-based', 'Finds shortest unweighted path', 'Level order'],
    useCases: ['Shortest path unweighted','Level order tree traversal','Flood fill'],
    implementations: ['JavaScript','Python','C#'],
    tags: ['graph','traversal','queue'],
    explanation: {
      howItWorks: 'Enqueue start; dequeue node, enqueue unvisited neighbors; repeat.',
      stepByStep: ['Enqueue start','Dequeue node','Process neighbors','Repeat until queue empty'],
      codeExample: `function bfs(g,start){const q=[start],seen=new Set([start]); while(q.length){const n=q.shift(); for(const nb of g[n]||[]){ if(!seen.has(nb)){seen.add(nb); q.push(nb);} } } return seen; }`,
      whyThisComplexity: 'Each vertex and edge considered once.',
      whenToUse: 'Need shortest path in unweighted graph.',
      commonMistakes: ['Using stack by mistake causing depth traversal'],
      interviewQuestions: [{ question: 'How to reconstruct shortest path?', difficulty: 'Medium', approach: 'Parent map.', answer: 'Store parent when enqueuing; backtrack from target.' }],
      intuition: 'Explore outward in concentric “rings” from the start before going deeper—like ripples in water.',
      complexityBreakdown: { best: 'O(V+E)', average: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
      dryRun: ['Start at A queue=[A]','Dequeue A enqueue neighbors B,C','Dequeue B enqueue its unseen neighbors','Continue until queue empty'],
      edgeCases: ['Disconnected graph','Self loops','Parallel edges','Start not in graph'],
      whenNotToUse: ['Weighted graphs needing shortest weighted path (use Dijkstra)','Need deep path early (consider DFS)'],
      variations: ['Bidirectional BFS','Multi-source BFS','0-1 BFS (deque)'],
      optimizationTips: ['Mark visited upon enqueue to avoid duplicates','Use array queue indices for speed'],
      practiceProblems: ['Shortest path in unweighted maze','Number of islands (grid BFS)'],
      furtherReading: [{ title: 'BFS Applications', url: 'https://en.wikipedia.org/wiki/Breadth-first_search' }],
      interviewTips: 'Stress shortest-path property in unweighted graphs and memory trade-off vs DFS.'
    }
  },
  {
    id: 'dijkstras-algorithm',
    slug: 'dijkstras-algorithm',
    name: "Dijkstra's Algorithm",
    topic: 'Graph Algorithms',
    difficulty: 'Hard',
    timeComplexity: 'O(E log V)',
    spaceComplexity: 'O(V)',
    description: 'Computes shortest paths from a source in weighted graphs with non-negative edges.',
    keyPoints: ['Priority queue', 'Greedy relaxation', 'Non-negative weights only'],
    useCases: ['Routing','Network latency','Map directions'],
    implementations: ['JavaScript','C++','Python'],
    tags: ['graph','shortest-path','greedy'],
    explanation: {
      howItWorks: 'Initialize distances; extract min-distance vertex; relax outgoing edges; repeat.',
      stepByStep: ['Init distances','Push source in PQ','Extract min','Relax edges','Update PQ','Repeat'],
      codeExample: `function dijkstra(g,src){const dist=Object.fromEntries(Object.keys(g).map(v=>[v,Infinity])); dist[src]=0; const pq=[[0,src]]; while(pq.length){pq.sort((a,b)=>a[0]-b[0]); const [d,u]=pq.shift(); if(d>dist[u]) continue; for(const [v,w] of g[u]){ if(dist[u]+w<dist[v]){ dist[v]=dist[u]+w; pq.push([dist[v],v]); } } } return dist; }`,
      whyThisComplexity: 'Each edge relaxed once; PQ operations log V.',
      whenToUse: 'Weighted shortest path with non-negative weights.',
      commonMistakes: ['Using with negative edges', 'Not decreasing key efficiently'],
      interviewQuestions: [{ question: 'Optimize priority queue?', difficulty: 'Hard', approach: 'Binary/Fibonacci heap.', answer: 'Use a binary heap for O(E log V); Fibonacci heap for theoretical improvement.' }]
    }
  },
  // --- Dynamic Programming ---
  {
    id: 'fibonacci-tabulation',
    slug: 'fibonacci-tabulation',
    name: 'Fibonacci (DP Tabulation)',
    topic: 'Dynamic Programming',
    difficulty: 'Easy',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    description: 'Computes nth Fibonacci number iteratively storing only needed states.',
    keyPoints: ['Bottom-up', 'Constant space', 'Eliminates recursion'],
    useCases: ['Demonstrating DP basics'],
    implementations: ['JavaScript','Python'],
    tags: ['dp','sequence'],
    explanation: {
      howItWorks: 'Iteratively build sequence maintaining last two values.',
      stepByStep: ['Handle base cases','Iterate 2..n','Update rolling window'],
      codeExample: `function fib(n){ if(n<2) return n; let a=0,b=1; for(let i=2;i<=n;i++){ [a,b]=[b,a+b]; } return b; }`,
      whyThisComplexity: 'One loop of n iterations; constant extra vars.',
      whenToUse: 'Need fast Fibonacci without recursion overhead.',
      commonMistakes: ['Using recursion causing exponential time'],
      interviewQuestions: [{ question: 'Convert to memoized recursion.', difficulty: 'Easy', approach: 'Cache results map.', answer: 'Add map param; store computed fib(n).' }]
    }
  },
  // --- Trees ---
  {
    id: 'avl-tree-insertion',
    slug: 'avl-tree-insertion',
    name: 'AVL Tree Insertion',
    topic: 'Trees',
    difficulty: 'Hard',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(log n)',
    description: 'Self-balancing BST maintaining height difference <=1 via rotations.',
    keyPoints: ['Balances automatically', 'Rotations', 'Maintains order'],
    useCases: ['Ordered maps','Indexes needing balance'],
    implementations: ['Java','C++','Go'],
    tags: ['tree','balanced','bst'],
    explanation: {
      howItWorks: 'Insert like BST; update heights; perform rotations where balance factor out of range.',
      stepByStep: ['BST insert','Update height','Compute balance','Rotate if needed'],
      codeExample: `// Pseudocode for rotation\nif(balance>1 && key < node.left.key) rotateRight(node);`,
      whyThisComplexity: 'Tree height kept logarithmic.',
      whenToUse: 'Need worst-case guarantees for ordered operations.',
      commonMistakes: ['Forgetting to update heights after rotation'],
      interviewQuestions: [{ question: 'When single vs double rotation?', difficulty: 'Medium', approach: 'Inner child direction.', answer: 'If heavy child leans opposite, perform double rotation.' }]
    }
  },
  // --- String Processing ---
  {
    id: 'longest-common-prefix',
    slug: 'longest-common-prefix',
    name: 'Longest Common Prefix',
    topic: 'String Processing',
    difficulty: 'Easy',
    timeComplexity: 'O(n * m)',
    spaceComplexity: 'O(1)',
    description: 'Finds the longest shared starting substring among strings.',
    keyPoints: ['Character-wise scan', 'Early exit', 'Horizontal or vertical scan'],
    useCases: ['Autocomplete','DNA sequence grouping'],
    implementations: ['JavaScript','Java'],
    tags: ['string','prefix'],
    explanation: {
      howItWorks: 'Compare characters column-wise until mismatch.',
      stepByStep: ['Pick first word baseline','Iterate characters','Check all words','Stop at mismatch'],
      codeExample: `function lcp(strs){ if(!strs.length) return ''; let pref=strs[0]; for(const s of strs){ while(!s.startsWith(pref)) pref=pref.slice(0,-1); if(!pref) break;} return pref; }`,
      whyThisComplexity: 'Worst compare all chars until mismatch.',
      whenToUse: 'Need shared prefix of small set.',
      commonMistakes: ['Not handling empty array'],
      interviewQuestions: [{ question: 'Optimize with Trie?', difficulty: 'Medium', approach: 'Insert and stop at branching.', answer: 'Trie path until node with >1 child or terminal.' }]
    }
  },
  // --- Backtracking ---
  {
    id: 'n-queens',
    slug: 'n-queens',
    name: 'N-Queens',
    topic: 'Backtracking',
    difficulty: 'Hard',
    timeComplexity: 'O(N!)',
    spaceComplexity: 'O(N)',
    description: 'Places N queens on N×N board so no two attack each other.',
    keyPoints: ['Backtracking pruning', 'Diagonal conflict checks', 'Exponential'],
    useCases: ['Constraint solving patterns'],
    implementations: ['JavaScript','Python'],
    tags: ['backtracking','recursion','constraint'],
    explanation: {
      howItWorks: 'Place queen row by row; if conflict, backtrack and try next column.',
      stepByStep: ['Start row 0','Try column','Validate (cols & diagonals)','Recurse next row','Backtrack'],
      codeExample: `function solveN(n){const res=[],cols=new Set(),d1=new Set(),d2=new Set(),board=Array.from({length:n},()=>Array(n).fill('.'));\nfunction bt(r){ if(r===n){res.push(board.map(row=>row.join(''))); return;} for(let c=0;c<n;c++){ if(cols.has(c)||d1.has(r-c)||d2.has(r+c)) continue; cols.add(c); d1.add(r-c); d2.add(r+c); board[r][c]='Q'; bt(r+1); board[r][c]='.'; cols.delete(c); d1.delete(r-c); d2.delete(r+c);} } bt(0); return res; }`,
      whyThisComplexity: 'Branching factor reduces with pruning but worst permutations.',
      whenToUse: 'Classic demonstration of backtracking.',
      commonMistakes: ['Not removing state on backtrack'],
      interviewQuestions: [{ question: 'Optimize with bitmasks?', difficulty: 'Hard', approach: 'Use bit operations for conflicts.', answer: 'Represent columns & diagonals as bit masks for O(1) checks.' }]
    }
  }
]

export const difficulties = ['Easy','Medium','Hard']
export const topics = ['Sorting','Searching','Graph Algorithms','Dynamic Programming','Trees','String Processing','Backtracking']
