/* 
1. Queue Implementations
Array-based Queue (Fixed size) 
*/
class ArrayQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(element) {
    if (this.size === this.capacity) {
      throw new Error("Queue is full");
    }
    this.queue[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const element = this.queue[this.front];
    this.queue[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }
}



// Linked List-based Queue (Dynamic size)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const element = this.front.data;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.data;
  }

  isEmpty() {
    return this.front === null;
  }
}



/* 2. Priority Queue Implementations
 Min-Heap-based Priority Queue
*/
class MinHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this._bubbleUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Priority Queue is empty");
    }
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown();
    }
    return min;
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Priority Queue is empty");
    }
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  _sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length) {
        let leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        let rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < this.heap[swap])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}



// Ordered Array-based Priority Queue
class OrderedArrayPriorityQueue {
  constructor() {
    this.array = [];
  }

  insert(element) {
    this.array.push(element);
    this.array.sort((a, b) => a - b); // keep sorted ascending
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Priority Queue is empty");
    }
    return this.array.shift(); // remove smallest
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Priority Queue is empty");
    }
    return this.array[0];
  }

  isEmpty() {
    return this.array.length === 0;
  }
}
