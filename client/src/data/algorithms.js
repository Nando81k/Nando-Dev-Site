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
      ]
    }
  }
]

export const difficulties = ['Easy','Medium','Hard']
export const topics = ['Sorting','Searching','Graph Algorithms','Dynamic Programming','Trees','String Processing','Backtracking']
