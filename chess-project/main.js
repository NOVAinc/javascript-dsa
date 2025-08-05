/*
  Take start, target, and, optionally, visited vertices
    Store all visited vertices so far
    Calculate and store adjacent vertices
      If target vertex in adjacent vertices
        Return array with start and end vertex
      Else
        For each adjacent vertex
          If not in visited array
            Back to line 
*/

/* 
  Start an array with the starting vertex
  Start an empty queue
    Calculate and store adjacent vertices from starting vertex

*/

function knightMoves(start, target, visited = []) {
  const forbidden = visited.slice();
  const adjVert = removeVisited(calcAdjVert(start), visited);
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
function calcAdjVert(vertex) {
  const adjVert = [];

  if (vertex[0] - 2 > 0 && vertex[1] - 1 > 0) {
    adjVert.push([vertex[0] - 2, vertex[1] - 1]);
  }

  if (vertex[0] - 2 > 0 && vertex[1] + 1 < 9) {
    adjVert.push([vertex[0] - 2, vertex[1] + 1]);
  }

  if (vertex[0] - 1 > 0 && vertex[1] + 2 < 9) {
    adjVert.push([vertex[0] - 1, vertex[1] + 2]);
  }

  if (vertex[0] + 1 < 8 && vertex[1] + 2 < 9) {
    adjVert.push([vertex[0] + 1, vertex[1] + 2]);
  }
  if (vertex[0] + 2 < 9 && vertex[1] + 1 < 9) {
    adjVert.push([vertex[0] + 2, vertex[1] + 1]);
  }

  if (vertex[0] + 2 < 9 && vertex[1] - 1 > 0) {
    adjVert.push([vertex[0] + 2, vertex[1] - 1]);
  }

  if (vertex[0] + 1 < 9 && vertex[1] - 2 > 0) {
    adjVert.push([vertex[0] + 1, vertex[1] - 2]);
  }

  if (vertex[0] - 1 > 0 && vertex[1] - 2 > 0) {
    adjVert.push([vertex[0] - 1, vertex[1] - 2]);
  }

  return adjVert;
}
