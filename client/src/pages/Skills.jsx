import { motion } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import InteractiveSkillsShowcase from '../components/InteractiveSkillsShowcase'
import { 
  FiSearch, 
  FiFilter, 
  FiCode, 
  FiClock, 
  FiTrendingUp,
  FiBookOpen,
  FiZap,
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

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [selectedTimeComplexity, setSelectedTimeComplexity] = useState('all')
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedAlgorithm(null)
      }
    }

    if (selectedAlgorithm) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedAlgorithm])

  // Comprehensive algorithms dataset
  const algorithms = [
    // Sorting Algorithms
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
          "1. Start at the beginning of the array",
          "2. Compare the first two elements",
          "3. If the first is greater than the second, swap them",
          "4. Move to the next pair and repeat",
          "5. Continue until you reach the end of the array",
          "6. Repeat the entire process until no swaps are needed"
        ],
        visualExample: "Array: [64, 34, 25, 12, 22, 11, 90]\nPass 1: [34, 25, 12, 22, 11, 64, 90] (64 bubbles to position)\nPass 2: [25, 12, 22, 11, 34, 64, 90] (34 bubbles to position)\n...continues until sorted",
        codeExample: `function bubbleSort(arr) {
  const n = arr.length;
  
  // Outer loop for number of passes
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    // Inner loop for comparisons in each pass
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if they're in wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}`,
        whyThisComplexity: "Time: O(n²) because we have nested loops - worst case requires n passes with n comparisons each. Space: O(1) because we only use a constant amount of extra memory for swapping.",
        whenToUse: "Best for learning algorithms, very small datasets (< 20 elements), or when simplicity is more important than efficiency.",
        commonMistakes: ["Forgetting the optimization to break early when no swaps occur", "Not understanding why we reduce the inner loop by i each pass", "Confusing it with other O(n²) sorting algorithms"],
        interviewQuestions: [
          {
            question: "Implement bubble sort and optimize it to detect when the array is already sorted.",
            difficulty: "Easy",
            approach: "Add a 'swapped' flag that tracks if any swaps occurred in a pass. If no swaps happen, the array is sorted.",
            followUp: "What's the best-case time complexity with this optimization?",
            answer: "O(n) when the array is already sorted, because we only need one pass to detect no swaps are needed."
          },
          {
            question: "Can you make bubble sort stable? What does stability mean in sorting?",
            difficulty: "Easy",
            approach: "Bubble sort is naturally stable because we only swap when arr[i] > arr[j] (not >=), preserving the relative order of equal elements.",
            followUp: "Give an example where stability matters.",
            answer: "Sorting students by grade, then by name. Stability preserves the name order for students with the same grade."
          },
          {
            question: "What's the space complexity of bubble sort and why?",
            difficulty: "Easy", 
            approach: "O(1) space because we only use a constant amount of extra memory for the swap operation and loop variables.",
            followUp: "How would recursive bubble sort affect space complexity?",
            answer: "Recursive version would use O(n) space due to the call stack, making it less efficient."
          }
        ]
      }
    },
    {
      id: 'quick-sort',
      name: 'Quick Sort',
      topic: 'Sorting',
      difficulty: 'Medium',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(log n)',
      description: 'Efficient divide-and-conquer algorithm that picks a pivot and partitions the array.',
      keyPoints: ['Divide and conquer', 'In-place sorting', 'Not stable'],
      useCases: ['General purpose sorting', 'Large datasets', 'Memory-constrained environments'],
      implementations: ['JavaScript', 'Python', 'C++'],
      explanation: {
        howItWorks: "Quick Sort uses a 'divide and conquer' strategy. It picks a 'pivot' element and partitions the array so that elements smaller than the pivot go to the left, and larger elements go to the right. Then it recursively sorts both sides.",
        stepByStep: [
          "1. Choose a pivot element from the array",
          "2. Partition: rearrange array so elements < pivot go left, elements > pivot go right",
          "3. The pivot is now in its final sorted position",
          "4. Recursively apply Quick Sort to the left subarray",
          "5. Recursively apply Quick Sort to the right subarray",
          "6. Base case: arrays of length 1 or 0 are already sorted"
        ],
        visualExample: "Array: [3, 6, 8, 10, 1, 2, 1]\nPivot: 3\nPartition: [1, 2, 1] + [3] + [6, 8, 10]\nRecurse on [1, 2, 1] and [6, 8, 10]\nFinal: [1, 1, 2, 3, 6, 8, 10]",
        codeExample: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array and get pivot index
    const pivotIndex = partition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  // Choose rightmost element as pivot
  const pivot = arr[high];
  let i = low - 1; // Index of smaller element
  
  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
  }
  
  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1; // Return pivot index
}`,
        whyThisComplexity: "Time: Average O(n log n) - we divide the array in half log n times, and each partition takes O(n). Worst case O(n²) if pivot is always the smallest/largest. Space: O(log n) for recursion stack.",
        whenToUse: "Excellent general-purpose sorting algorithm, especially when average-case performance matters more than worst-case guarantees.",
        commonMistakes: ["Poor pivot selection leading to O(n²) performance", "Not handling the base case properly", "Incorrect partitioning logic", "Stack overflow on already sorted arrays"],
        interviewQuestions: [
          {
            question: "Implement quicksort and explain how to choose a good pivot to avoid worst-case O(n²) performance.",
            difficulty: "Medium",
            approach: "Use median-of-three (first, middle, last) or random pivot selection. Avoid always picking first/last element.",
            followUp: "What happens if you always pick the smallest element as pivot?",
            answer: "O(n²) performance because each partition only reduces the problem size by 1, creating n levels of recursion."
          },
          {
            question: "How would you implement quicksort iteratively instead of recursively?",
            difficulty: "Medium",
            approach: "Use an explicit stack to store the start and end indices of subarrays to be sorted, instead of relying on recursion.",
            followUp: "What are the advantages of iterative vs recursive quicksort?",
            answer: "Iterative avoids stack overflow for large arrays and gives more control over memory usage, but recursive is more intuitive."
          },
          {
            question: "Is quicksort stable? How could you make it stable?",
            difficulty: "Medium",
            approach: "Standard quicksort is not stable. To make it stable, use additional space to maintain relative order during partitioning.",
            followUp: "Why might you prefer merge sort over quicksort?",
            answer: "Merge sort is stable, has guaranteed O(n log n) performance, and is better for linked lists or external sorting."
          },
          {
            question: "Explain the partitioning step in detail. What's the invariant?",
            difficulty: "Hard",
            approach: "Maintain invariant: elements [low...i] ≤ pivot, elements [i+1...j-1] > pivot, elements [j...high-1] are unprocessed.",
            followUp: "How do you handle duplicate elements efficiently?",
            answer: "Use 3-way partitioning (Dutch flag algorithm) to group elements equal to pivot together, improving performance with many duplicates."
          }
        ]
      }
    },
    {
      id: 'binary-search',
      name: 'Binary Search',
      topic: 'Searching',
      difficulty: 'Easy',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      description: 'Efficient algorithm for finding an item in a sorted array by repeatedly dividing search interval.',
      keyPoints: ['Requires sorted array', 'Divide and conquer', 'Very efficient'],
      useCases: ['Searching in sorted data', 'Database indexing', 'Finding insertion point'],
      implementations: ['JavaScript', 'Python', 'Java'],
      explanation: {
        howItWorks: "Binary Search works like looking up a word in a dictionary. You open to the middle, see if your word comes before or after, then eliminate half the dictionary and repeat. This halving process makes it incredibly fast.",
        stepByStep: [
          "1. Start with the entire sorted array",
          "2. Find the middle element",
          "3. Compare the target with the middle element",
          "4. If target equals middle, we found it!",
          "5. If target is less than middle, search the left half",
          "6. If target is greater than middle, search the right half",
          "7. Repeat until found or search space is empty"
        ],
        visualExample: "Array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], Target: 7\nStep 1: Check middle (9) - too big, go left\nStep 2: Check middle of left half (3) - too small, go right\nStep 3: Check middle of remaining (7) - found it!",
        codeExample: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    // Find middle index (avoid overflow)
    const mid = Math.floor(left + (right - left) / 2);
    
    // Check if target is at middle
    if (arr[mid] === target) {
      return mid; // Found the target
    }
    
    // If target is smaller, search left half
    if (arr[mid] > target) {
      right = mid - 1;
    } 
    // If target is larger, search right half
    else {
      left = mid + 1;
    }
  }
  
  return -1; // Target not found
}

// Recursive version
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  // Base case: search space is empty
  if (left > right) {
    return -1;
  }
  
  const mid = Math.floor(left + (right - left) / 2);
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}`,
        whyThisComplexity: "Time: O(log n) because we eliminate half the search space in each step. With n elements, we need at most log₂(n) steps. Space: O(1) for iterative, O(log n) for recursive due to call stack.",
        whenToUse: "Perfect for searching in any sorted data structure. Essential for performance-critical applications with large sorted datasets.",
        commonMistakes: ["Forgetting that array must be sorted first", "Off-by-one errors in boundary conditions", "Integer overflow when calculating mid = (left + right) / 2", "Wrong comparison operators"],
        interviewQuestions: [
          {
            question: "Implement binary search both iteratively and recursively. Which is better and why?",
            difficulty: "Easy",
            approach: "Both have same time complexity O(log n), but iterative uses O(1) space vs O(log n) for recursive.",
            followUp: "How do you avoid integer overflow when calculating the middle?",
            answer: "Use mid = left + (right - left) / 2 instead of mid = (left + right) / 2 to prevent overflow."
          },
          {
            question: "Find the first occurrence of a target in a sorted array with duplicates.",
            difficulty: "Medium",
            approach: "When target is found, continue searching left half to find the first occurrence. Keep track of the first found index.",
            followUp: "How would you find the last occurrence?",
            answer: "Similar approach but continue searching right half when target is found, updating the last found index."
          },
          {
            question: "Search in a rotated sorted array (e.g., [4,5,6,7,0,1,2]).",
            difficulty: "Hard",
            approach: "Find which half is properly sorted by comparing mid with left/right, then determine which half contains the target.",
            followUp: "What if the array contains duplicates?",
            answer: "When nums[left] == nums[mid] == nums[right], we can't determine which half is sorted, so increment left and decrement right."
          },
          {
            question: "Find the peak element in an array where arr[i] > arr[i-1] and arr[i] > arr[i+1].",
            difficulty: "Medium",
            approach: "Use binary search concept: if mid element is smaller than its right neighbor, peak must be on the right side.",
            followUp: "Can there be multiple peaks? How does the algorithm handle this?",
            answer: "Yes, multiple peaks possible. Algorithm finds any peak, not necessarily the global maximum."
          },
          {
            question: "Find the square root of a number using binary search.",
            difficulty: "Medium",
            approach: "Search between 0 and x, find the largest number whose square is ≤ x.",
            followUp: "How do you handle precision for floating-point results?",
            answer: "Continue binary search until the difference between high and low is smaller than desired precision (e.g., 0.001)."
          }
        ]
      }
    },
    {
      id: 'depth-first-search',
      name: 'Depth-First Search (DFS)',
      topic: 'Graph Traversal',
      difficulty: 'Medium',
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      description: 'Graph traversal algorithm that explores as far as possible along each branch.',
      keyPoints: ['Uses stack (recursive)', 'Memory efficient', 'Can get stuck in infinite loops'],
      useCases: ['Pathfinding', 'Topological sorting', 'Cycle detection'],
      implementations: ['JavaScript', 'Python', 'Java'],
      explanation: {
        howItWorks: "DFS is like exploring a maze by always going as deep as possible before backtracking. It uses a stack (either explicitly or through recursion) to remember where to go back to when it hits a dead end.",
        stepByStep: [
          "1. Start at a given node and mark it as visited",
          "2. Visit an unvisited neighbor",
          "3. Recursively apply DFS to that neighbor",
          "4. When no unvisited neighbors remain, backtrack",
          "5. Continue until all reachable nodes are visited",
          "6. For disconnected graphs, start DFS from unvisited nodes"
        ],
        visualExample: "Graph: A-B-D, A-C-E, B-F\nDFS from A: A → B → D (backtrack) → F (backtrack to A) → C → E\nPath: A, B, D, F, C, E",
        codeExample: `// Recursive DFS for adjacency list representation
function dfsRecursive(graph, startNode, visited = new Set()) {
  // Mark current node as visited
  visited.add(startNode);
  console.log(startNode); // Process the node
  
  // Visit all unvisited neighbors
  for (const neighbor of graph[startNode] || []) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}

// Iterative DFS using explicit stack
function dfsIterative(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];
  
  while (stack.length > 0) {
    const currentNode = stack.pop();
    
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      console.log(currentNode); // Process the node
      
      // Add neighbors to stack (in reverse order to match recursive)
      const neighbors = graph[currentNode] || [];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited.has(neighbors[i])) {
          stack.push(neighbors[i]);
        }
      }
    }
  }
}

// Example graph representation (adjacency list)
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'F'],
  'C': ['A', 'E'],
  'D': ['B'],
  'E': ['C'],
  'F': ['B']
};`,
        whyThisComplexity: "Time: O(V + E) where V is vertices and E is edges. We visit each vertex once and examine each edge once. Space: O(V) for the visited set and recursion stack (worst case: linear chain).",
        whenToUse: "Great for pathfinding in mazes, detecting cycles, topological sorting, and when you need to explore all possibilities. Memory-efficient for deep graphs.",
        commonMistakes: ["Forgetting to mark nodes as visited (infinite loops)", "Not handling disconnected components", "Stack overflow in recursive version with deep graphs", "Modifying the graph during traversal"],
        interviewQuestions: [
          {
            question: "Use DFS to detect if a graph has a cycle.",
            difficulty: "Medium",
            approach: "Keep track of nodes in current recursion stack. If we encounter a node already in the stack, there's a cycle.",
            followUp: "How is cycle detection different for directed vs undirected graphs?",
            answer: "Undirected: cycle if we visit a node that's visited but not the parent. Directed: cycle if we visit a node in current recursion stack."
          },
          {
            question: "Implement DFS to find all paths from source to destination.",
            difficulty: "Medium",
            approach: "Use DFS with backtracking. Maintain current path, add to results when destination reached, backtrack by removing current node.",
            followUp: "How do you avoid infinite loops in graphs with cycles?",
            answer: "Mark nodes as visited for current path, unmark when backtracking. This prevents revisiting nodes in the same path."
          },
          {
            question: "Use DFS for topological sorting of a directed acyclic graph (DAG).",
            difficulty: "Hard",
            approach: "Perform DFS and add nodes to result list when finishing (post-order). Reverse the list for topological order.",
            followUp: "What happens if the graph has a cycle?",
            answer: "Topological sorting is impossible with cycles. Use cycle detection first to validate the graph is a DAG."
          },
          {
            question: "Find connected components in an undirected graph using DFS.",
            difficulty: "Medium",
            approach: "Run DFS from each unvisited node. Each DFS call finds one connected component.",
            followUp: "How would you modify this for strongly connected components in directed graphs?",
            answer: "Use Kosaraju's algorithm: DFS on original graph, DFS on transposed graph in reverse finishing order."
          },
          {
            question: "Clone a graph using DFS.",
            difficulty: "Medium",
            approach: "Use DFS with a hash map to store original→clone mapping. For each node, create clone and recursively clone neighbors.",
            followUp: "How do you handle cycles during cloning?",
            answer: "Check if node already cloned using hash map. If yes, return existing clone instead of creating new one."
          }
        ]
      }
    },
    {
      id: 'fibonacci',
      name: 'Fibonacci Sequence',
      topic: 'Dynamic Programming',
      difficulty: 'Easy',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      description: 'Classic DP problem demonstrating overlapping subproblems and optimal substructure.',
      keyPoints: ['Memoization', 'Bottom-up approach', 'Space optimization'],
      useCases: ['Algorithm learning', 'Performance optimization', 'Mathematical computations'],
      implementations: ['JavaScript', 'Python', 'Java'],
      explanation: {
        howItWorks: "The Fibonacci sequence is where each number is the sum of the two preceding ones (0, 1, 1, 2, 3, 5, 8, 13...). This is a perfect introduction to Dynamic Programming because naive recursion recalculates the same values many times.",
        stepByStep: [
          "1. Naive approach: F(n) = F(n-1) + F(n-2) with base cases F(0)=0, F(1)=1",
          "2. Problem: This recalculates the same values exponentially many times",
          "3. Memoization: Store calculated values to avoid recalculation",
          "4. Bottom-up: Calculate from F(0) up to F(n) iteratively",
          "5. Space optimization: Only keep track of the last two values"
        ],
        visualExample: "F(5) calculation tree shows F(3) calculated 2 times, F(2) calculated 3 times, F(1) calculated 5 times!\nWith memoization: each F(i) calculated exactly once.",
        codeExample: `// Naive recursive approach - VERY SLOW O(2^n)
function fibonacciNaive(n) {
  if (n <= 1) return n;
  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
}

// Memoization (Top-down DP) - O(n) time, O(n) space
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Bottom-up DP - O(n) time, O(n) space
function fibonacciDP(n) {
  if (n <= 1) return n;
  
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Space-optimized - O(n) time, O(1) space
function fibonacciOptimal(n) {
  if (n <= 1) return n;
  
  let prev2 = 0; // F(i-2)
  let prev1 = 1; // F(i-1)
  
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}`,
        whyThisComplexity: "Naive: O(2^n) exponential because of repeated calculations. Optimized: O(n) time because we calculate each F(i) exactly once. Space can be O(n) with array or O(1) with variables.",
        whenToUse: "Perfect learning example for Dynamic Programming concepts. Real applications in mathematical computations, golden ratio calculations, and algorithm optimization techniques.",
        commonMistakes: ["Using naive recursion for large n (extremely slow)", "Forgetting base cases", "Off-by-one errors in loops", "Not recognizing this as a DP problem pattern"],
        interviewQuestions: [
          {
            question: "Calculate the nth Fibonacci number in O(n) time and O(1) space.",
            difficulty: "Easy",
            approach: "Use two variables to track previous two numbers, iterate from 2 to n updating the variables.",
            followUp: "Can you solve it in O(log n) time?",
            answer: "Yes, using matrix exponentiation. Fibonacci can be computed using matrix [[1,1],[1,0]]^n."
          },
          {
            question: "What is the difference between memoization and tabulation?",
            difficulty: "Easy",
            approach: "Memoization is top-down (recursive + cache), tabulation is bottom-up (iterative array filling).",
            followUp: "When would you prefer one over the other?",
            answer: "Memoization for problems where you don't need to compute all subproblems. Tabulation for better space optimization and no recursion overhead."
          },
          {
            question: "Climbing stairs: You can climb 1 or 2 steps at a time. How many ways to reach step n?",
            difficulty: "Easy",
            approach: "Same as Fibonacci! ways(n) = ways(n-1) + ways(n-2), since you can reach step n from step n-1 or n-2.",
            followUp: "What if you can climb 1, 2, or 3 steps at a time?",
            answer: "ways(n) = ways(n-1) + ways(n-2) + ways(n-3). Pattern: ways to reach current step = sum of ways to reach all previous reachable steps."
          },
          {
            question: "Find the minimum number of operations to reduce n to 1. Operations: divide by 2 (if even), divide by 3 (if divisible), or subtract 1.",
            difficulty: "Medium",
            approach: "Use DP: dp[i] = 1 + min(dp[i-1], dp[i/2] if even, dp[i/3] if divisible by 3).",
            followUp: "How do you reconstruct the actual sequence of operations?",
            answer: "Store the operation that led to minimum at each step, then backtrack from n to 1 following the stored operations."
          },
          {
            question: "House robber: Rob houses to maximize money, but can't rob adjacent houses.",
            difficulty: "Medium",
            approach: "dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Either rob current house + money from i-2, or don't rob and take i-1.",
            followUp: "What if houses are arranged in a circle?",
            answer: "Two cases: rob first house (can't rob last), or don't rob first house (can rob last). Take maximum of both cases."
          }
        ]
      }
    }
  ]

  // Filter algorithms based on search criteria
  const filteredAlgorithms = useMemo(() => {
    return algorithms.filter(algorithm => {
      const matchesSearch = algorithm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           algorithm.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           algorithm.topic.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesDifficulty = selectedDifficulty === 'all' || algorithm.difficulty === selectedDifficulty
      const matchesTopic = selectedTopic === 'all' || algorithm.topic === selectedTopic
      const matchesTimeComplexity = selectedTimeComplexity === 'all' || algorithm.timeComplexity === selectedTimeComplexity
      
      return matchesSearch && matchesDifficulty && matchesTopic && matchesTimeComplexity
    })
  }, [searchTerm, selectedDifficulty, selectedTopic, selectedTimeComplexity, algorithms])

  // Get unique values for filters
  const difficulties = ['all', ...new Set(algorithms.map(alg => alg.difficulty))]
  const topics = ['all', ...new Set(algorithms.map(alg => alg.topic))]
  const timeComplexities = ['all', ...new Set(algorithms.map(alg => alg.timeComplexity))]

  // Difficulty color mapping
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
      case 'Medium': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
      case 'Hard': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20'
    }
  }

  // Topic icon mapping
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

  // Algorithm Detail Modal Component
  const AlgorithmDetailModal = ({ algorithm, onClose }) => {
    if (!algorithm) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-dark-800 rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                {getTopicIcon(algorithm.topic)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{algorithm.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{algorithm.topic} • {algorithm.difficulty}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FiX className="text-xl text-gray-500" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Overview */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <FiBook className="text-blue-500" />
                <span>Overview</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                {algorithm.description}
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {algorithm.explanation?.howItWorks}
                </p>
              </div>
            </section>

            {/* Complexity Analysis */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <FiClock className="text-green-500" />
                <span>Complexity Analysis</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <FiClock className="text-green-600 dark:text-green-400" />
                    <span className="font-medium text-green-600 dark:text-green-400">Time Complexity</span>
                  </div>
                  <span className="text-2xl font-bold text-green-700 dark:text-green-300">{algorithm.timeComplexity}</span>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <FiDatabase className="text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-blue-600 dark:text-blue-400">Space Complexity</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">{algorithm.spaceComplexity}</span>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Why This Complexity?</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {algorithm.explanation?.whyThisComplexity}
                </p>
              </div>
            </section>

            {/* Step by Step */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <FiPlay className="text-purple-500" />
                <span>How It Works (Step by Step)</span>
              </h3>
              <div className="space-y-3">
                {algorithm.explanation?.stepByStep?.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Visual Example */}
            {algorithm.explanation?.visualExample && (
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <FiTarget className="text-orange-500" />
                  <span>Visual Example</span>
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                    {algorithm.explanation.visualExample}
                  </pre>
                </div>
              </section>
            )}

            {/* Code Implementation */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <FiCode className="text-indigo-500" />
                <span>Code Implementation</span>
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  <code>{algorithm.explanation?.codeExample}</code>
                </pre>
              </div>
            </section>

            {/* When to Use */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <FiCheckCircle className="text-teal-500" />
                <span>When to Use This Algorithm</span>
              </h3>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {algorithm.explanation?.whenToUse}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Use Cases:</h4>
                <ul className="space-y-2">
                  {algorithm.useCases?.map((useCase, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <FiArrowRight className="text-teal-500 text-sm" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Common Mistakes */}
            {algorithm.explanation?.commonMistakes && (
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <FiX className="text-red-500" />
                  <span>Common Mistakes to Avoid</span>
                </h3>
                <div className="space-y-3">
                  {algorithm.explanation.commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <FiX className="text-red-500 text-sm mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{mistake}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interview Questions Study Guide */}
            {algorithm.explanation?.interviewQuestions && (
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <FiHelpCircle className="text-indigo-500" />
                  <span>Technical Interview Questions</span>
                </h3>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <FiAward className="text-indigo-600 dark:text-indigo-400" />
                    <span className="font-semibold text-indigo-800 dark:text-indigo-200">Study Guide</span>
                  </div>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    Practice these common interview questions to master this algorithm. Each question includes the approach and follow-up questions you might encounter.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {algorithm.explanation.interviewQuestions.map((q, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <FiMessageSquare className="text-indigo-500 text-sm mt-0.5" />
                            <span className="font-medium text-gray-900 dark:text-white">Question {index + 1}</span>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            q.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                            q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                            'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                          }`}>
                            {q.difficulty}
                          </span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 font-medium mb-3">
                          {q.question}
                        </p>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">💡 Approach:</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 p-3 rounded border-l-4 border-blue-500">
                              {q.approach}
                            </p>
                          </div>
                          
                          {q.followUp && (
                            <div>
                              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">🤔 Follow-up:</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
                                {q.followUp}
                              </p>
                            </div>
                          )}
                          
                          {q.answer && (
                            <div>
                              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">✅ Answer:</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400 bg-green-50 dark:bg-green-900/20 p-3 rounded border-l-4 border-green-500">
                                {q.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Study Tips */}
                <div className="mt-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center space-x-2">
                    <FiAward className="text-purple-600 dark:text-purple-400" />
                    <span>Study Tips</span>
                  </h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Practice coding the algorithm from scratch without looking</li>
                    <li>• Explain the algorithm out loud as if teaching someone else</li>
                    <li>• Time yourself implementing the solution</li>
                    <li>• Practice variations and edge cases</li>
                    <li>• Draw diagrams to visualize the algorithm's execution</li>
                  </ul>
                </div>
              </section>
            )}

            {/* Key Points & Implementations */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Points:</h4>
                  <div className="flex flex-wrap gap-2">
                    {algorithm.keyPoints?.map((point, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-sm text-blue-700 dark:text-blue-300 rounded-full">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Implementation Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {algorithm.implementations?.map((lang, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-sm text-purple-700 dark:text-purple-300 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="container-max">
        {/* Interactive Skills Showcase */}
        <section className="section-padding">
          <InteractiveSkillsShowcase />
        </section>

        {/* Algorithms Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Algorithms & <span className="gradient-text">Data Structures</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive collection of algorithms and data structures with complexity analysis, 
                use cases, and implementation details across multiple programming languages.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20 dark:border-gray-700/50"
            >
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <FiFilter className="text-gray-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Search & Filter</h3>
                </div>
                
                {(searchTerm || selectedDifficulty !== 'all' || selectedTopic !== 'all' || selectedTimeComplexity !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Input */}
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search algorithms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                {/* Difficulty Filter */}
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? 'All Difficulties' : difficulty}
                    </option>
                  ))}
                </select>

                {/* Topic Filter */}
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  {topics.map(topic => (
                    <option key={topic} value={topic}>
                      {topic === 'all' ? 'All Topics' : topic}
                    </option>
                  ))}
                </select>

                {/* Time Complexity Filter */}
                <select
                  value={selectedTimeComplexity}
                  onChange={(e) => setSelectedTimeComplexity(e.target.value)}
                  className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  {timeComplexities.map(complexity => (
                    <option key={complexity} value={complexity}>
                      {complexity === 'all' ? 'All Complexities' : complexity}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredAlgorithms.length} of {algorithms.length} algorithms
              </div>
            </motion.div>

            {/* Algorithms Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid gap-6"
            >
              {filteredAlgorithms.map((algorithm, index) => (
                <motion.div
                  key={algorithm.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                          {getTopicIcon(algorithm.topic)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {algorithm.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{algorithm.topic}</p>
                        </div>
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
                        {algorithm.difficulty}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {algorithm.description}
                    </p>

                    {/* Complexity */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <FiClock className="text-green-600 dark:text-green-400 text-sm" />
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">Time Complexity</span>
                        </div>
                        <span className="text-lg font-bold text-green-700 dark:text-green-300">{algorithm.timeComplexity}</span>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <FiDatabase className="text-blue-600 dark:text-blue-400 text-sm" />
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Space Complexity</span>
                        </div>
                        <span className="text-lg font-bold text-blue-700 dark:text-blue-300">{algorithm.spaceComplexity}</span>
                      </div>
                    </div>

                    {/* Key Points */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
                      <div className="flex flex-wrap gap-2">
                        {algorithm.keyPoints.map((point, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded-md">
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Common Use Cases:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {algorithm.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Implementation Languages */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Implementations:</h4>
                        <div className="flex space-x-2">
                          {algorithm.implementations.map((lang, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-xs text-purple-700 dark:text-purple-300 rounded">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedAlgorithm(algorithm)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 text-sm font-medium"
                      >
                        <FiCode />
                        <span>Learn More</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredAlgorithms.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiSearch className="text-2xl text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No algorithms found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>

      {/* Algorithm Detail Modal */}
      {selectedAlgorithm && (
        <AlgorithmDetailModal 
          algorithm={selectedAlgorithm} 
          onClose={() => setSelectedAlgorithm(null)} 
        />
      )}
    </motion.div>
  )
}

export default Skills
