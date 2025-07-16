import Tree from "./tree.js";

let newTree = new Tree([1, 7, 4, 42, 34, 6, 8, 91, 43, 120, 18]);

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

prettyPrint(newTree.root);

newTree.insert(2);
newTree.insert(41);
newTree.insert(126);
newTree.insert(122);

prettyPrint(newTree.root);

newTree.deleteItem(120);

prettyPrint(newTree.root);

console.log(newTree.find(91));

console.log(newTree.find(125));

newTree.levelOrdenIt((node) => console.log(node.data));
