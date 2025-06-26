import Node from "./node.js";

export default class LinkedList {
  headNode;
  tailNode;

  append(value) {
    if (this.headNode == undefined) {
      this.headNode = new Node(value);
      this.tailNode = this.headNode;
    } else {
      let newNode = new Node(value);

      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let currentNode = this.headNode;
    let count = 1;

    while (currentNode.nextNode != null) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    let count = 0;
    let currentNode = this.headNode;

    while (count < index) {
      count++;
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    let currentNode = this.headNode;
    let poppedNode;

    while (currentNode.nextNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }

    this.tailNode = currentNode;
    poppedNode = currentNode.nextNode;
    currentNode.nextNode = null;

    return poppedNode;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode != null) {
      if (currentNode.data === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let count = 0;
    let currentNode = this.headNode;

    while (currentNode != null) {
      if (currentNode.data == value) {
        return count;
      }
      count++;
      currentNode = currentNode.nextNode;
    }

    return null;
  }

  toString() {
    let str = "";
    let currentNode = this.headNode;

    while (currentNode != null) {
      str += "( " + currentNode.data + " ) -> ";
      currentNode = currentNode.nextNode;
    }

    str += "null";
    return str;
  }
}
