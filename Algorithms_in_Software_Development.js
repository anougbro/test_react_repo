// Dijkstra’s Algorithm in JavaScript
// Implementation

function dijkstra(graph, start) {
    // Initialize distances with Infinity
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Track visited vertices
    const visited = new Set();

    while (visited.size < Object.keys(graph).length) {
        // Find the unvisited vertex with the smallest distance
        let currentVertex = null;
        let smallestDistance = Infinity;

        for (let vertex in distances) {
            if (!visited.has(vertex) && distances[vertex] < smallestDistance) {
                smallestDistance = distances[vertex];
                currentVertex = vertex;
            }
        }

        if (currentVertex === null) {
            break; // No reachable vertices left
        }

        // Mark current vertex as visited
        visited.add(currentVertex);

        // Update distances to neighbors
        for (let neighbor in graph[currentVertex]) {
            let newDistance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }
    }

    return distances;
}

// Example Graph

const graph = {
   'A': { 'B': 4, 'C': 2 },
   'B': { 'A': 4, 'C': 5, 'D': 10 },
   'C': { 'A': 2, 'B': 5, 'D': 3 },
   'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));

// Expected Output:
// {
//    A: 0,
//    B: 4,
//    C: 2,
//    D: 5
// }