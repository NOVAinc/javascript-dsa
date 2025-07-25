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

console.log(newTree.isBalanced());

newTree.insert(101);
newTree.insert(102);
newTree.insert(103);
newTree.insert(104);

prettyPrint(newTree.root);

console.log(newTree.isBalanced());

newTree.rebalance();

prettyPrint(newTree.root);

console.log(newTree.isBalanced());
