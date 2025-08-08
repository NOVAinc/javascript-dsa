import Node from "./node.js";

/*
  Provide starting node (vertex) and target vertex
    If starting vertex == target vertex
      Return starting vertex
    Else
      Recursively do the following
        Take an array of base vertices, the target vertex, and visited vertices
        For each base vertex
          Calculate adjacent vertices
          Remove visited vertices from new adjacent vertices
          Add base vertex to visited vertices
          Convert vertices into nodes with base vertex as parent
        If target vertex in new adjacent vertices
          Calculate vertex line to root
          Return line to root array
        Else
          Call this function with the new adjacent vertices as base vertices, the target vertex, and updated visited vertices
*/

function knightMoves(start, target, visited = []) {
  let startNodes = [];
  let forbidden = visited.slice();

  if (start.length == 2 && Array.isArray(start[0]) === false) {
    if (start[0] == target[0] && start[1] == target[1]) {
      console.log("The starting vertex is the same as the target");
      return;
    } else {
      startNodes.push(new Node(null, start));
      forbidden.push(...startNodes);
    }
  } else {
    startNodes = start.slice();
  }

  let adjacentNodes = [];
  for (let node of startNodes) {
    adjacentNodes = [...adjacentNodes, ...calcAdjVert(node)];
  }

  adjacentNodes = removeVisited(adjacentNodes, forbidden);

  let foundNode = findNode(target, adjacentNodes);

  if (foundNode) {
    let path = calcPath(foundNode);
    return path;
  } else {
    forbidden = [...forbidden, ...adjacentNodes];
    return knightMoves(adjacentNodes, target, forbidden);
  }
}

function calcPath(node) {
  let currentNode = node;
  let path = [];

  while (true) {
    if (currentNode.parent === null) {
      path.push(currentNode.data);
      return path;
    } else {
      path.push(currentNode.data);
      currentNode = currentNode.parent;
    }
  }
}

/**
 * Finds a node in a list of nodes that has the same x and y coordinates as
 * `target`.
 *
 * @param {number[]} target - A two-element array representing the x and y
 * coordinates of the target node.
 *
 * @param {Node[]} nodeList - An array of nodes to search through.
 *
 * @return {Node} The target node from `nodeList` if found, otherwise `undefined`.
 */
function findNode(target, nodeList) {
  return nodeList.find(
    (node) => node.data[0] == target[0] && node.data[1] == target[1]
  );
}

/**
 * Takes a vertex and returns an array of adjacent vertices that a knight can
 * move to. Adjacent vertices are those that are two squares in one direction
 * (horizontally or vertically) and then one square in a perpendicular
 * direction.
 *
 * @param {number[]} vertex - A two-element array representing the x and y
 * coordinates of the vertex.
 *
 * @return {number[][]} An array of adjacent vertices. Each adjacent vertex
 * is a two-element array representing the x and y coordinates of the vertex.
 */
function calcAdjVert(node) {
  let vertex = node.data;
  const adjVert = [];
  // TODO need to only add this if it is not in the list of previously-calculated adjacent vertices, as well as the forbidden ones
  if (vertex[0] - 2 > 0 && vertex[1] - 1 > 0) {
    adjVert.push(new Node(node, [vertex[0] - 2, vertex[1] - 1]));
  }

  if (vertex[0] - 2 > 0 && vertex[1] + 1 < 9) {
    adjVert.push(new Node(node, [vertex[0] - 2, vertex[1] + 1]));
  }

  if (vertex[0] - 1 > 0 && vertex[1] + 2 < 9) {
    adjVert.push(new Node(node, [vertex[0] - 1, vertex[1] + 2]));
  }

  if (vertex[0] + 1 < 8 && vertex[1] + 2 < 9) {
    adjVert.push(new Node(node, [vertex[0] + 1, vertex[1] + 2]));
  }
  if (vertex[0] + 2 < 9 && vertex[1] + 1 < 9) {
    adjVert.push(new Node(node, [vertex[0] + 2, vertex[1] + 1]));
  }

  if (vertex[0] + 2 < 9 && vertex[1] - 1 > 0) {
    adjVert.push(new Node(node, [vertex[0] + 2, vertex[1] - 1]));
  }

  if (vertex[0] + 1 < 9 && vertex[1] - 2 > 0) {
    adjVert.push(new Node(node, [vertex[0] + 1, vertex[1] - 2]));
  }

  if (vertex[0] - 1 > 0 && vertex[1] - 2 > 0) {
    adjVert.push(new Node(node, [vertex[0] - 1, vertex[1] - 2]));
  }

  return adjVert;
}

function removeVisited(adjacent, visited) {
  let filtered = [];

  for (let node of adjacent) {
    if (findNode(node.data, visited) === undefined) {
      filtered.push(node);
    }
  }

  return filtered;
}

let path = knightMoves([1, 1], [8, 8]);

console.log("You found the path!");
while (path.length > 0) {
  console.log(path[path.length - 1]);
  path.pop();
}
