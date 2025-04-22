class CircularQueue {
    constructor(k) {
      this.queue = new Array(k);
      this.size = k;
      this.front = -1;
      this.rear = -1;
    }
  
    enqueue(value) {
      if ((this.rear + 1) % this.size === this.front) {
        console.log("Queue is full. Cannot enqueue:", value);
        return false;
      }
  
      if (this.front === -1) {
        this.front = 0;
      }
  
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = value;
  
      console.log(`Enqueued: ${value}`);
      this.printQueue();
      return true;
    }
  
    dequeue() {
      if (this.front === -1) {
        console.log("Queue is empty. Cannot dequeue.");
        return false;
      }
  
      const removed = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
  
      console.log(`Dequeued: ${removed}`);
      this.printQueue();
      return true;
    }
  
    Front() {
      const val = this.front === -1 ? -1 : this.queue[this.front];
      console.log("Front:", val);
      return val;
    }
  
    Rear() {
      const val = this.rear === -1 ? -1 : this.queue[this.rear];
      console.log("Rear:", val);
      return val;
    }
  
    isEmpty() {
      const empty = this.front === -1;
      console.log("Is Empty?", empty);
      return empty;
    }
  
    isFull() {
      const full = ((this.rear + 1) % this.size) === this.front;
      console.log("Is Full?", full);
      return full;
    }
  
    printQueue() {
      if (this.front === -1) {
        console.log("Queue is empty.");
        return;
      }
  
      let result = [];
      let i = this.front;
      while (true) {
        result.push(this.queue[i]);
        if (i === this.rear) break;
        i = (i + 1) % this.size;
      }
      console.log("Current Queue:", result.join(" -> "));
    }
  }
  
  // Example usage:
  const q = new CircularQueue(5);
  
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  q.enqueue(40);
  q.enqueue(50);  // Should fail, full
  q.dequeue();
  q.enqueue(60);
  q.Front();      // Should show 20
  q.Rear();       // Should show 60
  q.isEmpty();
  q.isFull();
  