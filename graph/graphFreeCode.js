const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

// do this iterativly
// const depthFirstSearch = (graph, source) => {
//   const stack = [source];
//   let result = [];
//   let current;
//   while (stack.length) {
//     current = stack.pop();
//     graph[current].forEach((neighbor) => {
//       stack.push(neighbor);
//     });
//     result.push(current);
//   }
//   return result;
// };

// recursivly
const depthFirstSearch = (graph, source) => {
  if (!source) return;
  console.log(source);
  graph[source].forEach((neighbor) => {
    depthFirstSearch(graph, neighbor);
  });
};

console.log(depthFirstSearch(graph, "a"));

const breadthFirstSearch = (graph, source) => {
  const queue = [source];
  let result = [];
  while (queue.length) {
    const current = queue.shift();
    graph[current].forEach((neighbor) => queue.push(neighbor));
    result.push(current);
  }
  return result;
};

console.log(breadthFirstSearch(graph, "a"));

// const hasPath = (graph, src, dst) => {
//   let queue = [src];
//   let visited = {};
//   visited[src] = true;
//   while (queue.length) {
//     let current = queue.shift();
//     if (current === dst) {
//       return true;
//     }
//     graph[current].forEach((neighbor) => {
//       if (!visited[neighbor]) {
//         visited[neighbor] = true;
//         queue.push(neighbor);
//       }
//     });
//   }
//   return false;
// };

// recursively
const hasPath = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};

console.log(hasPath(graph, "a", "b"));

// iteratively unidirected path
const unidirectedPath = (edges, nodeA, nodeB) => {
  // convert edges to graph
  const graph = {};
  edges.forEach((edge) => {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });
  // check if there are path
  return [graph, hasPath(graph, nodeA, nodeB)];
};

console.log(unidirectedPath(edges, "j", "k"));

const connectedComponentCount = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5], // end component
  2: [3, 4],
  3: [2, 4],
  4: [3, 2], // end component
  9: [6, 7],
  6: [9, 7],
  7: [9, 6], // end component
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (const node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));
  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

console.log(connectedComponentsCount(connectedComponentCount));

// find large component
const LargeComponent = (graph) => {
  const visited = new Set();
  let longest = 0;

  for (const node in graph) {
    const size = exploreLarge(graph, node, visited);
    if (size > longest) longest = size;
  }

  return longest;
};

const exploreLarge = (graph, current, visited) => {
  if (visited.has(current)) return 0;
  visited.add(current);
  let size = 1;
  for (const neighbor of graph[current]) {
    size += exploreLarge(graph, neighbor, visited);
  }
  return size;
};

console.log("Largest com", LargeComponent(graph));

// let find shortest path problem
const edgesShortest = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length) {
    const [current, distance] = queue.shift();
    if (current === nodeB) return distance;

    graph[current].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    });
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  edges.forEach((edge) => {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  });

  return graph;
};

console.log(shortestPath(edgesShortest, "w", "z"));

// island count problem
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIsland(grid, r, c, visited) === true) {
        count++;
      }
    }
  }

  return count;
};

const exploreIsland = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid.length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  exploreIsland(grid, r - 1, c, visited);
  exploreIsland(grid, r + 1, c, visited);
  exploreIsland(grid, r, c - 1, visited);
  exploreIsland(grid, r, c + 1, visited);

  return true;
};

console.log(islandCount(grid));

// minimum island
const minimumIsland = (grid) => {
  const visited = new Set();

  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid.length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreIsland(grid, r - 1, c, visited);
  size += exploreIsland(grid, r + 1, c, visited);
  size += exploreIsland(grid, r, c - 1, visited);
  size += exploreIsland(grid, r, c + 1, visited);

  return size;
};

console.log("min island",minimumIsland(grid));
