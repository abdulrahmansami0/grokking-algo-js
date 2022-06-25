class Graph {
  #vertices = new Set();
  #adjacentList = new Map();

  get vertices() {
    return Array.from(this.#vertices);
  }

  get adjacentList() {
    const list = {};

    this.#adjacentList.forEach((val, key) => {
      list[key] = Array.from(val);
    });

    return list;
  }

  addVertex(vertex = null) {
    if (
      !this.#vertices.has(vertex) &&
      vertex !== null &&
      vertex !== undefined
    ) {
      this.#vertices.add(vertex);
      this.#adjacentList.set(vertex, new Set());
    }
  }

  addEdge(vertex1 = null, vertex2 = null, directed = true) {
    if (
      vertex1 !== null &&
      vertex1 !== undefined &&
      vertex2 !== null &&
      vertex2 !== undefined &&
      vertex1 != vertex2
    ) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.#adjacentList.get(vertex1).add(vertex2);
      if (directed) {
        this.#adjacentList.get(vertex2).add(vertex1);
      }
    }
  }

  dfs(start, visited = new Set()){
    visited.add(start);
  
    const destinations = this.#adjacentList.get(start);
    console.log(start);
    destinations.forEach((destination) => {
      if (destination === "K") {
        console.log("this is found");
        return;
      }
      if (!visited.has(destination)) {
        this.dfs(destination, visited)
      }
    })
  }
}

let graph = new Graph();
graph.addEdge("A", "B", true);
graph.addEdge("A", "C", true);
graph.addEdge("A", "D", true);
graph.addEdge("B", "E", true);
graph.addEdge("B", "F", true);
graph.addEdge("F", "I", true);
graph.addEdge("F", "J", true);
graph.addEdge("D", "G", true);
graph.addEdge("D", "H", true);
graph.addEdge("G", "K", true);
// console.log(graph.vertices, graph.adjacentList);
console.log(graph.dfs("A"));

const bfs = (start, adjacencyList) => {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
// console.log(bfs("A", graph.adjacentList));