class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(u) {
    if (this.parent[u] !== u) {
      this.parent[u] = this.find(this.parent[u]); // Path compression
    }
    return this.parent[u];
  }

  union(u, v) {
    let rootU = this.find(u);
    let rootV = this.find(v);

    if (rootU === rootV) return false;

    if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    } else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
    }
    return true;
  }
}

function kruskal(n, edges) {
  // Sort edges by weight
  edges.sort((a, b) => a[0] - b[0]);

  const ds = new DisjointSet(n);
  const mst = [];
  let totalCost = 0;

  for (let [w, u, v] of edges) {
    if (ds.union(u, v)) {
      mst.push({ u, v, weight: w });
      totalCost += w;
    }
  }

  return { mst, totalCost };
}

// Example usage:
const edges = [
  [4, 0, 1],
  [8, 0, 2],
  [7, 1, 2],
  [9, 1, 3],
  [10, 2, 3],
  [2, 2, 5],
  [1, 3, 4],
  [6, 4, 5]
];

const { mst, totalCost } = kruskal(6, edges);
console.log("Selected connections:", mst);
console.log("Total cost:", totalCost);