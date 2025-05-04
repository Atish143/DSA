const LinkedList = require('./LinkedListwithTailNode')

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()
    }

    enQueue(value){
        this.list.append(value)
    }

    deQueue(){
      return  this.list.removeFromFront()
    }


    peek() {
        return  this.list.head.value 
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const queue = new LinkedListQueue()
console.log(queue.isEmpty())  
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
console.log(queue.getSize())
queue.print()
console.log(queue.deQueue())
console.log(queue.peek())