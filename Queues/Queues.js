function createQueue() {
    let items = [];
  
    return {
      // Enqueue - Add to end
      enqueue: (element) => {
        items.push(element);
      },
  
      // Peek at front item
      front: () => {
        return items.length > 0 ? items[0] : "Queue is empty";
      },
  
      // Check if empty
      isEmpty: () => items.length === 0,
  
      // Size of queue
      size: () => items.length,
  
      // Print queue
      print: () => console.log(items.join(" <- "))
    };
  }
  const queue = createQueue();

  queue.enqueue("Task 1");
  queue.enqueue("Task 2");
  queue.enqueue("Task 3");
  
  queue.print(); // Task 1 <- Task 2 <- Task 3
  
  console.log(queue.front()); // Task 1
  console.log(queue.size()); // 3
  console.log(queue.isEmpty()); // false
    