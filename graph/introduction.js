const adjList = new Map();

const addNodes = (airport) => {
  adjList.set(airport, []);
};

const addEdge = (origin, destination) => {
  adjList.get(origin).push(destination);
  adjList.get(destination).push(origin);
};

addNodes(1);
addNodes(2);
addNodes(3);
addNodes(4);
addNodes(5);
addEdge(1, 2);
addEdge(1, 3);
addEdge(2, 3);
addEdge(4, 5);
addEdge(1, 5);
console.log(adjList);

// const bfs = (start, adjacencyList) => {
//     const queue = [start];
//     const result = [];
//     const visited = {};
//     visited[start] = true;
//     let currentVertex;
//     while (queue.length) {
//       currentVertex = queue.shift();
//       result.push(currentVertex);
//       adjacencyList[currentVertex].forEach((neighbor) => {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           queue.push(neighbor);
//         }
//       });
//     }
//     return result;
//   };


//   console.log(bfs());