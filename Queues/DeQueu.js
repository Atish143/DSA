class Deque {
    constructor() {
      this.items = [];
    }
  
    addFront(item) {
      this.items.unshift(item);
    }
  
    addBack(item) {
      this.items.push(item);
    }
  
    removeFront() {
      return this.items.shift();
    }
  
    removeBack() {
      return this.items.pop();
    }
  
    peekFront() {
      return this.items[0];
    }
  
    peekBack() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  const dq = new Deque();
  dq.addBack("A");
  dq.addBack("B");
  dq.addFront("C");
  dq.removeBack(); // Removes B
  console.log(dq.peekFront()); // C
  console.log(dq.peekBack());  // A
    