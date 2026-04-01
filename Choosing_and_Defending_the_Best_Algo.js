// Brute-Force Approach (Exponential)

function bruteForce(tasks) {
  function isCompatible(set) {
    for (let i = 0; i < set.length - 1; i++) {
      if (set[i].end > set[i + 1].start) return false;
    }
    return true;
  }

  function generateSubsets(arr) {
    const result = [[]];
    for (const task of arr) {
      const newSubsets = result.map(subset => [...subset, task]);
      result.push(...newSubsets);
    }
    return result;
  }

  const subsets = generateSubsets(tasks);
  let maxSet = [];
  for (const subset of subsets) {
    const sorted = subset.slice().sort((a, b) => a.start - b.start);
    if (isCompatible(sorted) && sorted.length > maxSet.length) {
      maxSet = sorted;
    }
  }
  return maxSet;
}



// Optimized Approach (Greedy)

function greedy(tasks) {
  // Sort by end time
  tasks.sort((a, b) => a.end - b.end);

  const result = [];
  let lastEnd = -Infinity;

  for (const task of tasks) {
    if (task.start >= lastEnd) {
      result.push(task);
      lastEnd = task.end;
    }
  }
  return result;
}


// Validate with Sample Input

const tasks = [
  { start: 1, end: 3 },
  { start: 2, end: 5 },
  { start: 4, end: 6 },
  { start: 6, end: 7 },
  { start: 5, end: 9 },
  { start: 8, end: 10 }
];

console.log("Brute Force:", bruteForce(tasks));
console.log("Greedy:", greedy(tasks));

// Both return the optimal set:
[{ start: 1, end: 3 }, { start: 4, end: 6 }, { start: 6, end: 7 }, { start: 8, end: 10 }]

/*
Performance Comparison
    ***Brute Force:
- Complexity: O(2^n) due to generating all subsets.
- With thousands of tasks, this is computationally impossible.
    ***Greedy:
- Complexity: O(n\log n) (sorting) + O(n) (selection).
- Easily scales to tens of thousands of tasks per second.
    ***Maintainability:
- Greedy is simpler, shorter, and easier to reason about.
- Brute force is complex, harder to maintain, and impractical.
    ***Memory Trade-offs:
- Brute force requires storing all subsets → exponential memory.
- Greedy only stores the selected tasks → linear memory.

4. Recommendation
For a real-time delivery platform handling thousands of tasks per second, the Greedy algorithm is the clear choice.
- Why Greedy?
- Fast (O(n\log n)), scalable, and easy to maintain.
- Guarantees optimal solution for activity selection problems.
- Minimal memory usage.
- When Brute Force might be relevant:
- Only for very small inputs (e.g., fewer than 15 tasks) where correctness validation or teaching purposes matter.
- Useful as a benchmark to confirm correctness of other algorithms during development.

*/
