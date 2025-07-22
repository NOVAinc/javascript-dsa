import Tree from "./tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let newTree = new Tree([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

prettyPrint(newTree.root);

prettyPrint(newTree.root);

newTree.isBalanced();
