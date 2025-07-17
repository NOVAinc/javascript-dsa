import Node from "./node.js";
import { mergeSort } from "./merge.js";

export default class Tree {
  constructor(array) {
    let processedArray = removeDuplicates(array);
    processedArray = mergeSort(processedArray);

    this.root = buildTree(processedArray);
  }

  insert(value) {
    let currentNode = this.root;

    while (true) {
      if (value < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = new Node(value);
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = new Node(value);
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log("The value already exists");
        return;
      }
    }
  }

  deleteItem(value) {
    let parentNode;
    let currentNode = this.root;
    let larger;

    while (currentNode !== null) {
      if (value < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        larger = false;
      } else if (value > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        larger = true;
      } else {
        if (currentNode.left === null && currentNode.right === null) {
          if (parentNode === undefined) {
            console.log("Can't delete root node");
          } else {
            larger ? (parentNode.right = null) : (parentNode.left = null);
            return currentNode;
          }
        } else if (currentNode.left === null || currentNode.right === null) {
          if (currentNode.left === null) {
            currentNode.data === currentNode.right.data;
            currentNode.right = null;
          } else {
            currentNode.data === currentNode.left.data;
            currentNode.left = null;
          }
        } else {
          let smallestParent = currentNode;
          let smallestChild = currentNode.right;

          while (smallestChild.left !== null) {
            smallestParent = smallestChild;
            smallestChild = smallestChild.left;
          }

          if (smallestParent !== currentNode) {
            smallestParent.left = null;
          }

          if (smallestParent === this.root) {
            this.root.right = smallestChild.right;
          }
          currentNode.data = smallestChild.data;
        }
      }
    }

    console.log("Unexistent value");
  }

  find(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return null;
  }

  levelOrdenIt(callback) {
    if (typeof callback !== "function") {
      throw new Error("A function is needed as an argument");
    }

    let q = [this.root];

    while (q.length > 0) {
      let currentNode = q[0];
      callback(currentNode);

      if (currentNode.left) {
        q.push(currentNode.left);
      }
      if (currentNode.right) {
        q.push(currentNode.right);
      }

      q.shift();
    }
  }

  inOrder(callback, node) {
    if (node === null) {
      return;
    }

    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrder(callback, node) {
    if (node === null) {
      return;
    }

    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrder(callback, node) {
    if (node === null) {
      return;
    }

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
  }

  height(value) {
    let node = this.find(value);

    if (node === null) {
      return null;
    }

    return calculateHeight(node);
  }

  depth(value) {}
}

function removeDuplicates(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (result.includes(array[i]) === false) {
      result.push(array[i]);
    }
  }

  return result;
}

function buildTree(array) {
  if (array.length === 0) {
    return null;
  }
  let middle = Math.floor(array.length / 2);
  let node = new Node(array[middle]);

  node.left = buildTree(array.slice(0, middle));
  node.right = buildTree(array.slice(middle + 1));

  return node;
}

function calculateHeight(node) {
  if (node === null) {
    return 0;
  }

  let [left, right] = [0, 0];

  if (node.left !== null) {
    left = 1 + calculateHeight(node.left);
  }
  if (node.right !== null) {
    right = 1 + calculateHeight(node.right);
  }

  return left > right ? left : right;
}
