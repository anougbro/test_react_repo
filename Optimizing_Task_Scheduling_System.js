let tasks = [
  { name: "Task A", start: 9, end: 11, priority: "High" },
  { name: "Task B", start: 10, end: 12, priority: "Medium" },
  { name: "Task C", start: 13, end: 14, priority: "Low" }
];


/* 
1- Sort Tasks by Start Time
Use Array.prototype.sort() with a custom comparator:
----------------------------------------------------
- Time Complexity: O(n\log n) (efficient sorting algorithm under the hood).
- Space Complexity: O(1) or O(n) depending on implementation (JavaScript’s sort is optimized).
*/
tasks.sort((a, b) => a.start - b.start);



/* 2- Group Tasks by Priority
Use a Hash Map (Object or Map) for grouping: 
----------------------------------------------------
- Time Complexity: O(n) (single pass through the tasks).
- Space Complexity: O(n) (storing grouped tasks).

*/
let grouped = {};
for (let task of tasks) {
  if (!grouped[task.priority]) grouped[task.priority] = [];
  grouped[task.priority].push(task);
}


/*
3- Detect Overlapping Tasks
Efficient approach:
- Sort tasks by start time.
- Compare each task’s start with the previous task’s end.
----------------------------------------------------
- Time Complexity: O(n\log n) (due to sorting).
- Space Complexity: O(1) (if done in-place) or O(n) if creating a new array for overlaps.   
*/

function findOverlaps(tasks) {
  tasks.sort((a, b) => a.start - b.start);
  let overlaps = [];
  for (let i = 1; i < tasks.length; i++) {
    if (tasks[i].start < tasks[i-1].end) {
      overlaps.push([tasks[i-1], tasks[i]]);
    }
  }
  return overlaps;
}


/*
4. (Optional)
 Estimate Memory Usage
Rough estimate: assume each task object uses ~constant memory per field
-------------------------------------------------------------------
- Each task has 3 fields (name, start, end, priority).
- Total memory usage: O(n) for n tasks.
- Time Complexity: O(1).
- Space Complexity: O(1).

*/

function estimateMemory(tasks) {
  const bytesPerTask = 64; // rough estimate
  return tasks.length * bytesPerTask + " bytes";
}
