/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;
  // Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    // create neighbor list/ graph
    graph[u].push(v);
    graph[v].push(u);
  }

  // create queue for BFS
  const queue = [source];
  let head = 0;

  const visited = Array(n).fill(false);
  visited[source] = true;

  while (head < queue.length) {
    const node = queue[head++];
    for (const neighbor of graph[node]) {
      if (neighbor === destination) return true;
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
  return false;
};
