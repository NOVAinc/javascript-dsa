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
    let count = 0;

    while (currentNode !== null && currentNode !== undefined) {
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
    if (index + 1 > this.size()) {
      throw new Error("Attempting to modify item beyond list bounds");
    }
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

  /**
   * Find the index of the first node containing the given key.
   *
   * @param {String} key - The key to search for.
   * @return {Number} The index of the first node with the given key, or false if not found.
   */
  findKey(key) {
    let count = 0;
    let currentNode = this.headNode;

    while (currentNode !== null) {
      if (currentNode.data[0] == key) {
        return count;
      }
      count++;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  updateAt(index, value) {
    if (index + 1 > this.size()) {
      throw new Error("Attempted to update out of list range");
    }

    let i = 0;
    let currentNode = this.headNode;

    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }

    currentNode.data = value;
  }

  removeAt(index) {
    let eliminatedNode;

    if (index + 1 > this.size()) {
      throw new Error("Trying to eliminate element beyond the list bounds");
    }

    if (index === 0 && this.size() === 1) {
      eliminatedNode = this.headNode;
      this.headNode = undefined;
      this.tailNode = undefined;
      return eliminatedNode;
    } else if (index === 0) {
      eliminatedNode = this.headNode;
      this.headNode = this.headNode.nextNode;
      return eliminatedNode;
    } else {
      eliminatedNode = this.at(index);
      let previousNode = this.at(index - 1);
      previousNode.nextNode = eliminatedNode.nextNode;
      return eliminatedNode;
    }
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
