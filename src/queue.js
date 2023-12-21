const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const NewListNode = new ListNode(value)
    if (!this.front) {
      this.front = NewListNode;
      this.back = NewListNode;
    } else {
      this.back.next = NewListNode;
      this.back = NewListNode;
    }
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    const dequeueValue = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    return dequeueValue;
  }
}

module.exports = {
  Queue
};
