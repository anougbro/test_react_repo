class Graph {
  constructor(isDirected = false) {
    this.adjList = new Map();
    this.isDirected = isDirected;
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList.get(v1).push(v2);

    if (!this.isDirected) {
      this.adjList.get(v2).push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjList.has(v1)) {
      this.adjList.set(
        v1,
        this.adjList.get(v1).filter((v) => v !== v2)
      );
    }

    if (!this.isDirected && this.adjList.has(v2)) {
      this.adjList.set(
        v2,
        this.adjList.get(v2).filter((v) => v !== v1)
      );
    }
  }

  hasEdge(v1, v2) {
    return this.adjList.has(v1) && this.adjList.get(v1).includes(v2);
  }

  printGraph() {
    for (let [vertex, edges] of this.adjList) {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    }
  }

  dfs(start) {
    const visited = new Set();

    const dfsHelper = (vertex) => {
      if (!vertex || visited.has(vertex)) return;
      visited.add(vertex);
      console.log(vertex);

      for (let neighbor of this.adjList.get(vertex)) {
        dfsHelper(neighbor);
      }
    };

    dfsHelper(start);
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// ---------- Testing ----------
const graph = new Graph(false); // undirected graph

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

console.log("Graph:");
graph.printGraph();

console.log("\nDFS starting from A:");
graph.dfs("A");

console.log("\nBFS starting from A:");
graph.bfs("A");