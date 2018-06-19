/* eslint-disable */
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
    let newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode
    this.tail = newNode
  }

  /* Remove the list's `head` value 
  The `head` pointer should be updated
  accordingly */
  removeHead() {
    if (!this.head) return null;

    const removedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    removedHead.next = null;
    return removedHead.value;
  }

  /* Searches the list for the given value
  Returns true or false accordingly */
  contains(value) {
    if (!this.head) return false;

    let currentNode = this.head;
    while(currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
    if (!this.head) return null;
    let currentNode = this.head;
    let maxValue = this.head.value;
    while (currentNode.next !== null) {
      if (currentNode.next.value > maxValue) {
        maxValue = currentNode.next.value
      }
      currentNode = currentNode.next;
    }
    return maxValue;
  }
}

module.exports = LinkedList;