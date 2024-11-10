const { count, warn } = require("console");
const { esbuildMinify } = require("terser-webpack-plugin");

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    if (this.tail === null) {
      this.head.nextNode = newNode;
    } else {
      this.tail.nextNode = newNode;
    }
    this.tail = newNode;
  }
  prepend(value) {
    let newNode = new Node(value);
    if (this.head != null) {
      newNode.nextNode = this.head;
    }
    this.head = newNode;
  }

  size() {
    if (this.head === null) {
      return 0;
    } else {
      let count = 1;
      let currentNode = this.head;
      while (currentNode.nextNode != null) {
        count += 1;
        currentNode = currentNode.nextNode;
      }
      return count;
    }
  }
  at(index) {
    let count = 0;
    let curr = this.head;
    while (curr != null) {
      if (count == index) {
        return curr.value;
      } else {
        count += 1;
        curr = curr.nextNode;
      }
    }
    return null;
  }
  pop() {
    if (this.head == null) {
      warn("the list is empty");
      return;
    }
    let curr = this.head;
    while (curr != null) {
      if (curr.nextNode == this.tail) {
        this.tail = curr;
        this.tail.nextNode = null;
      } else {
        curr = curr.nextNode;
      }
    }
    /* iterate untill you find the item that points to tail, then change tail to that item */
  }

  contains(value) {
    let curr = this.head;
    while (curr != null) {
      if (curr.value == value) {
        return true;
      } else {
        curr = curr.nextNode;
      }
      return false;
    }
  }
  find(value) {
    let count = 1;
    let curr = this.head;
    while (curr != null) {
      if (curr.value == value) {
        return count;
      }
      curr = curr.nextNode;
      count += 1;
    }
    return null;
  }
  toString() {
    let curr = this.head;
    let output = `(${this.head.value})`;
    while (curr.nextNode) {
      output = output + ` => (${curr.nextNode.value})`;
      curr = curr.nextNode;
    }
    return output + " => null";
  }
}
/* the list itself isnt in charge of naming or storing, thats the point */
let list = new LinkedList();

list.append("lexa");

list.append("lexa2");

list.append("lexa3");

list.append("lexa4");

list.prepend("alex");

console.log(list.head);

console.log(list.tail);

console.log(list.size());

console.log(list.at(3));
console.log(list.at(100));

console.log(list.contains("alex"));
console.log(list.contains("joepeach"));

console.log(list.find("lexa"));

console.log(list.find("iluha"));

list.pop();
console.log(list.toString());
